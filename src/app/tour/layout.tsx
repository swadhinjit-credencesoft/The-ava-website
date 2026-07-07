import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour & Nearby — The AVA Chikkamagaluru",
  description: "Explore Mullayanagiri, Bhadra Wildlife Sanctuary, Sringeri, Hornadu, Belur-Halebidu & more. Your base on NH 173 near Mudigere for Western Ghats adventures.",
  openGraph: {
    title: "Tour & Nearby — The AVA Hotel Chikkamagaluru",
    description: "Mullayanagiri, Bhadra Sanctuary, Sringeri temple circuit & more — all accessible from The AVA on NH 173.",
  },
};

export default function TourLayout({ children }: { children: React.ReactNode }) {
  return children;
}
