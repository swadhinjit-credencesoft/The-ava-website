"use client";

import Link from "next/link";

export function AboutSection() {
  return (
    <section className="py-32 px-4 md:px-16 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[3/4] overflow-hidden">
            <img src="/shalimarhomeimg.png" alt="Coffee Plantation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-[#C9A84C] hidden md:flex flex-col items-center justify-center text-[#111111]">
            <span className="font-display text-[52px] leading-none">10+</span>
            <span className="text-[11px] font-medium uppercase tracking-widest text-center px-3 mt-1">Years of Excellence</span>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:pl-8">
          <div className="reveal-up">
            <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] font-medium mb-5">Welcome to The AVA</p>
            <h2 className="font-display text-[56px] md:text-[76px] text-[#111111] uppercase leading-[0.88]">A RETREAT<br />LIKE NO OTHER</h2>
          </div>
          <p className="reveal-up text-[#707072] text-[16px] leading-relaxed font-medium">
            Nestled on NH 173 between Chikkamagaluru and Mudigere, The AVA sits at the heart of Karnataka's legendary coffee and pepper plantations. Wake to panoramic views of the Western Ghats and discover nature at its most magnificent.
          </p>
          <p className="reveal-up text-[#707072] text-[16px] leading-relaxed font-medium">
            From the towering peaks of Mullayangiri to the sacred shrines of Dharmastala and Hornadu, our location places you at the centre of Karnataka's most treasured destinations — accessible yet blissfully secluded.
          </p>
          <div className="reveal-up flex gap-4 flex-wrap">
            <Link href="/rooms" className="bg-[#111111] text-white px-8 py-4 rounded-full font-medium text-[15px] hover:bg-[#333] transition-colors" data-testid="button-about-rooms">Our Rooms</Link>
            <Link href="/contact" className="border border-[#cacacb] text-[#111111] px-8 py-4 rounded-full font-medium text-[15px] hover:border-[#111111] transition-colors" data-testid="button-about-contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
