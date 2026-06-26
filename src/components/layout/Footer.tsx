"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const hotel = useSelector((state: RootState) => state.data.hotel);
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 pt-20 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10">
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="font-display text-[36px] text-white uppercase leading-tight">
              THE AVA            </h3>
            <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.3em] mt-2">♔ Haandi · Karnataka</p>
          </div>
          <p className="text-white/50 text-[13px] leading-relaxed">
            NH 173 Mangalore–Kadur Highway, between Chikkamagaluru and Mudigere. A peaceful luxury resort amidst Karnataka's finest coffee highlands.
          </p>
          <div className="flex gap-3">
            {["Fb", "Ig", "Tw"].map((s) => (
              <div key={s} className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 text-[11px] font-bold hover:border-[#C9A84C] hover:text-[#C9A84C] cursor-pointer transition-colors">
                {s}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-medium text-[13px] uppercase tracking-[0.25em] text-white mb-2">Quick Links</h4>
          {hotel.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/50 text-[13px] font-medium hover:text-white transition-colors w-fit" data-testid={`footer-link-${item.label.toLowerCase().replace(/[\s&]/g, "-")}`}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-medium text-[13px] uppercase tracking-[0.25em] text-white mb-2">Facilities</h4>
          {["Secured Parking", "24 Hrs Checkout", "Free High-Speed WiFi", "Laundry Service", "Bonfire Evenings", "Room Service", "Travel Desk", "Vehicle Rental", "In-house Restaurant", "Doctor on Call"].map((f) => (
            <span key={f} className="text-white/50 text-[13px] font-medium">{f}</span>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-medium text-[13px] uppercase tracking-[0.25em] text-white mb-2">Contact Us</h4>
          <div className="flex items-start gap-3">
            <MapPin size={15} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
            <p className="text-white/50 text-[13px] leading-relaxed">N H 173, K M Road, Haandi<br />Chikkamagaluru, Karnataka 577111</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={15} className="text-[#C9A84C] flex-shrink-0" />
            <div className="flex flex-col gap-1">
              <a href="tel:+917899738550" className="text-[#C9A84C] text-[13px] font-medium hover:text-white transition-colors">{hotel.phone}</a>
              <a href="tel:+918618141466" className="text-white/50 text-[13px] font-medium hover:text-white transition-colors">{hotel.phoneAlt}</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={15} className="text-[#C9A84C] flex-shrink-0" />
            <a href={`mailto:${hotel.email}`} className="text-white/50 text-[13px] font-medium hover:text-white transition-colors break-all">{hotel.email}</a>
          </div>
          <div className="flex items-center gap-3">
            <Clock size={15} className="text-[#C9A84C] flex-shrink-0" />
            <span className="text-white/50 text-[13px] font-medium">24 Hours Support</span>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-[12px]">Designed and Developed By CredenceSoft, Powered By BookOne..</p>
        <p className="text-white/20 text-[10px] uppercase tracking-widest">NH 173, Haandi, Chikkamagaluru, Karnataka 577111</p>
      </div>
    </footer>
  );
}
