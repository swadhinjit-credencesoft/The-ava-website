"use client";

const experiences = [
  { title: "For Outdoor Explorers", desc: "Spend time among Karjat's mountain scenery and green countryside. Ask locally about current trail access and conditions.", img: "https://bookonelocal.in/cdn/DSC08758.avif" },
  { title: "For Nature Lovers", desc: "Enjoy open landscapes, mountain views and the changing colors of the countryside through the seasons.", img: "https://bookonelocal.in/cdn/DSC08846.avif" },
  { title: "For Couples", desc: "Make time for a scenic stay, private jacuzzi moments and unhurried evenings at the estate.", img: "https://bookonelocal.in/cdn/2026-04-02-082005702-DSC08852.jpg" },
  { title: "For Wedding Celebrations", desc: "Bring ceremonies, dining and guest stays together across lawns and dedicated event spaces.", img: "https://bookonelocal.in/cdn/DSC08849.avif" },
  { title: "For Families & Groups", desc: "Choose a Family Room or private Bungalow Villa and enjoy the estate together.", img: "https://bookonelocal.in/cdn/2026-04-02-073125239-DSC08769.jpg" },
];

export function ExperiencesSection() {
  return (
    <section className="py-32 px-4 md:px-8 bg-[#f5f5f5]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="sec-label text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Karjat Experiences</p>
          <h2 className="sec-title font-display text-[clamp(36px,7vw,72px)] text-[#111111] uppercase leading-[0.9]">Discover the Mountain Escape</h2>
          <p className="mt-6 text-[#707072] text-[16px] font-medium leading-relaxed">
            The Mountain Resort is a private 7-acre estate in Karjat, created for quiet getaways, family stays and celebration weekends. Enjoy mountain views, open lawns and resort experiences near Mumbai and Pune.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {experiences.map((exp) => (
            <div key={exp.title} className="exp-card group relative overflow-hidden bg-[#111111]" style={{ aspectRatio: "3/4" }}>
              <img src={exp.img} alt={exp.title} className="parallax-img w-full h-[120%] object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-[28px] text-white uppercase leading-tight">{exp.title}</h3>
                <p className="text-white/70 text-[13px] mt-3 font-medium">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
