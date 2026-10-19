# Adding or reordering podcast episodes (About page)

All podcast cards come from one file: `src/data/podcasts.js`. You never touch the layout.

## Add an episode
1. Open `src/data/podcasts.js`.
2. Copy an existing entry (everything from `{` to `},`) and paste it inside the list.
3. Change:
   - `id` — a new unique name, e.g. `'trade-talk-ep-12'`
   - `show`, `episode`, `title` — exactly as the show published them
   - `platform` — button text, e.g. `'Listen on Spotify'`
   - `url` — the full episode link
   - `order` — where it appears (lowest number shows first)
   - `published: true`
4. Save, commit, open a pull request. The Netlify deploy preview shows it before it goes live.

## Reorder
Change the `order` numbers. Example: to put a new episode first, give it `order: 0`.
The former-host card (Alternating Current) uses `featured: true`, which keeps it as the wide card below the grid.

## Hide without deleting
Set `published: false`. A card also stays hidden if `url` is empty.

## The newly recorded episode
There's already a placeholder entry, `id: 'new-episode-2026'`, set to `published: false`.
When the link is live: fill in `show`, `episode`, `title`, `url`, then set `published: true`.
