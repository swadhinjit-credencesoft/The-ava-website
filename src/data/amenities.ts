const cdn = "https://bookonelocal.in/cdn";
const unsplash = "https://images.unsplash.com";

export interface Amenity {
  name: string;
  category: "Activities" | "Amenities" | "Facilities" | "Entertainment";
  description: string;
  image: string;
  highlight?: string;
}

export const amenities: Amenity[] = [
  {
    name: "Boating",
    category: "Activities",
    highlight: "Water Recreation",
    description: "Enjoy peaceful pedal and paddle boating experiences surrounded by lush Karjat mountain landscapes.",
    image: '/poolprivate.jpeg',
  },
  {
    name: "Trekking",
    category: "Activities",
    highlight: "Outdoor Adventure",
    description: "Explore scenic nature trails and mountain trekking routes with panoramic views of the surrounding Western Ghats.",
    image: `${unsplash}/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80`,
  },
  {
    name: "Indoor & Outdoor Games",
    category: "Activities",
    highlight: "Sports & Fun",
    description: "Engage in friendly matches with badminton, cricket, carrom, table tennis, and a variety of lawn board games.",
    image: `${unsplash}/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80`,
  },
  {
    name: "Rain Dance",
    category: "Activities",
    highlight: "Party & Beats",
    description: "Cool off under high-pressure water sprinkler showers accompanied by rhythmic party tracks on our dedicated rain dance arena.",
    image: `${unsplash}/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80`,
  },
  {
    name: "Swimming Pool",
    category: "Amenities",
    highlight: "Mountain View Pool",
    description: "Take a refreshing dip in our sparkling outdoor swimming pool overlooking rolling hills and open skies.",
    image: "/swimming.png",
  },
  {
    name: "Bungalow Private Jacuzzi",
    category: "Amenities",
    highlight: "Private Luxury",
    description: "Indulge in pure relaxation with a private, temperature-controlled jacuzzi built into our premium Bungalow Villa suite.",
    image: `${cdn}/2026-04-02-082005702-DSC08852.jpg`,
  },
  {
    name: "Sunset Point View",
    category: "Facilities",
    highlight: "Scenic Golden Hour",
    description: "Witness magical golden-hour sunsets as the sun dips behind the Karjat mountain ranges from our curated vantage points.",
    image: "/mountainview.avif",
  },
  {
    name: "Lawn Area",
    category: "Facilities",
    highlight: "7-Acre Greenery",
    description: "Expansive manicured open lawns ideal for destination weddings, morning yoga, evening cocktail parties, and group games.",
    image: `${cdn}/DSC08849.avif`,
  },
  {
    name: "Deck Area",
    category: "Facilities",
    highlight: "Lounging & Views",
    description: "Spacious wooden view deck designed for stargazing, sunset high tea, and open-air conversation with mountain vistas.",
    image: `${unsplash}/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80`,
  },
  {
    name: "Gazebo",
    category: "Facilities",
    highlight: "Outdoor Cabanas",
    description: "Charming sheltered garden gazebos providing peaceful shade, reading nooks, and intimate outdoor dining corners.",
    image: `${unsplash}/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80`,
  },
  {
    name: "Music Speaker with Mic",
    category: "Entertainment",
    highlight: "Karaoke & Events",
    description: "Professional high-output audio system and wireless microphones available for karaoke, private parties, and wedding functions.",
    image: `${unsplash}/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80`,
  },
  {
    name: "In-House Restaurant",
    category: "Amenities",
    highlight: "Fresh Dining",
    description: "Savor delectable multi-cuisine menus, lavish buffet spreads, barbecue setups, and customized celebration banquet dining.",
    image: "/event.avif",
  },
];
