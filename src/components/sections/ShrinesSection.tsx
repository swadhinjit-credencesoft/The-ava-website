"use client";

const shrines = [
  { name: "Dharmastala",    dist: "67 km", img: "/dharmasala.jpg" },
  { name: "Hornadu",        dist: "70 km", img: "/hornadu.jpg" },
  { name: "Shringeri",      dist: "72 km", img: "/sringeri.jpg" },
  { name: "Belur Temples",  dist: "26 km", img: "/belur.jpg" },
];

export function ShrinesSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#111111]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Spiritual Journey</p>
          <h2 className="font-display text-[56px] md:text-[72px] text-white uppercase leading-[0.9]">SACRED SHRINES<br />&amp; TEMPLES</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {shrines.map((shrine) => (
            <div key={shrine.name} className="shrine-card group relative overflow-hidden aspect-[3/4]">
              <img src={shrine.img} alt={shrine.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-[24px] text-white uppercase">{shrine.name}</h3>
                <span className="text-[#C9A84C] text-[12px] font-medium">{shrine.dist}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
