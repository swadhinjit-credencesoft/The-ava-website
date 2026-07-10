import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meetings & Events — The AVA Chikkamagaluru",
  description: "2500+ Sq.Ft pillarless ballroom for weddings, corporate events & celebrations on NH 173, Chikkamagaluru. Hosted at The Royal Shalimar, our sister venue.",
  openGraph: {
    title: "Events — The AVA Hotel Chikkamagaluru",
    description: "2500+ sq.ft pillarless ballroom for weddings, corporate meets & celebrations.",
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
