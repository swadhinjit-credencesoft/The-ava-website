import type { Metadata } from "next";
import { fetchLiveRooms, KNOWN_ROOM_IDS } from "@/lib/roomApi";
import { Room } from "@/types/room";

const siteUrl = "https://hoteltheava.com";

let cachedLiveRooms: Room[] | null = null;

async function getLiveRoomsCached(): Promise<Room[]> {
  if (cachedLiveRooms && cachedLiveRooms.length > 0) {
    return cachedLiveRooms;
  }
  try {
    const liveRooms = await fetchLiveRooms();
    if (liveRooms && liveRooms.length > 0) {
      cachedLiveRooms = liveRooms;
      return liveRooms;
    }
  } catch (e) {
    console.warn("Could not fetch live rooms at build time, using known IDs:", e);
  }
  return [];
}

async function findRoomAsync(rawId: string | undefined): Promise<Room | undefined> {
  if (!rawId) return undefined;
  const rooms = await getLiveRoomsCached();
  const clean = rawId.replace(/-room$/, "");
  return rooms.find(
    (r) =>
      r.id === clean ||
      r.slug === clean ||
      String(r.apiId) === clean ||
      r.id === rawId ||
      r.slug === rawId
  );
}

export async function generateStaticParams() {
  const rooms = await getLiveRoomsCached();
  const params: { id: string }[] = [];

  if (rooms.length > 0) {
    for (const room of rooms) {
      if (room.slug) {
        params.push({ id: `${room.slug}-room` });
        params.push({ id: room.slug });
      }
      if (room.id) {
        params.push({ id: `${room.id}-room` });
        params.push({ id: room.id });
      }
    }
  } else {
    for (const id of KNOWN_ROOM_IDS) {
      params.push({ id: `${id}-room` });
      params.push({ id });
    }
  }

  const uniqueIds = Array.from(new Set(params.map((p) => p.id)));
  return uniqueIds.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const room = await findRoomAsync(id);
  if (!room) {
    return { title: "Room Accommodation — The AVA Hotel Chikkamagaluru" };
  }
  const desc = `${room.description} From ${room.price}/night. ${room.size}, ${room.occupancy}. Book direct on NH 173, Chikkamagaluru.`;
  const path = `/rooms/${id}/`;
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
      images: [
        {
          url: room.image,
          width: 1200,
          height: 900,
          alt: `${room.name} at The AVA Hotel Chikkamagaluru`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${room.name} — The AVA Hotel Chikkamagaluru`,
      description: desc.slice(0, 120),
      images: [room.image],
    },
  };
}

export default async function RoomDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const room = await findRoomAsync(id);
  const roomUrl = `${siteUrl}/rooms/${id}/`;

  const roomSchema = room
    ? {
        "@context": "https://schema.org",
        "@type": "HotelRoom",
        name: `${room.name} — ${room.type}`,
        description: room.description,
        image: room.images && room.images.length > 0 ? room.images : [`${siteUrl}${room.image}`],
        url: roomUrl,
        occupancy: { "@type": "QuantitativeValue", value: room.occupancy },
        floorSize: {
          "@type": "QuantitativeValue",
          value: room.size.replace(/[^0-9]/g, ""),
          unitCode: "FTK",
        },
        amenityFeature: room.features.map((f) => ({
          "@type": "LocationFeatureSpecification",
          name: f,
        })),
        offers: room.plans && room.plans.length > 0
          ? room.plans.map((p) => ({
              "@type": "Offer",
              name: p.name,
              price: String(p.amount),
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: roomUrl,
            }))
          : {
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
          { "@type": "ListItem", position: 2, name: "Rooms", item: `${siteUrl}/rooms/` },
          { "@type": "ListItem", position: 3, name: room.name, item: roomUrl },
        ],
      }
    : null;

  return (
    <>
      {children}
      {roomSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(roomSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </>
  );
}
