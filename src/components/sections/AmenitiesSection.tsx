"use client";

import { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export function AmenitiesSection() {
  const hotel = useSelector((state: RootState) => state.data.hotel);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Activities", "Amenities", "Facilities", "Entertainment"];
  const items = filter === "All"
    ? hotel.amenities
    : hotel.amenities.filter((a) => a.category === filter);

  return (
    <section className="py-28 px-4 md:px-8 bg-white" id="amenities">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="sec-label text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Activities &amp; Facilities</p>
          <h2 className="sec-title font-display text-[46px] sm:text-[58px] md:text-[68px] text-[#111111] uppercase leading-[0.9]">
            Everything for a Memorable Stay
          </h2>
          <p className="mt-5 text-[#707072] text-[15px] font-medium leading-relaxed">
            From boating and trekking adventures to rain dance parties, poolside relaxation, private bungalow jacuzzis, and gourmet dining across our 7-acre mountain estate.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 text-[12px] uppercase tracking-wider font-semibold rounded-full transition-all duration-300 ${
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

        {/* Amenities & Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((a) => (
            <div
              key={a.name}
              className="amenity-reveal group relative overflow-hidden aspect-[4/3] rounded-lg shadow-sm border border-[#e5dfd5]"
            >
              <img
                src={a.image}
                alt={a.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

              {/* Badge */}
              {a.highlight && (
                <div className="absolute top-4 left-4">
                  <span className="bg-[#C9A84C] text-[#111111] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {a.highlight}
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-white/60 text-[11px] uppercase tracking-widest font-semibold block mb-1">
                  {a.category}
                </span>
                <h3 className="font-display text-[26px] md:text-[30px] text-white uppercase leading-tight">
                  {a.name}
                </h3>
                <p className="text-white/80 text-[13px] mt-2 font-medium leading-relaxed">
                  {a.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <Link
            href="/amenities"
            className="bg-[#111111] text-white px-10 py-4 rounded-full font-medium text-[14px] hover:bg-[#333] transition-colors shadow-sm"
            data-testid="button-all-amenities"
          >
            Explore All Activities &amp; Facilities
          </Link>
        </div>
      </div>
    </section>
  );
}
