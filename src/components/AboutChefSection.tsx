import {
  Star,
  Award,
  ChefHat,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export default function AboutChefSection() {
  return (
    <section id="chef" className="py-20 bg-stone-100/60 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Chef Portrait */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-2xl bg-stone-300 overflow-hidden shadow-lg border border-stone-300">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80')` }}
              />
            </div>
          </div>

          {/* Chef Bio Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 text-stone-800 text-xs font-semibold uppercase tracking-wider">
              <ChefHat size={14} />
              <span>Meet Your Culinary Host</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900">
              Chef Antoine Laurent — Fine dining without pretense
            </h2>

            <p className="text-stone-600 text-base leading-relaxed font-light">
              Trained in Paris and refined in 3-Star Michelin kitchens across San Sebastián and Lyon, Chef Antoine brings technical precision and local organic sourcing right into intimate residential kitchens.
            </p>

            <p className="text-stone-600 text-base leading-relaxed font-light">
              "My mission is simple: transform your home dining table into a 5-star restaurant environment where hosts are completely free to enjoy their guests."
            </p>

            {/* Highlight Tags */}
            <div className="pt-2 flex flex-wrap gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-stone-300 text-stone-800 text-xs font-medium flex items-center gap-1.5">
                <Award size={14} className="text-amber-700" />
                10+ Years Experience
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-stone-300 text-stone-800 text-xs font-medium flex items-center gap-1.5">
                <Star size={14} className="text-amber-700" />
                Michelin Trained
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-stone-300 text-stone-800 text-xs font-medium flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-amber-700" />
                Local & Organic Sourcing
              </span>
            </div>

            <div className="pt-4">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 text-stone-50 text-sm font-medium hover:bg-stone-800 transition-all"
              >
                More about the chef
                <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
