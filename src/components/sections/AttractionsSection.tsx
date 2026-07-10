"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export function AttractionsSection() {
  const hotel = useSelector((state: RootState) => state.data.hotel);
  return (
    <section className="py-32 px-4 md:px-8 bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-end justify-between mb-20">
          <div>
            <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Explore</p>
            <h2 className="font-display text-[56px] md:text-[80px] text-[#111111] uppercase leading-[0.88]">NEARBY<br />ATTRACTIONS</h2>
          </div>
          <Link href="/tour" className="hidden md:flex bg-[#f5f5f5] text-[#111111] px-8 py-4 rounded-full font-medium text-[14px] hover:bg-[#e5e5e5] transition-colors" data-testid="button-tour-guide">Tour Guide</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotel.touristPlaces.map((place) => (
            <div key={place.name} className="attraction-card flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#f5f5f5]">
                <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#C9A84C] text-[#111111] px-4 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider">{place.activity}</span>
                </div>
              </div>
              <div className="pt-6 pb-6 border-b border-[#e5e5e5]">
                <h3 className="font-display text-[32px] text-[#111111] uppercase leading-tight">{place.name}</h3>
                <p className="text-[#707072] text-[13px] font-medium leading-relaxed mt-2">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
