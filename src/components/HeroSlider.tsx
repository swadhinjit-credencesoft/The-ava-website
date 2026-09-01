"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function HeroSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(".hero-label",  { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" })
      .fromTo(".hero-title",  { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, stagger: 0.12, ease: "power4.out" }, "-=0.4")
      .fromTo(".hero-sub",    { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, "-=0.5")
      .fromTo(".hero-ctas",   { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .fromTo(".hero-badge",  { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.5)" }, "-=0.4")
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

      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="hero-video absolute inset-0 w-full h-[120%] object-cover"
        style={{ filter: "brightness(0.95) saturate(1.05)" }}
      >
        <source src="https://bookonelocal.in/cdn/Chikmagalur%20Travel%20Film%20_%204k%20Cinematic%20Video%20(online-video-cutter.com).mp4" type="video/mp4" />
      </video>

      {/* Gradient overlays — lighter for a brighter, premium look */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" style={{ zIndex: 2 }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" style={{ zIndex: 2 }} />

      {/* Main content */}
      <div className="hero-inner relative flex flex-col h-full max-w-screen-2xl mx-auto px-8 md:px-16" style={{ zIndex: 10 }}>
        <div className="flex-1 flex flex-col justify-center pt-20 pb-32">
          {/* Gold label */}
          <div className="hero-label flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <p className="text-[#C9A84C] text-[11px] md:text-[13px] uppercase tracking-[0.5em] font-medium">
              Haandi · Chikkamagaluru · Karnataka
            </p>
          </div>

          {/* Headline */}
          <div className="overflow-hidden mb-2">
            <h1 className="hero-title font-display text-[clamp(34px,9vw,120px)] leading-[0.9] tracking-tight whitespace-nowrap bg-gradient-to-b from-white via-white to-[#C9A84C] bg-clip-text text-transparent">
              THE AVA HOTEL
            </h1>
          </div>

          {/* Subtitle */}
          <p className="hero-sub text-white/90 text-[clamp(13px,3.2vw,28px)] font-medium leading-snug mb-6 whitespace-nowrap">
            A Peaceful Luxury Stay in the Heart of Chikkamagaluru
          </p>

          {/* Description */}
          <p className="hero-sub text-white/70 text-[15px] md:text-[17px] max-w-xl leading-relaxed mb-10">
            Experience comfortable accommodation surrounded by the coffee plantations and scenic
            landscapes of Karnataka&rsquo;s Western Ghats. Located on NH&nbsp;173 near Haandi,
            The&nbsp;AVA Hotel is an ideal base for exploring Chikkamagaluru, Mullayanagiri, Belur,
            Sringeri and other popular destinations.
          </p>

          {/* CTAs */}
          <div className="hero-ctas flex flex-wrap gap-4">
            <Link
              href="https://bookone.io/Hotel-The-Royal-Shalimar-Boutique-Stay?bookingEngine=true"
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
              Explore Rooms
            </Link>
          </div>
        </div>

        <div className="pb-10 hidden md:flex items-center justify-end border-t border-white/10 pt-6" />
      </div>

      {/* Right side: gold badge */}
      <div className="hero-badge absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3" style={{ zIndex: 10 }}>
        <div className="flex flex-col items-center text-center bg-[#C9A84C]/10 border border-[#C9A84C]/30 px-5 py-6 backdrop-blur-sm">
          <span className="font-display text-[42px] text-[#C9A84C] leading-none">10+</span>
          <span className="text-white/60 text-[10px] uppercase tracking-[0.25em] mt-1 max-w-[80px]">Years of Excellence</span>
        </div>
        <div className="w-px h-16 bg-white/20" />
        <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
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
