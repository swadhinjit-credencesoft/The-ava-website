"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

export function CtaSection() {
  const hotel = useSelector((state: RootState) => state.data.hotel);
  return (
    <section className="py-24 px-4 md:px-8 bg-[#C9A84C]">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="font-display text-[48px] md:text-[64px] text-[#111111] uppercase leading-[0.88]">READY TO<br />EXPERIENCE LUXURY?</h2>
          <p className="text-[#111111]/60 text-[15px] font-medium mt-3">NH 173, Haandi · Chikkamagaluru, Karnataka</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="tel:+917899738550" className="bg-[#111111] text-white px-10 py-4 rounded-full font-medium text-[15px] text-center hover:bg-[#333] transition-colors" data-testid="button-cta-call">Call Now</a>
          <a href={hotel.bookingEngineUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-[#111111] px-10 py-4 rounded-full font-medium text-[15px] text-center hover:bg-[#f5f5f5] transition-colors inline-block" data-testid="button-cta-book">Book a Room</a>
        </div>
      </div>
    </section>
  );
}
