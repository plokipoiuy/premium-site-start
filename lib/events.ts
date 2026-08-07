export type EventItem = {
  slug: string;
  city: string;
  country: string;
  flag: string;
  dateLabel: string;
  gradient: string;
  blurb: string;
};

// Placeholder line-up — swap for the real tour dates + city art before launch.
export const events: EventItem[] = [
  {
    slug: "berlin",
    city: "BERLIN",
    country: "Germany",
    flag: "🇩🇪",
    dateLabel: "SEPTEMBER 12, 2026",
    gradient: "linear-gradient(160deg, #2b2f77 0%, #6f5fb0 45%, #e8b74a 100%)",
    blurb:
      "A warehouse night on the east side, low ceilings and a system built for sub-bass.",
  },
  {
    slug: "lisbon",
    city: "LISBON",
    country: "Portugal",
    flag: "🇵🇹",
    dateLabel: "SEPTEMBER 26, 2026",
    gradient: "linear-gradient(160deg, #d6371f 0%, #e8804a 45%, #f4d35e 100%)",
    blurb: "Open-air on the river, sunset set into sunrise close.",
  },
  {
    slug: "tokyo",
    city: "TOKYO",
    country: "Japan",
    flag: "🇯🇵",
    dateLabel: "OCTOBER 3, 2026",
    gradient: "linear-gradient(160deg, #0f2740 0%, #1c5c6b 45%, #7fd0c9 100%)",
    blurb: "A late-night club run through Shibuya, capacity capped tight.",
  },
  {
    slug: "mexico-city",
    city: "MEXICO CITY",
    country: "Mexico",
    flag: "🇲🇽",
    dateLabel: "OCTOBER 17, 2026",
    gradient: "linear-gradient(160deg, #7a1f3d 0%, #c94f3f 45%, #f2a65a 100%)",
    blurb: "First visit to CDMX — a converted print factory downtown.",
  },
  {
    slug: "amsterdam",
    city: "AMSTERDAM",
    country: "Netherlands",
    flag: "🇳🇱",
    dateLabel: "NOVEMBER 7, 2026",
    gradient: "linear-gradient(160deg, #1a1a2e 0%, #4a4e8c 45%, #e6b8c2 100%)",
    blurb: "ADE week closer, back at the venue that started it all.",
  },
  {
    slug: "london",
    city: "LONDON",
    country: "United Kingdom",
    flag: "🇬🇧",
    dateLabel: "NOVEMBER 21, 2026",
    gradient: "linear-gradient(160deg, #232323 0%, #5c5c66 45%, #d6371f 100%)",
    blurb: "Closing the run under the arches, full band setup.",
  },
];
