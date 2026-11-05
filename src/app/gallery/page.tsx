"use client";

import { useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { useHotelMateRooms } from "@/hooks/useHotelMateRooms";

export default function GalleryPage() {
  const { data, isPending, isError, error, refetch } = useHotelMateRooms();
  const images = useMemo(
    () => [...new Set([...(data?.images ?? []), ...(data?.rooms.flatMap((room) => room.images) ?? [])])],
    [data],
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 pt-20">
        <Breadcrumb />

        <section className="relative min-h-[42vh] flex items-center justify-center overflow-hidden bg-[#111111]">
          {images[0] && <img src={images[0]} alt="The Mountain Resort in Karjat" className="absolute inset-0 w-full h-full object-cover opacity-40" />}
          <div className="relative z-10 text-center px-6 py-20">
            <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-6">The Mountain Resort · By Redwings</p>
            <h1 className="font-display text-[56px] md:text-[96px] text-white uppercase leading-[0.9]">Resort Gallery</h1>
            <p className="text-white/75 text-[16px] md:text-[18px] mt-6">Photos of the estate, guest rooms and resort spaces in Karjat.</p>
          </div>
        </section>

        <section className="py-20 px-4 md:px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-3">Photo Collection</p>
                <h2 className="font-display text-[42px] md:text-[64px] text-[#111111] uppercase leading-[0.9]">Explore the Resort</h2>
              </div>
              {!isPending && !isError && <span className="text-[#707072] text-[13px]">{images.length} photos</span>}
            </div>

            {isPending && <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3" aria-label="Loading gallery">
              {Array.from({ length: 12 }, (_, index) => <div key={index} className="aspect-[4/3] bg-[#f0f0f0] animate-pulse" />)}
            </div>}

            {isError && <div className="text-center py-20" role="alert">
              <p className="text-[#707072]">{error instanceof Error ? error.message : "Gallery images could not be loaded."}</p>
              <button onClick={() => refetch()} className="mt-5 bg-[#111111] text-white px-6 py-3 rounded-full text-[14px] font-medium">Try again</button>
            </div>}

            {!isPending && !isError && images.length > 0 && <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {images.map((src, index) => (
                <figure key={src} className="break-inside-avoid overflow-hidden bg-[#f5f5f5]">
                  <img src={src} alt={`The Mountain Resort Karjat photo ${index + 1}`} className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700" loading={index < 4 ? "eager" : "lazy"} />
                </figure>
              ))}
            </div>}

            {!isPending && !isError && images.length === 0 && <p className="text-center text-[#707072] py-20">No gallery photos are available right now.</p>}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
