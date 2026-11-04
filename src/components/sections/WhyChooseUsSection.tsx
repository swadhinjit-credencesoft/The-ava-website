"use client";

import { MapPin, BedDouble, Leaf, UtensilsCrossed, Mountain, Heart, Car, PartyPopper } from "lucide-react";

const reasons = [
  { icon: MapPin, title: "A Karjat Estate", desc: "Stay in Wavarle, Karjat, at a private mountain estate within reach of Mumbai and Pune." },
  { icon: BedDouble, title: "Four Distinct Stays", desc: "Choose from Cliff View Rooms, Family Rooms, Glass Jacuzzi Rooms and a private Bungalow Villa." },
  { icon: Leaf, title: "Seven Acres of Greenery", desc: "Enjoy mountain views, open lawns and room to slow down across a private estate." },
  { icon: UtensilsCrossed, title: "Dining & Hospitality", desc: "Enjoy in-house dining and curated meal plans for celebration weekends." },
  { icon: Mountain, title: "Scenic Mountain Setting", desc: "Take in the Karjat landscape from the estate and plan outdoor experiences with local guidance." },
  { icon: Heart, title: "Stay Together", desc: "Bring family and friends together with accommodation options for couples, families and groups." },
  { icon: Car, title: "Easy Arrival", desc: "The resort is approximately 4–7 km from Karjat Junction Railway Station. Free parking is available." },
  { icon: PartyPopper, title: "Celebrations at the Estate", desc: "Choose from mountain-view lawns, poolside celebrations and private event spaces for 20 to 500 guests." },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#f5f5f5]">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <p className="sec-label text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Our Promise</p>
          <h2 className="sec-title font-display text-[clamp(32px,6.5vw,64px)] text-[#111111] uppercase leading-[0.9] max-w-4xl mx-auto">A Mountain Escape Made for Togetherness</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {reasons.map((w, i) => (
            <div key={i} className="why-card bg-white p-8 flex flex-col gap-4 hover:bg-[#111111] group transition-colors duration-300">
              <w.icon size={24} className="text-[#C9A84C]" />
              <h3 className="font-display text-[24px] text-[#111111] group-hover:text-white uppercase leading-tight transition-colors">{w.title}</h3>
              <p className="text-[#707072] group-hover:text-white/60 text-[13px] font-medium leading-relaxed transition-colors">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
