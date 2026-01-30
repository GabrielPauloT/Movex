const testimonials = [
  {
    text: "The team was incredible. They treated our belongings like their own and made our Melbourne to Sydney move completely stress-free. Can't recommend them enough!",
    author: "Sarah Johnson",
    location: "Melbourne → Sydney",
    initials: "SJ",
  },
  {
    text: "Professional, friendly, and efficient. The quote was transparent, no hidden costs, and they delivered exactly what they promised. Best moving company we've used.",
    author: "Michael Chen",
    location: "Melbourne → Canberra",
    initials: "MC",
  },
  {
    text: "They handled our office move with such professionalism. Minimal downtime, everything arrived perfectly, and the team was just wonderful to work with.",
    author: "Emma Parker",
    location: "Commercial Client",
    initials: "EP",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-24 bg-white" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-sm font-extrabold text-primary uppercase tracking-widest mb-3">Testimonials</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary mb-4 tracking-tight">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            Real feedback from real people. See why families trust us with their moves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border-2 border-gray-100 relative">
              <div className="absolute top-6 right-6 text-6xl text-primary/10 font-serif leading-none">&quot;</div>
              
              <div className="text-primary text-lg tracking-widest mb-4">★★★★★</div>
              
              <p className="text-[0.9375rem] text-gray-700 leading-relaxed mb-8 relative z-10">
                {item.text}
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-black text-sm shadow-sm">
                  {item.initials}
                </div>
                <div>
                  <div className="font-extrabold text-secondary text-base">{item.author}</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">{item.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
