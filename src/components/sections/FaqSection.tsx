"use client";

import { useState } from "react";
import { Phone, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  { q: "What is the check-in and check-out time?", a: "Standard check-in is 12:00 PM and check-out is flexible — we offer 24-hour checkout as a complimentary service to all our guests." },
  { q: "Is breakfast included in the room rate?", a: "Yes! Complimentary breakfast is served daily from 7:30 AM to 9:30 AM in our in-house restaurant for all room categories." },
  { q: "How far is the hotel from Chikkamagaluru town?", a: "We are located on NH 173, approximately 20 km from Chikkamagaluru town and 30 km from Mudigere." },
  { q: "Do you offer airport or railway station pickup?", a: "Absolutely. Our travel desk arranges meet-and-greet services from Mangalore Airport (130 km), Bangalore Airport (270 km), and Chikkamagaluru Railway Station (23 km)." },
  { q: "Are pets allowed at the resort?", a: "We currently do not accommodate pets to ensure a peaceful experience for all guests. Please contact us for special arrangements." },
  { q: "Can we book the convention hall for a private event?", a: "Yes! Our 2500+ sq.ft pillarless ballroom is available for corporate meetings, weddings, birthday parties, and more. Contact us for customized packages." },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e5e5e5]">
      <button
        className="w-full flex items-center justify-between py-6 text-left gap-4"
        onClick={() => setOpen((v) => !v)}
        data-testid={`faq-${q.slice(0, 20).replace(/\s/g, "-").toLowerCase()}`}
      >
        <span className="font-medium text-[16px] text-[#111111]">{q}</span>
        {open ? <ChevronUp size={18} className="text-[#C9A84C] flex-shrink-0" /> : <ChevronDown size={18} className="text-[#707072] flex-shrink-0" />}
      </button>
      {open && (
        <p className="text-[#707072] text-[15px] font-medium leading-relaxed pb-6 pr-8">{a}</p>
      )}
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="py-32 px-4 md:px-8 bg-[#f5f5f5]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="lg:sticky" style={{ top: "120px" }}>
          <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Got Questions?</p>
          <h2 className="font-display text-[52px] md:text-[68px] text-[#111111] uppercase leading-[0.88] mb-6">FREQUENTLY<br />ASKED</h2>
          <p className="text-[#707072] text-[15px] leading-relaxed font-medium mb-10">
            Can't find your answer here? Reach out to us directly — we respond within minutes.
          </p>
          <a href="tel:+917899738550" className="bg-[#111111] text-white px-8 py-4 rounded-full font-medium text-[14px] hover:bg-[#333] transition-colors inline-flex items-center gap-2" data-testid="button-faq-call">
            <Phone size={14} /> +91 7899738550
          </a>
        </div>
        <div className="flex flex-col">
          {faqs.map((faq) => <FaqItem key={faq.q} {...faq} />)}
        </div>
      </div>
    </section>
  );
}
