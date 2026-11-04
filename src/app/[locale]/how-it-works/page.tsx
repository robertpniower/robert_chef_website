import {
  Star,
  Award,
  ChefHat,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Pick a date",
      desc: "Submit your requested date, estimated guest count, and location details.",
    },
    {
      num: "02",
      title: "Tailor menu & preferences",
      desc: "Collaborate directly with the chef to curate a bespoke menu matching dietary needs.",
    },
    {
      num: "03",
      title: "Chef cooks and serves",
      desc: "We arrive early with ingredients, prepare, cook, and present each course seamlessly.",
    },
    {
      num: "04",
      title: "Kitchen left spotless",
      desc: "After service, your kitchen is cleaned thoroughly. You won't lift a finger.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 bg-stone-50 border-b border-stone-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">
            Effortless Hosting
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mt-2">
            How it works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-xl bg-white border border-stone-200/70 shadow-xs"
            >
              <div className="w-12 h-12 rounded-full bg-stone-900 text-stone-50 flex items-center justify-center font-serif text-lg font-bold mb-4">
                {step.num}
              </div>
              <h3 className="font-serif text-lg font-medium text-stone-900 mb-2">
                {step.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- COMPONENT 5: ABOUT CHEF SECTION ---
export function AboutChefSection() {
  return (
    <section
      id="chef"
      className="py-20 bg-stone-100/60 border-b border-stone-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Chef Portrait */}
          <div className="lg:col-span-5">
            <div className="relative aspect-3/4 rounded-2xl bg-stone-300 overflow-hidden shadow-lg border border-stone-300">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80')`,
                }}
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
              Trained in Paris and refined in 3-Star Michelin kitchens across
              San Sebastián and Lyon, Chef Antoine brings technical precision
              and local organic sourcing right into intimate residential
              kitchens.
            </p>

            <p className="text-stone-600 text-base leading-relaxed font-light">
              "My mission is simple: transform your home dining table into a
              5-star restaurant environment where hosts are completely free to
              enjoy their guests."
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
