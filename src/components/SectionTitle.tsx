"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      }
    });

    if (subtitle) {
      tl.fromTo(".section-subtitle",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    }

    tl.fromTo(".section-title",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      subtitle ? "-=0.4" : "0"
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`flex flex-col gap-2 ${centered ? "items-center text-center" : "items-start"}`}>
      {subtitle && (
        <span className="section-subtitle font-medium text-[12px] text-[#707072] uppercase tracking-wider">
          {subtitle}
        </span>
      )}
      <h2 className="section-title font-display text-[48px] md:text-[64px] text-[#111111] leading-[0.9] uppercase tracking-[-0.01em]">
        {title}
      </h2>
    </div>
  );
}