"use client";

import { Star, ExternalLink } from "lucide-react";

const awards = [
  { icon: Star, label: "Loved by Our Guests", sub: "Read reviews on Google →", href: "https://search.google.com/local/reviews?q=The+AVA+Hotel+Haandi+Chikkamagaluru" },
];

export function AwardsSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#f5f5f5] border-y border-[#e5e5e5]">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-12">
          {awards.map((a) => (
            <a key={a.label} href={a.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-center hover:opacity-70 transition-opacity">
              <a.icon size={28} className="text-[#C9A84C]" />
              <p className="font-display text-[18px] text-[#111111] uppercase">{a.label}</p>
              <p className="text-[#707072] text-[11px] uppercase tracking-wider">{a.sub}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
