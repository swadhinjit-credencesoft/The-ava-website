import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amenities & Facilities at The AVA Chikkamagaluru",
  description: "Explore our premium facilities: in-house restaurant, free WiFi, secured parking, bonfire evenings, travel desk, 24-hr hot water, and more on NH 173, Chikkamagaluru.",
  openGraph: {
    title: "Amenities — The AVA Hotel Chikkamagaluru",
    description: "In-house restaurant, free WiFi, bonfire, travel desk & more at The AVA near Mudigere.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amenities — The AVA Hotel Chikkamagaluru",
    description: "In-house restaurant, free WiFi, bonfire, travel desk & more at The AVA near Mudigere.",
    images: ["/avadining.jpg"],
  },
};

export default function AmenitiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
