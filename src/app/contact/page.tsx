"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Clock, Navigation, Train, Car, Landmark, ArrowRight, CornerDownRight, CornerDownLeft } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/sections/Breadcrumb";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const hotel = useSelector((state: RootState) => state.data.hotel);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeRoute, setActiveRoute] = useState<string>("karjat-station");

  const routes = hotel.directions || [];
  const selectedRoute = routes.find((r) => r.id === activeRoute) || routes[0];

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
            src="https://bookonelocal.in/cdn/DSC08846.avif"
            alt="Mountain views at The Mountain Resort in Karjat"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10 max-w-screen-xl mx-auto text-center">
            <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-6">The Mountain Resort · By Redwings</p>
            <h1 className="font-display text-[64px] md:text-[100px] text-white uppercase leading-[0.85]">CONTACT US</h1>
            <p className="text-white/70 text-[18px] max-w-xl mx-auto mt-6 font-medium">
              We look forward to welcoming you. Reach out for reservations, driving directions, events, or any enquiries.
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-20 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: MapPin, title: "Address", content: "Survey No. 120, 144 & 145, Wavarle, Vadvihir\nKhalapur, Karjat, Maharashtra 410201", href: "https://maps.google.com/?q=The+Mountain+Resort+Karjat+Wavarle" },
              { icon: Phone, title: "Phone", content: hotel.phone, href: `tel:${hotel.phone.replace(/\s/g, "")}` },
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

        {/* Turn-by-Turn Driving & Arrival Directions */}
        <section className="py-24 px-4 md:px-8 bg-white">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">Route Navigation</p>
              <h2 className="font-display text-[48px] md:text-[64px] text-[#111111] uppercase leading-[0.9]">HOW TO REACH US</h2>
              <p className="text-[#707072] text-[14px] font-medium mt-4">
                Exact turn-by-turn guidance and landmarks for guests arriving by train or road.
              </p>
            </div>

            <div className="bg-[#faf8f5] border border-[#e8e4dc] p-6 md:p-10 rounded-xl shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#e5dfd5]">
                <div>
                  <span className="inline-flex items-center gap-2 text-[#C9A84C] text-[11px] uppercase tracking-[0.3em] font-semibold">
                    <Navigation size={14} /> Guest Route Guidance
                  </span>
                  <h3 className="font-display text-[30px] md:text-[38px] text-[#111111] uppercase mt-1">
                    Select Your Arrival Route
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {routes.map((route) => {
                    const isActive = route.id === activeRoute;
                    const Icon = route.id === "karjat-station" ? Train : Car;
                    return (
                      <button
                        key={route.id}
                        onClick={() => setActiveRoute(route.id)}
                        className={`flex items-center gap-2.5 px-5 py-3 text-[13px] font-medium rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-[#111111] text-[#C9A84C] shadow-md"
                            : "bg-white text-[#707072] border border-[#d8d4cc] hover:text-[#111111] hover:border-[#111111]"
                        }`}
                      >
                        <Icon size={16} />
                        <span>{route.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedRoute && (
                <div className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white p-4 border border-[#e8e4dc] rounded-lg">
                      <div className="flex items-center gap-2 text-[#C9A84C] text-[11px] font-semibold uppercase tracking-wider mb-1">
                        <Landmark size={14} /> Landmark
                      </div>
                      <p className="font-display text-[20px] text-[#111111]">{selectedRoute.landmark}</p>
                    </div>
                    <div className="bg-white p-4 border border-[#e8e4dc] rounded-lg">
                      <div className="flex items-center gap-2 text-[#C9A84C] text-[11px] font-semibold uppercase tracking-wider mb-1">
                        <Navigation size={14} /> Junction
                      </div>
                      <p className="font-display text-[20px] text-[#111111]">{selectedRoute.junction}</p>
                    </div>
                    <div className="bg-white p-4 border border-[#e8e4dc] rounded-lg">
                      <div className="flex items-center gap-2 text-[#C9A84C] text-[11px] font-semibold uppercase tracking-wider mb-1">
                        <MapPin size={14} /> Distance
                      </div>
                      <p className="font-display text-[20px] text-[#111111]">{selectedRoute.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {selectedRoute.steps.map((step, idx) => {
                      const isLast = idx === selectedRoute.steps.length - 1;
                      const isTurnRight = step.instruction.toLowerCase().includes("right");
                      const isTurnLeft = step.instruction.toLowerCase().includes("left");
                      const TurnIcon = isLast ? MapPin : isTurnRight ? CornerDownRight : isTurnLeft ? CornerDownLeft : ArrowRight;

                      return (
                        <div
                          key={idx}
                          className={`flex items-start gap-4 p-4 rounded-lg transition-colors ${
                            isLast ? "bg-[#111111] text-white" : "bg-white border border-[#e8e4dc]"
                          }`}
                        >
                          <div
                            className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-[12px] font-bold ${
                              isLast ? "bg-[#C9A84C] text-[#111111]" : "bg-[#f4efe6] text-[#C9A84C]"
                            }`}
                          >
                            {isLast ? <MapPin size={16} /> : idx + 1}
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <p className={`font-medium text-[15px] ${isLast ? "text-white font-semibold" : "text-[#111111]"}`}>
                                {step.instruction}
                              </p>
                              {step.distance && (
                                <span
                                  className={`text-[12px] px-3 py-0.5 rounded-full font-medium ${
                                    isLast
                                      ? "bg-white/20 text-[#C9A84C]"
                                      : "bg-[#f5f5f5] text-[#707072] border border-[#e5e5e5]"
                                  }`}
                                >
                                  {step.distance}
                                </span>
                              )}
                            </div>
                            {step.detail && (
                              <p className={`text-[13px] mt-1 ${isLast ? "text-[#C9A84C]" : "text-[#707072]"}`}>
                                {step.detail}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col gap-6">
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-2">Google Maps</p>
              <h3 className="font-display text-[42px] text-[#111111] uppercase leading-tight">FIND US ON THE MAP</h3>
              <div className="relative bg-[#111111] overflow-hidden rounded-xl" style={{ minHeight: 460 }}>
                <iframe
                  src="https://maps.google.com/maps?q=The%20Mountain%20Resort%20Karjat%20Wavarle&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full"
                  style={{ filter: "invert(0.9) hue-rotate(180deg)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Mountain Resort Karjat Location"
                />
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-12 md:p-16 w-full h-full bg-[#111111]/75 backdrop-blur-sm">
                  <MapPin size={40} className="text-[#C9A84C]" />
                  <div className="mt-3">
                    <h4 className="font-display text-[36px] text-white uppercase leading-tight">WAVARLE, KARJAT</h4>
                    <p className="text-white/60 text-[13px] font-medium mt-2 leading-relaxed">
                      Near Borgaon Phata · Khalapur, Karjat · Maharashtra 410201
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=The+Mountain+Resort+Karjat+Wavarle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#C9A84C] text-[#111111] px-8 py-3 rounded-full font-medium text-[13px] hover:bg-white transition-colors mt-6"
                    data-testid="link-google-maps-contact"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proximity & Nearby Distances */}
        <section className="py-24 px-4 md:px-8 bg-white">
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
