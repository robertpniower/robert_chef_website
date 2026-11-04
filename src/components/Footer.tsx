"use client";

export default function Footer() {

  const date = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-400 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-stone-800 text-sm">

          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2 text-stone-100 font-serif text-xl font-bold">
              <span>Étoile Private Dining</span>
            </div>
            <p className="text-xs text-stone-500 leading-relaxed max-w-xs">
              Bespoke culinary experiences delivered directly into private residences and villas.
            </p>
          </div>

          <div>
            <h4 className="text-stone-200 font-medium text-xs uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#experiences" className="hover:text-stone-200 transition-colors">Experiences</a></li>
              <li><a href="#chef" className="hover:text-stone-200 transition-colors">About Chef</a></li>
              <li><a href="#sample-menus" className="hover:text-stone-200 transition-colors">Menus</a></li>
              <li><a href="#gallery" className="hover:text-stone-200 transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-stone-200 font-medium text-xs uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#" className="hover:text-stone-200 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-stone-200 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-stone-200 transition-colors">Health & Safety</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-stone-200 font-medium text-xs uppercase tracking-wider mb-4">Locations</h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              Available across Barcelona, Costa Brava, Sitges, and surrounding regions.
            </p>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-600">
          <p>© {date} Étoile Gastronomy Group. All rights reserved.</p>
          <p>Designed for luxury private dining experiences.</p>
        </div>
      </div>
    </footer>
  );
}
