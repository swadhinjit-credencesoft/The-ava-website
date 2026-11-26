"use client";

const stats = [
  { n: "7000", s: "+", l: "Sq.Ft Main Event Space" },
  { n: "2700", s: "+", l: "Sq.Ft Banquet Space" },
  { n: "4",    s: "",  l: "Room Categories" },
  { n: "24",   s: "/7", l: "Hour Service" },
  { n: "100",  s: "%",  l: "Guest Satisfaction" },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-[#111111]">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) => (
            <div
              key={i}
              className="stat-item flex flex-col items-center justify-center py-12 px-4 border-r border-white/10 last:border-r-0 text-center"
            >
              <span className="font-display text-[52px] md:text-[68px] lg:text-[76px] text-white leading-none">
                <span className="stat-number" data-count={s.n.replace(/\D/g, "")}>
                  {s.n.replace(/\D/g, "")}
                </span>
                <span className="text-[#C9A84C]">{s.s}</span>
              </span>
              <span className="text-white/40 text-[10px] md:text-[11px] uppercase tracking-[0.25em] mt-3 font-medium">
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
