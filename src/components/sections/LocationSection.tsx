"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Navigation, Car, Train, CornerDownRight, CornerDownLeft, ArrowRight, Landmark } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export function LocationSection() {
  const hotel = useSelector((state: RootState) => state.data.hotel);
  const [activeRoute, setActiveRoute] = useState<string>("karjat-station");

  const routes = hotel.directions || [];
  const selectedRoute = routes.find((r) => r.id === activeRoute) || routes[0];

  return (
    <section className="py-28 px-4 md:px-8 bg-white" id="directions">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Location &amp; Directions</p>
          <h2 className="font-display text-[48px] md:text-[64px] text-[#111111] uppercase leading-[0.9]">HOW TO REACH</h2>
          <p className="text-[#707072] text-[14px] font-medium mt-4">
            Follow our landmark-based navigation from Karjat Railway Station or via Panvel/Chowk.
          </p>
        </div>

        {/* Turn-by-turn Route Guide */}
        <div className="mb-20 bg-[#faf8f5] border border-[#e8e4dc] p-6 md:p-10 rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#e5dfd5]">
            <div>
              <span className="inline-flex items-center gap-2 text-[#C9A84C] text-[11px] uppercase tracking-[0.3em] font-semibold">
                <Navigation size={14} /> Turn-by-Turn Guide
              </span>
              <h3 className="font-display text-[32px] md:text-[40px] text-[#111111] uppercase mt-1">
                Directions for Arriving Guests
              </h3>
            </div>

            {/* Route Switcher Buttons */}
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
              {/* Route Summary & Key Landmarks */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-4 border border-[#e8e4dc] rounded-lg">
                  <div className="flex items-center gap-2 text-[#C9A84C] text-[11px] font-semibold uppercase tracking-wider mb-1">
                    <Landmark size={14} /> Key Landmark
                  </div>
                  <p className="font-display text-[20px] text-[#111111]">{selectedRoute.landmark}</p>
                </div>
                <div className="bg-white p-4 border border-[#e8e4dc] rounded-lg">
                  <div className="flex items-center gap-2 text-[#C9A84C] text-[11px] font-semibold uppercase tracking-wider mb-1">
                    <Navigation size={14} /> Junction Point
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

              {/* Step by Step Timeline */}
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

        {/* Distances and Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Nearby Distances</p>
            <h2 className="font-display text-[42px] md:text-[54px] text-[#111111] uppercase leading-[0.95] mb-8">
              LANDMARKS<br />&amp; DISTANCES
            </h2>
            <div className="flex flex-col">
              {hotel.distances.map((d, i) => (
                <div
                  key={d.place}
                  className={`flex items-center justify-between py-4 border-b border-[#e5e5e5] ${
                    i % 2 === 0 ? "" : "bg-[#fafafa] px-3"
                  }`}
                >
                  <span className="font-medium text-[14px] text-[#111111]">{d.place}</span>
                  <span className="font-display text-[18px] md:text-[20px] text-[#C9A84C] ml-4 text-right">
                    {d.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Google Map */}
          <div className="relative bg-[#111111] overflow-hidden flex flex-col items-center justify-center text-center rounded-xl" style={{ minHeight: 520 }}>
            <iframe
              src="https://maps.google.com/maps?q=The%20Mountain%20Resort%20Karjat%20Wavarle&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full"
              style={{ filter: "invert(0.9) hue-rotate(180deg)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Mountain Resort Karjat Location"
            />
            <div className="relative z-10 flex flex-col items-center gap-6 bg-[#111111]/85 backdrop-blur-md p-8 md:p-10 rounded-xl mx-4 my-8 max-w-md border border-white/10">
              <MapPin size={40} className="text-[#C9A84C]" />
              <div>
                <h3 className="font-display text-[36px] text-white uppercase leading-tight">WAVARLE, KARJAT</h3>
                <p className="text-white/60 text-[13px] font-medium mt-2 leading-relaxed">
                  Near Borgaon Phata · Khalapur Taluka<br />Maharashtra 410201
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=The+Mountain+Resort+Karjat+Wavarle"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C9A84C] text-[#111111] px-8 py-3 rounded-full font-medium text-[13px] hover:bg-white transition-colors"
                data-testid="link-google-maps"
              >
                Open in Google Maps
              </a>
              <div className="flex flex-col items-center gap-2 pt-2 border-t border-white/10 w-full">
                <a
                  href="tel:+919833866655"
                  className="flex items-center gap-2 text-white/90 text-[13px] font-medium hover:text-[#C9A84C] transition-colors"
                  data-testid="link-map-phone"
                >
                  <Phone size={13} className="text-[#C9A84C]" /> +91 98338 66655
                </a>
                <a
                  href={`mailto:${hotel.email}`}
                  className="flex items-center gap-2 text-white/50 text-[12px] hover:text-white transition-colors"
                  data-testid="link-map-email"
                >
                  <Mail size={12} className="text-[#C9A84C]" /> {hotel.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
