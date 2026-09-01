import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms & Suites at The AVA Chikkamagaluru",
  description: "Four room categories — Quad, Premium, Estate View, Executive — each with King beds, AC, complimentary breakfast, and 24-hr checkout on NH 173.",
  alternates: {
    canonical: "/rooms",
  },
  openGraph: {
    title: "Rooms & Suites — The AVA Hotel Chikkamagaluru",
    description: "Quad, Premium, Estate View & Executive rooms. King beds, AC, breakfast included. Book direct for best rates.",
    url: "https://theavahotel.in/rooms",
    type: "website",
    siteName: "The AVA Hotel",
    images: [{ url: "/premiumroom.webp", width: 1200, height: 900, alt: "Premium Room at The AVA Hotel Chikkamagaluru" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rooms & Suites — The AVA Hotel Chikkamagaluru",
    description: "Quad, Premium, Estate View & Executive rooms. King beds, AC, breakfast included. Book direct for best rates.",
    images: ["/premiumroom.webp"],
  },
};

export default function RoomsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
