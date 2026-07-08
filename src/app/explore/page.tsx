"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { PageHero } from "@/components/sections/PageHero";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { exploreArticles } from "@/data/explore";

export default function ExplorePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 pt-20">
        <Breadcrumb />
        <PageHero />

        <section className="py-32 px-4 md:px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">Discover</p>
              <h2 className="font-display text-[56px] md:text-[80px] text-[#111111] uppercase leading-[0.9]">EXPLORE<br />CHIKKAMAGALURU</h2>
              <p className="text-[#707072] text-[15px] font-medium mt-6 max-w-2xl mx-auto leading-relaxed">
                Curated guides to help you make the most of your stay — from treks and temples to road trips and wildlife safaris.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {exploreArticles.map((article) => (
                <Link key={article.id} href={`/explore/${article.id}`} className="group flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#f5f5f5]">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#C9A84C] text-[#111111] px-4 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider">{article.category}</span>
                    </div>
                  </div>
                  <div className="pt-6 pb-6 border-b border-[#e5e5e5]">
                    <h3 className="font-display text-[26px] text-[#111111] uppercase leading-tight">{article.title.replace(" —", ":")}</h3>
                    <p className="text-[#707072] text-[14px] font-medium leading-relaxed mt-2">{article.excerpt}</p>
                    <span className="inline-block mt-4 text-[#C9A84C] text-[12px] uppercase tracking-wider font-medium group-hover:underline">Read More</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaStrip />
      </main>

      <Footer />
    </div>
  );
}
