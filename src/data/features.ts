export interface FeatureItem {
  name: string;
  icon: string;
  category?: "Activities" | "Amenities" | "Facilities" | "Entertainment";
  description?: string;
}

export const features: FeatureItem[] = [
  { name: "Boating", icon: "Sailboat", category: "Activities", description: "Scenic boating experience amidst peaceful mountain waters." },
  { name: "Trekking", icon: "Compass", category: "Activities", description: "Guided nature and hill trekking trails around the estate." },
  { name: "Indoor & Outdoor Games", icon: "Gamepad2", category: "Activities", description: "Cricket, badminton, carrom, table tennis and family sports." },
  { name: "Rain Dance", icon: "CloudRain", category: "Activities", description: "High-energy rain dance floor with overhead water sprays and music." },
  { name: "Swimming Pool", icon: "Waves", category: "Amenities", description: "Expansive outdoor pool with panoramic mountain and valley views." },
  { name: "Bungalow Private Jacuzzi", icon: "Bath", category: "Amenities", description: "Private luxury jacuzzi attached to the premium bungalow villa." },
  { name: "Sunset Point View", icon: "Sunset", category: "Facilities", description: "Scenic hill vantage point to watch breathtaking Karjat sunsets." },
  { name: "Lawn Area", icon: "Trees", category: "Facilities", description: "Sprawling manicured green lawns for celebrations and sports." },
  { name: "Deck Area", icon: "Armchair", category: "Facilities", description: "Elevated scenic deck for sunset lounging, dining and tea." },
  { name: "Gazebo", icon: "Tent", category: "Facilities", description: "Picturesque garden gazebos for intimate conversations and shade." },
  { name: "Music Speaker with Mic", icon: "Speaker", category: "Entertainment", description: "High-powered sound system with microphones for events and karaoke." },
  { name: "In-House Restaurant", icon: "UtensilsCrossed", category: "Amenities", description: "Multi-cuisine dining serving fresh gourmet meals and buffets." },
];
