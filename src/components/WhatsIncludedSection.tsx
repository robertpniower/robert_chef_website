import {
  UtensilsCrossed,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';


export default function WhatIsIncludedSection() {
  return (
    <section className="py-20 bg-stone-100/60 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">Transparent Hospitality</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mt-2">What's included</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Column 1 */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-xs space-y-4">
            <div className="inline-flex items-center gap-2 text-stone-900 font-serif text-xl font-medium">
              <UtensilsCrossed size={20} />
              <h3>Before & During</h3>
            </div>
            <ul className="space-y-3 pt-4 text-stone-600 text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-stone-800 shrink-0 mt-0.5" />
                <span>Menu consultation & dietary customization</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-stone-800 shrink-0 mt-0.5" />
                <span>Grocery shopping & fresh ingredient sourcing</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-stone-800 shrink-0 mt-0.5" />
                <span>On-site chef preparation & active cooking</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-stone-800 shrink-0 mt-0.5" />
                <span>Full table service & course introductions</span>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-xs space-y-4">
            <div className="inline-flex items-center gap-2 text-stone-900 font-serif text-xl font-medium">
              <Sparkles size={20} />
              <h3>Service & Clean-up</h3>
            </div>
            <ul className="space-y-3 pt-4 text-stone-600 text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-stone-800 shrink-0 mt-0.5" />
                <span>Dishware, cutlery, and napkin setup</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-stone-800 shrink-0 mt-0.5" />
                <span>Complete kitchen cleaning & trash removal</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-stone-800 shrink-0 mt-0.5" />
                <span>Pots, pans, and cooktop wiped down</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-stone-800 shrink-0 mt-0.5" />
                <span>Optional sommelier wine pairing guidance</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
