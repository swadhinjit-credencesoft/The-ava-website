"use client";

import Link from "next/link";

export function AboutSection() {
  return (
    <section className="py-32 px-4 md:px-16 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[3/4] overflow-hidden">
            <video
              src="https://bookonelocal.in/cdn/homehero.MP4"
              poster="https://bookonelocal.in/cdn/DSC08846.avif"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-[#C9A84C] hidden md:flex flex-col items-center justify-center text-[#111111]">
            <span className="font-display text-[52px] leading-none">7</span>
            <span className="text-[11px] font-medium uppercase tracking-widest text-center px-3 mt-1">Acres of Private Estate</span>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:pl-8">
          <div className="reveal-up">
            <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] font-medium mb-5">The Mountain Resort · By Redwings</p>
            <h2 className="font-display text-[56px] md:text-[76px] text-[#111111] uppercase leading-[0.88]">A PRIVATE<br />MOUNTAIN ESTATE</h2>
          </div>
          <p className="reveal-up text-[#707072] text-[16px] leading-relaxed font-medium">
            Spread across seven acres in Karjat, The Mountain Resort brings together mountain views, open lawns, comfortable stays and dedicated celebration spaces in one private estate.
          </p>
          <p className="reveal-up text-[#707072] text-[16px] leading-relaxed font-medium">
            Families can stay together, dine together and celebrate every function seamlessly. Choose a mountain-view room, a private jacuzzi stay, a family room or a bungalow villa for your group.
          </p>
          <div className="reveal-up flex gap-4 flex-wrap">
            <Link href="/rooms" className="bg-[#111111] text-white px-8 py-4 rounded-full font-medium text-[15px] hover:bg-[#333] transition-colors" data-testid="button-about-rooms">Explore Stays</Link>
            <Link href="/contact" className="border border-[#cacacb] text-[#111111] px-8 py-4 rounded-full font-medium text-[15px] hover:border-[#111111] transition-colors" data-testid="button-about-contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
