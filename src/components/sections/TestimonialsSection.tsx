"use client";

const testimonials = [
  { name: "Priya & Rahul Sharma", loc: "Destination Wedding · Mumbai", review: "We hosted our destination wedding at The Mountain Resort and it was absolutely magical. The estate gave us space for all our functions, and the catering team handled our guests beautifully.", rating: 5 },
  { name: "Ankit Desai", loc: "Corporate Offsite · Pune", review: "Our corporate offsite was perfectly organized. The meeting spaces with mountain views, attentive staff and food spread made it a memorable stay.", rating: 5 },
  { name: "Neha & Vikram Patil", loc: "Anniversary Stay · Navi Mumbai", review: "The Glass Jacuzzi Room, mountain views and peaceful estate grounds made our anniversary weekend special.", rating: 5 },
  { name: "The Kulkarni Family", loc: "Family Reunion · Thane", review: "The three-bedroom bungalow was spacious and comfortable for our family reunion. The kids loved the pool and open lawns.", rating: 5 },
  { name: "Sneha & Amar Joshi", loc: "Monsoon Wedding · Bangalore", review: "The lush lawns and mountain backdrop made our celebration beautiful. The team managed the event with care.", rating: 5 },
  { name: "Rajesh Mehta", loc: "Weekend Getaway · Mumbai", review: "The Cliff View Room was clean and comfortable, with beautiful mountain views. A lovely weekend escape.", rating: 5 },
];

export function TestimonialsSection() {
  return (
    <section className="py-32 px-4 md:px-8 bg-[#f5f5f5]">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-20"><p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Guest Experiences</p><h2 className="sec-title font-display text-[clamp(38px,8vw,80px)] text-[#111111] uppercase leading-[0.9]">GUEST <span className="bg-gradient-to-r from-[#C9A84C] to-[#d9bd6a] bg-clip-text text-transparent">STORIES</span></h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => <div key={i} className="review-card flex flex-col gap-5 p-8 bg-white border border-[#e5e5e5] hover:border-[#C9A84C]/30 transition-colors"><div className="flex gap-1">{[...Array(t.rating)].map((_, j) => <span key={j} className="text-[#C9A84C] text-[15px]">★</span>)}</div><p className="text-[#707072] text-[14px] leading-relaxed font-medium italic flex-1">“{t.review}”</p><div className="flex items-center gap-3 pt-5 border-t border-[#e5e5e5]"><div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center text-[#111111] font-bold text-[15px] flex-shrink-0">{t.name.charAt(0)}</div><div><p className="text-[#111111] font-medium text-[13px]">{t.name}</p><p className="text-[#707072] text-[11px]">{t.loc}</p></div></div></div>)}
        </div>
        <div className="mt-12 text-center"><a href="https://search.google.com/local/reviews?q=The+Mountain+Resort+Karjat+By+Redwings" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C] text-[13px] font-medium hover:underline">See guest reviews on Google →</a></div>
      </div>
    </section>
  );
}
