"use client";

import Link from "next/link";

export function CampaignNatureSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "85vh" }}>
      <img src="/tour1.jpg" alt="Nature" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.42)" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20" style={{ zIndex: 10 }}>
        <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-6">Western Ghats · Karnataka</p>
        <h2 className="font-display text-[64px] md:text-[100px] lg:text-[120px] text-white uppercase leading-[0.85] mb-8">
          SURROUNDED<br />BY NATURE
        </h2>
        <Link href="/tour" className="bg-white text-[#111111] px-10 py-4 rounded-full font-medium text-[15px] hover:bg-[#f5f5f5] transition-colors inline-flex w-fit" data-testid="button-campaign-nature">
          Explore Nearby
        </Link>
      </div>
    </section>
  );
}
