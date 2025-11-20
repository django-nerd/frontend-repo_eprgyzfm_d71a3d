import { ArrowRight, Rocket, Users2, Gauge, BadgeCheck } from 'lucide-react'

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-violet-900">{value}</div>
      <div className="text-xs text-slate-600">{label}</div>
    </div>
  )
}

export default function FractionalPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-200 via-fuchsia-100 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-violet-900">Your Growth Accelerator, On Demand – Fractional Hiring</h1>
            <p className="mt-4 text-slate-700 text-lg">Connect with battle‑tested industry experts who deliver measurable impact quickly — without long‑term commitments.</p>
            <div className="mt-6 flex gap-3">
              <a href="#benefits" className="rounded-full bg-violet-600 text-white px-6 py-3 text-sm hover:bg-violet-700">Explore</a>
              <a href="/contact" className="rounded-full bg-white border border-violet-300 text-violet-900 px-6 py-3 text-sm hover:bg-violet-50">Book a Call</a>
            </div>
          </div>
          <div className="rounded-3xl bg-white border border-violet-200 shadow-sm p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3"><BadgeCheck className="text-violet-600" /><div><div className="font-semibold text-violet-900">Senior Expertise</div><p className="text-sm text-slate-600">40–60% savings vs. full‑time leaders.</p></div></div>
              <div className="flex items-start gap-3"><Rocket className="text-violet-600" /><div><div className="font-semibold text-violet-900">Fast Impact</div><p className="text-sm text-slate-600">Most leaders start in under 10 days.</p></div></div>
              <div className="flex items-start gap-3"><Gauge className="text-violet-600" /><div><div className="font-semibold text-violet-900">Custom Models</div><p className="text-sm text-slate-600">From a few hours to project mandates.</p></div></div>
              <div className="flex items-start gap-3"><Users2 className="text-violet-600" /><div><div className="font-semibold text-violet-900">Elite Network</div><p className="text-sm text-slate-600">Ex‑CXOs and award‑winning leaders.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="benefits" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-violet-900">Perfect Use Cases</h2>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['Mission‑Critical Projects','Leaders who have launched products, led transformations and delivered cost‑cutting models.'],
              ['Seasonal High‑Impact','Peak‑season specialists deployed in under 15 days.'],
              ['Elite Specialist Roles','Cybersecurity, compliance, high‑profile events.'],
              ['Interim Leadership','Immediate authority: CTOs, heads, project leads.'],
              ['Risk‑Free Trials','90‑day leadership trials with 82% conversion.'],
              ['Rapid Scaling','Emergency teams in 72 hours, task forces to win speed.'],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-3xl bg-white border border-violet-200 shadow-sm p-6">
                <div className="text-sm font-semibold text-violet-900">{title}</div>
                <p className="mt-2 text-sm text-slate-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why businesses return */}
      <section className="py-14 bg-violet-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-violet-900">Why Businesses Keep Coming Back</h2>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ['Cost Efficiency Without Compromise','Save 40–60% while accessing boardroom‑level expertise.'],
              ['Day‑One Impact','Battle‑tested leaders deliver wins immediately.'],
              ['Agility on Demand','Scale talent up or down instantly.'],
              ['Elite Talent Network','Direct access to ex‑CXOs and specialists.'],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-3xl bg-white border border-violet-200 shadow-sm p-6">
                <div className="text-sm font-semibold text-violet-900">{title}</div>
                <p className="mt-2 text-sm text-slate-700">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <Stat value="40–60%" label="Cost reduction" />
            <Stat value="2–3 weeks" label="Time to onboard" />
            <Stat value="95%" label="Project success rate" />
            <Stat value="80%" label="Conversion to full‑time" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h3 className="text-3xl font-bold text-violet-900">Ready to See Impact in Weeks, Not Months?</h3>
        <p className="mt-2 text-slate-600">Bring in a leader who can accelerate growth.</p>
        <a href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-violet-600 text-white px-6 py-3 text-sm hover:bg-violet-700">Start Fractional Hiring</a>
      </section>

      {/* Case studies and blogs */}
      <section className="py-14 bg-violet-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-violet-900">Case Studies</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {['Practo','Vogo','Unacademy','Medvarsity','PagarBook','Brandstudio','Urban Ladder','FloBiz','Zepto'].slice(0,6).map((c)=> (
              <div key={c} className="rounded-3xl bg-white border border-violet-200 shadow-sm p-6">
                <div className="text-sm font-semibold text-violet-900">{c}</div>
                <p className="mt-2 text-sm text-slate-700">Read how we delivered measurable leadership impact.</p>
                <a href="#" className="mt-3 inline-block text-violet-700 hover:text-violet-900 text-sm">View Case Study →</a>
              </div>
            ))}
          </div>

          <h3 className="mt-12 text-2xl font-bold text-violet-900">Recruitment Insights</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              'How to attract and retain top C‑suite talent',
              'Importance of executive search for C‑suite roles',
              'C‑suite hiring trends in tech & healthcare'
            ].map((title) => (
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
              'What is Fractional Hiring?',
              'Who should use Fractional Hiring?',
              'What roles are best suited for Fractional Hiring?',
              'How does Fractional Hiring save costs?',
              'Can fractional hires work remotely?',
              'Is there a minimum duration for fractional hiring?',
              'How does Jobs Territory ensure quality in Fractional Hiring?',
              'What if I need to convert a fractional hire to full‑time?',
              'Is Fractional Hiring only for short‑term needs?',
              'Why choose Jobs Territory for Fractional Hiring?'
            ].map((q) => (
              <details key={q} className="group p-5">
                <summary className="cursor-pointer list-none font-medium text-violet-900">{q}</summary>
                <p className="mt-2 text-sm text-slate-700">We tailor engagement models, vet leaders thoroughly and align on outcomes to de‑risk delivery.</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
