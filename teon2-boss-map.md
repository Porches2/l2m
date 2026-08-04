# Lineage 2M — Teon 2 Field Boss Map

45 field bosses. Cooldowns validated against 9,829 entries in the guild's own boss log,
covering 3 December 2025 to 3 August 2026 — 3,397 of which are confirmed kills.

## Method

Only **Kill** presses were used. When someone presses Kill the app records the death as
*now*, so the log's own timestamp is the real moment of death — an independent measurement.
**Miss** presses were excluded: a Miss sets the death time to the respawn that was just
missed, which is computed *from* the configured cooldown, so those intervals would only echo
the number being tested rather than test it.

For each boss the gaps between consecutive kills were sorted and the 10th percentile taken.
A kill always happens at or after the spawn, and windows get skipped, so every gap is either
one cooldown plus a little search time or a whole multiple of one. The low percentile finds
the tightest of those, which is the cooldown itself. Gaps under 15 minutes were dropped as
double-presses.

## Result

| Verdict | Count | Meaning |
|---|---|---|
| Confirmed | 39 | 20+ kills and the measurement lands on the configured value |
| Consistent | 5 | too few kills to measure directly, but every gap is a clean multiple |
| Unverified | 1 | gaps do not fit the configured cooldown |

Not one well-sampled boss disagreed with its configured cooldown. The largest error across
all 39 was Dragon Beast at 0.08h — under five minutes over eight months.

## Spawn chance

The percentage in each location string is the chance the boss appears in a given window.
A 33% boss fails roughly two windows in three, so a long silence on those is normal rather
than a missed report — press **Miss** to roll the clock forward one cooldown.

| Chance | Bosses |
|---|---|
| 100% | 17 |
| 50% | 18 |
| 33% | 10 |

## The map

Sorted by cooldown. **Observed** is the measured value; **n** is the number of kills behind it.

