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

gsap.registerPlugin(ScrollTrigger);

export default function TourPage() {
  const hotel = useSelector((state: RootState) => state.data.hotel);
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
        <Breadcrumb />
        <PageHero />

        <section className="py-32 px-4 md:px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">Discover</p>
              <h2 className="font-display text-[56px] md:text-[80px] text-[#111111] uppercase leading-[0.9]">TOURIST<br />ATTRACTIONS</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {hotel.touristPlaces.map((place) => (
                <div key={place.name} className="tour-card flex flex-col group">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#111111]">
                    {place.image === "PLACEHOLDER" ? (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#C9A84C]/20 to-[#111111]">
                        <span className="font-display text-[28px] text-white/30 uppercase text-center px-4">{place.name}</span>
                      </div>
                    ) : (
                      <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    )}
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

        <section className="py-32 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">Getting Around</p>
                <h2 className="font-display text-[52px] md:text-[68px] text-[#111111] uppercase leading-[0.9] mb-12">DISTANCES<br />FROM HOTEL</h2>
                <div className="flex flex-col">
                  {hotel.distances.map((d, i) => (
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

        <CtaStrip />
      </main>

      <Footer />
    </div>
  );
}
