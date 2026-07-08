"use client";

import { useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, Users, Maximize, IndianRupee } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/sections/Breadcrumb";

gsap.registerPlugin(ScrollTrigger);

export function RoomDetailClient() {
  const params = useParams();
  const hotel = useSelector((state: RootState) => state.data.hotel);
  const room = hotel.rooms.find((r) => r.id === params.id?.toString().replace("-room", ""));
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".detail-item", { y: 30, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out",
      scrollTrigger: { trigger: ".detail-item", start: "top 85%" },
    });
  }, { scope: containerRef });

  if (!room) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-1 pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-[48px] text-[#111111] uppercase">Room Not Found</h1>
            <Link href="/rooms" className="text-[#C9A84C] mt-4 inline-block">View all rooms</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white" ref={containerRef}>
      <Navbar />
      <main className="flex-1 pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: room.name,
              description: room.description,
              image: room.image,
              offers: {
                "@type": "Offer",
                price: room.price.replace(/[^0-9.]/g, ""),
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                url: hotel.bookingEngineUrl,
              },
            }),
          }}
        />
        <Breadcrumb />

        <section className="relative w-full h-[60vh] overflow-hidden">
          <img src={room.image} alt={room.name} className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.45)" }} />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-8">
            <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-6">{room.type}</p>
            <h1 className="font-display text-[64px] md:text-[100px] text-white uppercase leading-[0.85]">{room.name}</h1>
            <p className="text-white/80 text-[18px] max-w-lg mt-6 font-medium">From {room.price} / night</p>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="detail-item flex items-center gap-4 p-6 bg-white border border-[#e5e5e5]">
                <IndianRupee size={24} className="text-[#C9A84C] flex-shrink-0" />
                <div>
                  <p className="text-[#707072] text-[11px] uppercase tracking-wider font-medium">From</p>
                  <p className="text-[#111111] font-display text-[24px]">{room.price}<span className="text-[#707072] text-[13px] font-medium">/night</span></p>
                </div>
              </div>
              <div className="detail-item flex items-center gap-4 p-6 bg-white border border-[#e5e5e5]">
                <Maximize size={24} className="text-[#C9A84C] flex-shrink-0" />
                <div>
                  <p className="text-[#707072] text-[11px] uppercase tracking-wider font-medium">Room Size</p>
                  <p className="text-[#111111] font-display text-[24px]">{room.size}</p>
                </div>
              </div>
              <div className="detail-item flex items-center gap-4 p-6 bg-white border border-[#e5e5e5]">
                <Users size={24} className="text-[#C9A84C] flex-shrink-0" />
                <div>
                  <p className="text-[#707072] text-[11px] uppercase tracking-wider font-medium">Occupancy</p>
                  <p className="text-[#111111] font-display text-[24px]">{room.occupancy}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 md:px-8">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">Details</p>
              <h2 className="font-display text-[52px] md:text-[68px] text-[#111111] uppercase leading-[0.9] mb-8">{room.name}</h2>
              <p className="text-[#707072] text-[16px] leading-relaxed font-medium">{room.description}</p>
              <div className="mt-10 flex gap-4 flex-wrap">
                <a href={hotel.bookingEngineUrl} target="_blank" rel="noopener noreferrer" className="bg-[#111111] text-white px-10 py-4 rounded-full font-medium text-[15px] hover:bg-[#333] transition-colors inline-block" data-testid={`button-book-${room.id}`}>
                  Book This Room
                </a>
                <a href={`tel:${hotel.phone.replace(/\s/g, "")}`} className="border border-[#cacacb] text-[#111111] px-10 py-4 rounded-full font-medium text-[15px] hover:border-[#111111] transition-colors" data-testid={`button-call-${room.id}`}>
                  Call to Enquire
                </a>
              </div>
            </div>
            <div>
              <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">Amenities</p>
              <h3 className="font-display text-[32px] text-[#111111] uppercase mb-6">Room Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {room.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 p-4 bg-[#f5f5f5] detail-item">
                    <CheckCircle size={16} className="text-[#C9A84C] flex-shrink-0" />
                    <span className="font-medium text-[14px] text-[#111111]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 md:px-8 bg-[#f5f5f5]">
          <div className="max-w-screen-xl mx-auto">
            <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-4">Gallery</p>
            <h2 className="font-display text-[52px] md:text-[68px] text-[#111111] uppercase leading-[0.9] mb-12">PHOTOS</h2>
            <div className="aspect-[16/9] overflow-hidden bg-[#e5e5e5] mb-4">
              <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
            </div>
            <p className="text-[#707072] text-[13px] font-medium italic">More photos coming soon. Contact us for a video walkthrough.</p>
            {/*
              Full gallery grid — drop in real image paths here:
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <div className="aspect-[4/3] overflow-hidden bg-[#e5e5e5]">
                  <img src="/rooms/ROOMID-photo-1.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] overflow-hidden bg-[#e5e5e5]">
                  <img src="/rooms/ROOMID-photo-2.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                ...
              </div>
            */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
