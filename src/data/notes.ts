import { XMLParser } from 'fast-xml-parser';

export interface Note {
  title: string;
  slug: string;
  date: string; // ISO format
  readTime?: number; // minutes
  url?: string; // external link (e.g. Medium)
}

const MEDIUM_FEED_URL = 'https://medium.com/feed/@senote';

// Articles published on other platforms
const MANUAL_NOTES: Note[] = [
  {
    title: "Don Draper's Earthly Odyssey Through the 9 Circles of Hell",
    slug: 'mad-men-dante',
    date: '2023-09-05',
    url: 'https://www.filmslop.com/reviews/mad-men?rq=mad%20men',
  },
];

async function fetchMediumFeed(): Promise<Note[]> {
  try {
    const res = await fetch(MEDIUM_FEED_URL);
    const xml = await res.text();
    const parser = new XMLParser();
    const feed = parser.parse(xml);
    const items = feed?.rss?.channel?.item ?? [];

    return (Array.isArray(items) ? items : [items]).map((item: any) => {
      const date = new Date(item.pubDate);
      const slug = item.link?.split('/').pop()?.split('-').slice(0, -1).join('-') || 'post';
      const wordCount = (item['content:encoded'] || '').replace(/<[^>]+>/g, '').split(/\s+/).length;
      const readTime = Math.max(1, Math.round(wordCount / 250));

      return {
        title: item.title,
        slug,
        date: date.toISOString().slice(0, 10),
        readTime,
        url: item.link,
      };
    });
  } catch (e) {
    console.error('Failed to fetch Medium feed:', e);
    return [];
  }
}

export async function fetchAllNotes(): Promise<Note[]> {
  const medium = await fetchMediumFeed();
  const all = [...medium, ...MANUAL_NOTES];
  return all.sort((a, b) => b.date.localeCompare(a.date));
}

// Format date as "apr 08" style
export function formatNoteDate(isoDate: string): string {
  const d = new Date(isoDate);
  const month = d.toLocaleString('en', { month: 'short' }).toLowerCase();
  const day = String(d.getDate()).padStart(2, '0');
  return `${month} ${day}`;
}
