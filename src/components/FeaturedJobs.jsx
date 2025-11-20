import { MapPin, Briefcase, Clock, CheckCircle2 } from 'lucide-react'

const ROLES = [
  { id: 1, title: 'Senior Frontend Engineer', location: 'Remote', type: 'Full-time', model: 'Contract-to-hire', highlights: ['Vetted top 2%', 'Start in 7 days', 'Timezone overlap'] },
  { id: 2, title: 'Product Designer', location: 'Berlin, DE', type: 'Full-time', model: 'Direct hire', highlights: ['Portfolio validated', 'Figma expert', 'User research'] },
  { id: 3, title: 'Data Scientist', location: 'NY, USA', type: 'Hybrid', model: 'Contract', highlights: ['ML Ops ready', 'Python, PyTorch', 'A/B testing'] },
  { id: 4, title: 'DevOps Engineer', location: 'Remote', type: 'Contract', model: 'Fractional', highlights: ['AWS, K8s', 'IaC', '24/5 coverage'] },
]

function TalentCard({ role }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-6 block">
      <div className="flex items-start justify-between">
        <div>
          <div className="inline-flex items-center gap-2 text-xs text-cyan-300/90">
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/20">{role.model}</span>
            <span className="text-slate-400">{role.type}</span>
          </div>
          <h3 className="mt-3 text-white font-medium text-lg group-hover:text-cyan-200">{role.title}</h3>
          <div className="mt-1 text-slate-400 text-sm">Curated candidates matched to your brief</div>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-300/90">
            <span className="inline-flex items-center gap-1.5"><MapPin size={16} /> {role.location}</span>
            <span className="inline-flex items-center gap-1.5"><Briefcase size={16} /> {role.type}</span>
            <span className="inline-flex items-center gap-1.5"><Clock size={16} /> Ready now</span>
          </div>
          <ul className="mt-4 space-y-1.5 text-slate-300 text-sm">
            {role.highlights.map(h => (
              <li key={h} className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-300" />{h}</li>
            ))}
          </ul>
        </div>
        <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600" />
      </div>
    </div>
  )
}

export default function FeaturedJobs() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-transparent to-white/5 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Featured talent pipelines</h2>
            <p className="mt-2 text-slate-400">Ready-to-interview candidates tailored for your roles</p>
          </div>
          <a href="#" className="text-sm text-cyan-300 hover:text-cyan-2 00">View all</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {ROLES.map(role => <TalentCard key={role.id} role={role} />)}
        </div>
      </div>
    </section>
  )
}
