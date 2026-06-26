"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { PageHero } from "@/components/sections/PageHero";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { FeatureGrid } from "@/components/FeatureGrid";

gsap.registerPlugin(ScrollTrigger);

export default function AmenitiesPage() {
  const hotel = useSelector((state: RootState) => state.data.hotel);
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
        <Breadcrumb />
        <PageHero />

        <section className="py-32 px-4 md:px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">Our Facilities</p>
              <h2 className="font-display text-[56px] md:text-[80px] text-[#111111] uppercase leading-[0.9]">PREMIUM<br />AMENITIES</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {hotel.amenities.map((a) => (
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

        <section className="py-24 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">All Facilities</p>
              <h2 className="font-display text-[56px] md:text-[72px] text-[#111111] uppercase">HOTEL FACILITIES</h2>
            </div>
            <FeatureGrid />
          </div>
        </section>

        <CtaStrip />
      </main>

      <Footer />
    </div>
  );
}
