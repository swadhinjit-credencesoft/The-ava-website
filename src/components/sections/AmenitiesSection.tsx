"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Wifi, Car, BedDouble } from "lucide-react";

const amenityIcons: Record<string, React.ElementType> = {
  "Free High-Speed WiFi": Wifi,
  "Car Rental Service": Car,
  "King Size Beds": BedDouble,
};

export function AmenitiesSection() {
  const hotel = useSelector((state: RootState) => state.data.hotel);
  return (
    <section className="py-32 px-4 md:px-8 bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Facilities</p>
          <h2 className="font-display text-[56px] md:text-[80px] text-[#111111] uppercase leading-[0.9]">PREMIUM<br />AMENITIES</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {hotel.amenities.map((a) => {
            const IconComp = amenityIcons[a.name];
            const isIconCard = a.image === "ICON";
            return isIconCard ? (
              <div key={a.name} className="amenity-reveal flex flex-col items-center justify-center text-center p-10 bg-[#f5f5f5] border border-[#e5e5e5] hover:border-[#C9A84C]/50 transition-colors" style={{ minHeight: 280 }}>
                {IconComp && <IconComp size={48} className="text-[#C9A84C] mb-6" strokeWidth={1.5} />}
                <h3 className="font-display text-[28px] text-[#111111] uppercase leading-tight">{a.name}</h3>
                <p className="text-[#707072] text-[13px] mt-3 font-medium leading-relaxed max-w-xs">{a.description}</p>
              </div>
            ) : (
              <div key={a.name} className="amenity-reveal group relative overflow-hidden aspect-[4/3]">
                <img src={a.image} alt={a.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="font-display text-[28px] text-white uppercase leading-tight">{a.name}</h3>
                  <p className="text-white/0 group-hover:text-white/70 text-[13px] mt-2 font-medium transition-all duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">{a.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/amenities" className="bg-[#111111] text-white px-10 py-4 rounded-full font-medium text-[15px] hover:bg-[#333] transition-colors" data-testid="button-all-amenities">All Amenities</Link>
        </div>
      </div>
    </section>
  );
}
