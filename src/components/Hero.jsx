import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(0,0,0,0.6),transparent)]" />
      <img
        src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1974&auto=format&fit=crop"
        alt="Minimal fashion"
        className="h-[90vh] w-full object-cover object-center"
        loading="eager"
      />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <p className="text-sm uppercase tracking-[0.5em] text-white/80">New Season</p>
            <h1 className="mt-4 text-5xl sm:text-6xl font-semibold leading-tight">Elevate Your Essentials</h1>
            <p className="mt-6 text-white/80 max-w-lg">Timeless silhouettes, premium fabrics, and meticulous details. Designed for everyday elegance.</p>
            <div className="mt-10 flex items-center gap-4">
              <a href="#new" className="inline-flex items-center justify-center px-8 py-3 bg-white text-black text-sm uppercase tracking-widest hover:bg-white/90 transition">Shop New In</a>
              <a href="#women" className="inline-flex items-center justify-center px-8 py-3 border border-white/60 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition">Women</a>
              <a href="#men" className="inline-flex items-center justify-center px-8 py-3 border border-white/60 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition">Men</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
