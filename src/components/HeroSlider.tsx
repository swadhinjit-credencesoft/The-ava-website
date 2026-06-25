"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const BG_IMAGES = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=2400&q=90",
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=2400&q=90",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=2400&q=90",
];

export function HeroSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((i) => (i + 1) % BG_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // Show video as soon as first frame is decoded (faster than canplaythrough)
    const onLoaded = () => setVideoLoaded(true);
    // If the video errors (CORS, slow network, blocked), keep image fallback visible
    const onError = () => setVideoLoaded(false);
    v.addEventListener("loadeddata", onLoaded);
    v.addEventListener("error", onError);
    // Force load in case the browser deferred it
    v.load();
    return () => {
      v.removeEventListener("loadeddata", onLoaded);
      v.removeEventListener("error", onError);
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(".hero-label",  { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" })
      .fromTo(".hero-title",  { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, stagger: 0.12, ease: "power4.out" }, "-=0.4")
      .fromTo(".hero-sub",    { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, "-=0.5")
      .fromTo(".hero-ctas",   { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .fromTo(".hero-badge",  { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.5)" }, "-=0.4")
      .fromTo(".hero-bar",    { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.3");
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-[100dvh] min-h-[700px] overflow-hidden bg-[#111111]">

      {/* Background — video preferred, image fallback with Ken Burns */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ filter: "brightness(0.38)" }}
      >
        <source src="https://bookonelocal.in/cdn/Chikmagalur%20Travel%20Film%20_%204k%20Cinematic%20Video%20(online-video-cutter.com).mp4" type="video/mp4" />
      </video>

      {/* Ken Burns image slideshow — always visible, hidden when video plays */}
      {BG_IMAGES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-2000 ${!videoLoaded && i === activeIdx ? "opacity-100" : "opacity-0"}`}
          style={{ zIndex: 1 }}
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${src})`,
              filter: "brightness(0.38)",
              animation: i === activeIdx ? "kenburns 7s ease-out forwards" : "none",
            }}
          />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" style={{ zIndex: 2 }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" style={{ zIndex: 2 }} />

      {/* Main content */}
      <div className="relative flex flex-col h-full max-w-screen-2xl mx-auto px-8 md:px-16" style={{ zIndex: 10 }}>
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
            <h1 className="hero-title font-display text-[72px] sm:text-[96px] md:text-[130px] lg:text-[152px] text-white uppercase leading-[0.82] tracking-tight">
              THE      AVA       </h1>
          </div>
          {/* <div className="overflow-hidden mb-8">
            <h1 className="hero-title font-display text-[72px] sm:text-[96px] md:text-[130px] lg:text-[152px] text-white uppercase leading-[0.82] tracking-tight">
              AVA            </h1>
          </div> */}

          {/* Subtitle */}
          <p className="hero-sub text-white/70 text-[16px] md:text-[20px] font-medium max-w-xl leading-relaxed mb-10">
            A cinematic luxury escape on NH&nbsp;173 — where the Western Ghats meet your finest hour.
          </p>

          {/* CTAs */}
          <div className="hero-ctas flex flex-wrap gap-4">
            <Link
              href="/rooms"
              className="bg-[#C9A84C] text-[#111111] px-10 py-4 rounded-full font-medium text-[15px] hover:bg-[#b8943f] transition-all hover:scale-[1.02] active:scale-95"
              data-testid="button-hero-explore"
            >
              Explore Rooms
            </Link>
            <Link
              href="/tour"
              className="border border-white/40 text-white px-10 py-4 rounded-full font-medium text-[15px] backdrop-blur-sm hover:bg-white/10 transition-all"
              data-testid="button-hero-discover"
            >
              Discover Nearby
            </Link>
          </div>
        </div>

        {/* Feature bar — bottom */}
        <div className="hero-bar pb-10 hidden md:flex items-center gap-10 border-t border-white/10 pt-6">
          {[
            { label: "Check-in", value: "12:00 PM" },
            { label: "Check-out", value: "24 Hours" },
            { label: "Location", value: "NH 173, Haandi" },
            { label: "Phone", value: "+91 7899738550" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col">
              <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">{item.label}</span>
              <span className="text-white text-[13px] font-medium mt-1">{item.value}</span>
            </div>
          ))}
          {/* Slide dots */}
          <div className="ml-auto flex gap-2">
            {BG_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`rounded-full transition-all duration-300 ${activeIdx === i ? "w-6 h-2 bg-[#C9A84C]" : "w-2 h-2 bg-white/30 hover:bg-white/60"}`}
                data-testid={`button-hero-slide-${i}`}
              />
            ))}
          </div>
        </div>
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
