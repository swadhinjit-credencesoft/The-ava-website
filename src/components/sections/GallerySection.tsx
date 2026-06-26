"use client";

const galleryImages = [
  { src: "/trekking.webp", span: "row-span-2" },
  { src: "/avadining.jpg", span: "" },
  { src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80", span: "" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80", span: "" },
  { src: "/indooroutdoorgames.jpg", span: "" },
  { src: "/Royal-Shalimar-boutique-stay-chikmagalur-14-2.webp", span: "" },
  { src: "/quardroom.webp", span: "row-span-2" },
  { src: "/plantation.jpg", span: "" },
  { src: "/executiveroom1.jpeg", span: "" },
  { src: "/estateview.jpeg", span: "" },
  { src: "/bon-fire-in-chilling.jpg", span: "" },
];

export function GallerySection() {
  return (
    <section className="py-32 px-4 md:px-8 bg-[#111111]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] font-medium mb-4">Visual Story</p>
          <h2 className="font-display text-[56px] md:text-[80px] text-white uppercase leading-[0.9]">OUR GALLERY</h2>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
          {galleryImages.map((img, i) => (
            <div key={i} className="gallery-item break-inside-avoid overflow-hidden group cursor-pointer">
              <img
                src={img.src}
                alt={`Gallery ${i + 1}`}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                style={{ aspectRatio: i % 3 === 0 ? "3/4" : "4/3" }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
