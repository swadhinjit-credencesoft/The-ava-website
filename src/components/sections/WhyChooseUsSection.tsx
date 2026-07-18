"use client";

import { MapPin, Star, Shield, Heart, Wifi, Car, Coffee, Zap } from "lucide-react";

const reasons = [
  { icon: MapPin,   title: "Prime Location",   desc: " NH 173 along K M Road in the Haandi area of Chikkamagaluru, Karnataka." },
  { icon: Star,     title: "Luxury Comfort",   desc: "King-size beds, AC rooms, 24-hr hot water, and a dedicated in-house restaurant." },
  { icon: Shield,   title: "Safe & Secured",   desc: "24/7 CCTV surveillance, secure on-site parking, and a dedicated front desk ensure a safe and comfortable stay." },
  { icon: Heart,    title: "Warm Hospitality", desc: "Our staff goes above and beyond to make every guest feel at home in the highlands." },
  { icon: Wifi,     title: "Stay Connected",   desc: "High-speed unlimited WiFi throughout the property, with credentials at check-in." },
  { icon: Car,      title: "Travel Desk",      desc: "Car rental, airport pickup, safari bookings — all arranged through our in-house desk." },
  { icon: Coffee,   title: "Estate Dining",    desc: "Authentic Karnataka cuisine and continental dishes with plantation views every meal." },
  { icon: Zap,      title: "24/7 Support",     desc: "Round-the-clock room service and support so every need is met at any hour." },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#f5f5f5]">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Our Promise</p>
          <h2 className="font-display text-[56px] md:text-[72px] text-[#111111] uppercase leading-[0.9]">WHY CHOOSE US</h2>
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
