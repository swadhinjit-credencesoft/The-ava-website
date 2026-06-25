"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hotelData } from "@/data/siteData";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FeatureGrid } from "@/components/FeatureGrid";

gsap.registerPlugin(ScrollTrigger);

export default function AmenitiesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".amenity-card", { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out",
      scrollTrigger: { trigger: ".amenity-card", start: "top 85%" },
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
            <span className="text-[#111111]">Amenities</span>
          </p>
        </div>

        {/* Campaign Hero */}
        <section className="relative w-full h-[70vh] overflow-hidden">
          <img
            src="/avadining.jpg"
            alt="Amenities"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.45)" }}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-8">
            <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-6">Facilities</p>
            <h1 className="font-display text-[64px] md:text-[100px] text-white uppercase leading-[0.85]">WHAT WE OFFER</h1>
            <p className="text-white/80 text-[18px] max-w-lg mt-6 font-medium">Premium facilities designed for an uncompromising luxury stay</p>
          </div>
        </section>

        {/* Amenities Grid */}
        <section className="py-32 px-4 md:px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">Our Facilities</p>
              <h2 className="font-display text-[56px] md:text-[80px] text-[#111111] uppercase leading-[0.9]">PREMIUM<br />AMENITIES</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {hotelData.amenities.map((a) => (
                <div key={a.name} className="amenity-card group relative overflow-hidden aspect-[4/3]">
                  <img src={a.image} alt={a.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-display text-[32px] text-white uppercase leading-tight">{a.name}</h3>
                    <p className="text-white/70 text-[13px] mt-2 font-medium max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500">{a.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Icons */}
        <section className="py-24 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">All Facilities</p>
              <h2 className="font-display text-[56px] md:text-[72px] text-[#111111] uppercase">HOTEL FACILITIES</h2>
            </div>
            <FeatureGrid features={hotelData.features} />
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-20 px-4 md:px-8 bg-[#111111]">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-3">Experience Luxury</p>
              <h2 className="font-display text-[42px] md:text-[56px] text-white uppercase leading-tight">BOOK YOUR STAY</h2>
            </div>
            <div className="flex gap-4">
              <a href={hotelData.bookingEngineUrl} target="_blank" rel="noopener noreferrer" className="bg-[#C9A84C] text-[#111111] px-10 py-4 rounded-full font-medium text-[16px] hover:bg-[#b8943f] transition-colors" data-testid="button-amenities-book">
                Book Now
              </a>
              <Link href="/rooms" className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-full font-medium text-[16px] hover:bg-white/20 transition-colors" data-testid="button-amenities-rooms">
                View Rooms
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
