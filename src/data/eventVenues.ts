const cdn = "https://bookonelocal.in/cdn";

export interface EventVenue {
  name: string;
  capacity: string;
  description: string;
  image: string;
  video?: string;
}

export const eventVenues: EventVenue[] = [
  {
    name: "Mountain View Destination",
    capacity: "Up to 500 guests",
    description: "Open panoramic lawns and scenic mountain backdrops for grand wedding ceremonies, mandap setups, and luxury receptions.",
    image: `${cdn}/DSC08846.avif`,
  },
  {
    name: "Wedding Lawns",
    capacity: "100 to 400 guests",
    description: "Expansive manicured lawns tailored for Haldi, Mehendi, Sangeet, open-air wedding dinners, and cultural celebrations.",
    image: `${cdn}/DSC08849.avif`,
  },
  {
    name: "Corporate Events & Offsites",
    capacity: "20 to 200 guests",
    description: "Equipped conference spaces and breakout lawns with high-speed Wi-Fi, audio/visual projector setups, and curated buffet meals for corporate retreats.",
    image: "/meeting-optimized.jpg",
    video: "https://bookonelocal.in/cdn/mountaincorporatevideo.mp4",
  },
  {
    name: "Poolside Celebrations",
    capacity: "50 to 150 guests",
    description: "A chic poolside setting for cocktail evenings, sunset sundowners, rain dance bashes, and pre-wedding gatherings.",
    image: "/poolprivate.jpeg",
  },
  {
    name: "Private Event Hall",
    capacity: "20 to 100 guests",
    description: "Air-conditioned indoor banquet space for intimate family rituals, anniversaries, executive board meetings, and celebratory dining.",
    image: "/eventhall.avif",
  },
];
