export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-lg tracking-[0.25em]">VYNE</h3>
            <p className="mt-4 text-sm text-white/70 max-w-md">We craft elevated essentials with a commitment to quality, sustainability, and timeless style.</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/60">Help</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/60">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/60">
          © {new Date().getFullYear()} VYNE. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
