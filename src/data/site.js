// Shared site settings. Change values here instead of hunting through pages.

export const TAGLINE = 'Built by the Field. Backed by Experience.';

export const MISSION =
  'TradeBuilt believes the industry should listen to the field, communicate opportunities more effectively, and take responsibility for developing its future workforce.';

// Public contact inbox used by mailto links and as the fallback on the Contact page.
// Confirmed by owner Oct 19, 2026. Verify the inbox receives outside mail before release.
export const CONTACT_EMAIL = 'liz@tradebuiltusa.com';

// Study status — the single place to update when the report publishes.
export const STUDY = {
  name: 'Georgia Construction Talent Study',
  closedOn: 'October 15, 2026',
  reportAnticipated: 'November 2026',
  reportPublished: false, // flip to true only when a real report URL exists
  reportUrl: '',
};

// The American Trades page/preview stays hidden until approved campaign assets are in the repo.
export const AMERICAN_TRADES_PUBLISHED = false;

export const PRINCIPLES = [
  {
    label: 'Listen',
    lead: 'Listen to the field.',
    body: 'The people closest to construction’s workforce challenges have perspectives worth hearing. TradeBuilt uses independent research and industry conversations to better understand those experiences.',
  },
  {
    label: 'Communicate',
    lead: 'Communicate opportunities.',
    body: 'Construction careers deserve to be understood, not stereotyped. Through educational resources and storytelling, TradeBuilt helps make those opportunities more visible.',
  },
  {
    label: 'Take Responsibility',
    lead: '',
    body: 'The next generation isn’t responsible for fixing the systems they’re entering. The industry has a role to play in creating clearer pathways, stronger connections, and better experiences.',
  },
];

export const WORK_AREAS = [
  {
    num: '01',
    title: 'Research & Insights',
    line: 'Listening to the people closest to the work.',
    href: '/research-insights',
    cta: 'Explore Research & Insights',
  },
  {
    num: '02',
    title: 'Career Awareness',
    line: 'Making construction opportunities easier to understand.',
    href: '/careers',
    cta: 'Explore Construction Careers',
  },
  {
    num: '03',
    title: 'Industry Engagement',
    line: 'Connecting the people shaping what comes next.',
    href: '/about#conversations',
    cta: 'Conversations From the Field',
  },
];
