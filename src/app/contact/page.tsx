"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/sections/Breadcrumb";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const hotel = useSelector((state: RootState) => state.data.hotel);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".contact-card", { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power3.out",
      scrollTrigger: { trigger: ".contact-card", start: "top 85%" },
    });
  }, { scope: containerRef });

  return (
    <div className="flex flex-col min-h-screen bg-white" ref={containerRef}>
      <Navbar />

      <main className="flex-1 pt-20">
        <Breadcrumb />

        <section className="relative py-32 px-4 md:px-8 bg-[#111111] overflow-hidden">
          <img
            src="/shalimarhomeimg.png"
            alt="Contact"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10 max-w-screen-xl mx-auto text-center">
            <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-6">The AVA</p>
            <h1 className="font-display text-[64px] md:text-[100px] text-white uppercase leading-[0.85]">CONTACT US</h1>
            <p className="text-white/70 text-[18px] max-w-xl mx-auto mt-6 font-medium">
              We look forward to welcoming you. Reach out for reservations, events, or any enquiries.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: MapPin, title: "Address", content: "N H 173, K M Road, Haandi\nChikkamagaluru, Karnataka 577111", href: "https://maps.google.com/?q=The+AVA+Hotel+Haandi+Chikkamagaluru&ll=13.1654,75.7856" },
              { icon: Phone, title: "Phone", content: `${hotel.phone}\n${hotel.phoneAlt}`, href: `tel:${hotel.phone.replace(/\s/g, "")}` },
              { icon: Mail, title: "Email", content: hotel.email, href: `mailto:${hotel.email}` },
              { icon: Clock, title: "Support Hours", content: "24 Hours\n7 Days a Week", href: null },
            ].map((card) => (
              <div key={card.title} className="contact-card bg-white p-8 flex flex-col gap-4 border border-[#e5e5e5]">
                <div className="w-12 h-12 bg-[#111111] flex items-center justify-center flex-shrink-0">
                  <card.icon size={20} className="text-[#C9A84C]" />
                </div>
                <div>
                  <h3 className="font-display text-[22px] text-[#111111] uppercase">{card.title}</h3>
                  {card.href ? (
                    <a href={card.href} target={card.href.startsWith("https") ? "_blank" : undefined} rel="noopener noreferrer" className="text-[#707072] text-[13px] font-medium leading-relaxed hover:text-[#111111] transition-colors mt-2 block" style={{ whiteSpace: "pre-line" }}>
                      {card.content}
                    </a>
                  ) : (
                    <p className="text-[#707072] text-[13px] font-medium leading-relaxed mt-2" style={{ whiteSpace: "pre-line" }}>{card.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 px-4 md:px-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col gap-6">
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-2">Our Location</p>
              <h3 className="font-display text-[42px] text-[#111111] uppercase leading-tight">FIND US</h3>
              <div className="relative bg-[#111111] overflow-hidden" style={{ minHeight: 400 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31010.789!2d75.7856!3d13.1654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNH%20173%2C%20Haandi%2C%20Chikkamagaluru%2C%20Karnataka%20577111!5e0!3m2!1sen!2sin!4v1"
                  className="absolute inset-0 w-full h-full"
                  style={{ filter: "invert(0.9) hue-rotate(180deg)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The AVA Hotel Location"
                />
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-16 w-full h-full bg-[#111111]/60 backdrop-blur-sm">
                  <MapPin size={40} className="text-[#C9A84C]" />
                  <div>
                    <h4 className="font-display text-[36px] text-white uppercase leading-tight">NH 173, HAANDI</h4>
                    <p className="text-white/50 text-[13px] font-medium mt-2">Chikkamagaluru, Karnataka 577111</p>
                  </div>
                  <a href="https://maps.google.com/?q=The+AVA+Hotel+Haandi+Chikkamagaluru&ll=13.1654,75.7856" target="_blank" rel="noopener noreferrer" className="bg-white text-[#111111] px-8 py-3 rounded-full font-medium text-[13px] hover:bg-[#f5f5f5] transition-colors mt-2" data-testid="link-google-maps-contact">
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">Proximity</p>
              <h2 className="font-display text-[56px] md:text-[72px] text-[#111111] uppercase">LOCATION DISTANCES</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto">
              {hotel.distances.map((d) => (
                <div key={d.place} className="flex items-center justify-between py-4 border-b border-[#cacacb]">
                  <span className="font-medium text-[15px] text-[#111111]">{d.place}</span>
                  <span className="font-display text-[22px] text-[#C9A84C]">{d.distance}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
