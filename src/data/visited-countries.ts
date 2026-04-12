export const VISITED = {
  SA: { name: 'Saudi Arabia', type: 'lived' },
  EG: { name: 'Egypt', type: 'visited' },
  AE: { name: 'UAE', type: 'visited' },
  OM: { name: 'Oman', type: 'visited' },
  CN: { name: 'China', type: 'visited' },
  HK: { name: 'Hong Kong', type: 'visited' },
  MO: { name: 'Macau', type: 'visited' },
  TW: { name: 'Taiwan', type: 'visited' },
  SG: { name: 'Singapore', type: 'visited' },
  MY: { name: 'Malaysia', type: 'visited' },
  TH: { name: 'Thailand', type: 'visited' },
  VN: { name: 'Vietnam', type: 'visited' },
  FR: { name: 'France', type: 'visited' },
  US: { name: 'USA', type: 'visited' },
  MX: { name: 'Mexico', type: 'visited' },
  GT: { name: 'Guatemala', type: 'visited' },
  SV: { name: 'El Salvador', type: 'visited' },
  HN: { name: 'Honduras', type: 'visited' },
  NI: { name: 'Nicaragua', type: 'visited' },
  CR: { name: 'Costa Rica', type: 'visited' },
  CO: { name: 'Colombia', type: 'visited' },
  BR: { name: 'Brazil', type: 'visited' },
  UY: { name: 'Uruguay', type: 'visited' },
  AR: { name: 'Argentina', type: 'visited' },
  FJ: { name: 'Fiji', type: 'visited' },
} as const;

export type CountryCode = keyof typeof VISITED;
export type CountryType = 'lived' | 'visited';

// Flag emoji helper
export function countryFlag(code: string): string {
  return code
    .toUpperCase()
    .split('')
    .map((c) => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65))
    .join('');
}

// Stats
export const totalCountries = Object.keys(VISITED).length;
export const continents = 5; // Asia, Africa, Europe, North America, South America + Oceania
export const worldPercentage = Math.round((totalCountries / 195) * 100);
export const remaining = 195 - totalCountries;
