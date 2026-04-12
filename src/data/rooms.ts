export interface Room {
  emoji: string;
  name: string;
  slug: string;
  status: 'evergreen' | 'growing' | 'seedling';
  description: string;
}

export const ROOMS: Room[] = [
  {
    emoji: '🦷',
    name: 'clinical',
    slug: 'clinical',
    status: 'evergreen',
    description: 'Notes on restorative, endo, ortho, and the craft of clinical dentistry.',
  },
  {
    emoji: '📸',
    name: 'apollonia',
    slug: 'apollonia',
    status: 'growing',
    description: 'Building a 4K camera that records dental treatment. Hardware, optics, firmware.',
  },
  {
    emoji: '🤖',
    name: 'dentalscribe',
    slug: 'dentalscribe',
    status: 'growing',
    description: 'AI clinical documentation — product thinking, NLP, and dental workflows.',
  },
  {
    emoji: '✈️',
    name: 'travels',
    slug: 'travels',
    status: 'evergreen',
    description: '25 countries and counting. Routes, photos, and lessons from the road.',
  },
  {
    emoji: '📚',
    name: 'reading',
    slug: 'reading',
    status: 'seedling',
    description: 'Books, papers, and articles that shaped how I think.',
  },
  {
    emoji: '🔧',
    name: 'tools',
    slug: 'tools',
    status: 'seedling',
    description: 'Software, hardware, and workflows I rely on daily.',
  },
];
