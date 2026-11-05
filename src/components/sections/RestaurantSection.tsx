"use client";

const items = ["Buffet dining", "Curated menus for celebrations", "Wedding meal arrangements", "Room service available"];

export function RestaurantSection() {
  return (
    <section className="py-32 px-4 md:px-8 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
          <img src="https://bookonelocal.in/cdn/DSC08812.avif" alt="Dining and hospitality at The Mountain Resort" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" loading="lazy" />
        </div>
        <div className="bg-[#f5f5f5] p-12 md:p-20 flex flex-col justify-center gap-8">
          <div><p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Dining</p><h2 className="sec-title font-display text-[52px] md:text-[68px] text-[#111111] uppercase leading-[0.88]">DINING &amp;<br />HOSPITALITY</h2></div>
          <p className="text-[#707072] text-[15px] leading-relaxed font-medium">Enjoy in-house dining during your stay and curated meal plans for celebration weekends. The resort team can help coordinate dining options for your group or event.</p>
          <ul className="flex flex-col gap-4">{items.map((item) => <li key={item} className="flex items-center gap-4 text-[#111111] font-medium text-[14px]"><span className="w-6 h-px bg-[#C9A84C] flex-shrink-0" />{item}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
