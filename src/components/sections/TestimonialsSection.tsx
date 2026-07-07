"use client";

const testimonials = [
  { name: "Priya Sharma",    loc: "Bangalore", review: "Woke up to misty plantation views every morning. The Estateview room was breathtaking. Staff was incredibly warm and attentive.", rating: 5 },
  { name: "Rahul Mehta",     loc: "Mumbai",    review: "The estate is peaceful and well-maintained. The bonfire evening was the highlight of our stay.", rating: 5 },
  { name: "Ananya & Kiran",  loc: "Chennai",   review: "Perfect romantic getaway. The trek to Mullayangiri arranged by the travel desk was unforgettable. We will definitely return.", rating: 5 },
  { name: "Dr. Suresh Rao",  loc: "Mysore",    review: "Stayed for a medical conference. The facilities were excellent and the food was exceptional. Highly recommended.", rating: 5 },
  { name: "Kavitha Family",  loc: "Pune",      review: "A family vacation that exceeded every expectation. Kids loved the bonfire and outdoor games. Parents loved the peace.", rating: 5 },
  { name: "Arjun Nair",      loc: "Hyderabad", review: "The coffee plantation walks at dawn are something I'll never forget. The staff made every meal feel special.", rating: 5 },
];

export function TestimonialsSection() {
  return (
    <section className="py-32 px-4 md:px-8 bg-[#f5f5f5]">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.5em] mb-4">Guest Reviews</p>
          <h2 className="font-display text-[56px] md:text-[80px] text-[#111111] uppercase leading-[0.9]">GUEST<br />STORIES</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="review-card flex flex-col gap-5 p-8 bg-white border border-[#e5e5e5] hover:border-[#C9A84C]/30 transition-colors">
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, j) => <span key={j} className="text-[#C9A84C] text-[15px]">★</span>)}
              </div>
              <p className="text-[#707072] text-[14px] leading-relaxed font-medium italic flex-1">"{t.review}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-[#e5e5e5]">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center text-[#111111] font-bold text-[15px] flex-shrink-0">{t.name.charAt(0)}</div>
                <div>
                  <p className="text-[#111111] font-medium text-[13px]">{t.name}</p>
                  <p className="text-[#707072] text-[11px]">{t.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Google Reviews Widget — Replace the div below with the Google Reviews embed code from your GBP dashboard */}
        <div className="mt-12 text-center">
          <a href="https://search.google.com/local/reviews?q=The+AVA+Hotel+Haandi+Chikkamagaluru" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C] text-[13px] font-medium hover:underline">
            See our reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
