import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meetings & Events — The AVA Chikkamagaluru",
  description: "2500+ Sq.Ft pillarless ballroom for weddings, corporate events & celebrations on NH 173, Chikkamagaluru.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Events — The AVA Hotel Chikkamagaluru",
    description: "2500+ sq.ft pillarless ballroom for weddings, corporate meets & celebrations.",
    url: "https://theavahotel.in/events",
    type: "website",
    siteName: "The AVA Hotel",
    images: [{ url: "/wedding.avif", width: 1200, height: 900, alt: "Wedding & events at The AVA Hotel Chikkamagaluru" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Events — The AVA Hotel Chikkamagaluru",
    description: "2500+ sq.ft pillarless ballroom for weddings, corporate meets & celebrations.",
    images: ["/wedding.avif"],
  },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
