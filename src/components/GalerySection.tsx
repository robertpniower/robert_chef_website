export default function GallerySection() {
  const images = [
    { title: "Plated Scallop Course", src: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80" },
    { title: "Wine Pairing Selection", src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80" },
    { title: "Intimate Table Setup", src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80" },
    { title: "Chef at Work", src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80" },
    { title: "Artisanal Dessert", src: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=600&q=80" },
    { title: "Spotless Kitchen Finish", src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <section id="gallery" className="py-20 bg-stone-100/60 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">Visual Journey</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mt-2">Gallery</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="group relative aspect-[4/3] rounded-xl bg-stone-200 overflow-hidden shadow-sm border border-stone-200/80"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${img.src}')` }}
              />
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-sm font-medium">{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
