"use client";

import { useRef, useState } from "react";
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
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Activities", "Amenities", "Facilities", "Entertainment"];
  const items = filter === "All"
    ? hotel.amenities
    : hotel.amenities.filter((a) => a.category === filter);

  useGSAP(() => {
    gsap.fromTo(".amenity-card", { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power3.out",
      scrollTrigger: { trigger: ".amenity-card", start: "top 85%" },
    });
  }, { scope: containerRef });

  return (
    <div className="flex flex-col min-h-screen bg-white" ref={containerRef}>
      <Navbar />

      <main className="flex-1 pt-20">
        <Breadcrumb />
        <PageHero />

        {/* Introduction & Highlights */}
        <section className="py-24 px-4 md:px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">Activities &amp; Facilities</p>
              <h2 className="font-display text-[52px] md:text-[76px] text-[#111111] uppercase leading-[0.9]">
                Resort Experiences
              </h2>
              <p className="mt-5 text-[#707072] text-[16px] font-medium leading-relaxed">
                Experience boating, trekking, rain dance sessions, indoor &amp; outdoor games, an outdoor pool, private bungalow jacuzzi, scenic deck, sunset viewpoints, sprawling lawns, gazebos, sound systems with mics, and in-house multi-cuisine dining.
              </p>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-5 py-2.5 text-[12px] uppercase tracking-wider font-semibold rounded-full transition-all duration-300 ${
                      filter === cat
                        ? "bg-[#111111] text-[#C9A84C] shadow-sm"
                        : "bg-[#f5f5f5] text-[#707072] hover:text-[#111111] hover:bg-[#e8e4dc]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((a) => (
                <div
                  key={a.name}
                  className="amenity-card group relative overflow-hidden aspect-[4/3] rounded-xl shadow-sm border border-[#e5dfd5]"
                >
                  <img
                    src={a.image}
                    alt={a.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                  {a.highlight && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#C9A84C] text-[#111111] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                        {a.highlight}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="text-white/60 text-[11px] uppercase tracking-widest font-semibold block mb-1">
                      {a.category}
                    </span>
                    <h3 className="font-display text-[26px] md:text-[32px] text-white uppercase leading-tight">
                      {a.name}
                    </h3>
                    <p className="text-white/80 text-[13px] mt-2 font-medium leading-relaxed">
                      {a.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Icons Grid Section */}
        <section className="py-24 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">Complete Inventory</p>
              <h2 className="font-display text-[52px] md:text-[68px] text-[#111111] uppercase leading-tight">
                ALL RESORT FACILITIES
              </h2>
              <p className="text-[#707072] text-[14px] font-medium mt-3">
                Everything available on our 7-acre private mountain estate.
              </p>
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
