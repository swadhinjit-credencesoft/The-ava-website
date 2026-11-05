import type { Metadata } from "next";

const siteUrl = "https://themountainresorts.com";
const roomRouteSlugs = ["standard", "cliff-view", "family", "glass-jacuzzi", "bungalow"];

export async function generateStaticParams() {
  return roomRouteSlugs.map((id) => ({ id: `${id}-room` }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const canonicalId = id.replace(/-room$/, "");
  if (!roomRouteSlugs.includes(canonicalId)) return { title: "Stay Not Found | The Mountain Resort Karjat" };

  const title = "Room Details | The Mountain Resort Karjat";
  const description = "View live room details, photos, occupancy, features and rates from The Mountain Resort's booking inventory.";
  const url = `${siteUrl}/rooms/${id}`;

  return {
    title,
    description,
    alternates: { canonical: `/rooms/${id}` },
    openGraph: { title, description, url, type: "website", siteName: "The Mountain Resort Karjat" },
  };
}

export default function RoomDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
