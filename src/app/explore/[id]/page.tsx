"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { exploreArticles } from "@/data/explore";

export default function ExploreArticlePage() {
  const { id } = useParams() as { id: string };
  const article = exploreArticles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-1 pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-[56px] text-[#111111]">Article Not Found</h1>
            <Link href="/explore" className="text-[#C9A84C] underline mt-4 inline-block">Back to Explore</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const contentHtml = article.content
    .replace(/<a /g, '<a class="text-[#C9A84C] underline hover:opacity-80 transition-opacity" ')
    .replace(/<h2>/g, '<h2 class="font-display text-[28px] text-[#111111] uppercase mt-12 mb-4">')
    .replace(/<b>/g, '<b class="font-medium text-[#111111]">')
    .replace(/<p>/g, '<p class="text-[#707072] text-[15px] font-medium leading-relaxed mb-4">');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 pt-20">
        <div className="px-8 py-4 bg-[#f5f5f5] border-b border-[#e5e5e5]">
          <p className="text-[#707072] text-[13px] font-medium">
            <Link href="/" className="hover:text-[#111111] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/explore" className="hover:text-[#111111] transition-colors">Explore</Link>
            <span className="mx-2">/</span>
            <span className="text-[#111111]">{article.title.replace(/ —.*$/, "")}</span>
          </p>
        </div>

        <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.45)" }}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-8">
            <span className="bg-[#C9A84C] text-[#111111] px-4 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider mb-6">{article.category}</span>
            <h1 className="font-display text-[48px] md:text-[72px] text-white uppercase leading-[0.9] max-w-4xl">{article.title}</h1>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <Link href="/explore" className="inline-flex items-center gap-2 text-[#C9A84C] text-[13px] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity mb-10">
              <ArrowLeft size={16} /> Back to Explore
            </Link>

            <div className="prose-custom" dangerouslySetInnerHTML={{ __html: contentHtml }} />

            <div className="mt-16 pt-12 border-t border-[#e5e5e5] text-center">
              <h2 className="font-display text-[32px] text-[#111111] uppercase mb-4">Ready to Visit?</h2>
              <p className="text-[#707072] text-[15px] font-medium max-w-lg mx-auto leading-relaxed mb-8">
                Book your stay at The AVA and experience the best of Chikkamagaluru.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/rooms" className="bg-[#111111] text-white px-8 py-3 rounded-full text-[14px] font-medium hover:bg-[#333] transition-colors">View Rooms</Link>
                <Link href="/contact" className="border border-[#111111] text-[#111111] px-8 py-3 rounded-full text-[14px] font-medium hover:bg-[#111111] hover:text-white transition-colors">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>

        <CtaStrip />
      </main>

      <Footer />
    </div>
  );
}
