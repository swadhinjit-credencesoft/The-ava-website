import type { Metadata } from "next";
import { rooms } from "@/data/rooms";

const siteUrl = "https://theavahotel.in";

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
  const path = `/rooms/${id}`;
  return {
    title: `${room.name} — ${room.type} at The AVA Chikkamagaluru`,
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      title: `${room.name} — The AVA Hotel Chikkamagaluru`,
      description: desc.slice(0, 120),
      url: `${siteUrl}${path}`,
      type: "website",
      siteName: "The AVA Hotel",
      images: [{ url: room.image, width: 1200, height: 900, alt: `${room.name} at The AVA Hotel Chikkamagaluru` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${room.name} — The AVA Hotel Chikkamagaluru`,
      description: desc.slice(0, 120),
      images: [room.image],
    },
  };
}

export default async function RoomDetailLayout({ children, params }: { children: React.ReactNode; params: Promise<{ id: string }> }) {
  const { id } = await params;
  const room = rooms.find((r) => r.id === id?.replace("-room", ""));
  const roomUrl = `${siteUrl}/rooms/${id}`;

  const roomSchema = room
    ? {
        "@context": "https://schema.org",
        "@type": "HotelRoom",
        name: `${room.name} — ${room.type}`,
        description: room.description,
        image: `${siteUrl}${room.image}`,
        url: roomUrl,
        occupancy: { "@type": "QuantitativeValue", value: room.occupancy },
        floorSize: { "@type": "QuantitativeValue", value: room.size.replace(" sq.ft", ""), unitCode: "FTK" },
        amenityFeature: room.features.map((f) => ({ "@type": "LocationFeatureSpecification", name: f })),
        offers: {
          "@type": "Offer",
          price: room.price.replace(/[^0-9]/g, ""),
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: roomUrl,
        },
        isPartOf: { "@type": "Hotel", name: "The AVA", url: siteUrl },
      }
    : null;

  const breadcrumbSchema = room
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Rooms", item: `${siteUrl}/rooms` },
          { "@type": "ListItem", position: 3, name: room.name, item: roomUrl },
        ],
      }
    : null;

  return (
    <>
      {children}
      {roomSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(roomSchema) }} />
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      )}
    </>
  );
}