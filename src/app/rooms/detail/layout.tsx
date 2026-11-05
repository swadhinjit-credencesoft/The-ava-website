import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Room Details | The Mountain Resort Karjat",
  description: "View live accommodation details from The Mountain Resort Karjat booking inventory.",
  alternates: { canonical: "/rooms" },
  robots: { index: false, follow: true },
};

export default function RoomDetailsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
