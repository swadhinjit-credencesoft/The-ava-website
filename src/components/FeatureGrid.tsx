"use client";

import * as Icons from "lucide-react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function FeatureGrid() {
  const features = useSelector((state: RootState) => state.data.hotel.features);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".feature-item",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.04,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {features.map((feature, idx) => {
        // Dynamically get the icon component from lucide-react
        // @ts-ignore - dynamic access
        const IconComponent = Icons[feature.icon] || Icons.CheckCircle;

        return (
          <div
            key={idx}
            className="feature-item group flex flex-col items-center justify-between text-center p-6 md:p-8 bg-white border border-[#e5dfd5] hover:border-[#111111] hover:shadow-md transition-all duration-300 rounded-lg"
            data-testid={`feature-item-${idx}`}
          >
            <div className="w-14 h-14 rounded-full bg-[#f8f6f0] group-hover:bg-[#111111] group-hover:text-[#C9A84C] flex items-center justify-center transition-colors duration-300 mb-4">
              <IconComponent size={26} className="text-[#111111] group-hover:text-[#C9A84C] stroke-[1.75] transition-colors" />
            </div>

            <div>
              {feature.category && (
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C9A84C] block mb-1">
                  {feature.category}
                </span>
              )}
              <h3 className="font-display text-[18px] md:text-[20px] text-[#111111] uppercase leading-tight">
                {feature.name}
              </h3>
              {feature.description && (
                <p className="text-[12px] text-[#707072] font-medium mt-2 leading-relaxed line-clamp-2">
                  {feature.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
