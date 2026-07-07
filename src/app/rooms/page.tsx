"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { PageHero } from "@/components/sections/PageHero";
import { CtaStrip } from "@/components/sections/CtaStrip";

gsap.registerPlugin(ScrollTrigger);

export default function RoomsPage() {
  const hotel = useSelector((state: RootState) => state.data.hotel);
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
  }, { scope: containerRef });

  return (
    <div className="flex flex-col min-h-screen bg-white" ref={containerRef}>
      <Navbar />

      <main className="flex-1 pt-20">
        <Breadcrumb />
        <PageHero />

        <section className="py-16 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto text-center">
            <p className="text-[#707072] text-[16px] leading-relaxed font-medium max-w-3xl mx-auto">
              Every room at The AVA comes with complimentary breakfast, free WiFi, air conditioning, 24-hour hot water, and access to our in-house restaurant and travel desk.
            </p>
          </div>
        </section>

        <section className="py-24 px-4 md:px-8">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {hotel.rooms.map((room) => (
              <div key={room.id} className="room-card flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f5] group">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-[#C9A84C] text-[#111111] px-4 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider">{room.type}</span>
                    {room.price && <span className="bg-white text-[#111111] px-4 py-1 rounded-full text-[11px] font-bold">{room.price}</span>}
                  </div>
                </div>
                <div className="pt-8 flex flex-col gap-5 flex-1">
                  <h2 className="font-display text-[42px] text-[#111111] uppercase leading-tight">{room.name}</h2>
                  <p className="text-[#707072] text-[15px] leading-relaxed font-medium">{room.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((f) => (
                      <span key={f} className="border border-[#cacacb] text-[#111111] px-4 py-1.5 rounded-full text-[12px] font-medium">{f}</span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 flex gap-3 flex-wrap">
                    <a href={`/rooms/${room.id}-room`} className="border border-[#cacacb] text-[#111111] px-8 py-4 rounded-full font-medium text-[15px] hover:border-[#111111] transition-colors inline-block" data-testid={`button-view-${room.id}`}>
                      View Details
                    </a>
                    <a href={hotel.bookingEngineUrl} target="_blank" rel="noopener noreferrer" className="bg-[#111111] text-white px-8 py-4 rounded-full font-medium text-[15px] hover:bg-[#333] transition-colors inline-block" data-testid={`button-book-${room.id}`}>
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-32 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">All Rooms Include</p>
              <h2 className="font-display text-[56px] md:text-[72px] text-[#111111] uppercase leading-[0.9]">WHAT'S INCLUDED</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hotel.roomInclusions.map((inc) => (
                <div key={inc} className="inclusion-item flex items-center gap-4 p-5 bg-white border border-[#e5e5e5]">
                  <CheckCircle size={18} className="text-[#C9A84C] flex-shrink-0" />
                  <span className="font-medium text-[14px] text-[#111111]">{inc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaStrip />
      </main>

      <Footer />
    </div>
  );
}
