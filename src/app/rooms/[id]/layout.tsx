import type { Metadata } from "next";
import { rooms } from "@/data/rooms";

export async function generateStaticParams() {
  return rooms.map((room) => ({ id: `${room.id}-room` }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const room = rooms.find((r) => r.id === id?.replace("-room", ""));
  if (!room) {
    return { title: "Room Not Found — The AVA" };
  }
  const desc = `${room.description} From ${room.price}/night. ${room.size}, ${room.occupancy}. Book direct on NH 173, Chikkamagaluru.`;
  return {
    title: `${room.name} — ${room.type} at The AVA Chikkamagaluru`,
    description: desc,
    openGraph: {
      title: `${room.name} — The AVA Hotel Chikkamagaluru`,
      description: desc.slice(0, 120),
      images: [{ url: room.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${room.name} — The AVA Hotel Chikkamagaluru`,
      description: desc.slice(0, 120),
      images: [room.image],
    },
  };
}

export default function RoomDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
