import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.25),transparent_60%),radial-gradient(900px_500px_at_80%_20%,rgba(99,102,241,0.2),transparent_70%),linear-gradient(to_bottom_right,#0B1220,#0B1220)]" />

      {/* Spline 3D */}
      <div className="relative h-[520px] sm:h-[620px] lg:h-[720px]">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />

        {/* Soft overlay gradients for depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1220]/20 to-[#0B1220]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-40">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              Discover your next role in a modern job marketplace
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-lg text-slate-300 max-w-2xl"
            >
              Search thousands of curated opportunities across tech, design, product, and more. Connect with top companies and get hired faster.
            </motion.p>

            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-2 flex flex-col sm:flex-row gap-2"
            >
              <input
                placeholder="Job title or keyword"
                className="flex-1 rounded-xl bg-transparent px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none"
              />
              <input
                placeholder="Location"
                className="flex-1 rounded-xl bg-transparent px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none"
              />
              <button className="rounded-xl px-5 py-3 text-slate-900 font-medium bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-300 hover:via-blue-500 hover:to-indigo-500 transition-colors">
                Search Jobs
              </button>
            </motion.div>

            <div className="mt-6 flex items-center gap-6 text-slate-400 text-sm">
              <span>Trending: Frontend, Product Manager, Data Analyst, UX</span>
            </div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 lg:gap-6">
            {[{label:'Live Jobs',value:'18,450'},{label:'Companies',value:'2,310'},{label:'Remote Roles',value:'7,820'},{label:'New Today',value:'623'}].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 * i }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-3xl font-semibold text-white">{s.value}</div>
                <div className="mt-1 text-slate-400 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
