"use client";

const experiences = [
  { title: "BONFIRE NIGHTS",  desc: "Gather under the stars around a warm bonfire amidst Karnataka's finest coffee plantations.", img: "/bon-fire-in-chilling.jpg", badge: "Evening" },
  { title: "WILDLIFE SAFARI", desc: "Explore Bhadra Wildlife Sanctuary and encounter magnificent wildlife in their natural habitat.", img: "/bhadra-wildlife-sanctuary.webp", badge: "Adventure" },
  { title: "MOUNTAIN TREKS", desc: "Trek to Mullayangiri — the highest peak in Karnataka — through pristine Western Ghats trails.", img: "/trekking.webp", badge: "Trekking" },
];

export function ExperiencesSection() {
  return (
    <section className="py-32 px-4 md:px-8 bg-[#f5f5f5]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Activities</p>
          <h2 className="font-display text-[56px] md:text-[80px] text-[#111111] uppercase leading-[0.9]">UNFORGETTABLE<br />MOMENTS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {experiences.map((exp) => (
            <div key={exp.title} className="exp-card group relative overflow-hidden bg-[#111111]" style={{ aspectRatio: "3/4" }}>
              <img src={exp.img} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="bg-[#C9A84C] text-[#111111] px-4 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider">{exp.badge}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-[36px] text-white uppercase leading-tight">{exp.title}</h3>
                <p className="text-white/70 text-[13px] mt-3 font-medium">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
