"use client"
import React, { useState } from 'react';

export default function SampleMenusSection() {
  const [activeTab, setActiveTab] = useState(0);

  const menus = [
    {
      tabLabel: "Menu 01 - Seasonal",
      title: "Spring Harvest Tasting",
      subtitle: "5-Course Seasonal Exploration",
      courses: [
        { title: "Amuse-Bouche", detail: "Wild Garlic Cappuccino & Truffle Butter Crostini" },
        { title: "First Course", detail: "Pan-Seared Sea Scallops, Cauliflower Silk & Caviar" },
        { title: "Main Course", detail: "Slow-Roasted Grass-Fed Beef Tenderloin, Morel Reduction" },
        { title: "Pre-Dessert", detail: "Artisanal Local Goat Cheese with Lavender Honey" },
        { title: "Dessert", detail: "Deconstructed Dark Chocolate Sphere & Pistachio Cream" }
      ],
      priceNote: "Starting from €110 per guest (Wine pairing optional +€45)",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
    },
    {
      tabLabel: "Dinner for 6-12",
      title: "Classic French & Mediterranean",
      subtitle: "4-Course Elegant Feast",
      courses: [
        { title: "Starter", detail: "Burrata D.O.P with Heirloom Tomatoes & Basil Emulsion" },
        { title: "Fish Course", detail: "Wild Line-Caught Sea Bass, Fennel Purée & Citrus Vinaigrette" },
        { title: "Meat Course", detail: "Duck Breast with Roasted Figs and Red Wine Reduction" },
        { title: "Dessert", detail: "Classic Madagascar Vanilla Bean Crème Brûlée" }
      ],
      priceNote: "Starting from €95 per guest (Sommelier selection +€40)",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
    },
    {
      tabLabel: "Celebration",
      title: "Grand Tasting Experience",
      subtitle: "7-Course Luxe Celebration",
      courses: [
        { title: "Welcome Drink", detail: "Champagne Toast paired with Oysters & Lemon Pearls" },
        { title: "Appetizer", detail: "Lobster Bisque with Tarragon Foam" },
        { title: "Pasta Course", detail: "Handmade Tagliolini with Fresh Black Winter Truffle" },
        { title: "Palate Cleanser", detail: "Lemon Herb Sorbet" },
        { title: "Main Course", detail: "Dry-Aged Wagyu Steak with Roasted Bone Marrow" },
        { title: "Cheese", detail: "Selected French Aged Cheeses with Fig Chutney" },
        { title: "Dessert", detail: "Grand Marnier Soufflé with Hazelnut Gelato" }
      ],
      priceNote: "Starting from €150 per guest (Full wine pairing included)",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="sample-menus" className="py-20 bg-stone-50 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">Gastronomic Curations</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mt-2">Sample menus</h2>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menus.map((menu, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-stone-900 text-stone-50 shadow-sm'
                  : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300/70'
              }`}
            >
              {menu.tabLabel}
            </button>
          ))}
        </div>

        {/* Tab Content Box */}
        <div className="bg-white border border-stone-200/80 rounded-2xl p-6 lg:p-10 shadow-sm grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs text-stone-500 uppercase tracking-widest font-semibold">{menus[activeTab].subtitle}</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 mt-1">{menus[activeTab].title}</h3>
            </div>

            <div className="space-y-4 pt-2 border-t border-stone-100">
              {menus[activeTab].courses.map((course, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm">
                  <span className="font-medium text-stone-900 min-w-32">{course.title}</span>
                  <span className="text-stone-600 font-light sm:text-right">{course.detail}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-stone-500 italic">{menus[activeTab].priceNote}</span>
              <a href="#booking" className="px-5 py-2.5 rounded-full bg-stone-900 text-stone-50 text-xs font-medium hover:bg-stone-800 transition-all text-center">
                Request custom menu
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              className="aspect-[4/3] rounded-xl bg-stone-200 bg-cover bg-center border border-stone-200 shadow-inner"
              style={{ backgroundImage: `url('${menus[activeTab].image}')` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