| Boss | Location | Chance | Cooldown | Observed | n | Verdict |
|---|---|---:|---:|---:|---:|---|
| Felis | Bee Hive | 50% | 3h | 3.00h | 139 | Confirmed |
| Basila | Southern Wasteland | 50% | 4h | 4.00h | 115 | Confirmed |
| Flynt | National Cemetery | 33% | 5h | 10.07h | 19 | Consistent |
| Pan Narod | Gorgon Flower Graden | 50% | 5h | 5.01h | 77 | Confirmed |
| Breka | Breka's Stronghold | 50% | 6h | 6.00h | 74 | Confirmed |
| Chertuba | Chertuba's Brraacks | 50% | 6h | 6.00h | 86 | Confirmed |
| Enkura | Dion Plains | 50% | 6h | 6.00h | 58 | Confirmed |
| Hisilorme | War Torn Plains | 50% | 6h | 6.01h | 95 | Confirmed |
| Matura | Pillagers' Campsite | 50% | 6h | 6.01h | 70 | Confirmed |
| Queen Ant | Ant Nest B3 | 33% | 6h | 6.01h | 89 | Confirmed |
| Valefar | Morgue | 50% | 6h | 6.00h | 79 | Confirmed |
| Repiro | Spore Wastelands | 50% | 7h | 7.01h | 75 | Confirmed |
| Stonegeist | Giants' Vestige | 100% | 7h | 7.00h | 140 | Confirmed |
| Tromba | Bloodstained Swampland | 50% | 7h | 7.01h | 77 | Confirmed |
| Contaminated Cruma | Cruma Tower 3F | 100% | 8h | 8.01h | 128 | Confirmed |
| Glaki | Silent Valley | 100% | 8h | 8.02h | 110 | Confirmed |
| Mutant Cruma | Cruma Marshland | 100% | 8h | 8.01h | 119 | Confirmed |
| Talkin | Leto Lizardmen Settlement | 50% | 8h | 8.01h | 39 | Confirmed |
| Timiniel | Timiniel's Nest | 100% | 8h | 8.01h | 116 | Confirmed |
| Timitris | Floran Fields | 100% | 8h | 8.00h | 127 | Confirmed |
| Behemoth | Dragon Valley | 100% | 9h | 9.01h | 113 | Confirmed |
| Gahareth | Tanor Canyon | 50% | 9h | 9.00h | 50 | Confirmed |
| Landor | Forsaken Valley | 100% | 9h | 9.01h | 112 | Confirmed |
| Core Susceptor | Cruma Tower 7F | 33% | 10h | 10.05h | 41 | Confirmed |
| Katan | Cruma Tower 6F | 100% | 10h | 10.01h | 105 | Confirmed |
| Kelsus | Ruins of Despair | 50% | 10h | 10.00h | 50 | Confirmed |
| Medusa | Medusa's Garden | 100% | 10h | 10.00h | 104 | Confirmed |
| Sarka | Delu Lizardmen Dwellings | 100% | 10h | 10.00h | 101 | Confirmed |
| Talakin | Rebel Territory | 100% | 10h | 10.00h | 94 | Confirmed |
| Mirror of oblivion | Forest of Mirrors | 100% | 11h | 11.01h | 89 | Confirmed |
| Balbo | Brigand Stronghold | 50% | 12h | 12.02h | 42 | Confirmed |
| Black Lily | Death Pass | 100% | 12h | 12.01h | 87 | Confirmed |
| Cabrio | National Cemetery | 50% | 12h | 12.02h | 21 | Confirmed |
| Coroon | Ivory Tower 2F | 100% | 12h | 12.01h | 99 | Confirmed |
| Dragon Beast | Antharas' Lair B6 | 33% | 12h | 12.08h | 41 | Confirmed |
| Pan Draeed | Dion Hills | 100% | 12h | 12.00h | 74 | Confirmed |
| Samuel | Ivory Tower 3F | 33% | 12h | 12.05h | 27 | Confirmed |
| Savan | Ant Nest B2 | 100% | 12h | 12.00h | 81 | Confirmed |
| Selu | Timak Orc Outpost | 50% | 12h | 12.01h | 28 | Confirmed |
| Andras | Fields of Massacre | 50% | 15h | 15.03h | 22 | Confirmed |
| Haff | Seal of Shilen | 33% | 20h | 20.03h | 11 | Consistent |
| Olkuth | Olkuth's Oracle | 33% | 24h | 55.86h | 6 | **Unverified** |
| Orfen | Orfen's Lair | 33% | 24h | 24.06h | 18 | Consistent |
| Thanatos | Ancient Battleground | 33% | 25h | 50.05h | 7 | Consistent |
| Rahha | Aden Borders | 33% | 33h | 132.25h | 4 | Consistent |

## Worth attention

**Olkuth — 24h configured, does not fit.** Six kills, and the shortest gap between any two is
55.86h. That is 2.33 × 24, not a whole multiple. If 24h were right the shortest gap should sit
near 24, 48 or 72. Two candidate readings fit better: 27.93h (55.86 ÷ 2) or 18.62h (÷ 3).
Olkuth is a 33% spawn, so gaps are naturally long and six kills is thin evidence — but this is
the one number in the table with nothing supporting it. Worth logging the next few kills.

**Thanatos and Rahha rest on very little.** Thanatos: 7 kills, shortest gap 50.05h = 2 × 25h.
Rahha: 4 kills, shortest gap 132.25h = 4 × 33h. Both fit exactly, which is reassuring, but a
single mis-clicked report would change the picture.

**The Invasion rows were dropped.** They duplicated all 45 names with independently set
cooldowns, and 26 of 44 had no supporting evidence at all — several showed gaps of 4,000+
hours, meaning one kill in December and one in June. Seven sat at exactly 14h regardless of
what the same boss ran on the live server, which reads as a bulk edit rather than observation.
They can be restored through Import / export if they are still wanted.

## Caveat

These numbers describe Teon 2 as it behaved over these eight months. They are measurements of
your server, not values read from the game's data, and a patch can move any of them. The method
above is repeatable — rerun it after a major update and the same log will tell you what changed.
