"use client";

import Link from "next/link";
import { useHotelMateRooms } from "@/hooks/useHotelMateRooms";

export function GallerySection() {
  const { data, isPending, isError } = useHotelMateRooms();
  const images = [...new Set([...(data?.images ?? []), ...(data?.rooms.flatMap((room) => room.images) ?? [])])].slice(0, 12);

  return (
    <section className="py-32 px-4 md:px-8 bg-[#111111]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] font-medium mb-4">Visual Story</p>
          <h2 className="sec-title font-display text-[clamp(38px,8vw,80px)] text-white uppercase leading-[0.9]">OUR <span className="bg-gradient-to-r from-[#C9A84C] to-[#e6cd7a] bg-clip-text text-transparent">GALLERY</span></h2>
          <Link href="/gallery" className="inline-flex mt-8 border border-white/30 text-white px-7 py-3 rounded-full text-[13px] font-medium hover:bg-white/10 transition-colors">View Full Gallery</Link>
        </div>
        {isPending && <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2" aria-label="Loading gallery">
          {Array.from({ length: 8 }, (_, index) => <div key={index} className="aspect-[4/3] bg-white/10 animate-pulse" />)}
        </div>}
        {isError && <p className="text-white/60 text-center py-10">Gallery images are temporarily unavailable.</p>}
        {!isPending && !isError && images.length > 0 && (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
            {images.map((src, index) => (
              <Link key={src} href="/gallery" className="gallery-item block break-inside-avoid overflow-hidden group">
                <img src={src} alt={`The Mountain Resort Karjat gallery ${index + 1}`} className="w-full object-cover group-hover:scale-105 transition-transform duration-700" style={{ aspectRatio: index % 3 === 0 ? "3/4" : "4/3" }} loading="lazy" />
              </Link>
            ))}
          </div>
        )}
        {!isPending && !isError && images.length === 0 && <p className="text-white/60 text-center py-10">No gallery images are available right now.</p>}
      </div>
    </section>
  );
}
