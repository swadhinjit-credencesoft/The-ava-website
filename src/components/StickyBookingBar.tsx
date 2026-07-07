"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { X, CheckCircle } from "lucide-react";

export function StickyBookingBar() {
  const hotel = useSelector((state: RootState) => state.data.hotel);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#111111] border-t border-white/10 px-4 py-3 md:py-4">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden md:flex items-center gap-6">
          <span className="text-white font-display text-[18px] uppercase">Book Direct & Save</span>
          <div className="flex items-center gap-4 text-white/60 text-[12px]">
            <span className="flex items-center gap-1"><CheckCircle size={12} className="text-[#C9A84C]" /> Best Rate Guarantee</span>
            <span className="flex items-center gap-1"><CheckCircle size={12} className="text-[#C9A84C]" /> Free Early Check-In*</span>
            <span className="flex items-center gap-1"><CheckCircle size={12} className="text-[#C9A84C]" /> Complimentary Plantation Walk</span>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <p className="text-white/50 text-[12px] md:hidden">Book direct & save</p>
          <a
            href={hotel.bookingEngineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A84C] text-[#111111] px-6 py-2 rounded-full font-medium text-[14px] hover:bg-[#b8943f] transition-colors whitespace-nowrap flex-1 text-center md:flex-none"
            data-testid="button-sticky-book"
          >
            Check Availability
          </a>
          <button onClick={() => setDismissed(true)} className="text-white/30 hover:text-white transition-colors p-1" aria-label="Dismiss">
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
