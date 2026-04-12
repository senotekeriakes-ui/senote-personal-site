export interface Note {
  title: string;
  slug: string;
  date: string; // ISO format
  status: 'evergreen' | 'growing' | 'seedling';
  readTime: number; // minutes
}

export const NOTES: Note[] = [
  {
    title: 'Why I left clinical dentistry (and came back)',
    slug: 'why-i-left-clinical',
    date: '2026-04-08',
    status: 'growing',
    readTime: 6,
  },
  {
    title: 'Building hardware as a solo founder',
    slug: 'building-hardware-solo',
    date: '2026-03-22',
    status: 'seedling',
    readTime: 4,
  },
  {
    title: 'Eight months in Latin America',
    slug: 'latin-america',
    date: '2026-03-10',
    status: 'evergreen',
    readTime: 8,
  },
  {
    title: 'How DentalScribe handles ADA codes',
    slug: 'dentalscribe-ada-codes',
    date: '2026-02-18',
    status: 'growing',
    readTime: 5,
  },
  {
    title: 'The case for recording dental treatment',
    slug: 'recording-dental-treatment',
    date: '2026-01-30',
    status: 'seedling',
    readTime: 3,
  },
];

// Format date as "apr 08" style
export function formatNoteDate(isoDate: string): string {
  const d = new Date(isoDate);
  const month = d.toLocaleString('en', { month: 'short' }).toLowerCase();
  const day = String(d.getDate()).padStart(2, '0');
  return `${month} ${day}`;
}
