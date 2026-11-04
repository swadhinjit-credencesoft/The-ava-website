import type { Metadata } from "next";
import { rooms } from "@/data/rooms";

const siteUrl = "https://themountainresorts.com";

export async function generateStaticParams() {
  return rooms.map((room) => ({ id: `${room.id}-room` }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const room = rooms.find((item) => item.id === id.replace(/-room$/, ""));
  if (!room) return { title: "Stay Not Found | The Mountain Resort Karjat" };
  const description = `${room.description} ${room.size}. ${room.occupancy}. Contact the resort for availability and current rates.`;
  const url = `${siteUrl}/rooms/${id}`;
  return {
    title: `${room.name} | The Mountain Resort Karjat`,
    description,
    alternates: { canonical: `/rooms/${id}` },
    openGraph: { title: `${room.name} | The Mountain Resort Karjat`, description, url, type: "website", siteName: "The Mountain Resort Karjat", images: [{ url: room.image, width: 1200, height: 900, alt: room.name }] },
    twitter: { card: "summary_large_image", title: `${room.name} | The Mountain Resort Karjat`, description, images: [room.image] },
  };
}

export default async function RoomDetailLayout({ children, params }: { children: React.ReactNode; params: Promise<{ id: string }> }) {
  const { id } = await params;
  const room = rooms.find((item) => item.id === id.replace(/-room$/, ""));
  const url = `${siteUrl}/rooms/${id}`;
  const roomSchema = room ? {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: room.name,
    description: room.description,
    image: room.image,
    url,
    occupancy: { "@type": "QuantitativeValue", value: room.occupancy },
    amenityFeature: room.features.map((feature) => ({ "@type": "LocationFeatureSpecification", name: feature })),
    ...(room.price.startsWith("₹") ? { offers: { "@type": "Offer", price: room.price.replace(/[^0-9]/g, ""), priceCurrency: "INR", availability: "https://schema.org/InStock", url } } : {}),
    isPartOf: { "@type": "Hotel", name: "The Mountain Resort Karjat", url: siteUrl },
  } : null;
  const breadcrumbSchema = room ? { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Stay", item: `${siteUrl}/rooms` },
    { "@type": "ListItem", position: 3, name: room.name, item: url },
  ] } : null;
  return <>{children}{roomSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(roomSchema) }} />}{breadcrumbSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />}</>;
}
