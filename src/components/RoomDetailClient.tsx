"use client";

import { useRef, useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, Users, IndianRupee, Calendar, Check, AlertCircle, Building } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useHotelMateRooms } from "@/hooks/useHotelMateRooms";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { BookingBar } from "@/components/BookingBar";

gsap.registerPlugin(ScrollTrigger);

function parseYmd(ymd: string) {
  const [y, m, d] = ymd.split("-");
  return { year: y, month: String(Number(m)), day: String(Number(d)) };
}

export function RoomDetailClient({ roomId }: { roomId?: string }) {
  const params = useParams();
  const hotel = useSelector((state: RootState) => state.data.hotel);
  const { checkIn, checkOut, guests } = useSelector((state: RootState) => state.booking);
  const { data, isPending, isError, error, refetch } = useHotelMateRooms();

  const rawRouteId = roomId ?? (typeof params?.id === "string" ? params.id : Array.isArray(params?.id) ? params.id[0] : "");
  const routeRoomId = (rawRouteId || "").replace(/-room$/, "");

  // Match room 100% dynamically from live HotelMate API inventory
  const room = useMemo(() => {
    if (!data?.rooms?.length || !routeRoomId) return undefined;
    const cleanRoute = routeRoomId.toLowerCase().replace(/[^a-z0-9]/g, "");

    return data.rooms.find((item) => {
      const cleanId = item.id.toLowerCase().replace(/[^a-z0-9]/g, "");
      const cleanName = item.name.toLowerCase().replace(/[^a-z0-9]/g, "");
      const apiIdStr = String(item.apiId);

      return (
        item.id === routeRoomId ||
        apiIdStr === routeRoomId ||
        cleanId === cleanRoute ||
        cleanName === cleanRoute ||
        cleanName.includes(cleanRoute) ||
        cleanRoute.includes(cleanId) ||
        (cleanRoute.includes("jacuz") && (cleanId.includes("jacuz") || cleanName.includes("jacuz"))) ||
        (cleanRoute.includes("cliff") && (cleanId.includes("cliff") || cleanName.includes("cliff"))) ||
        (cleanRoute.includes("bung") && (cleanId.includes("bung") || cleanName.includes("bung"))) ||
        (cleanRoute.includes("family") && (cleanId.includes("family") || cleanName.includes("family"))) ||
        (cleanRoute.includes("standard") && (cleanId.includes("standard") || cleanName.includes("standard")))
      );
    });
  }, [data, routeRoomId]);

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (room) {
      gsap.fromTo(
        ".detail-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".detail-item", start: "top 88%" },
        }
      );
    }
  }, { scope: containerRef, dependencies: [room?.id] });

  // Dynamic BookOne booking URL populated with active dates and API room ID
  const dynamicBookingUrl = useMemo(() => {
    try {
      const url = new URL(hotel.bookingEngineUrl);
      url.searchParams.set("bookingEngine", "true");
      if (checkIn && checkOut) {
        const ci = parseYmd(checkIn);
        const co = parseYmd(checkOut);
        url.searchParams.set("checkinDay", ci.day);
        url.searchParams.set("checkinMonth", ci.month);
        url.searchParams.set("checkinYear", ci.year);
        url.searchParams.set("checkoutDay", co.day);
        url.searchParams.set("checkoutMonth", co.month);
        url.searchParams.set("checkoutYear", co.year);
        url.searchParams.set("checkOut", checkOut);
        url.searchParams.set("toDate", checkOut);
        url.searchParams.set("date_to", checkOut);
      }
      url.searchParams.set("numGuests", String(guests));
      url.searchParams.set("numAdults", String(guests));
      url.searchParams.set("Children", "0");
      url.searchParams.set("rooms", "1");
      if (room?.apiId) {
        url.searchParams.set("roomId", String(room.apiId));
      }
      return url.toString();
    } catch {
      return hotel.bookingEngineUrl;
    }
  }, [hotel.bookingEngineUrl, checkIn, checkOut, guests, room?.apiId]);

  // Loading state with clean skeleton
  if (isPending) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-1 pt-20">
          <div className="h-[50vh] bg-[#f0f0f0] animate-pulse flex items-center justify-center">
            <div className="text-center px-4">
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">Live Inventory</p>
              <h1 className="font-display text-[40px] text-[#111111] uppercase">Loading Room Details…</h1>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto py-16 px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
              <div className="h-28 bg-[#f5f5f5]" />
              <div className="h-28 bg-[#f5f5f5]" />
              <div className="h-28 bg-[#f5f5f5]" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Error or room not found in live API response
  if (isError || !room) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-1 pt-20 flex items-center justify-center px-4">
          <div className="text-center py-24 max-w-lg">
            <h1 className="font-display text-[42px] text-[#111111] uppercase">
              {isError ? "Live Room Details Unavailable" : "Room Not Found in Inventory"}
            </h1>
            <p className="text-[#707072] mt-4 text-[15px]">
              {error instanceof Error
                ? error.message
                : "The requested room could not be loaded from the live hotel booking inventory."}
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={() => refetch()}
                className="bg-[#111111] text-white px-8 py-3.5 rounded-full text-[14px] font-medium hover:bg-[#333] transition-colors"
              >
                Refresh Inventory
              </button>
              <Link href="/rooms" className="text-[#C9A84C] underline text-[15px] font-medium">
                View all rooms
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white" ref={containerRef}>
      <Navbar />
      <main className="flex-1 pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: room.name,
              description: room.description,
              image: room.image,
              ...(room.price !== null
                ? {
                    offers: {
                      "@type": "Offer",
                      price: room.price,
                      priceCurrency: room.currency,
                      availability:
                        room.isAvailable === false
                          ? "https://schema.org/SoldOut"
                          : "https://schema.org/InStock",
                      url: dynamicBookingUrl,
                    },
                  }
                : {}),
            }),
          }}
        />

        <Breadcrumb />

        {/* Dynamic Hero Section */}
        <section className="relative w-full min-h-[55vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden">
          {room.image && (
            <img
              src={room.image}
              alt={room.name}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "brightness(0.38)" }}
            />
          )}
          <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 py-16 max-w-4xl mx-auto">
            {room.type && (
              <p className="text-[#C9A84C] text-[12px] md:text-[13px] uppercase tracking-[0.4em] mb-4 font-semibold">
                {room.type}
              </p>
            )}
            <h1 className="font-display text-[46px] sm:text-[68px] md:text-[96px] text-white uppercase leading-[0.9] tracking-tight">
              {room.name}
            </h1>
            <p className="text-white/90 text-[18px] md:text-[22px] max-w-xl mt-6 font-medium">
              {room.formattedPrice ? (
                <>
                  <span className="text-[#C9A84C] font-semibold">{room.formattedPrice}</span>
                  <span className="text-white/70 text-[15px]"> / night</span>
                  {room.pricePlan && (
                    <span className="text-white/70 text-[14px]"> · {room.pricePlan}</span>
                  )}
                </>
              ) : (
                "Live rates from booking inventory"
              )}
            </p>

            {/* Live Dates & Availability Badge */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {checkIn && checkOut && (
                <span className="inline-flex items-center gap-2 bg-black/40 text-white/90 border border-white/20 px-4 py-1.5 rounded-full text-[12px] font-medium backdrop-blur-sm">
                  <Calendar size={14} className="text-[#C9A84C]" />
                  {checkIn} to {checkOut} ({guests} {guests === 1 ? "Guest" : "Guests"})
                </span>
              )}
              {room.isAvailable !== null && (
                room.isAvailable ? (
                  <span className="inline-flex items-center gap-1.5 bg-[#1b4332]/85 text-[#d8f3dc] border border-[#2d6a4f] px-3.5 py-1.5 rounded-full text-[12px] font-medium backdrop-blur-sm">
                    <Check size={14} /> Live Available {room.availableRooms !== null ? `(${room.availableRooms} left)` : ""}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 bg-[#780000]/85 text-[#fdf0d5] border border-[#c1121f] px-3.5 py-1.5 rounded-full text-[12px] font-medium backdrop-blur-sm">
                    <AlertCircle size={14} /> Sold Out for Dates
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* Live Booking Bar for Dynamic Dates & Guest Selection */}
        <div className="border-b border-[#e5e5e5] bg-white">
          <BookingBar />
        </div>

        {/* Dynamic Key Specs Row */}
        <section className="py-12 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="detail-item flex items-center gap-4 p-6 bg-white border border-[#e5e5e5]">
                <IndianRupee size={24} className="text-[#C9A84C] flex-shrink-0" />
                <div>
                  <p className="text-[#707072] text-[11px] uppercase tracking-wider font-medium">
                    {room.pricePlan ?? "Live Rate"}
                  </p>
                  <p className="text-[#111111] font-display text-[26px]">
                    {room.formattedPrice ?? "Check dates"}
                    {room.formattedPrice && (
                      <span className="text-[#707072] text-[13px] font-medium"> /night</span>
                    )}
                  </p>
                </div>
              </div>

              <div className="detail-item flex items-center gap-4 p-6 bg-white border border-[#e5e5e5]">
                <Users size={24} className="text-[#C9A84C] flex-shrink-0" />
                <div>
                  <p className="text-[#707072] text-[11px] uppercase tracking-wider font-medium">
                    Occupancy
                  </p>
                  <p className="text-[#111111] font-display text-[22px]">
                    {room.occupancy ?? "Enquire for occupancy"}
                  </p>
                </div>
              </div>

              <div className="detail-item flex items-center gap-4 p-6 bg-white border border-[#e5e5e5]">
                <Building size={24} className="text-[#C9A84C] flex-shrink-0" />
                <div>
                  <p className="text-[#707072] text-[11px] uppercase tracking-wider font-medium">
                    Inventory Status
                  </p>
                  <p className="text-[#111111] font-display text-[22px]">
                    {room.availableRooms !== null
                      ? `${room.availableRooms} Room${room.availableRooms === 1 ? "" : "s"} Available`
                      : room.isAvailable !== false
                      ? "Available"
                      : "Sold Out"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Room Description & Features */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4 font-semibold">
                Accommodation Details
              </p>
              <h2 className="font-display text-[46px] md:text-[60px] text-[#111111] uppercase leading-[0.92] mb-6">
                {room.name}
              </h2>
              {room.description && (
                <p className="text-[#555555] text-[16px] md:text-[17px] leading-relaxed font-normal">
                  {room.description}
                </p>
              )}

              <div className="mt-10 flex gap-4 flex-wrap">
                <a
                  href={dynamicBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#111111] text-white px-9 py-4 rounded-full font-medium text-[15px] hover:bg-[#333333] transition-colors inline-flex items-center gap-2"
                  data-testid={`button-book-${room.id}`}
                >
                  Book This Room
                </a>
                <a
                  href={`tel:${hotel.phone.replace(/\s/g, "")}`}
                  className="border border-[#cacacb] text-[#111111] px-9 py-4 rounded-full font-medium text-[15px] hover:border-[#111111] transition-colors inline-block"
                  data-testid={`button-call-${room.id}`}
                >
                  Call to Enquire
                </a>
                <Link
                  href="/rooms"
                  className="border border-transparent text-[#707072] px-6 py-4 rounded-full font-medium text-[15px] hover:text-[#111111] transition-colors inline-block"
                >
                  ← All Stays
                </Link>
              </div>
            </div>

            {room.features.length > 0 && (
              <div>
                <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4 font-semibold">
                  Room Amenities &amp; Facilities
                </p>
                <h3 className="font-display text-[32px] text-[#111111] uppercase mb-6">
                  What&apos;s Included
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {room.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 p-4 bg-[#f8f8f8] border border-[#f0f0f0] detail-item"
                    >
                      <CheckCircle size={17} className="text-[#C9A84C] flex-shrink-0" />
                      <span className="font-medium text-[14px] text-[#111111]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Dynamic Rate Plans from API */}
        {room.ratePlans.length > 0 && (
          <section className="py-16 px-4 md:px-8 bg-[#fbfbfb] border-t border-[#f0f0f0]">
            <div className="max-w-screen-xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-3 font-semibold">
                    Live Pricing
                  </p>
                  <h2 className="font-display text-[40px] md:text-[50px] text-[#111111] uppercase leading-[0.9]">
                    Rate Plans
                  </h2>
                </div>
                <p className="text-[#707072] text-[14px]">
                  Rates dynamically computed for {checkIn} to {checkOut}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {room.ratePlans.map((plan) => (
                  <div
                    key={`${plan.name}-${plan.amount}`}
                    className="flex items-center justify-between gap-4 p-5 bg-white border border-[#e5e5e5] shadow-xs"
                  >
                    <span className="text-[#111111] font-medium text-[15px]">{plan.name}</span>
                    <span className="font-display text-[26px] text-[#C9A84C] font-semibold">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: plan.currencyCode,
                        maximumFractionDigits: 0,
                      }).format(plan.amount)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Dynamic Photos from API */}
        {room.images.length > 0 && (
          <section className="py-20 px-4 md:px-8 bg-[#f5f5f5]">
            <div className="max-w-screen-xl mx-auto">
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4 font-semibold">
                Live Photos
              </p>
              <h2 className="font-display text-[48px] md:text-[64px] text-[#111111] uppercase leading-[0.9] mb-10">
                Room Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.images.map((img, idx) => (
                  <div
                    key={`${room.id}-img-${idx}`}
                    className="aspect-[4/3] overflow-hidden bg-[#e5e5e5] relative group"
                  >
                    <img
                      src={img}
                      alt={`${room.name} photo ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
