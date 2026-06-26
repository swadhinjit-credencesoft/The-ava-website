"use client";

import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { RootState } from "@/store";

export function PageHero() {
  const pathname = usePathname();
  const pages = useSelector((state: RootState) => state.data.pages);
  const page = pages[pathname];
  const { image, brightness = 0.45, label, title, subtitle } = page?.hero || { image: "", label: "", title: "", subtitle: "" };
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <img
        src={image}
        alt={label}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: `brightness(${brightness})` }}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-8">
        <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-6">{label}</p>
        <h1 className="font-display text-[64px] md:text-[100px] text-white uppercase leading-[0.85]">{title}</h1>
        <p className="text-white/80 text-[18px] max-w-lg mt-6 font-medium">{subtitle}</p>
      </div>
    </section>
  );
}
