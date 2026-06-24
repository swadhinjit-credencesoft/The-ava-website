"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin, Phone, Mail, Clock, CheckCircle, ChevronDown, ChevronUp,
  Wifi, Car, Coffee, Star, Award, Shield, Heart, Zap
} from "lucide-react";
import { hotelData } from "@/data/siteData";
import { HeroSlider } from "@/components/HeroSlider";
import { BookingBar } from "@/components/BookingBar";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: "/trekking.webp", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80", span: "" },
  { src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80", span: "" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80", span: "" },
  { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80", span: "" },
  { src: "/Royal-Shalimar-boutique-stay-chikmagalur-14-2.webp", span: "" },
  { src: "/quardroom.webp", span: "row-span-2" },
  { src: "/plantation.jpg", span: "" },
  { src: "/executiveroom1.jpeg", span: "" },
  { src: "/estateview.jpeg", span: "" },
  { src: "/bon-fire-in-chilling.jpg", span: "" },
];

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

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const animPairs: Array<[string, object, object]> = [
      [".reveal-up",    { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.18, ease: "power3.out" }],
      [".stat-item",    { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" }],
      [".room-reveal",  { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1,  ease: "power3.out" }],
      [".amenity-reveal",{ y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }],
      [".gallery-item", { scale: 0.94, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, stagger: 0.04, ease: "power2.out" }],
      [".exp-card",     { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: "power3.out" }],
      [".attraction-card",{ y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }],
      [".review-card",  { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2,  ease: "power3.out" }],
      [".pkg-card",     { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }],
      [".why-card",     { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out" }],
      [".step-item",    { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, stagger: 0.18, ease: "power3.out" }],
      [".shrine-card",  { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1,  ease: "power3.out" }],
    ];

    animPairs.forEach(([sel, from, to]) => {
      const els = document.querySelectorAll(sel);
      if (els.length) {
        gsap.fromTo(sel, from, {
          ...(to as object),
          scrollTrigger: { trigger: sel, start: "top 88%" },
        });
      }
    });
  }, { scope: containerRef });

  return (
    <div className="flex flex-col min-h-screen bg-white" ref={containerRef}>
      <Navbar />

      <main className="flex-1">

        {/* ── 1. VIDEO / SLIDESHOW HERO ── */}
        <HeroSlider />

        {/* ── 2. DARK BOOKING BAR ── */}
        <section className="bg-[#111111]">
          <div className="max-w-screen-xl mx-auto">
            <BookingBar dark />
          </div>
        </section>

        {/* ── 3. GOLD MARQUEE ── */}
      

        {/* ── 4. ABOUT — EDITORIAL SPLIT ── */}
        <section className="py-32 px-4 md:px-16 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img src="/Royal-Shalimar-boutique-stay-chikmagalur-14-2.webp" alt="Coffee Plantation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" loading="lazy" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-[#C9A84C] hidden md:flex flex-col items-center justify-center text-[#111111]">
                <span className="font-display text-[52px] leading-none">10+</span>
                <span className="text-[11px] font-medium uppercase tracking-widest text-center px-3 mt-1">Years of Excellence</span>
              </div>
            </div>
            <div className="flex flex-col gap-8 lg:pl-8">
              <div className="reveal-up">
                <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] font-medium mb-5">Welcome to The AVA</p>
                <h2 className="font-display text-[56px] md:text-[76px] text-[#111111] uppercase leading-[0.88]">A RETREAT<br />LIKE NO OTHER</h2>
              </div>
              <p className="reveal-up text-[#707072] text-[16px] leading-relaxed font-medium">
                Nestled on NH 173 between Chikkamagaluru and Mudigere, The AVA sits at the heart of Karnataka's legendary coffee and pepper plantations. Wake to panoramic views of the Western Ghats and discover nature at its most magnificent.
              </p>
              <p className="reveal-up text-[#707072] text-[16px] leading-relaxed font-medium">
                From the towering peaks of Mullayangiri to the sacred shrines of Dharmastala and Hornadu, our location places you at the centre of Karnataka's most treasured destinations — accessible yet blissfully secluded.
              </p>
              <div className="reveal-up flex gap-4 flex-wrap">
                <Link href="/rooms" className="bg-[#111111] text-white px-8 py-4 rounded-full font-medium text-[15px] hover:bg-[#333] transition-colors" data-testid="button-about-rooms">Our Rooms</Link>
                <Link href="/contact" className="border border-[#cacacb] text-[#111111] px-8 py-4 rounded-full font-medium text-[15px] hover:border-[#111111] transition-colors" data-testid="button-about-contact">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. STATS ── */}
        <section className="py-20 bg-[#111111]">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { n: "4",    s: "",   l: "Room Categories" },
                { n: "2500", s: "+",  l: "Sq.Ft Event Space" },
                { n: "24",   s: "/7", l: "Hour Service" },
                { n: "100",  s: "%",  l: "Guest Satisfaction" },
              ].map((s, i) => (
                <div key={i} className="stat-item flex flex-col items-center justify-center py-14 px-4 border-r border-white/10 last:border-r-0 text-center">
                  <span className="font-display text-[56px] md:text-[80px] text-white leading-none">{s.n}<span className="text-[#C9A84C]">{s.s}</span></span>
                  <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] mt-3">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. ROOMS GRID ── */}
        <section className="py-32 px-4 md:px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] font-medium mb-4">Accommodation</p>
                <h2 className="font-display text-[56px] md:text-[80px] text-[#111111] uppercase leading-[0.88]">ROOMS<br />&amp; SUITES</h2>
              </div>
              <Link href="/rooms" className="hidden md:flex bg-[#f5f5f5] text-[#111111] px-8 py-4 rounded-full font-medium text-[14px] hover:bg-[#e5e5e5] transition-colors" data-testid="button-all-rooms">View All</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {hotelData.rooms.map((room) => (
                <div key={room.id} className="room-reveal group relative overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                    <div>
                      <p className="text-white/50 text-[10px] uppercase tracking-widest">{room.type}</p>
                      <h3 className="font-display text-[36px] text-white uppercase leading-tight mt-1">{room.name}</h3>
                    </div>
                    <Link href="/rooms" className="bg-white text-[#111111] px-6 py-3 rounded-full font-medium text-[12px] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300" data-testid={`button-room-${room.id}`}>
                      View Room
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. WHY CHOOSE US ── */}
        <section className="py-24 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Our Promise</p>
              <h2 className="font-display text-[56px] md:text-[72px] text-[#111111] uppercase leading-[0.9]">WHY CHOOSE US</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              {[
                { icon: MapPin,   title: "Prime Location",   desc: "On NH 173 — 5 minutes to major treks, shrines, and scenic drives through the Ghats." },
                { icon: Star,     title: "Luxury Comfort",   desc: "King-size beds, AC rooms, 24-hr hot water, and a dedicated in-house restaurant." },
                { icon: Shield,   title: "Safe & Secured",   desc: "CCTV surveillance, secured parking, and a doctor on call for your peace of mind." },
                { icon: Heart,    title: "Warm Hospitality", desc: "Our staff goes above and beyond to make every guest feel at home in the highlands." },
                { icon: Wifi,     title: "Stay Connected",   desc: "High-speed unlimited WiFi throughout the property, with credentials at check-in." },
                { icon: Car,      title: "Travel Desk",      desc: "Car rental, airport pickup, safari bookings — all arranged through our in-house desk." },
                { icon: Coffee,   title: "Estate Dining",    desc: "Authentic Karnataka cuisine and continental dishes with plantation views every meal." },
                { icon: Zap,      title: "24/7 Support",     desc: "Round-the-clock room service and support so every need is met at any hour." },
              ].map((w, i) => (
                <div key={i} className="why-card bg-white p-8 flex flex-col gap-4 hover:bg-[#111111] group transition-colors duration-300">
                  <w.icon size={24} className="text-[#C9A84C]" />
                  <h3 className="font-display text-[24px] text-[#111111] group-hover:text-white uppercase leading-tight transition-colors">{w.title}</h3>
                  <p className="text-[#707072] group-hover:text-white/60 text-[13px] font-medium leading-relaxed transition-colors">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. CAMPAIGN — NATURE ── */}
        <section className="relative w-full overflow-hidden" style={{ height: "85vh" }}>
          <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=2400&q=90" alt="Nature" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.42)" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20" style={{ zIndex: 10 }}>
            <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-6">Western Ghats · Karnataka</p>
            <h2 className="font-display text-[64px] md:text-[100px] lg:text-[120px] text-white uppercase leading-[0.85] mb-8">
              SURROUNDED<br />BY NATURE
            </h2>
            <Link href="/tour" className="bg-white text-[#111111] px-10 py-4 rounded-full font-medium text-[15px] hover:bg-[#f5f5f5] transition-colors inline-flex w-fit" data-testid="button-campaign-nature">
              Explore Nearby
            </Link>
          </div>
        </section>

        {/* ── 9. AMENITIES ── */}
        <section className="py-32 px-4 md:px-8 bg-white">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Facilities</p>
              <h2 className="font-display text-[56px] md:text-[80px] text-[#111111] uppercase leading-[0.9]">PREMIUM<br />AMENITIES</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {hotelData.amenities.map((a) => (
                <div key={a.name} className="amenity-reveal group relative overflow-hidden aspect-[4/3]">
                  <img src={a.image} alt={a.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <h3 className="font-display text-[28px] text-white uppercase leading-tight">{a.name}</h3>
                    <p className="text-white/0 group-hover:text-white/70 text-[13px] mt-2 font-medium transition-all duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">{a.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/amenities" className="bg-[#111111] text-white px-10 py-4 rounded-full font-medium text-[15px] hover:bg-[#333] transition-colors" data-testid="button-all-amenities">All Amenities</Link>
            </div>
          </div>
        </section>

        {/* ── 10. FEATURE ICONS ── */}
        <section className="py-24 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Everything You Need</p>
              <h2 className="font-display text-[56px] md:text-[72px] text-[#111111] uppercase">HOTEL FACILITIES</h2>
            </div>
            <FeatureGrid features={hotelData.features} />
          </div>
        </section>

        {/* ── 11. GALLERY MASONRY ── */}
        <section className="py-32 px-4 md:px-8 bg-[#111111]">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] font-medium mb-4">Visual Story</p>
              <h2 className="font-display text-[56px] md:text-[80px] text-white uppercase leading-[0.9]">OUR GALLERY</h2>
            </div>
            <div className="columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
              {galleryImages.map((img, i) => (
                <div key={i} className="gallery-item break-inside-avoid overflow-hidden group cursor-pointer">
                  <img
                    src={img.src}
                    alt={`Gallery ${i + 1}`}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ aspectRatio: i % 3 === 0 ? "3/4" : "4/3" }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 12. RESTAURANT SPLIT ── */}
        <section className="py-32 px-4 md:px-8 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85" alt="Restaurant" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" loading="lazy" />
            </div>
            <div className="bg-[#f5f5f5] p-12 md:p-20 flex flex-col justify-center gap-8">
              <div>
                <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Dining</p>
                <h2 className="font-display text-[52px] md:text-[68px] text-[#111111] uppercase leading-[0.88]">IN-HOUSE<br />RESTAURANT</h2>
              </div>
              <p className="text-[#707072] text-[15px] leading-relaxed font-medium">
                Savour authentic flavours of Karnataka cuisine alongside continental favourites. Fresh ingredients, warm hospitality, and breathtaking plantation views make every meal a memory.
              </p>
              <ul className="flex flex-col gap-4">
                {["Complimentary breakfast 7:30am – 9:30am", "Regional Karnataka specialties", "Continental & Indian multi-cuisine", "Room service available 24/7"].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-[#111111] font-medium text-[14px]">
                    <span className="w-6 h-px bg-[#C9A84C] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 13. EXPERIENCES ── */}
        <section className="py-32 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Activities</p>
              <h2 className="font-display text-[56px] md:text-[80px] text-[#111111] uppercase leading-[0.9]">UNFORGETTABLE<br />MOMENTS</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {[
                { title: "BONFIRE NIGHTS",  desc: "Gather under the stars around a warm bonfire amidst Karnataka's finest coffee plantations.", img: "/bon-fire-in-chilling.jpg", badge: "Evening" },
                { title: "WILDLIFE SAFARI", desc: "Explore Bhadra Wildlife Sanctuary and encounter magnificent wildlife in their natural habitat.", img: "/bhadra-wildlife-sanctuary.webp", badge: "Adventure" },
                { title: "MOUNTAIN TREKS", desc: "Trek to Mullayangiri — the highest peak in Karnataka — through pristine Western Ghats trails.", img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80", badge: "Trekking" },
              ].map((exp) => (
                <div key={exp.title} className="exp-card group relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <img src={exp.img} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#C9A84C] text-[#111111] px-4 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider">{exp.badge}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-display text-[36px] text-white uppercase leading-tight">{exp.title}</h3>
                    <p className="text-white/70 text-[13px] mt-3 font-medium">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 14. HOW TO BOOK — 3 STEPS ── */}
        <section className="py-24 px-4 md:px-8 bg-white">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Simple Process</p>
                <h2 className="font-display text-[52px] md:text-[68px] text-[#111111] uppercase leading-[0.88] mb-6">HOW TO<br />BOOK WITH US</h2>
                <p className="text-[#707072] text-[15px] leading-relaxed font-medium">No complicated systems — just reach out and our team personally handles your reservation within minutes.</p>
              </div>
              <div className="flex flex-col gap-0">
                {[
                  { num: "01", title: "Choose Your Dates", desc: "Pick your preferred check-in and check-out dates. 24-hr checkout is available for all guests." },
                  { num: "02", title: "Select Your Room", desc: "Browse our 4 room categories — from Quad to Executive — and find your perfect match." },
                  { num: "03", title: "Call or Enquire", desc: "Call us directly or send an enquiry. We confirm within minutes and tailor your stay." },
                ].map((step, i) => (
                  <div key={i} className="step-item flex gap-8 py-10 border-b border-[#e5e5e5] last:border-0">
                    <span className="font-display text-[56px] text-[#C9A84C] leading-none flex-shrink-0 w-16">{step.num}</span>
                    <div className="flex flex-col gap-2 pt-2">
                      <h3 className="font-display text-[28px] text-[#111111] uppercase">{step.title}</h3>
                      <p className="text-[#707072] text-[14px] font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 15. CAMPAIGN — EVENTS ── */}
        <section className="relative w-full overflow-hidden" style={{ height: "75vh" }}>
          <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=2400&q=90" alt="Events" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.35)" }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8" style={{ zIndex: 10 }}>
            <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-6">The AVA</p>
            <h2 className="font-display text-[56px] md:text-[96px] text-white uppercase leading-[0.85]">MEETINGS &amp;<br />EVENTS</h2>
            <p className="text-white/70 text-[17px] max-w-lg mt-6 font-medium">2500+ Sq.Ft pillarless ballroom for weddings, corporate meets &amp; celebrations</p>
            <Link href="/events" className="bg-white text-[#111111] px-10 py-4 rounded-full font-medium text-[15px] mt-10 hover:bg-[#f5f5f5] transition-colors inline-block" data-testid="button-campaign-events">
              Plan Your Event
            </Link>
          </div>
        </section>

        {/* ── 16. TOURIST ATTRACTIONS ── */}
        <section className="py-32 px-4 md:px-8 bg-white">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex items-end justify-between mb-20">
              <div>
                <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Explore</p>
                <h2 className="font-display text-[56px] md:text-[80px] text-[#111111] uppercase leading-[0.88]">NEARBY<br />ATTRACTIONS</h2>
              </div>
              <Link href="/tour" className="hidden md:flex bg-[#f5f5f5] text-[#111111] px-8 py-4 rounded-full font-medium text-[14px] hover:bg-[#e5e5e5] transition-colors" data-testid="button-tour-guide">Tour Guide</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hotelData.touristPlaces.map((place) => (
                <div key={place.name} className="attraction-card flex flex-col group">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#C9A84C] text-[#111111] px-4 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider">{place.activity}</span>
                    </div>
                  </div>
                  <div className="pt-6 pb-6 border-b border-[#e5e5e5]">
                    <h3 className="font-display text-[32px] text-[#111111] uppercase leading-tight">{place.name}</h3>
                    <p className="text-[#707072] text-[13px] font-medium leading-relaxed mt-2">{place.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 17. SACRED SHRINES ── */}
        <section className="py-24 px-4 md:px-8 bg-[#111111]">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Spiritual Journey</p>
              <h2 className="font-display text-[56px] md:text-[72px] text-white uppercase leading-[0.9]">SACRED SHRINES<br />&amp; TEMPLES</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { name: "Dharmastala",    dist: "67 km", img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80" },
                { name: "Hornadu",        dist: "70 km", img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80" },
                { name: "Shringeri",      dist: "72 km", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
                { name: "Belur Temples",  dist: "26 km", img: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?w=600&q=80" },
              ].map((shrine) => (
                <div key={shrine.name} className="shrine-card group relative overflow-hidden aspect-[3/4]">
                  <img src={shrine.img} alt={shrine.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-[24px] text-white uppercase">{shrine.name}</h3>
                    <span className="text-[#C9A84C] text-[12px] font-medium">{shrine.dist}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 18. TESTIMONIALS ── */}
        <section className="py-32 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Reviews</p>
              <h2 className="font-display text-[56px] md:text-[80px] text-[#111111] uppercase leading-[0.9]">GUEST<br />STORIES</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "Priya Sharma",    loc: "Bangalore", review: "Woke up to misty plantation views every morning. The Estateview room was breathtaking. Staff was incredibly warm and attentive.", rating: 5 },
                { name: "Rahul Mehta",     loc: "Mumbai",    review: "Hosted our company offsite here. The convention hall exceeded all expectations. The bonfire evening was the highlight.", rating: 5 },
                { name: "Ananya & Kiran",  loc: "Chennai",   review: "Perfect romantic getaway. The trek to Mullayangiri arranged by the travel desk was unforgettable. We will definitely return.", rating: 5 },
                { name: "Dr. Suresh Rao",  loc: "Mysore",    review: "Stayed for a medical conference. The facilities were world-class and the food was exceptional. Highly recommended.", rating: 5 },
                { name: "Kavitha Family",  loc: "Pune",      review: "A family vacation that exceeded every expectation. Kids loved the bonfire and outdoor games. Parents loved the peace.", rating: 5 },
                { name: "Arjun Nair",      loc: "Hyderabad", review: "The coffee plantation walks at dawn are something I'll never forget. The staff made every meal feel special.", rating: 5 },
              ].map((t, i) => (
                <div key={i} className="review-card flex flex-col gap-5 p-8 bg-white border border-[#e5e5e5] hover:border-[#C9A84C]/30 transition-colors">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, j) => <span key={j} className="text-[#C9A84C] text-[15px]">★</span>)}
                  </div>
                  <p className="text-[#707072] text-[14px] leading-relaxed font-medium italic flex-1">"{t.review}"</p>
                  <div className="flex items-center gap-3 pt-5 border-t border-[#e5e5e5]">
                    <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center text-[#111111] font-bold text-[15px] flex-shrink-0">{t.name.charAt(0)}</div>
                    <div>
                      <p className="text-[#111111] font-medium text-[13px]">{t.name}</p>
                      <p className="text-[#707072] text-[11px]">{t.loc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 19. PACKAGES ── */}
        {/* <section className="py-32 px-4 md:px-8 bg-white">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Special Offers</p>
              <h2 className="font-display text-[56px] md:text-[80px] text-[#111111] uppercase leading-[0.9]">OUR<br />PACKAGES</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {[
                { name: "WEEKEND ESCAPE",      dur: "2N / 3D",      inc: ["Premium Room", "Daily Breakfast", "Bonfire Evening", "Travel Desk"],                                        hl: false },
                { name: "PLANTATION RETREAT",  dur: "3N / 4D",      inc: ["Estateview Room", "All Meals", "Mullayangiri Trek", "Wildlife Safari", "Bonfire Evening"],                  hl: true },
                { name: "CORPORATE OFFSITE",   dur: "Flexible",     inc: ["Executive Rooms", "Conference Hall", "All Meals", "Team Activities", "24/7 Support"],                       hl: false },
              ].map((pkg) => (
                <div key={pkg.name} className={`pkg-card p-10 flex flex-col gap-6 ${pkg.hl ? "bg-[#111111]" : "bg-[#f5f5f5]"}`}>
                  {pkg.hl && <span className="text-[#C9A84C] text-[10px] uppercase tracking-widest">✦ Most Popular</span>}
                  <h3 className={`font-display text-[36px] uppercase leading-tight ${pkg.hl ? "text-white" : "text-[#111111]"}`}>{pkg.name}</h3>
                  <p className={`text-[12px] uppercase tracking-widest ${pkg.hl ? "text-white/40" : "text-[#707072]"}`}>{pkg.dur}</p>
                  <ul className="flex flex-col gap-3 flex-1">
                    {pkg.inc.map((item) => (
                      <li key={item} className={`flex items-center gap-3 text-[13px] font-medium ${pkg.hl ? "text-white/80" : "text-[#707072]"}`}>
                        <CheckCircle size={14} className="text-[#C9A84C] flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`mt-4 px-8 py-4 rounded-full font-medium text-[13px] text-center transition-colors block ${pkg.hl ? "bg-[#C9A84C] text-[#111111] hover:bg-[#b8943f]" : "bg-[#111111] text-white hover:bg-[#333]"}`} data-testid={`button-pkg-${pkg.name.toLowerCase().replace(/\s/g, "-")}`}>
                    Enquire Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* ── 20. AWARDS STRIP ── */}
        <section className="py-16 px-4 md:px-8 bg-[#f5f5f5] border-y border-[#e5e5e5]">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-12">
              {[
                { icon: Award,  label: "TripAdvisor Certificate", sub: "of Excellence" },
                { icon: Star,   label: "Top Rated Resort",        sub: "Chikkamagaluru" },
                { icon: Shield, label: "Trusted By",              sub: "5000+ Guests" },
                { icon: Heart,  label: "Best Hospitality",        sub: "Karnataka Tourism" },
              ].map((a) => (
                <div key={a.label} className="flex flex-col items-center gap-2 text-center">
                  <a.icon size={28} className="text-[#C9A84C]" />
                  <p className="font-display text-[18px] text-[#111111] uppercase">{a.label}</p>
                  <p className="text-[#707072] text-[11px] uppercase tracking-wider">{a.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 21. LOCATION / DISTANCES ── */}
        <section className="py-32 px-4 md:px-8 bg-white">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">How To Reach</p>
                <h2 className="font-display text-[52px] md:text-[68px] text-[#111111] uppercase leading-[0.88] mb-12">LOCATION<br />&amp; DISTANCES</h2>
                <div className="flex flex-col">
                  {hotelData.distances.map((d, i) => (
                    <div key={d.place} className={`flex items-center justify-between py-5 border-b border-[#e5e5e5] ${i % 2 === 0 ? "" : "bg-[#fafafa] px-4"}`}>
                      <span className="font-medium text-[15px] text-[#111111]">{d.place}</span>
                      <span className="font-display text-[26px] text-[#C9A84C]">{d.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative bg-[#111111] overflow-hidden flex flex-col items-center justify-center text-center p-16" style={{ minHeight: 520 }}>
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80" alt="Map" className="absolute inset-0 w-full h-full object-cover opacity-20" loading="lazy" />
                <div className="relative z-10 flex flex-col items-center gap-6">
                  <MapPin size={40} className="text-[#C9A84C]" />
                  <div>
                    <h3 className="font-display text-[42px] text-white uppercase leading-tight">NH 173, HAANDI</h3>
                    <p className="text-white/50 text-[13px] font-medium mt-2">Chikkamagaluru, Karnataka 577111</p>
                  </div>
                  <a href="https://maps.google.com/?q=The+Royal+Shalimar+Haandi+Chikkamagaluru" target="_blank" rel="noopener noreferrer" className="bg-white text-[#111111] px-8 py-3 rounded-full font-medium text-[13px] hover:bg-[#f5f5f5] transition-colors mt-2" data-testid="link-google-maps">
                    Open in Maps
                  </a>
                  <div className="flex flex-col items-center gap-2 mt-4">
                    <a href="tel:+917899738550" className="flex items-center gap-2 text-[#C9A84C] text-[13px] font-medium hover:text-white transition-colors" data-testid="link-map-phone">
                      <Phone size={13} /> +91 7899738550
                    </a>
                    <a href={`mailto:${hotelData.email}`} className="flex items-center gap-2 text-white/40 text-[12px] hover:text-white transition-colors" data-testid="link-map-email">
                      <Mail size={12} /> {hotelData.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 22. FAQ ── */}
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

        {/* ── 23. QUICK CONTACT CARDS ── */}
        <section className="py-24 px-4 md:px-8 bg-white">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Reach Us</p>
              <h2 className="font-display text-[52px] md:text-[68px] text-[#111111] uppercase">GET IN TOUCH</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              {[
                { icon: Phone, title: "Call Us",     val: hotelData.phone,    href: "tel:+917899738550",        action: "Call" },
                { icon: Phone, title: "Alternate",   val: hotelData.phoneAlt, href: "tel:+918618141466",        action: "Call" },
                { icon: Mail,  title: "Email Us",    val: hotelData.email,    href: `mailto:${hotelData.email}`, action: "Email" },
                { icon: Clock, title: "24/7 Support",val: "Always Available",  href: null,                       action: null },
              ].map((c, i) => (
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

        {/* ── 24. GOLD CTA STRIP ── */}
        <section className="py-24 px-4 md:px-8 bg-[#C9A84C]">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-[48px] md:text-[64px] text-[#111111] uppercase leading-[0.88]">READY TO<br />EXPERIENCE LUXURY?</h2>
              <p className="text-[#111111]/60 text-[15px] font-medium mt-3">NH 173, Haandi · Chikkamagaluru, Karnataka</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+917899738550" className="bg-[#111111] text-white px-10 py-4 rounded-full font-medium text-[15px] text-center hover:bg-[#333] transition-colors" data-testid="button-cta-call">Call Now</a>
              <Link href="/rooms" className="bg-white text-[#111111] px-10 py-4 rounded-full font-medium text-[15px] text-center hover:bg-[#f5f5f5] transition-colors" data-testid="button-cta-book">Book a Room</Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
