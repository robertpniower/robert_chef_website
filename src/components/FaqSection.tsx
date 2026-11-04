"use client"

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What equipment do you need in my kitchen?",
      a: "We adapt to most standard residential kitchens. A working stovetop, oven, and basic refrigerator space are sufficient. We bring specialized cookware, plating gear, and cutlery."
    },
    {
      q: "What location area do you cover?",
      a: "We primarily serve the greater metropolitan area and surrounding coastal villas. Travel to outer regions can be arranged upon request."
    },
    {
      q: "Can you accommodate strict dietary allergies?",
      a: "Absolutely. During our menu planning phase, we note all allergies (gluten-free, nut-free, dairy-free, vegan) and create tailored course alternatives."
    },
    {
      q: "What is your cancellation and deposit policy?",
      a: "A 30% deposit secures your date. Full refunds are granted for cancellations made up to 7 days prior to your scheduled event."
    },
    {
      q: "What is the minimum guest size?",
      a: "Our intimate dining experiences start from 2 guests (such as romantic celebrations) up to 20+ guests for private parties."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-stone-100/60 border-b border-stone-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">Clarifications</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mt-2">Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-stone-200/80 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-stone-50/50 transition-colors"
              >
                <span className="font-serif text-lg text-stone-900 font-medium">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-stone-500 transition-transform duration-300 shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
