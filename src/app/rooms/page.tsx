"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle } from "lucide-react";
import { hotelData } from "@/data/siteData";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function RoomsPage() {
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
        {/* Breadcrumb */}
        <div className="px-8 py-4 bg-[#f5f5f5] border-b border-[#e5e5e5]">
          <p className="text-[#707072] text-[13px] font-medium">
            <Link href="/" className="hover:text-[#111111] transition-colors" data-testid="breadcrumb-home">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#111111]">Rooms</span>
          </p>
        </div>

        {/* Campaign Hero */}
        <section className="relative w-full h-[70vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=2400&q=90"
            alt="Rooms Hero"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.45)" }}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-8">
            <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-6">Accommodation</p>
            <h1 className="font-display text-[64px] md:text-[100px] text-white uppercase leading-[0.85]">STAY WITH US</h1>
            <p className="text-white/80 text-[18px] max-w-lg mt-6 font-medium">Four categories of luxury rooms, each designed for comfort and elegance</p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto text-center">
            <p className="text-[#707072] text-[16px] leading-relaxed font-medium max-w-3xl mx-auto">
              Every room at The AVA comes with complimentary breakfast, free WiFi, air conditioning, 24-hour hot water, and access to our in-house restaurant and travel desk.
            </p>
          </div>
        </section>

        {/* Rooms Grid */}
        <section className="py-24 px-4 md:px-8">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {hotelData.rooms.map((room) => (
              <div key={room.id} className="room-card flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f5] group">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#C9A84C] text-[#111111] px-4 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider">{room.type}</span>
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
                  <div className="mt-auto pt-4">
                    <Link href="/contact" className="bg-[#111111] text-white px-8 py-4 rounded-full font-medium text-[15px] hover:bg-[#333] transition-colors inline-block" data-testid={`button-book-${room.id}`}>
                      Enquire About This Room
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section className="py-32 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">All Rooms Include</p>
              <h2 className="font-display text-[56px] md:text-[72px] text-[#111111] uppercase leading-[0.9]">WHAT'S INCLUDED</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hotelData.roomInclusions.map((inc) => (
                <div key={inc} className="inclusion-item flex items-center gap-4 p-5 bg-white border border-[#e5e5e5]">
                  <CheckCircle size={18} className="text-[#C9A84C] flex-shrink-0" />
                  <span className="font-medium text-[14px] text-[#111111]">{inc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-20 px-4 md:px-8 bg-[#111111]">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-3">Ready to Book?</p>
              <h2 className="font-display text-[42px] md:text-[56px] text-white uppercase leading-tight">CALL US DIRECTLY</h2>
            </div>
            <a href="tel:+917899738550" className="bg-[#C9A84C] text-[#111111] px-10 py-4 rounded-full font-medium text-[16px] hover:bg-[#b8943f] transition-colors whitespace-nowrap" data-testid="button-rooms-call">
              {hotelData.phone}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
