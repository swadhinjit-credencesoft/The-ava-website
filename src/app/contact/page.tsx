"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { hotelData } from "@/data/siteData";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const EMPTY: FormData = { name: "", phone: "", email: "", subject: "", message: "" };

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(EMPTY);
    setTimeout(() => setSubmitted(false), 5000);
  };

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
        {/* Breadcrumb */}
        <div className="px-8 py-4 bg-[#f5f5f5] border-b border-[#e5e5e5]">
          <p className="text-[#707072] text-[13px] font-medium">
            <Link href="/" className="hover:text-[#111111] transition-colors" data-testid="breadcrumb-home">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#111111]">Contact</span>
          </p>
        </div>

        {/* Campaign Hero */}
        <section className="relative py-32 px-4 md:px-8 bg-[#111111] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=2400&q=80"
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

        {/* Contact Cards */}
        <section className="py-20 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: MapPin, title: "Address", content: "N H 173, K M Road, Haandi\nChikkamagaluru, Karnataka 577111", href: "https://maps.google.com/?q=The+Royal+Shalimar+Haandi+Chikkamagaluru" },
              { icon: Phone, title: "Phone", content: `${hotelData.phone}\n${hotelData.phoneAlt}`, href: `tel:${hotelData.phone.replace(/\s/g, "")}` },
              { icon: Mail, title: "Email", content: hotelData.email, href: `mailto:${hotelData.email}` },
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

        {/* Form + Map */}
        <section className="py-24 px-4 md:px-8">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form */}
            <div>
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">Send a Message</p>
              <h2 className="font-display text-[52px] md:text-[68px] text-[#111111] uppercase leading-[0.9] mb-8">GET IN TOUCH</h2>

              {submitted ? (
                <div className="bg-[#f5f5f5] border border-[#cacacb] p-8 text-center">
                  <p className="text-[#C9A84C] text-[16px] font-bold uppercase tracking-wider mb-2">Message Sent!</p>
                  <p className="text-[#707072] text-[14px] font-medium">Thank you for contacting us. We will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] font-medium text-[#707072] uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="bg-[#f5f5f5] border border-[#cacacb] w-full px-4 py-3 outline-none text-[14px] font-medium text-[#111111] focus:border-[#111111]"
                        data-testid="input-contact-name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] font-medium text-[#707072] uppercase tracking-wider">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className="bg-[#f5f5f5] border border-[#cacacb] w-full px-4 py-3 outline-none text-[14px] font-medium text-[#111111] focus:border-[#111111]"
                        data-testid="input-contact-phone"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-medium text-[#707072] uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="bg-[#f5f5f5] border border-[#cacacb] w-full px-4 py-3 outline-none text-[14px] font-medium text-[#111111] focus:border-[#111111]"
                      data-testid="input-contact-email"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-medium text-[#707072] uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="e.g. Booking Enquiry, Feedback"
                      className="bg-[#f5f5f5] border border-[#cacacb] w-full px-4 py-3 outline-none text-[14px] font-medium text-[#111111] focus:border-[#111111]"
                      data-testid="input-contact-subject"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-medium text-[#707072] uppercase tracking-wider">Your Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="bg-[#f5f5f5] border border-[#cacacb] w-full px-4 py-3 outline-none text-[14px] font-medium text-[#111111] focus:border-[#111111] resize-none"
                      data-testid="input-contact-message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#111111] text-white py-4 rounded-full font-medium text-[15px] hover:bg-[#333] transition-colors mt-2"
                    data-testid="button-contact-submit"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="flex flex-col gap-6">
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-2">Our Location</p>
              <h3 className="font-display text-[42px] text-[#111111] uppercase leading-tight">FIND US</h3>
              <div className="relative bg-[#111111] overflow-hidden flex flex-col items-center justify-center text-center p-16 flex-1" style={{ minHeight: 400 }}>
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80" alt="Map" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                <div className="relative z-10 flex flex-col items-center gap-6">
                  <MapPin size={40} className="text-[#C9A84C]" />
                  <div>
                    <h4 className="font-display text-[36px] text-white uppercase leading-tight">NH 173, HAANDI</h4>
                    <p className="text-white/50 text-[13px] font-medium mt-2">Chikkamagaluru, Karnataka 577111</p>
                  </div>
                  <a href="https://maps.google.com/?q=The+Royal+Shalimar+Haandi+Chikkamagaluru" target="_blank" rel="noopener noreferrer" className="bg-white text-[#111111] px-8 py-3 rounded-full font-medium text-[13px] hover:bg-[#f5f5f5] transition-colors mt-2" data-testid="link-google-maps-contact">
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Distances Table */}
        <section className="py-24 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">Proximity</p>
              <h2 className="font-display text-[56px] md:text-[72px] text-[#111111] uppercase">LOCATION DISTANCES</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto">
              {hotelData.distances.map((d) => (
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
