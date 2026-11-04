"use client";

const spaces = [
  { name: "Mountain View Destination", capacity: "Up to 500 guests", image: "https://bookonelocal.in/cdn/DSC08846.avif" },
  { name: "Wedding Lawns", capacity: "100–400 guests", image: "https://bookonelocal.in/cdn/DSC08849.avif" },
  { name: "Poolside Celebrations", capacity: "50–150 guests", image: "https://bookonelocal.in/cdn/DSC08837.avif" },
  { name: "Private Event Spaces", capacity: "20–100 guests", image: "https://bookonelocal.in/cdn/DSC08831.avif" },
];

export function ShrinesSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#111111]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="sec-label text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Celebrate Together</p>
          <h2 className="sec-title font-display text-[clamp(34px,7vw,72px)] text-white uppercase leading-[0.9]">SPACES FOR EVERY<br /><span className="bg-gradient-to-r from-[#C9A84C] to-[#e6cd7a] bg-clip-text text-transparent">CELEBRATION</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {spaces.map((space) => (
            <div key={space.name} className="shrine-card group relative overflow-hidden aspect-[3/4]">
              <img src={space.image} alt={space.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5"><h3 className="font-display text-[24px] text-white uppercase">{space.name}</h3><span className="text-[#C9A84C] text-[12px] font-medium">{space.capacity}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
