"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export function RoomsSection() {
  const hotel = useSelector((state: RootState) => state.data.hotel);
  return (
    <section className="py-32 px-4 md:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] font-medium mb-4">Accommodation</p>
            <h2 className="font-display text-[56px] md:text-[80px] text-[#111111] uppercase leading-[0.88]">ROOMS<br />&amp; SUITES</h2>
          </div>
          <Link href="/rooms" className="hidden md:flex bg-[#f5f5f5] text-[#111111] px-8 py-4 rounded-full font-medium text-[14px] hover:bg-[#e5e5e5] transition-colors" data-testid="button-all-rooms">View All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {hotel.rooms.map((room) => (
            <div key={room.id} className="room-reveal group relative overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                <div>
                  <p className="text-white/50 text-[10px] uppercase tracking-widest">{room.type}</p>
                  <h3 className="font-display text-[36px] text-white uppercase leading-tight mt-1">{room.name}</h3>
                </div>
                <Link href="/rooms" className="bg-white text-[#111111] px-6 py-3 rounded-full font-medium text-[12px] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300" data-testid={`button-room-${room.id}`}>
                  View Room
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
