"use client";

const experiences = [
  { title: "For Adventure Seekers", desc: "Trek through the Western Ghats and discover destinations such as Mullayanagiri, Ettina Bhuja and Ballarayanadurga.", img: "/trekking.webp" },
  { title: "For Nature Lovers", desc: "Explore coffee plantations, forests, mountain viewpoints and the rich biodiversity surrounding Chikkamagaluru.", img: "/plantation.jpg" },
  { title: "For Spiritual Travellers", desc: "Visit Sringeri, Hornadu and Dharmasthala and experience some of Karnataka's important spiritual destinations.", img: "/sringeri.jpg" },
  { title: "For History & Architecture Lovers", desc: "Explore the extraordinary Hoysala architecture of Belur and nearby heritage destinations.", img: "/belur.jpg" },
  { title: "For Families", desc: "Enjoy scenic drives, nature experiences, waterfalls, temples and relaxed days exploring the countryside.", img: "/shalimarhomeimg.png" },
];

export function ExperiencesSection() {
  return (
    <section className="py-32 px-4 md:px-8 bg-[#f5f5f5]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="sec-label text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Chikkamagaluru Experience</p>
          <h2 className="sec-title font-display text-[clamp(36px,7vw,72px)] text-[#111111] uppercase leading-[0.9]">Discover the Magic of Chikkamagaluru</h2>
          <p className="mt-6 text-[#707072] text-[16px] font-medium leading-relaxed">
            Chikkamagaluru is more than a destination. It is a landscape of mist-covered mountains, aromatic coffee plantations, winding roads, ancient temples, waterfalls and forested valleys. Stay at The AVA and make it your starting point for discovering the many sides of this beautiful region.
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
