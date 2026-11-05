"use client";

import { useState } from "react";
import { Phone, ChevronDown, ChevronUp } from "lucide-react";
import { eventVenues } from "@/data/eventVenues";

const venueCapacityAnswer = eventVenues.map((venue) => `${venue.name}: ${venue.capacity}`).join("; ");

const faqs = [
  { q: "What are the check-in and check-out times?", a: "Check-in is from 1:00 PM and check-out is by 11:00 AM. Please confirm any requested flexibility with the resort." },
  { q: "What types of accommodation are available?", a: "Choose from Cliff View Rooms, Family Rooms, Glass Jacuzzi Rooms and a three-bedroom Bungalow Villa." },
  { q: "How far is the resort from Karjat Junction?", a: "The resort is approximately 4–7 km from Karjat Junction Railway Station. Travel time depends on your route and traffic." },
  { q: "How far is the resort from Mumbai and Pune?", a: "The resort's official information lists Karjat at approximately 75 km from Mumbai and 100 km from Pune. Check live directions for your starting point and travel date." },
  { q: "Does the resort have a swimming pool?", a: "Yes. Pool access hours vary by booking: 24-hour access is available for some event stays, and 7:00 AM to 9:00 PM for standard leisure stays." },
  { q: "What are the capacities of the event spaces?", a: venueCapacityAnswer },
  { q: "Can we host a wedding or private event?", a: "Yes. The estate has mountain-view grounds, wedding lawns, poolside celebrations and private spaces for weddings, anniversaries, engagements, corporate meetings and other gatherings. Contact the team to confirm date-specific availability and capacity." },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e5e5e5]">
      <button className="w-full flex items-center justify-between py-6 text-left gap-4" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span className="font-medium text-[16px] text-[#111111]">{q}</span>
        {open ? <ChevronUp size={18} className="text-[#C9A84C] flex-shrink-0" /> : <ChevronDown size={18} className="text-[#707072] flex-shrink-0" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-6" : "max-h-0"}`}>
        <p className="text-[#707072] text-[15px] font-medium leading-relaxed pr-8">{a}</p>
      </div>
    </div>
  );
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export function FaqSection() {
  return (
    <section className="py-32 px-4 md:px-8 bg-[#f5f5f5]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="lg:sticky" style={{ top: "120px" }}>
          <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Got Questions?</p>
          <h2 className="font-display text-[52px] md:text-[68px] text-[#111111] uppercase leading-[0.88] mb-6">FREQUENTLY<br />ASKED</h2>
          <p className="text-[#707072] text-[15px] leading-relaxed font-medium mb-10">Contact us for the latest availability, event details and travel information.</p>
          <a href="tel:+919833866655" className="bg-[#111111] text-white px-8 py-4 rounded-full font-medium text-[14px] hover:bg-[#333] transition-colors inline-flex items-center gap-2" data-testid="button-faq-call">
            <Phone size={14} /> +91 98338 66655
          </a>
        </div>
        <div className="flex flex-col">{faqs.map((faq) => <FaqItem key={faq.q} {...faq} />)}</div>
      </div>
    </section>
  );
}
