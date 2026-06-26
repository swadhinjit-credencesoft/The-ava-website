"use client";

import { FeatureGrid } from "@/components/FeatureGrid";

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#f5f5f5]">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Everything You Need</p>
          <h2 className="font-display text-[56px] md:text-[72px] text-[#111111] uppercase">HOTEL FACILITIES</h2>
        </div>
        <FeatureGrid />
      </div>
    </section>
  );
}
