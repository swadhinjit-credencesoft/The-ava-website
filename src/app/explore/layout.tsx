import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Chikkamagaluru — Travel Guides & Tips | The AVA",
  description: "Discover the best of Chikkamagaluru — Mullayanagiri trek guide, Sringeri temple circuit, Bhadra safari, Belur-Halebidu temples, and Bangalore road trip tips. Curated by The AVA.",
  openGraph: {
    title: "Explore Chikkamagaluru — Travel Guides | The AVA Hotel",
    description: "Mullayanagiri trek, Sringeri temples, Bhadra safari, Belur-Halebidu — expert travel guides for your Chikkamagaluru stay.",
  },
};

export default function ExploreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
