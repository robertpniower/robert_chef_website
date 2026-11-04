import React from 'react';

import {
  UtensilsCrossed,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-stone-50 pt-12 pb-20 lg:py-24 border-b border-stone-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/70 border border-stone-300/80 text-stone-800 text-xs font-semibold tracking-wide uppercase">
              <Sparkles size={14} className="text-amber-700" />
              <span>Bespoke In-Home Gastronomy</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 leading-[1.15] font-normal">
              Restaurant-level dining at your own table
            </h1>

            <p className="text-stone-600 text-base sm:text-lg max-w-xl font-light leading-relaxed">
              Experience multi-course tasting menus handcrafted by Michelin-trained chefs. We take care of fresh sourcing, cooking, sommelier pairing, and pristine cleanup.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="#booking"
                className="px-7 py-3.5 rounded-full bg-stone-900 text-stone-50 font-medium text-sm hover:bg-stone-800 transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                <span>Request a date</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="#booking"
                className="px-7 py-3.5 rounded-full bg-white border border-stone-300 text-stone-800 font-medium text-sm hover:bg-stone-100 transition-all"
              >
                Message chef
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-stone-200/80 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-stone-700 shrink-0" />
                <span>Full cleanup included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-stone-700 shrink-0" />
                <span>Custom tailored menu</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-stone-700 shrink-0" />
                <span>Sommelier pairings</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl bg-stone-200/80 overflow-hidden border border-stone-300 shadow-xl flex items-center justify-center group">
              {/* Image Graphic Representation */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />

              {/* Float Badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-md border border-stone-200 px-5 py-3.5 rounded-xl shadow-lg flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-stone-100 text-stone-900">
                    <UtensilsCrossed size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">Starting Price</p>
                    <p className="text-sm font-semibold text-stone-900">3-Course menu starting at €85 / guest</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
