"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32 bg-[#fafafa]">
        <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] font-medium mb-4">
          Page Not Found
        </p>
        <h1 className="font-display text-[72px] md:text-[110px] text-[#111111] leading-none mb-6">
          404
        </h1>
        <p className="text-[#707072] text-[16px] md:text-[18px] max-w-md font-medium leading-relaxed mb-10">
          The page you are looking for doesn&apos;t exist or has been moved. Discover our luxury rooms or return home.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="bg-[#111111] text-white px-8 py-3.5 rounded-full text-[14px] font-medium hover:bg-[#333] transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/rooms"
            className="border border-[#111111] text-[#111111] px-8 py-3.5 rounded-full text-[14px] font-medium hover:bg-[#111111] hover:text-white transition-colors"
          >
            Explore Rooms
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
