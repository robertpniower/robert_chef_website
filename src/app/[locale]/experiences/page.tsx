import Link from "next/link";

export default  function Page() {
  const experiences = [
    {
      title: "Private Dinner Party",
      description: "An intimate culinary journey served step-by-step for small gatherings and dinner parties.",
      pricing: "From €95 / guest",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Birthday / Celebration",
      description: "Custom celebratory menus tailored around your favorite ingredients, complete with wine pairings.",
      pricing: "From €115 / guest",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Birthday / Milestone",
      description: "Surprise custom multi-course tasting sessions with live chef presentation & dessert styling.",
      pricing: "From €125 / guest",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Corporate / Group",
      description: "High-end corporate hospitality, luxury retreats, or executive team dinners at private villas.",
      pricing: "Custom quote",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="experiences" className="py-20 bg-stone-100/60 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">Tailored Gastronomy</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mt-2">Choose your experience</h2>
          <p className="text-stone-600 mt-3 text-base">Select from our signature private event formats or request a custom itinerary.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div
                  className="h-48 bg-stone-200 bg-cover bg-center"
                  style={{ backgroundImage: `url('${exp.image}')` }}
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium text-stone-900 mb-2">{exp.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">{exp.description}</p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-900">{exp.pricing}</span>
                <Link href="/booking" className="text-xs font-medium text-stone-900 hover:text-stone-600 underline">Book event</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
