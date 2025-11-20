import { CheckCircle2, ArrowRight, Wallet, TrendingUp, Shield, Users } from 'lucide-react'

function Benefit({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="text-violet-600" />
      <div>
        <div className="text-sm font-semibold text-violet-900">{title}</div>
        <p className="text-sm text-slate-700">{desc}</p>
      </div>
    </div>
  )
}

export default function PPHPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-200 via-fuchsia-100 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-violet-900">Pay Per Hire – Talent Without the Risk</h1>
            <p className="mt-4 text-slate-700 text-lg">Pay only for successful placements. No upfront costs or hidden fees.</p>
            <div className="mt-6 flex gap-3">
              <a href="/contact" className="rounded-full bg-violet-600 text-white px-6 py-3 text-sm hover:bg-violet-700">Get Started</a>
              <a href="#why" className="rounded-full bg-white border border-violet-300 text-violet-900 px-6 py-3 text-sm hover:bg-violet-50">Learn More</a>
            </div>
          </div>
          <div className="rounded-3xl bg-white border border-violet-200 shadow-sm p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <Benefit icon={Wallet} title="No Upfront Costs" desc="Engage now, pay only when you hire." />
              <Benefit icon={TrendingUp} title="Scale on Demand" desc="Ramp roles up or down with ease." />
              <Benefit icon={Shield} title="Quality Guarantee" desc="Only vetted, top‑quality candidates presented." />
              <Benefit icon={Users} title="Predictable Pricing" desc="Clear success fees and milestone transparency." />
            </div>
          </div>
        </div>
      </section>

      {/* Transparent journey */}
      <section id="why" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-violet-900">Transparent Hiring Journey</h2>
          <ol className="mt-6 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              ['Share Your Requirements','Specify role, skills, experience and culture fit.'],
              ['We Source & Screen','We source from our network and screen thoroughly.'],
              ['Candidate Presentation','Only the most qualified with profiles and assessments.'],
              ['Interview & Selection','You interview and select — we coordinate end‑to‑end.'],
              ['Successful Placement','On joining and probation completion, pay success fee.'],
            ].map(([title, desc], idx) => (
              <li key={title} className="rounded-3xl bg-white border border-violet-200 shadow-sm p-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-violet-900"><span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-white">{idx+1}</span> {title}</div>
                <p className="mt-2 text-sm text-slate-700">{desc}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-bold text-violet-900">Hire Smarter – Pay Only for Results</h3>
            <a href="/contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-violet-600 text-white px-6 py-3 text-sm hover:bg-violet-700">Start Hiring Now <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-14 bg-violet-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-violet-900">Case Studies</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {['Practo','Vogo','Unacademy','Medvarsity','PagarBook','Brandstudio','Urban Ladder','FloBiz','Zepto'].slice(0,6).map((c)=> (
              <div key={c} className="rounded-3xl bg-white border border-violet-200 shadow-sm p-6">
                <div className="text-sm font-semibold text-violet-900">{c}</div>
                <p className="mt-2 text-sm text-slate-700">Learn how we filled roles fast with zero upfront risk.</p>
                <a href="#" className="mt-3 inline-block text-violet-700 hover:text-violet-900 text-sm">View Case Study →</a>
              </div>
            ))}
          </div>

          <h3 className="mt-12 text-2xl font-bold text-violet-900">Recruitment Insights</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              'Pay per hire: a fix for costly hiring',
              'Pay per hire: smarter hiring, better ROI',
              'Fast hiring with no upfront fees',
              'Pay per hire trends: the future of hiring',
              'Is pay per hire changing recruitment forever?',
              'How pay per hire can cut hiring costs by 50%'
            ].slice(0,3).map((title) => (
              <article key={title} className="rounded-3xl bg-white border border-violet-200 shadow-sm overflow-hidden">
                <div className="h-36 bg-gradient-to-br from-violet-200 via-fuchsia-200 to-indigo-200" />
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-violet-900">{title}</h4>
                  <a href="/resources" className="mt-2 inline-block text-violet-700 hover:text-violet-900 text-sm">Read More →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-violet-900">FAQs</h3>
          <div className="mt-4 divide-y divide-violet-200 border border-violet-200 rounded-2xl bg-white">
            {[
              'What is Pay Per Hire recruitment?',
              'How does Jobs Territory’s Pay Per Hire service work?',
              'What types of roles can I hire under Pay Per Hire?',
              'Is there a guarantee period for new hires?',
              'What makes Pay Per Hire cost‑effective?',
              'How fast can Jobs Territory fill a role?',
              'Can I hire multiple roles at the same time?',
              'What if I don’t like the candidates presented?',
              'Do you support niche or specialized roles?',
              'Why choose Jobs Territory for Pay Per Hire?'
            ].map((q) => (
              <details key={q} className="group p-5">
                <summary className="cursor-pointer list-none font-medium text-violet-900">{q}</summary>
                <p className="mt-2 text-sm text-slate-700">We operate with a results‑first model, sourcing and screening rigorously and aligning on success fees after placement.</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
