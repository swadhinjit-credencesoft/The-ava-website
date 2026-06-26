"use client";

const stats = [
  { n: "4",    s: "",   l: "Room Categories" },
  { n: "2500", s: "+",  l: "Sq.Ft Event Space" },
  { n: "24",   s: "/7", l: "Hour Service" },
  { n: "100",  s: "%",  l: "Guest Satisfaction" },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-[#111111]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="stat-item flex flex-col items-center justify-center py-14 px-4 border-r border-white/10 last:border-r-0 text-center">
              <span className="font-display text-[56px] md:text-[80px] text-white leading-none">{s.n}<span className="text-[#C9A84C]">{s.s}</span></span>
              <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] mt-3">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
