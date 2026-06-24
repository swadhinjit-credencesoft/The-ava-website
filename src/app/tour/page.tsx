"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hotelData } from "@/data/siteData";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function TourPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".tour-card", { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
      scrollTrigger: { trigger: ".tour-card", start: "top 85%" },
    });
    gsap.fromTo(".distance-row", { x: -30, opacity: 0 }, {
      x: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power2.out",
      scrollTrigger: { trigger: ".distance-row", start: "top 85%" },
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
            <span className="text-[#111111]">Tour &amp; Nearby</span>
          </p>
        </div>

        {/* Campaign Hero */}
        <section className="relative w-full h-[70vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=2400&q=90"
            alt="Explore"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.4)" }}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-8">
            <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-6">Western Ghats</p>
            <h1 className="font-display text-[64px] md:text-[100px] text-white uppercase leading-[0.85]">EXPLORE NEARBY</h1>
            <p className="text-white/80 text-[18px] max-w-lg mt-6 font-medium">Discover Karnataka's most treasured landscapes and landmarks</p>
          </div>
        </section>

        {/* Tourist Places */}
        <section className="py-32 px-4 md:px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">Discover</p>
              <h2 className="font-display text-[56px] md:text-[80px] text-[#111111] uppercase leading-[0.9]">TOURIST<br />ATTRACTIONS</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {hotelData.touristPlaces.map((place) => (
                <div key={place.name} className="tour-card flex flex-col group">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#f5f5f5]">
                    <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#C9A84C] text-[#111111] px-4 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider">{place.activity}</span>
                    </div>
                  </div>
                  <div className="pt-6 pb-6 border-b border-[#e5e5e5]">
                    <h3 className="font-display text-[34px] text-[#111111] uppercase leading-tight">{place.name}</h3>
                    <p className="text-[#707072] text-[14px] font-medium leading-relaxed mt-2">{place.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Distances Table */}
        <section className="py-32 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">Getting Around</p>
                <h2 className="font-display text-[52px] md:text-[68px] text-[#111111] uppercase leading-[0.9] mb-12">DISTANCES<br />FROM HOTEL</h2>
                <div className="flex flex-col">
                  {hotelData.distances.map((d, i) => (
                    <div key={d.place} className={`distance-row flex items-center justify-between py-4 border-b border-[#cacacb] ${i % 2 === 0 ? "" : "bg-white/50"}`}>
                      <span className="font-medium text-[15px] text-[#111111]">{d.place}</span>
                      <span className="font-display text-[24px] text-[#C9A84C]">{d.distance}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-2">Travel Info</p>
                <h3 className="font-display text-[42px] text-[#111111] uppercase leading-tight">HOW TO REACH</h3>
                {[
                  { title: "By Air", items: ["Mangalore International Airport — 130 km", "Bangalore International Airport — 240 km"] },
                  { title: "By Train", items: ["Chikkamagaluru Railway Station — 21 km", "Hassan Railway Station — 67 km"] },
                  { title: "By Road", items: ["NH 173, Mangalore–Kadur Highway", "Well-connected by state highways and KSRTC buses"] },
                ].map((section) => (
                  <div key={section.title} className="bg-white p-6 border border-[#cacacb]">
                    <h4 className="font-display text-[24px] text-[#111111] uppercase mb-4">{section.title}</h4>
                    {section.items.map((item) => (
                      <p key={item} className="text-[#707072] text-[14px] font-medium py-2 border-b border-[#f0f0f0] last:border-b-0">{item}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-20 px-4 md:px-8 bg-[#111111]">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-3">Start Your Adventure</p>
              <h2 className="font-display text-[42px] md:text-[56px] text-white uppercase leading-tight">PLAN YOUR VISIT</h2>
            </div>
            <div className="flex gap-4">
              <a href="tel:+917899738550" className="bg-[#C9A84C] text-[#111111] px-10 py-4 rounded-full font-medium text-[16px] hover:bg-[#b8943f] transition-colors" data-testid="button-tour-call">
                Call Us
              </a>
              <Link href="/rooms" className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-full font-medium text-[16px] hover:bg-white/20 transition-colors" data-testid="button-tour-rooms">
                Book a Room
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
