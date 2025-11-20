export default function USP() {
  const items = [
    { title: 'Premium Materials', desc: 'Ethically sourced fabrics with enduring quality.' },
    { title: 'Timeless Design', desc: 'Minimal aesthetics crafted to outlast trends.' },
    { title: 'Carbon Neutral', desc: 'Responsible production and eco packaging.' },
    { title: 'Free Returns', desc: '30-day returns with instant store credit.' },
  ]

  return (
    <section className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it) => (
            <div key={it.title} className="border border-black/5 bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-sm uppercase tracking-widest">{it.title}</h4>
              <p className="mt-2 text-sm text-black/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
