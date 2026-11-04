import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = [
    {
      quote: "Chef Antoine transformed our anniversary into an unforgettable culinary showcase. The wine pairings were impeccable and our kitchen was spotless afterwards.",
      name: "Victoria & Mark H.",
      details: "Private Dinner for 8 in Barcelona"
    },
    {
      quote: "The best hosting decision we've ever made. I actually enjoyed my own birthday party without stressing about cooking or clearing dishes once.",
      name: "Elena R.",
      details: "Celebration Dinner"
    },
    {
      quote: "Restaurant-level plating with the comfort of our villa. The sea scallop course was Michelin quality. Highly recommended!",
      name: "Julian B.",
      details: "Corporate Retreat Dinner"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-stone-50 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">Guest Experiences</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mt-2">What guests say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl border border-stone-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-600 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-stone-700 text-sm leading-relaxed italic mb-6">"{rev.quote}"</p>
              </div>
              <div className="pt-4 border-t border-stone-100">
                <p className="font-serif text-base font-medium text-stone-900">{rev.name}</p>
                <p className="text-xs text-stone-500">{rev.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
