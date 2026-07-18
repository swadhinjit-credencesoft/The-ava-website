"use client";

const steps = [
  { num: "01", title: "Choose Your Dates", desc: "Check-in from 2:00 PM. Pick your preferred dates — 12:00 pm checkout gives you flexibility on departure." },
  { num: "02", title: "Select Your Room", desc: "Browse our 4 room categories — from Quad to Executive — and find your perfect match." },
  { num: "03", title: "Call or Enquire", desc: "Call us directly or send an enquiry. We confirm within minutes and tailor your stay." },
];

const seasonNote = "Rates vary by season — September to February is peak (best weather). Monsoon months (June–August) offer the lowest rates. Call us for current pricing and special deals.";

export function HowToBookSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Simple Process</p>
            <h2 className="font-display text-[52px] md:text-[68px] text-[#111111] uppercase leading-[0.88] mb-6">HOW TO<br />BOOK WITH US</h2>
            <p className="text-[#707072] text-[15px] leading-relaxed font-medium">No complicated systems — just reach out and our team personally handles your reservation within minutes.</p>
          </div>
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div key={i} className="step-item flex gap-8 py-10 border-b border-[#e5e5e5] last:border-0">
                <span className="font-display text-[56px] text-[#C9A84C] leading-none flex-shrink-0 w-16">{step.num}</span>
                <div className="flex flex-col gap-2 pt-2">
                  <h3 className="font-display text-[28px] text-[#111111] uppercase">{step.title}</h3>
                  <p className="text-[#707072] text-[14px] font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
            <div className="mt-4 p-5 bg-[#faf8f3] border border-[#C9A84C]/30 rounded-lg">
              <p className="text-[#111111] text-[13px] font-medium leading-relaxed">{seasonNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
