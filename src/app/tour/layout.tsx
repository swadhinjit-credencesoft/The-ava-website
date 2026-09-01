import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour & Nearby — The AVA Chikkamagaluru",
  description: "Explore Mullayanagiri, Bhadra Wildlife Sanctuary, Sringeri, Hornadu, Belur-Halebidu & more. Your base on NH 173 near Mudigere for Western Ghats adventures.",
  alternates: {
    canonical: "/tour",
  },
  openGraph: {
    title: "Tour & Nearby — The AVA Hotel Chikkamagaluru",
    description: "Mullayanagiri, Bhadra Sanctuary, Sringeri temple circuit & more — all accessible from The AVA on NH 173.",
    url: "https://theavahotel.in/tour",
    type: "website",
    siteName: "The AVA Hotel",
    images: [{ url: "/tour.jpg", width: 1200, height: 900, alt: "Tour & nearby attractions from The AVA Hotel Chikkamagaluru" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tour & Nearby — The AVA Hotel Chikkamagaluru",
    description: "Mullayanagiri, Bhadra Sanctuary, Sringeri temple circuit & more — all accessible from The AVA on NH 173.",
    images: ["/tour.jpg"],
  },
};

export default function TourLayout({ children }: { children: React.ReactNode }) {
  return children;
}
