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
            <Link href="/" className="inline-flex rounded-md bg-[#f7f5ed] p-2 shadow-sm hover:opacity-90 transition-opacity" aria-label="The Mountain Resort Karjat home">
              <img src="/logo.png" alt="Venkats The Mountain by Redwings" className="w-[240px] h-[100px] object-contain" />
            </Link>
            <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.3em] mt-3">KARJAT · MAHARASHTRA</p>
          </div>
          <p className="text-white/50 text-[13px] leading-relaxed">A private 7-acre mountain estate in Karjat for destination weddings, celebration weekends and relaxed stays near Mumbai and Pune.</p>
          <div className="flex gap-3">
            <a href="https://instagram.com/themountain.karjat" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 text-[11px] font-bold hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors" aria-label="Instagram">Ig</a>
            <a href="https://themountainresorts.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 text-[10px] font-bold hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors" aria-label="Official website">Web</a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-medium text-[13px] uppercase tracking-[0.25em] text-white mb-2">Quick Links</h4>
          {hotel.nav.map((item) => <Link key={item.href} href={item.href} className="text-white/50 text-[13px] font-medium hover:text-white transition-colors w-fit">{item.label}</Link>)}
          <Link href="/gallery" className="text-white/50 text-[13px] font-medium hover:text-white transition-colors w-fit">Gallery</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-medium text-[13px] uppercase tracking-[0.25em] text-white mb-2">Activities &amp; Facilities</h4>
          {[
            "Boating",
            "Trekking",
            "Indoor & Outdoor Games",
            "Rain Dance",
            "Swimming Pool",
            "Bungalow Private Jacuzzi",
            "Sunset Point View",
            "Lawn Area",
            "Deck Area",
            "Gazebo",
            "Music Speaker with Mic",
            "In-House Restaurant",
          ].map((f) => (
            <span key={f} className="text-white/50 text-[13px] font-medium">
              {f}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-medium text-[13px] uppercase tracking-[0.25em] text-white mb-2">Contact Us</h4>
          <div className="flex items-start gap-3"><MapPin size={15} className="text-[#C9A84C] mt-0.5 flex-shrink-0" /><p className="text-white/50 text-[13px] leading-relaxed">Survey No. 120, 144 &amp; 145, Wavarle, Vadvihir<br />Khalapur, Karjat, Maharashtra 410201</p></div>
          <div className="flex items-center gap-3"><Phone size={15} className="text-[#C9A84C] flex-shrink-0" /><a href={`tel:${hotel.phone.replace(/\s/g, "")}`} className="text-[#C9A84C] text-[13px] font-medium hover:text-white transition-colors">{hotel.phone}</a></div>
          <div className="flex items-center gap-3"><Mail size={15} className="text-[#C9A84C] flex-shrink-0" /><a href={`mailto:${hotel.email}`} className="text-white/50 text-[13px] font-medium hover:text-white transition-colors break-all">{hotel.email}</a></div>
          <div className="flex items-center gap-3"><Clock size={15} className="text-[#C9A84C] flex-shrink-0" /><span className="text-white/50 text-[13px] font-medium">Reservations &amp; event enquiries</span></div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-[12px]">Designed and Developed By CredenceSoft, Powered By BookOne.</p>
        <p className="text-white/20 text-[10px] uppercase tracking-widest">Wavarle, Vadvihir, Karjat, Maharashtra 410201</p>
      </div>
    </footer>
  );
}
