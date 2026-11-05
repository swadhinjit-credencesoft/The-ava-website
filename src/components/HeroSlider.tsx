"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function HeroSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(".hero-label",  { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" })
      .fromTo(".hero-title",  { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, stagger: 0.12, ease: "power4.out" }, "-=0.4")
      .fromTo(".hero-sub",    { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, "-=0.5")
      .fromTo(".hero-ctas",   { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .fromTo(".hero-bar",    { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.3");

    gsap.to(".hero-inner", {
      yPercent: -18,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.fromTo(".hero-video", { yPercent: 0, scale: 1 }, {
      yPercent: 12,
      scale: 1.08,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-[100dvh] min-h-[700px] overflow-hidden bg-[#111111]">

      {/* Resort hero video with a still image available while it loads */}
      <video
        src="https://bookonelocal.in/cdn/Mountain+Resort+Montage.mp4"
        poster="https://bookonelocal.in/cdn/DSC08846.avif"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="hero-video absolute inset-0 w-full h-[120%] object-cover"
        style={{ filter: "brightness(0.95) saturate(1.05)" }}
      />

      {/* Gradient overlays — lighter for a brighter, premium look */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" style={{ zIndex: 2 }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" style={{ zIndex: 2 }} />

      {/* Main content */}
      <div className="hero-inner relative flex flex-col h-full max-w-screen-2xl mx-auto px-8 md:px-16" style={{ zIndex: 10 }}>
        <div className="flex-1 flex flex-col justify-end pt-12 pb-24">
          {/* Gold label */}
          <div className="hero-label flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <p className="text-[#C9A84C] text-[11px] md:text-[13px] uppercase tracking-[0.5em] font-medium">
              KARJAT · MAHARASHTRA · BY REDWINGS
            </p>
          </div>

          {/* Headline */}
          <div className="overflow-hidden mb-2">
            <h1 className="hero-title font-display text-[clamp(29px,8vw,120px)] leading-[0.9] tracking-tight whitespace-nowrap text-white">
              THE MOUNTAIN RESORT
            </h1>
          </div>

          {/* Subtitle */}
          <p className="hero-sub text-white/90 text-[clamp(13px,3.2vw,28px)] font-medium leading-snug mb-6 whitespace-nowrap">
            Mountain Views. Private Estate. Karjat.
          </p>

          {/* Description */}
          <p className="hero-sub text-white/85 text-[15px] md:text-[17px] max-w-xl leading-relaxed mb-10">
            Escape to a private 7-acre mountain estate with open lawns, thoughtfully designed stays,
            poolside experiences and celebration spaces near Mumbai and Pune.
          </p>

          {/* CTAs */}
          <div className="hero-ctas flex flex-wrap gap-4">
            <Link
              href="https://bookone.io/the-mountain-by-redwings?bookingEngine=true"
              className="bg-[#C9A84C] text-[#111111] px-10 py-4 rounded-full font-medium text-[15px] hover:bg-[#b8943f] transition-all hover:scale-[1.02] active:scale-95"
              data-testid="button-hero-check-availability"
            >
              Check Availability
            </Link>
            <Link
              href="/rooms"
              className="border border-white/40 text-white px-10 py-4 rounded-full font-medium text-[15px] backdrop-blur-sm hover:bg-white/10 transition-all"
              data-testid="button-hero-explore"
            >
              Explore Stays
            </Link>
          </div>
        </div>

        <div className="pb-10 hidden md:flex items-center justify-end border-t border-white/10 pt-6" />
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ zIndex: 10 }}>
        <div className="w-px h-12 bg-white/20 overflow-hidden relative">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-[#C9A84C] animate-scroll-line" />
        </div>
        <span className="text-white/40 text-[10px] uppercase tracking-[0.35em]">Scroll</span>
      </div> */}
    </div>
  );
}
