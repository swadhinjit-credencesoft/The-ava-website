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
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {features.map((feature, idx) => {
        // Dynamically get the icon component from lucide-react
        // @ts-ignore - dynamic access
        const IconComponent = Icons[feature.icon] || Icons.CheckCircle;
        
        return (
          <div 
            key={idx} 
            className="feature-item flex flex-col items-center justify-center gap-4 p-8 bg-[#f5f5f5] rounded-none border border-[#cacacb] hover:border-[#111111] transition-colors"
            data-testid={`feature-item-${idx}`}
          >
            <IconComponent size={32} className="text-[#111111] stroke-[1.5]" />
            <span className="font-medium text-[14px] text-[#111111] text-center">
              {feature.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}