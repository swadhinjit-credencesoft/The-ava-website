"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSlider } from "@/components/HeroSlider";
import { BookingBar } from "@/components/BookingBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { RoomsSection } from "@/components/sections/RoomsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { CampaignNatureSection } from "@/components/sections/CampaignNatureSection";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { RestaurantSection } from "@/components/sections/RestaurantSection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { HowToBookSection } from "@/components/sections/HowToBookSection";
import { CampaignEventsSection } from "@/components/sections/CampaignEventsSection";
import { AttractionsSection } from "@/components/sections/AttractionsSection";
import { ShrinesSection } from "@/components/sections/ShrinesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CtaSection } from "@/components/sections/CtaSection";

gsap.registerPlugin(ScrollTrigger);

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
        <HeroSlider />
        <section className="bg-[#111111]">
          <div className="max-w-screen-xl mx-auto">
            <BookingBar dark />
          </div>
        </section>
        <AboutSection />
        <StatsSection />
        <RoomsSection />
        <WhyChooseUsSection />
        <CampaignNatureSection />
        <AmenitiesSection />
        <FeaturesSection />
        <GallerySection />
        <RestaurantSection />
        <ExperiencesSection />
        <HowToBookSection />
        <CampaignEventsSection />
        <AttractionsSection />
        <ShrinesSection />
        <TestimonialsSection />
        <AwardsSection />
        <LocationSection />
        <FaqSection />
        <ContactSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
