"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export function AmenitiesSection() {
  const hotel = useSelector((state: RootState) => state.data.hotel);
  return (
    <section className="py-32 px-4 md:px-8 bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="sec-label text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Our Facilities</p>
          <h2 className="sec-title font-display text-[48px] sm:text-[60px] md:text-[72px] text-[#111111] uppercase leading-[0.9]">Everything You Need for a Comfortable Stay</h2>
          <p className="mt-6 text-[#707072] text-[16px] font-medium leading-relaxed">
            At The Mountain Resort, we believe a memorable stay is built around the details. From essential modern conveniences to relaxing experiences, our facilities are designed to make your visit to Karjat comfortable, convenient and enjoyable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {hotel.amenities.map((a) => (
            <div key={a.name} className="amenity-reveal group relative overflow-hidden aspect-[4/3]">
              <img src={a.image} alt={a.name} className="parallax-img w-full h-[120%] object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3 className="font-display text-[28px] text-white uppercase leading-tight">{a.name}</h3>
                <p className="text-white/0 group-hover:text-white/70 text-[13px] mt-2 font-medium transition-all duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/amenities" className="bg-[#111111] text-white px-10 py-4 rounded-full font-medium text-[15px] hover:bg-[#333] transition-colors" data-testid="button-all-amenities">All Amenities</Link>
        </div>
      </div>
    </section>
  );
}
