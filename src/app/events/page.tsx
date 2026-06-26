"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm } from "react-hook-form";
import { CheckCircle, Phone, Mail } from "lucide-react";
import { hotelData } from "@/data/siteData";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { PageHero } from "@/components/sections/PageHero";

gsap.registerPlugin(ScrollTrigger);

interface EventFormData {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  date: string;
  guests: number;
  message: string;
}

export default function EventsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, reset, formState: { isSubmitSuccessful } } = useForm<EventFormData>();

  const onSubmit = (_data: EventFormData) => {
    reset();
  };

  useGSAP(() => {
    gsap.fromTo(".event-stat", { y: 30, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power3.out",
      scrollTrigger: { trigger: ".event-stat", start: "top 85%" },
    });
  }, { scope: containerRef });

  return (
    <div className="flex flex-col min-h-screen bg-white" ref={containerRef}>
      <Navbar />

      <main className="flex-1 pt-20">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Events" }]} />
        <PageHero
          image={hotelData.events.image}
          brightness={0.4}
          label="The AVA"
          title="MEETINGS & EVENTS"
          subtitle="2500+ Sq.Ft pillarless ballroom for your most memorable occasions"
        />

        <section className="py-16 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { number: "2500", suffix: "+", label: "Sq.Ft Event Hall" },
                { number: "500", suffix: "+", label: "Guest Capacity" },
                { number: "24", suffix: "/7", label: "Event Support" },
                { number: "100", suffix: "%", label: "Pillarless Hall" },
              ].map((s) => (
                <div key={s.label} className="event-stat flex flex-col items-center justify-center py-10 px-4 bg-white border border-[#e5e5e5] text-center">
                  <span className="font-display text-[48px] md:text-[64px] text-[#111111] leading-none">
                    {s.number}<span className="text-[#C9A84C]">{s.suffix}</span>
                  </span>
                  <span className="text-[#707072] text-[11px] uppercase tracking-[0.25em] mt-2">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 md:px-8">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">Host With Us</p>
                <h2 className="font-display text-[52px] md:text-[68px] text-[#111111] uppercase leading-[0.9]">{hotelData.events.heading}</h2>
              </div>
              <p className="text-[#707072] text-[16px] font-medium leading-relaxed">{hotelData.events.description}</p>

              <div className="flex flex-col gap-4 mt-4">
                {[
                  "2500+ Sq.Ft pillarless ballroom layout",
                  "Elegant state-of-the-art lighting & sound options",
                  "Custom catering menus (Veg & Non-veg options)",
                  "Dedicated event coordinator for flawless execution",
                  "Convenient highway location on NH 173 with secured parking",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <CheckCircle size={18} className="text-[#C9A84C] flex-shrink-0" />
                    <span className="font-medium text-[14px] text-[#111111]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#e5e5e5]">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#f5f5f5] flex items-center justify-center">
                    <Phone size={16} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-[#707072] text-[11px] uppercase tracking-wider font-medium">Call Sales</p>
                    <a href="tel:+917899738550" className="text-[#111111] font-medium text-[14px] hover:text-[#C9A84C] transition-colors">{hotelData.phone}</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#f5f5f5] flex items-center justify-center">
                    <Mail size={16} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-[#707072] text-[11px] uppercase tracking-wider font-medium">Email Enquiries</p>
                    <a href={`mailto:${hotelData.email}`} className="text-[#111111] font-medium text-[14px] hover:text-[#C9A84C] transition-colors">{hotelData.email}</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f5f5f5] p-8 md:p-12 border border-[#e5e5e5]">
              <h3 className="font-display text-[32px] text-[#111111] uppercase mb-8">EVENT ENQUIRY</h3>
              
              {isSubmitSuccessful ? (
                <div className="bg-white border border-[#cacacb] p-6 text-center">
                  <p className="text-[#C9A84C] text-[15px] font-bold uppercase tracking-wider mb-2">Thank You!</p>
                  <p className="text-[#707072] text-[14px] font-medium">We have received your event details and our sales team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-medium text-[#707072] uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      required
                      {...register("name")}
                      placeholder="Enter your name"
                      className="bg-white border border-[#cacacb] w-full px-4 py-3 outline-none text-[14px] font-medium text-[#111111]"
                      data-testid="input-event-name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] font-medium text-[#707072] uppercase tracking-wider">Phone Number</label>
                      <input
                        type="tel"
                        required
                        {...register("phone")}
                        placeholder="Phone number"
                        className="bg-white border border-[#cacacb] w-full px-4 py-3 outline-none text-[14px] font-medium text-[#111111]"
                        data-testid="input-event-phone"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] font-medium text-[#707072] uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        required
                        {...register("email")}
                        placeholder="Email address"
                        className="bg-white border border-[#cacacb] w-full px-4 py-3 outline-none text-[14px] font-medium text-[#111111]"
                        data-testid="input-event-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] font-medium text-[#707072] uppercase tracking-wider">Event Type</label>
                      <select
                        required
                        {...register("eventType")}
                        className="bg-white border border-[#cacacb] w-full px-4 py-3 outline-none text-[14px] font-medium text-[#111111] cursor-pointer"
                        data-testid="select-event-type"
                      >
                        <option value="">Select type...</option>
                        <option value="Wedding">Wedding / Sangeet</option>
                        <option value="Corporate">Corporate Meeting</option>
                        <option value="Seminar">Conference / Seminar</option>
                        <option value="Birthday">Birthday Party</option>
                        <option value="Other">Other Celebration</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] font-medium text-[#707072] uppercase tracking-wider">Event Date</label>
                      <input
                        type="date"
                        required
                        {...register("date")}
                        className="bg-white border border-[#cacacb] w-full px-4 py-3 outline-none text-[14px] font-medium text-[#111111]"
                        data-testid="input-event-date"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-medium text-[#707072] uppercase tracking-wider">Estimated Guests</label>
                    <input
                      type="number"
                      required
                      min="10"
                      max="1000"
                      {...register("guests")}
                      placeholder="e.g. 150"
                      className="bg-white border border-[#cacacb] w-full px-4 py-3 outline-none text-[14px] font-medium text-[#111111]"
                      data-testid="input-event-guests"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-medium text-[#707072] uppercase tracking-wider">Special Requests</label>
                    <textarea
                      rows={4}
                      {...register("message")}
                      placeholder="Details about catering, decor, or stay arrangements..."
                      className="bg-white border border-[#cacacb] w-full px-4 py-3 outline-none text-[14px] font-medium text-[#111111] resize-none"
                      data-testid="input-event-message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#111111] text-white py-4 rounded-full font-medium text-[15px] hover:bg-[#333] transition-colors mt-2"
                    data-testid="button-event-submit"
                  >
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
