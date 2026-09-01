import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Chikkamagaluru — Travel Guides & Tips | The AVA",
  description: "Discover the best of Chikkamagaluru — Mullayanagiri trek guide, Sringeri temple circuit, Bhadra safari, Belur-Halebidu temples, and Bangalore road trip tips. Curated by The AVA.",
  alternates: {
    canonical: "/explore",
  },
  openGraph: {
    title: "Explore Chikkamagaluru — Travel Guides | The AVA Hotel",
    description: "Mullayanagiri trek, Sringeri temples, Bhadra safari, Belur-Halebidu — expert travel guides for your Chikkamagaluru stay.",
    url: "https://theavahotel.in/explore",
    type: "website",
    siteName: "The AVA Hotel",
    images: [{ url: "/tour.jpg", width: 1200, height: 900, alt: "Explore Chikkamagaluru — travel guides by The AVA Hotel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Chikkamagaluru — Travel Guides | The AVA Hotel",
    description: "Mullayanagiri trek, Sringeri temples, Bhadra safari, Belur-Halebidu — expert travel guides for your Chikkamagaluru stay.",
    images: ["/tour.jpg"],
  },
};

export default function ExploreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
