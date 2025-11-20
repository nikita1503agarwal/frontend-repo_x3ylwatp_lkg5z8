import { useState } from 'react'
import { Menu, ShoppingBag, Search, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <button className="lg:hidden p-2" aria-label="Open menu" onClick={() => setOpen(true)}>
              <Menu className="h-6 w-6" />
            </button>
            <a href="/" className="text-2xl tracking-[0.25em] font-semibold">BRAND</a>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-widest text-black/70">
            <a href="#women" className="hover:text-black transition-colors">Women</a>
            <a href="#men" className="hover:text-black transition-colors">Men</a>
            <a href="#new" className="hover:text-black transition-colors">New In</a>
            <a href="#stories" className="hover:text-black transition-colors">Stories</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2" aria-label="Bag">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="ml-auto h-full w-80 max-w-[80%] bg-white shadow-xl p-6 flex flex-col">
            <div className="flex items-center justify-between">
              <span className="text-lg tracking-[0.25em] font-semibold">BRAND</span>
              <button className="p-2" onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-8 space-y-6 text-base uppercase tracking-widest">
              <a href="#women" onClick={() => setOpen(false)} className="block">Women</a>
              <a href="#men" onClick={() => setOpen(false)} className="block">Men</a>
              <a href="#new" onClick={() => setOpen(false)} className="block">New In</a>
              <a href="#stories" onClick={() => setOpen(false)} className="block">Stories</a>
            </div>
            <div className="mt-auto text-xs text-black/60">
              © {new Date().getFullYear()} BRAND
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
