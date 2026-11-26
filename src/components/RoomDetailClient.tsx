"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CheckCircle,
  Users,
  Maximize,
  IndianRupee,
  Calendar,
  Image as ImageIcon,
  Coffee,
  Bed,
  Check,
  ShieldCheck,
} from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/sections/Breadcrumb";

gsap.registerPlugin(ScrollTrigger);

export function RoomDetailClient() {
  const params = useParams();
  const hotel = useSelector((state: RootState) => state.data.hotel);
  const roomsLoading = useSelector((state: RootState) => state.data.roomsLoading);
  const { checkIn, checkOut, guests } = useSelector((state: RootState) => state.booking);

  const rawParam = params.id?.toString() || "";
  const cleanId = rawParam.replace(/-room$/, "");

  const room = hotel.rooms.find(
    (r) =>
      r.id === cleanId ||
      r.slug === cleanId ||
      String(r.apiId) === cleanId ||
      r.id === rawParam ||
      r.slug === rawParam
  );

  const [activeImage, setActiveImage] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".detail-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".detail-item", start: "top 85%" },
        }
      );
    },
    { scope: containerRef }
  );

  if (!room && (hotel.rooms.length === 0 || roomsLoading)) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-1 pt-20">
          <div className="w-full h-[60vh] bg-[#f0f0f0] animate-pulse" />
          <div className="max-w-screen-xl mx-auto py-16 px-4 space-y-6">
            <div className="h-10 bg-[#f0f0f0] w-1/3 rounded animate-pulse" />
            <div className="h-5 bg-[#f0f0f0] w-2/3 rounded animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="h-24 bg-[#f0f0f0] rounded animate-pulse" />
              <div className="h-24 bg-[#f0f0f0] rounded animate-pulse" />
              <div className="h-24 bg-[#f0f0f0] rounded animate-pulse" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!room) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-1 pt-20 flex items-center justify-center">
          <div className="text-center py-20 px-4">
            <h1 className="font-display text-[48px] text-[#111111] uppercase">Room Not Found</h1>
            <p className="text-[#707072] mt-2 mb-6">The requested room accommodation could not be located.</p>
            <Link
              href="/rooms"
              className="bg-[#111111] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#333] transition-colors inline-block"
            >
              View All Rooms
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const galleryImages = room.images && room.images.length > 0 ? room.images : [room.image];
  const currentPreview = activeImage || galleryImages[0];

  const buildBookingUrl = (ratePlanCode?: string) => {
    try {
      const base = hotel.bookingEngineUrl.split("?")[0];
      const sp = new URLSearchParams({ bookingEngine: "true" });
      if (room.apiId) sp.set("roomId", String(room.apiId));
      if (ratePlanCode) sp.set("ratePlanCode", ratePlanCode);
      if (checkIn) sp.set("fromDate", checkIn);
      if (checkOut) sp.set("toDate", checkOut);
      if (guests) sp.set("noOfPersons", String(guests));
      return `${base}?${sp.toString()}`;
    } catch {
      return hotel.bookingEngineUrl;
    }
  };

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
              image: galleryImages,
              offers: (room.plans && room.plans.length > 0
                ? room.plans
                : [{ code: "DEFAULT", name: room.name, amount: room.rawPrice, formattedPrice: room.price }]
              ).map((p) => ({
                "@type": "Offer",
                name: p.name,
                price: p.amount,
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                url: buildBookingUrl(p.code),
              })),
            }),
          }}
        />
        <Breadcrumb />

        {/* Hero Banner */}
        <section className="relative w-full h-[60vh] overflow-hidden">
          <img
            src={room.image}
            alt={room.name}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.45)" }}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-8">
            <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">{room.type}</p>
            <h1 className="font-display text-[48px] md:text-[80px] text-white uppercase leading-[0.9] max-w-4xl">
              {room.name}
            </h1>
            <p className="text-white/90 text-[18px] max-w-lg mt-6 font-medium">
              From {room.price} / night
            </p>
          </div>
        </section>

        {/* Quick Spec Strip */}
        <section className="py-12 px-4 md:px-8 bg-[#f5f5f5] border-b border-[#e5e5e5]">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="detail-item flex items-center gap-4 p-6 bg-white border border-[#e5e5e5] rounded-sm">
                <IndianRupee size={24} className="text-[#C9A84C] flex-shrink-0" />
                <div>
                  <p className="text-[#707072] text-[11px] uppercase tracking-wider font-medium">Starting From</p>
                  <p className="text-[#111111] font-display text-[26px]">
                    {room.price}
                    <span className="text-[#707072] text-[13px] font-medium font-sans"> / night</span>
                  </p>
                </div>
              </div>
              <div className="detail-item flex items-center gap-4 p-6 bg-white border border-[#e5e5e5] rounded-sm">
                <Maximize size={24} className="text-[#C9A84C] flex-shrink-0" />
                <div>
                  <p className="text-[#707072] text-[11px] uppercase tracking-wider font-medium">Room Size</p>
                  <p className="text-[#111111] font-display text-[26px]">{room.size}</p>
                </div>
              </div>
              <div className="detail-item flex items-center gap-4 p-6 bg-white border border-[#e5e5e5] rounded-sm">
                <Users size={24} className="text-[#C9A84C] flex-shrink-0" />
                <div>
                  <p className="text-[#707072] text-[11px] uppercase tracking-wider font-medium">Occupancy</p>
                  <p className="text-[#111111] font-display text-[26px]">{room.occupancy}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Rate Plans & Pricing Section */}
        <section className="py-20 px-4 md:px-8 bg-[#fafafa] border-b border-[#e5e5e5]" id="plans">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-3">Live Rate Plans</p>
              <h2 className="font-display text-[44px] md:text-[60px] text-[#111111] uppercase leading-[0.95]">
                CHOOSE YOUR STAY PLAN
              </h2>
              <p className="text-[#707072] text-[15px] mt-3 max-w-xl mx-auto">
                Select your preferred meal &amp; accommodation plan. Direct bookings include complimentary WiFi and free parking.
              </p>

              {checkIn && checkOut && (
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#e0e0e0] rounded-full text-xs text-[#555]">
                  <Calendar size={14} className="text-[#C9A84C]" />
                  <span>
                    Rates for: <strong>{checkIn}</strong> to <strong>{checkOut}</strong> ({guests} {guests > 1 ? "guests" : "guest"})
                  </span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {room.plans && room.plans.length > 0 ? (
                room.plans.map((plan) => {
                  const isBreakfast = plan.planType === "CP";
                  const isRoomOnly = plan.planType === "EP";

                  return (
                    <div
                      key={plan.code}
                      className={`relative bg-white p-8 rounded-sm border flex flex-col justify-between transition-all duration-300 hover:shadow-lg ${
                        isBreakfast ? "border-[#C9A84C] ring-1 ring-[#C9A84C]/30" : "border-[#e0e0e0]"
                      }`}
                    >
                      {isBreakfast && (
                        <div className="absolute -top-3.5 left-8 bg-[#C9A84C] text-[#111111] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
                          Breakfast Included
                        </div>
                      )}
                      {isRoomOnly && (
                        <div className="absolute -top-3.5 left-8 bg-[#111111] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
                          Room Only
                        </div>
                      )}

                      <div>
                        <div className="flex items-start justify-between gap-4 mt-2 mb-4">
                          <div>
                            <h3 className="font-display text-[26px] text-[#111111] leading-tight mt-1">
                              {plan.name}
                            </h3>
                          </div>
                          {isBreakfast ? (
                            <div className="p-2.5 bg-[#fdf8ee] text-[#C9A84C] rounded-full">
                              <Coffee size={22} />
                            </div>
                          ) : (
                            <div className="p-2.5 bg-[#f5f5f5] text-[#111111] rounded-full">
                              <Bed size={22} />
                            </div>
                          )}
                        </div>

                        <div className="my-6 py-4 border-y border-[#f0f0f0]">
                          <div className="flex items-baseline gap-2">
                            <span className="font-display text-[38px] text-[#111111]">
                              {plan.formattedPrice}
                            </span>
                            <span className="text-[#707072] text-[13px] font-medium">/ night</span>
                          </div>
                          {plan.extraChargePerPerson > 0 && (
                            <p className="text-[12px] text-[#707072] mt-1 font-medium">
                              + ₹{plan.extraChargePerPerson.toLocaleString("en-IN")} per extra guest
                            </p>
                          )}
                        </div>

                        <div className="space-y-2.5 mb-8">
                          <p className="text-[11px] uppercase tracking-wider font-semibold text-[#111111]">
                            Plan Inclusions:
                          </p>
                          {plan.inclusions.map((inc) => (
                            <div key={inc} className="flex items-center gap-2.5 text-[13px] text-[#555]">
                              <Check size={15} className="text-[#C9A84C] flex-shrink-0" />
                              <span>{inc}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <a
                        href={buildBookingUrl(plan.code)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full text-center py-3.5 px-6 rounded-full font-medium text-[14px] transition-all duration-200 block ${
                          isBreakfast
                            ? "bg-[#C9A84C] text-[#111111] hover:bg-[#b8973d] shadow-sm font-semibold"
                            : "bg-[#111111] text-white hover:bg-[#333]"
                        }`}
                      >
                        Book {plan.planType === "CP" ? "with Breakfast" : "this Plan"}
                      </a>
                    </div>
                  );
                })
              ) : (
                <div className="col-span-full p-8 text-center bg-white border border-[#e0e0e0]">
                  <p className="text-[#707072]">Checking live rates for selected dates...</p>
                </div>
              )}
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#707072]">
              <ShieldCheck size={16} className="text-[#C9A84C]" />
              <span>Direct Booking Guarantee &bull; Best Rates Online &bull; Instant Confirmation</span>
            </div>
          </div>
        </section>

        {/* Room Overview & Amenities */}
        <section className="py-24 px-4 md:px-8">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">Accommodation Overview</p>
              <h2 className="font-display text-[42px] md:text-[56px] text-[#111111] uppercase leading-[0.95] mb-6">
                {room.name}
              </h2>
              <p className="text-[#555555] text-[16px] leading-relaxed font-normal mb-8">
                {room.description}
              </p>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="#plans"
                  className="bg-[#111111] text-white px-10 py-4 rounded-full font-medium text-[15px] hover:bg-[#333] transition-colors inline-block"
                >
                  View All Rates &amp; Plans
                </a>
                <a
                  href={`tel:${hotel.phone.replace(/\s/g, "")}`}
                  className="border border-[#cacacb] text-[#111111] px-10 py-4 rounded-full font-medium text-[15px] hover:border-[#111111] transition-colors"
                  data-testid={`button-call-${room.id}`}
                >
                  Call to Enquire
                </a>
              </div>
            </div>

            <div>
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">Features &amp; Amenities</p>
              <h3 className="font-display text-[32px] text-[#111111] uppercase mb-6">Room Inclusions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.features.map((facility) => (
                  <div key={facility} className="flex items-center gap-3 p-4 bg-[#f5f5f5] detail-item rounded-sm">
                    <CheckCircle size={18} className="text-[#C9A84C] flex-shrink-0" />
                    <span className="font-medium text-[14px] text-[#111111]">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Photo Gallery */}
        <section className="py-24 px-4 md:px-8 bg-[#f9f9f9] border-t border-[#e5e5e5]">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-2">Visual Tour</p>
                <h2 className="font-display text-[48px] md:text-[64px] text-[#111111] uppercase leading-[0.9]">
                  ROOM GALLERY
                </h2>
              </div>
              <div className="flex items-center gap-2 text-[#707072] text-sm">
                <ImageIcon size={18} />
                <span>{galleryImages.length} Photographs</span>
              </div>
            </div>

            {/* Featured Preview */}
            <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-[#e5e5e5] mb-4 rounded-sm shadow-sm">
              <img
                src={currentPreview}
                alt={`${room.name} view`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>

            {/* Thumbnail Strip */}
            {galleryImages.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 mt-4">
                {galleryImages.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(imgUrl)}
                    className={`aspect-video overflow-hidden rounded-sm border-2 transition-all cursor-pointer ${
                      currentPreview === imgUrl ? "border-[#C9A84C] scale-95" : "border-transparent opacity-75 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`${room.name} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
