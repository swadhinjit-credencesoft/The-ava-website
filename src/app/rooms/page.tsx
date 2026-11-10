"use client";

import { useRef, useMemo } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useHotelMateRooms } from "@/hooks/useHotelMateRooms";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { PageHero } from "@/components/sections/PageHero";
import { BookingBar } from "@/components/BookingBar";
import { CtaStrip } from "@/components/sections/CtaStrip";

gsap.registerPlugin(ScrollTrigger);

export default function RoomsPage() {
  const bookingEngineUrl = useSelector((state: RootState) => state.data.hotel.bookingEngineUrl);
  const { checkIn, checkOut, guests } = useSelector((state: RootState) => state.booking);
  const { data, isPending, isError, error, refetch } = useHotelMateRooms();
  const rooms = data?.rooms ?? [];
  const roomFeatures = useMemo(() => [...new Set(rooms.flatMap((room) => room.features))], [rooms]);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".room-card", { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: "power3.out",
      scrollTrigger: { trigger: ".room-card", start: "top 85%" },
    });
    gsap.fromTo(".inclusion-item", { y: 20, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out",
      scrollTrigger: { trigger: ".inclusion-item", start: "top 85%" },
    });
  }, { scope: containerRef, dependencies: [rooms.length] });

  const getBookNowUrl = (apiId: number | string) => {
    try {
      const url = new URL(bookingEngineUrl);
      url.searchParams.set("bookingEngine", "true");
      if (checkIn && checkOut) {
        const [ciY, ciM, ciD] = checkIn.split("-");
        const [coY, coM, coD] = checkOut.split("-");
        url.searchParams.set("checkinDay", String(Number(ciD)));
        url.searchParams.set("checkinMonth", String(Number(ciM)));
        url.searchParams.set("checkinYear", ciY);
        url.searchParams.set("checkoutDay", String(Number(coD)));
        url.searchParams.set("checkoutMonth", String(Number(coM)));
        url.searchParams.set("checkoutYear", coY);
        url.searchParams.set("checkOut", checkOut);
        url.searchParams.set("toDate", checkOut);
      }
      url.searchParams.set("numGuests", String(guests));
      url.searchParams.set("numAdults", String(guests));
      url.searchParams.set("Children", "0");
      url.searchParams.set("rooms", "1");
      if (apiId) url.searchParams.set("roomId", String(apiId));
      return url.toString();
    } catch {
      return bookingEngineUrl;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white" ref={containerRef}>
      <Navbar />

      <main className="flex-1 pt-20">
        <Breadcrumb />
        <PageHero />

        {/* Dynamic Booking Bar for selecting dates & recalculating live rates */}
        <div className="border-b border-[#e5e5e5] bg-white">
          <BookingBar />
        </div>

        <section className="py-12 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto text-center">
            <p className="text-[#707072] text-[15px] leading-relaxed font-medium max-w-3xl mx-auto">
              Live room details, real-time rates, photos and inventory status are retrieved directly from the HotelMate booking system for your travel dates.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 md:px-8">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {isPending && Array.from({ length: 4 }, (_, index) => (
              <div key={`room-loading-${index}`} className="room-card flex flex-col animate-pulse">
                <div className="aspect-[4/3] bg-[#e5e5e5]" />
                <div className="pt-8 flex flex-col gap-5">
                  <div className="h-10 w-2/3 bg-[#e5e5e5]" />
                  <div className="h-16 bg-[#f0f0f0]" />
                </div>
              </div>
            ))}

            {isError && (
              <div className="md:col-span-2 text-center py-16" role="alert">
                <p className="text-[#707072] text-[15px]">
                  {error instanceof Error ? error.message : "Live room details could not be loaded."}
                </p>
                <button
                  onClick={() => refetch()}
                  className="mt-5 bg-[#111111] text-white px-8 py-3.5 rounded-full font-medium text-[14px] hover:bg-[#333] transition-colors"
                >
                  Try again
                </button>
              </div>
            )}

            {!isPending && !isError && rooms.map((room) => (
              <div key={room.id} className="room-card flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f5] group">
                  {room.image && (
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {room.type && (
                      <span className="bg-[#C9A84C] text-[#111111] px-4 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider">
                        {room.type}
                      </span>
                    )}
                    {room.formattedPrice && (
                      <span className="bg-white text-[#111111] px-4 py-1 rounded-full text-[11px] font-bold">
                        {room.formattedPrice} / night
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-8 flex flex-col gap-5 flex-1">
                  <h2 className="font-display text-[42px] text-[#111111] uppercase leading-tight">
                    {room.name}
                  </h2>
                  {room.description && (
                    <p className="text-[#707072] text-[15px] leading-relaxed font-medium">
                      {room.description}
                    </p>
                  )}
                  <p className="text-[#707072] text-[13px] font-medium">
                    {room.occupancy && <span>{room.occupancy}</span>}
                    {room.availableRooms !== null && (
                      <span>
                        {room.occupancy ? " | " : ""}
                        {room.availableRooms} room{room.availableRooms === 1 ? "" : "s"} available for these dates
                      </span>
                    )}
                    {room.availableRooms === null && (
                      <span>{room.occupancy ? " | " : ""}Check live availability</span>
                    )}
                  </p>

                  {room.features.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {room.features.slice(0, 6).map((f) => (
                        <span
                          key={f}
                          className="border border-[#cacacb] text-[#111111] px-4 py-1.5 rounded-full text-[12px] font-medium"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto pt-4 flex gap-3 flex-wrap">
                    {/* Using Next.js Link for instant dynamic client navigation */}
                    <Link
                      href={`/rooms/detail?room=${encodeURIComponent(room.id)}`}
                      className="border border-[#cacacb] text-[#111111] px-8 py-4 rounded-full font-medium text-[15px] hover:border-[#111111] transition-colors inline-block"
                      data-testid={`button-view-${room.id}`}
                    >
                      View Details
                    </Link>
                    <a
                      href={getBookNowUrl(room.apiId)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#111111] text-white px-8 py-4 rounded-full font-medium text-[15px] hover:bg-[#333] transition-colors inline-block"
                      data-testid={`button-book-${room.id}`}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {roomFeatures.length > 0 && (
          <section className="py-24 px-4 md:px-8 bg-[#f5f5f5]">
            <div className="max-w-screen-xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">
                  Amenities &amp; Facilities
                </p>
                <h2 className="font-display text-[56px] md:text-[72px] text-[#111111] uppercase leading-[0.9]">
                  STAY INCLUSIONS
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {roomFeatures.map((inc) => (
                  <div
                    key={inc}
                    className="inclusion-item flex items-center gap-4 p-5 bg-white border border-[#e5e5e5]"
                  >
                    <CheckCircle size={18} className="text-[#C9A84C] flex-shrink-0" />
                    <span className="font-medium text-[14px] text-[#111111]">{inc}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <CtaStrip />
      </main>

      <Footer />
    </div>
  );
}
