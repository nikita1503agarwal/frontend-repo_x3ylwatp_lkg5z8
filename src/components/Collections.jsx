export default function Collections() {
  const collections = [
    {
      tag: 'Women',
      title: 'The Modern Capsule',
      img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1887&auto=format&fit=crop',
    },
    {
      tag: 'Men',
      title: 'Essential Layers',
      img: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1887&auto=format&fit=crop',
    },
    {
      tag: 'New',
      title: 'Monochrome Edit',
      img: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1974&auto=format&fit=crop',
    },
  ]

  return (
    <section id="new" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {collections.map((c) => (
            <a key={c.title} href="#" className="group relative overflow-hidden rounded-2xl">
              <img src={c.img} alt={c.title} className="h-[520px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0" />
              <div className="absolute bottom-6 left-6">
                <p className="text-xs uppercase tracking-[0.5em] text-white/80">{c.tag}</p>
                <h3 className="mt-2 text-2xl text-white font-semibold">{c.title}</h3>
                <span className="mt-3 inline-block text-xs uppercase tracking-widest text-white/70">Shop now →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
