# l2m — Teon 2 Boss Timer

**Live:** https://boss-timer-omega.vercel.app/ — this is the production alias
and the only URL to share. Deployment-specific URLs (`boss-timer-<hash>-…`)
change on every push and sit behind Vercel Authentication.

Single-file boss respawn tracker for the Teon 2 roster. No build step, no
dependencies: `index.html` contains the markup, styles, script, and all 45
boss portraits embedded as base64 JPEG thumbnails.

## Deploy

Hosted on Vercel, connected to this repo. Pushing to `main` auto-deploys:

    git add -A
    git commit -m "describe the change"
    git push

Then verify the deploy actually landed rather than assuming — the file is
self-contained, so a byte comparison is conclusive:

    curl -sSL https://boss-timer-omega.vercel.app/ -o live.html
    diff -q live.html index.html && echo "live matches local"

If it differs, the push didn't land or the deploy failed. Check the Vercel
dashboard's Deployments tab.

Local preview — any static server works:

    python3 -m http.server 8000
    # then open http://localhost:8000

## Data storage

Timers are stored per-browser in `localStorage`. **Nothing is shared between
users** — each person tracks their own kill times, and clearing site data
resets them. Use Export/Import in the app to move a roster between browsers.

## Boss portraits

Portraits live in the `THUMBS` map in `index.html`, keyed by exact boss name,
as 112x112 JPEG (~3.6 KB each, ~162 KB total). They are embedded rather than
linked so the app renders with no network access.

`REMOTE_IMAGES` holds the original full-size URLs in the guild's Firebase
bucket. It is used only by Export, which swaps embedded `data:` URLs for
remote ones to keep exported JSON small. Note these URLs may lag behind the
embedded thumbnails if portraits are updated locally without re-uploading.

## Editing a portrait

Add or replace an entry in `THUMBS` using the exact roster name as the key:

    "Queen Ant":"<base64 of a 112x112 JPEG>"

Beware near-duplicate boss names — the roster has both *Mutated Cruma* and
*Contaminated Cruma*, and both *Talkin* and *Talakin*.
