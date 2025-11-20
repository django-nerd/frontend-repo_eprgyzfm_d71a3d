import { MapPin, Briefcase, Clock } from 'lucide-react'

const JOBS = [
  { id: 1, title: 'Senior Frontend Engineer', company: 'Nova Labs', location: 'Remote', type: 'Full-time', salary: '$140k - $180k', badge: 'Hot' },
  { id: 2, title: 'Product Designer', company: 'PixelForge', location: 'Berlin, DE', type: 'Full-time', salary: '€70k - €95k', badge: 'Featured' },
  { id: 3, title: 'Data Scientist', company: 'QuantStack', location: 'NY, USA', type: 'Hybrid', salary: '$130k - $165k', badge: 'Remote' },
  { id: 4, title: 'DevOps Engineer', company: 'CloudStride', location: 'Remote', type: 'Contract', salary: '$90 - $120/hr', badge: 'New' },
]

function JobCard({ job }) {
  return (
    <a href="#" className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-6 block">
      <div className="flex items-start justify-between">
        <div>
          <div className="inline-flex items-center gap-2 text-xs text-cyan-300/90">
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/20">{job.badge}</span>
            <span className="text-slate-400">{job.type}</span>
          </div>
          <h3 className="mt-3 text-white font-medium text-lg group-hover:text-cyan-200">{job.title}</h3>
          <div className="mt-1 text-slate-400 text-sm">{job.company}</div>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-300/90">
            <span className="inline-flex items-center gap-1.5"><MapPin size={16} /> {job.location}</span>
            <span className="inline-flex items-center gap-1.5"><Briefcase size={16} /> {job.type}</span>
            <span className="inline-flex items-center gap-1.5"><Clock size={16} /> {job.salary}</span>
          </div>
        </div>
        <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600" />
      </div>
    </a>
  )
}

export default function FeaturedJobs() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-transparent to-white/5 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Featured jobs</h2>
            <p className="mt-2 text-slate-400">Handpicked roles from trusted companies</p>
          </div>
          <a href="#" className="text-sm text-cyan-300 hover:text-cyan-200">View all</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {JOBS.map(job => <JobCard key={job.id} job={job} />)}
        </div>
      </div>
    </section>
  )
}
