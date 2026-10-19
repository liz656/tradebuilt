// Podcast / conversation cards on the About page (#conversations).
//
// TO ADD AN EPISODE: copy one entry below, give it a new unique `id`, fill in the
// fields, and set `order` to where it should appear (lower numbers show first).
// TO REORDER: change the `order` numbers. TO HIDE: set `published: false`.
// An entry only shows when `published` is true AND it has a `url`.
// No layout code needs to change — see PODCASTS.md in the repo root.
//
// Fields
//   id          unique, lowercase-with-dashes; never reuse
//   show        podcast name, as published
//   episode     small label beside the show name ("Episode 81", "Featured Episode")
//   title       episode title, exactly as originally published
//   description optional one-liner under the title ('' to omit)
//   platform    button text, e.g. "Watch on YouTube", "Listen on Spotify"
//   url         full link to the episode
//   date        optional, YYYY-MM-DD; not displayed, for your records
//   order       display order (1, 2, 3 …)
//   published   true = visible on the site
//   featured    true = full-width card (used for the former-host card)

export const podcasts = [
  {
    id: 'construction-dorks-81',
    show: 'Construction Dorks Podcast',
    episode: 'Episode 81',
    title: 'Energizing Minds',
    description: '',
    platform: 'Watch on YouTube',
    url: 'https://www.youtube.com/watch?v=C7Myf5DWUVE&pp=ygUfY29uc3RydWN0aW9uIGRvcmtzIGxpeiBjYW1wYmVsbA%3D%3D',
    date: '',
    order: 1,
    published: true,
    featured: false,
  },
  {
    id: 'blackline-the-truth',
    show: 'BlackLine Podcast',
    episode: 'Featured Episode',
    title: 'The Truth',
    description: '',
    platform: 'Watch on YouTube',
    url: 'https://youtu.be/UqziCq-r8fs?si=ljKLGnjqOfrmLlB2',
    date: '',
    order: 2,
    published: true,
    featured: false,
  },
  {
    id: 'neca-innovation-101',
    show: 'NECA Innovation Podcast',
    episode: 'Episode 101 — Liz Campbell',
    title: 'Contractor Takeover',
    description: '',
    platform: 'Listen on Spotify',
    url: 'https://open.spotify.com/episode/0rcTGgN1ccKimzbzmcRFYQ?si=J-WxcEQCTNK_t82fSBkK-w',
    date: '',
    order: 3,
    published: true,
    featured: false,
  },
  {
    id: 'build-america-brand-recruiting',
    show: 'Build America Podcast',
    episode: 'Featured Episode',
    title: "How Important is Your Organization's Brand in Recruiting?",
    description: '',
    platform: 'Watch on YouTube',
    url: 'https://youtu.be/hrTs3SL1h0U?si=NO2dz8K3lGtpFW7f',
    date: '',
    order: 4,
    published: true,
    featured: false,
  },
  {
    // Newly recorded episode — stays hidden until the link and details are final.
    id: 'new-episode-2026',
    show: 'TBD — show name',
    episode: 'TBD',
    title: 'TBD — episode title',
    description: '',
    platform: 'Watch on YouTube',
    url: '',
    date: '',
    order: 5,
    published: false,
    featured: false,
  },
  {
    id: 'alternating-current-host',
    show: 'The Alternating Current Podcast — Atlanta Electrical Contractors Association',
    episode: 'Former Host',
    title: 'The Alternating Current Podcast',
    description: 'Hosted and produced an industry podcast elevating contractor voices and increasing visibility for the electrical contracting industry in the state of Georgia.',
    platform: 'Listen on Spotify',
    url: 'https://open.spotify.com/show/16oRgsML9BB6F3cUIWCCLu?si=914a82cb7d764e2b',
    date: '',
    order: 100,
    published: true,
    featured: true,
  },
];

export const visiblePodcasts = podcasts
  .filter((p) => p.published && p.url)
  .sort((a, b) => a.order - b.order);
