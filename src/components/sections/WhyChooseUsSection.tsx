"use client";

import { MapPin, BedDouble, Leaf, UtensilsCrossed, Mountain, Heart, Car, PartyPopper } from "lucide-react";

const reasons = [
  { icon: MapPin,         title: "Prime Location",         desc: "Located on NH 173 in Haandi, The AVA offers convenient access to Chikkamagaluru, Mudigere and several of the region's most popular attractions." },
  { icon: BedDouble,      title: "Comfortable Accommodation", desc: "Our rooms are thoughtfully designed to provide a relaxing environment after a day of sightseeing, trekking or travelling." },
  { icon: Leaf,           title: "A Peaceful Surrounding", desc: "Enjoy the natural beauty of Karnataka's coffee country while staying away from the noise and congestion of busy city centres." },
  { icon: UtensilsCrossed,title: "Dining at The AVA",      desc: "Enjoy convenient on-site dining with a selection of Indian, Karnataka and continental favourites." },
  { icon: Mountain,       title: "Easy Access to Attractions", desc: "From Mullayanagiri and Kudremukh to Belur, Sringeri and Bhadra Wildlife Sanctuary, many of the region's highlights are within convenient driving distance." },
  { icon: Heart,          title: "Warm Hospitality",       desc: "Our team is here to make your stay comfortable, from helping with local information to assisting with your travel requirements." },
  { icon: Car,            title: "Parking & Connectivity", desc: "Enjoy convenient parking and Wi-Fi connectivity during your stay." },
  { icon: PartyPopper,    title: "Events & Gatherings",    desc: "Our associated event facilities provide an ideal setting for weddings, conferences, celebrations and corporate gatherings." },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#f5f5f5]">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <p className="sec-label text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Our Promise</p>
          <h2 className="sec-title font-display text-[clamp(32px,6.5vw,64px)] text-[#111111] uppercase leading-[0.9] max-w-4xl mx-auto">Comfort, Convenience &amp; the Spirit of Chikkamagaluru</h2>
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
