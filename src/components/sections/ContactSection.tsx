"use client";

import { Phone, Mail, Clock } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export function ContactSection() {
  const hotel = useSelector((state: RootState) => state.data.hotel);
  const contacts = [
    { icon: Phone, title: "Call Us",     val: hotel.phone,    href: "tel:+917899738550",        action: "Call" },
    { icon: Phone, title: "Alternate",   val: hotel.phoneAlt, href: "tel:+918618141466",        action: "Call" },
    { icon: Mail,  title: "Email Us",    val: hotel.email,    href: `mailto:${hotel.email}`, action: "Email" },
    { icon: Clock, title: "24/7 Support",val: "Always Available",  href: null,                       action: null },
  ];
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Reach Us</p>
          <h2 className="font-display text-[52px] md:text-[68px] text-[#111111] uppercase">GET IN TOUCH</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {contacts.map((c, i) => (
            <div key={i} className="flex flex-col gap-4 p-8 bg-[#f5f5f5] border border-[#e5e5e5]">
              <div className="w-10 h-10 bg-[#111111] flex items-center justify-center flex-shrink-0">
                <c.icon size={18} className="text-[#C9A84C]" />
              </div>
              <p className="text-[#707072] text-[11px] uppercase tracking-widest font-medium">{c.title}</p>
              {c.href ? (
                <a href={c.href} className="text-[#111111] font-medium text-[14px] hover:text-[#C9A84C] transition-colors break-all" data-testid={`link-contact-${i}`}>{c.val}</a>
              ) : (
                <p className="text-[#111111] font-medium text-[14px]">{c.val}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
