import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms & Suites at The AVA Chikkamagaluru",
  description: "Four room categories — Quad, Premium, Estate View, Executive — each with King beds, AC, complimentary breakfast, and 24-hr checkout on NH 173.",
  openGraph: {
    title: "Rooms & Suites — The AVA Hotel Chikkamagaluru",
    description: "Quad, Premium, Estate View & Executive rooms. King beds, AC, breakfast included. Book direct for best rates.",
  },
};

export default function RoomsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
