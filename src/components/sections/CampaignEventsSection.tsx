"use client";

import Link from "next/link";

export function CampaignEventsSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "75vh" }}>
      <img
        src="/eventhall.avif"
        alt="Private wedding and corporate celebration space at The Mountain Resort Karjat"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.35)" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8" style={{ zIndex: 10 }}>
        <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-6">The Mountain Resort · By Redwings</p>
        <h2 className="font-display text-[56px] md:text-[96px] text-white uppercase leading-[0.85]">
          WEDDINGS &amp;<br />CELEBRATIONS
        </h2>
        <p className="text-white/80 text-[17px] max-w-xl mt-6 font-medium">
          Host destination weddings, corporate offsites, poolside sundowners, and private celebrations across our 7-acre mountain estate for 20 to 500 guests.
        </p>
        <Link
          href="/events"
          className="bg-white text-[#111111] px-10 py-4 rounded-full font-medium text-[15px] mt-10 hover:bg-[#f5f5f5] transition-colors inline-block"
          data-testid="button-campaign-events"
        >
          Plan Your Event
        </Link>
      </div>
    </section>
  );
}
