"use client";

import { Award, Star, Shield, Heart } from "lucide-react";

const awards = [
  { icon: Award,  label: "TripAdvisor Certificate", sub: "of Excellence" },
  { icon: Star,   label: "Top Rated Resort",        sub: "Chikkamagaluru" },
  { icon: Shield, label: "Trusted By",              sub: "5000+ Guests" },
  { icon: Heart,  label: "Best Hospitality",        sub: "Karnataka Tourism" },
];

export function AwardsSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#f5f5f5] border-y border-[#e5e5e5]">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-12">
          {awards.map((a) => (
            <div key={a.label} className="flex flex-col items-center gap-2 text-center">
              <a.icon size={28} className="text-[#C9A84C]" />
              <p className="font-display text-[18px] text-[#111111] uppercase">{a.label}</p>
              <p className="text-[#707072] text-[11px] uppercase tracking-wider">{a.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
