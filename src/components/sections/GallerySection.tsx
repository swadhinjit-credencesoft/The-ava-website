"use client";

const cdn = "https://bookonelocal.in/cdn";
const galleryImages = [
  { src: `${cdn}/DSC08846.avif`, span: "row-span-2" },
  { src: `${cdn}/DSC08812.avif`, span: "" },
  { src: `${cdn}/DSC08849.avif`, span: "" },
  { src: `${cdn}/DSC08831.avif`, span: "row-span-2" },
  { src: `${cdn}/2026-04-02-073101502-DSC08801.jpg`, span: "" },
  { src: `${cdn}/DSC08837.avif`, span: "" },
  { src: `${cdn}/2026-04-02-081007160-DSC08828.jpg`, span: "" },
  { src: `${cdn}/2026-04-02-082005702-DSC08852.jpg`, span: "row-span-2" },
  { src: `${cdn}/DSC08849.avif`, span: "" },
  { src: `${cdn}/2026-04-02-081456220-DSC08807.jpg`, span: "" },
  { src: `${cdn}/DSC08801.avif`, span: "" },
  { src: `${cdn}/2026-04-02-073125239-DSC08769.jpg`, span: "" },
];

export function GallerySection() {
  return (
    <section className="py-32 px-4 md:px-8 bg-[#111111]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] font-medium mb-4">Visual Story</p>
          <h2 className="sec-title font-display text-[clamp(38px,8vw,80px)] text-white uppercase leading-[0.9]">OUR <span className="bg-gradient-to-r from-[#C9A84C] to-[#e6cd7a] bg-clip-text text-transparent">GALLERY</span></h2>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
          {galleryImages.map((img, i) => <div key={i} className={`gallery-item break-inside-avoid overflow-hidden group cursor-pointer ${img.span}`}><img src={img.src} alt={`The Mountain Resort Karjat gallery ${i + 1}`} className="w-full object-cover group-hover:scale-105 transition-transform duration-700" style={{ aspectRatio: i % 3 === 0 ? "3/4" : "4/3" }} loading="lazy" /></div>)}
        </div>
      </div>
    </section>
  );
}
