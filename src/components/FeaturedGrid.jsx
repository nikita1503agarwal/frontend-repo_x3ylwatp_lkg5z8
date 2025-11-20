export default function FeaturedGrid() {
  const products = [
    { id: 1, name: 'Relaxed Cotton Tee', price: '$45', img: 'https://images.unsplash.com/photo-1520975933861-9117a134f7f6?q=80&w=1887&auto=format&fit=crop', hover: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1974&auto=format&fit=crop' },
    { id: 2, name: 'Structured Overshirt', price: '$129', img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1887&auto=format&fit=crop', hover: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1974&auto=format&fit=crop' },
    { id: 3, name: 'Tailored Trouser', price: '$98', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1974&auto=format&fit=crop', hover: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1887&auto=format&fit=crop' },
    { id: 4, name: 'Minimal Sneakers', price: '$160', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1974&auto=format&fit=crop', hover: 'https://images.unsplash.com/photo-1542291024-52d8c8e9d37b?q=80&w=1974&auto=format&fit=crop' },
    { id: 5, name: 'Signature Hoodie', price: '$95', img: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1974&auto=format&fit=crop', hover: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1974&auto=format&fit=crop' },
    { id: 6, name: 'Ribbed Tank', price: '$35', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1887&auto=format&fit=crop', hover: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1974&auto=format&fit=crop' },
    { id: 7, name: 'Wool Coat', price: '$280', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1887&auto=format&fit=crop', hover: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1887&auto=format&fit=crop' },
    { id: 8, name: 'Performance Leggings', price: '$72', img: 'https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?q=80&w=1887&auto=format&fit=crop', hover: 'https://images.unsplash.com/photo-1535469420023-7d6a4f4bdfd9?q=80&w=1887&auto=format&fit=crop' },
  ]

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-black/60">Featured</p>
            <h2 className="mt-2 text-3xl font-semibold">Best Sellers</h2>
          </div>
          <a href="#" className="text-sm uppercase tracking-widest underline underline-offset-4">View All</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <a key={p.id} href="#" className="group">
              <div className="relative overflow-hidden rounded-xl bg-neutral-100">
                <img src={p.img} alt={p.name} className="h-80 w-full object-cover object-center transition-opacity duration-300 group-hover:opacity-0" />
                <img src={p.hover} alt="" className="absolute inset-0 h-80 w-full object-cover object-center opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="mt-3 flex items-start justify-between">
                <div>
                  <p className="text-sm">{p.name}</p>
                  <p className="text-black/60 text-sm mt-1">{p.price}</p>
                </div>
                <button className="text-xs uppercase tracking-widest border px-3 py-2 rounded hover:bg-black hover:text-white transition">Add</button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
