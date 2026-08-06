// Shared guild state: one JSON document in Vercel Blob, guarded by a
// passcode header. Every device POSTs its roster and GETs everyone else's;
// merging is per-boss last-write-wins on updatedAt, done both here and in
// the client, so two phones pressing Kill at once can't lose each other's
// updates.
import { put, head } from '@vercel/blob';

const STATE_PATH = 'guild/state.json';

// Only roster fields survive a round-trip; anything else a client sends
// (render caches, prototype junk) is dropped at the door.
const FIELDS = [
  'id', 'name', 'server', 'cooldownHours', 'description', 'spawnChance',
  'important', 'imageUrl', 'active', 'deathISO', 'updatedAt',
];

function clean(raw) {
  const out = {};
  for (const k of FIELDS) if (raw[k] !== undefined) out[k] = raw[k];
  return out;
}

async function readState() {
  try {
    const meta = await head(STATE_PATH);
    // private-store URLs 403 on plain fetch; authenticate with the store
    // token. The unique query skips the blob CDN's minute of caching so a
    // GET right after a POST sees the fresh write.
    const r = await fetch(meta.url + '?ts=' + Date.now(), {
      headers: { authorization: 'Bearer ' + process.env.BLOB_READ_WRITE_TOKEN },
      cache: 'no-store',
    });
    if (!r.ok) return null;
    return await r.json();
  } catch {
    return null; // first ever request: no blob yet
  }
}

function merge(current, incoming) {
  const by = new Map();
  for (const b of current) if (b && b.id) by.set(b.id, b);
  for (const raw of incoming) {
    if (!raw || !raw.id) continue;
    const b = clean(raw);
    const cur = by.get(b.id);
    if (!cur || (b.updatedAt || 0) >= (cur.updatedAt || 0)) by.set(b.id, b);
  }
  return [...by.values()];
}

export default async function handler(req, res) {
  // Reads are open: anyone with the link sees the live timers. Writes need
  // the editor passcode, so only the members holding it can change anything.
  if (req.method === 'GET') {
    res.setHeader('Cache-Control', 'no-store');
    const state = await readState();
    return res.status(200).json(state || { bosses: [], updatedAt: 0 });
  }

  const key = req.headers['x-guild-key'] || '';
  if (!process.env.GUILD_KEY || key !== process.env.GUILD_KEY) {
    return res.status(401).json({ error: 'wrong or missing editor passcode' });
  }

  if (req.method === 'POST') {
    const body = req.body;
    if (!body || !Array.isArray(body.bosses) || body.bosses.length > 500) {
      return res.status(400).json({ error: 'expected { bosses: [...] }' });
    }
    const current = (await readState()) || { bosses: [] };
    const state = {
      bosses: merge(current.bosses || [], body.bosses),
      updatedAt: Date.now(),
    };
    await put(STATE_PATH, JSON.stringify(state), {
      access: 'private',
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: 'application/json',
      cacheControlMaxAge: 60,
    });
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json(state);
  }

  res.setHeader('Allow', 'GET, POST');
  return res.status(405).json({ error: 'method not allowed' });
}
