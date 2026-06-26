"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export function LocationSection() {
  const hotel = useSelector((state: RootState) => state.data.hotel);
  return (
    <section className="py-32 px-4 md:px-8 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">How To Reach</p>
            <h2 className="font-display text-[52px] md:text-[68px] text-[#111111] uppercase leading-[0.88] mb-12">LOCATION<br />&amp; DISTANCES</h2>
            <div className="flex flex-col">
              {hotel.distances.map((d, i) => (
                <div key={d.place} className={`flex items-center justify-between py-5 border-b border-[#e5e5e5] ${i % 2 === 0 ? "" : "bg-[#fafafa] px-4"}`}>
                  <span className="font-medium text-[15px] text-[#111111]">{d.place}</span>
                  <span className="font-display text-[26px] text-[#C9A84C]">{d.distance}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative bg-[#111111] overflow-hidden flex flex-col items-center justify-center text-center p-16" style={{ minHeight: 520 }}>
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80" alt="Map" className="absolute inset-0 w-full h-full object-cover opacity-20" loading="lazy" />
            <div className="relative z-10 flex flex-col items-center gap-6">
              <MapPin size={40} className="text-[#C9A84C]" />
              <div>
                <h3 className="font-display text-[42px] text-white uppercase leading-tight">NH 173, HAANDI</h3>
                <p className="text-white/50 text-[13px] font-medium mt-2">Chikkamagaluru, Karnataka 577111</p>
              </div>
              <a href="https://maps.google.com/?q=The+Royal+Shalimar+Haandi+Chikkamagaluru" target="_blank" rel="noopener noreferrer" className="bg-white text-[#111111] px-8 py-3 rounded-full font-medium text-[13px] hover:bg-[#f5f5f5] transition-colors mt-2" data-testid="link-google-maps">
                Open in Maps
              </a>
              <div className="flex flex-col items-center gap-2 mt-4">
                <a href="tel:+917899738550" className="flex items-center gap-2 text-[#C9A84C] text-[13px] font-medium hover:text-white transition-colors" data-testid="link-map-phone">
                  <Phone size={13} /> +91 7899738550
                </a>
                <a href={`mailto:${hotel.email}`} className="flex items-center gap-2 text-white/40 text-[12px] hover:text-white transition-colors" data-testid="link-map-email">
                  <Mail size={12} /> {hotel.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
