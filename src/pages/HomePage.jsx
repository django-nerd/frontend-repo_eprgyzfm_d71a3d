import { Clock, CheckCircle, BadgeCheck, Handshake, ArrowRight } from 'lucide-react'

function Badge({ icon: Icon, text }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 text-violet-800 border border-violet-200 px-3 py-1 text-xs">
      <Icon size={14} />
      <span>{text}</span>
    </div>
  )
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-violet-100 p-6 text-center">
      <div className="text-2xl font-bold text-violet-900">{value}</div>
      <div className="text-xs text-slate-500 mt-1">{label}</div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-100 via-fuchsia-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-violet-900">India’s Leading Recruitment & Workforce Solutions Agency</h1>
              <p className="mt-4 text-slate-700 text-lg">Hire smarter. Scale faster. One platform for recruitment, remote teams, leadership, and DEI excellence.</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Badge icon={BadgeCheck} text="Expert Recruiters" />
                <Badge icon={Clock} text="Fast Turnaround" />
                <Badge icon={CheckCircle} text="Perfect Match" />
                <Badge icon={Handshake} text="Quality Assured" />
              </div>

              <div className="mt-8 rounded-3xl bg-white shadow-lg border border-violet-200 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-violet-900">Pay Only When You Hire</div>
                    <p className="text-sm text-slate-600">Results-first recruiting with transparent pricing.</p>
                  </div>
                  <a href="/pay-per-hire" className="inline-flex items-center gap-2 rounded-full bg-violet-600 text-white px-5 py-2 text-sm hover:bg-violet-700">
                    Book a Demo <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-violet-200 via-fuchsia-200 to-indigo-100 blur-2xl" />
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop" alt="Diverse professionals" className="relative rounded-[2rem] shadow-xl border border-violet-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust & metrics */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-semibold text-violet-900">Trusted by India’s Industry Leaders</h2>
          <p className="text-center text-sm text-slate-600 mt-1">Trusted by 500+ companies | 15+ years of expertise | 80% faster hiring | Global delivery across India, UAE, UK & Australia</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Metric label="Companies served" value="5000+" />
            <Metric label="Successful placements" value="15000+" />
            <Metric label="Client retention" value="95%" />
            <Metric label="Avg response time" value="48 hrs" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-gradient-to-b from-white to-violet-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-violet-900">Our Services</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-white border border-violet-200 shadow-sm p-6">
              <h4 className="text-xl font-semibold text-violet-900">Pay Per Hire</h4>
              <p className="mt-2 text-sm text-slate-600">Pay only when a successful hire is made. No upfront costs, pay for results, scale on demand, quality guarantee.</p>
              <a href="/pay-per-hire" className="mt-4 inline-block text-violet-700 hover:text-violet-900 font-medium">Learn More →</a>
            </div>
            <div className="rounded-3xl bg-white border border-violet-200 shadow-sm p-6">
              <h4 className="text-xl font-semibold text-violet-900">Fractional Hiring</h4>
              <p className="mt-2 text-sm text-slate-600">Leadership on demand: executive expertise when you need it. Assessment, confidential process, global network.</p>
              <a href="/fractional-hiring" className="mt-4 inline-block text-violet-700 hover:text-violet-900 font-medium">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-violet-900">Ready to Transform Your Hiring Process?</h3>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">The right hire can rewrite your company’s future. Let’s find the people who will take your business to the next level.</p>
          <a href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-violet-600 text-white px-6 py-3 text-sm hover:bg-violet-700">Get Started Today</a>
        </div>
      </section>

      {/* Success stories (grid) */}
      <section className="py-14 bg-violet-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-violet-900">Success Stories</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {
                company: 'Unacademy',
                challenge: 'Needed a strong business development team to boost subscriptions.',
                solution: 'Hired 84 BDEs with strong communication and sales skills in Feb 2022.',
                results: 'Targeted sourcing, comprehensive screening, optimized time-to-hire.',
                testimonial: 'Quality and speed exceeded expectations.'
              },
              {
                company: 'Zepto',
                challenge: 'Fill 25 positions within 20 days for aggressive expansion.',
                solution: 'Multi-channel sourcing: targeted jobs, network outreach, referrals.',
                results: 'Filled in 18 days with quality hires and seamless onboarding.',
                testimonial: 'Exceeded expectations with fast turnaround.'
              },
              {
                company: 'PagarBook',
                challenge: 'Required 81+ professionals across sales, support, operations and tech.',
                solution: 'Engaged candidates from fintech, SaaS and customer success backgrounds.',
                results: '81+ roles filled, enhanced efficiency.',
                testimonial: 'Great partners with consistent delivery.'
              }
            ].map((s) => (
              <div key={s.company} className="rounded-3xl bg-white border border-violet-200 shadow-sm p-6">
                <div className="text-sm font-semibold text-violet-900">{s.company}</div>
                <p className="mt-2 text-sm text-slate-700"><span className="font-medium">Challenge:</span> {s.challenge}</p>
                <p className="mt-1 text-sm text-slate-700"><span className="font-medium">Solution:</span> {s.solution}</p>
                <p className="mt-1 text-sm text-slate-700"><span className="font-medium">Results:</span> {s.results}</p>
                <p className="mt-2 text-sm text-violet-800 italic">“{s.testimonial}”</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-violet-600 text-white px-5 py-2 text-sm hover:bg-violet-700">Start Your Journey</a>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-violet-900">Industries We Serve</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['Technology & Startups','Software engineers, PMs, data scientists and tech leaders – 2000+ placements'],
              ['Healthcare & Life Sciences','Medical experts, innovators and compliance leaders – 800+ placements'],
              ['E‑Commerce & Retail','Marketing, ops, supply chain & CX professionals – 1500+ placements'],
              ['Banking & Financial Services','Banking, insurance, fintech and investment – 1000+ placements'],
              ['Engineering & Manufacturing','Mechanical, electrical & industrial engineers – 1200+ placements'],
              ['Media & Creative','Content creators, marketers & storytellers – 1500+ placements'],
              ['Logistics & Supply Chain','On-time, on-budget operations – 700+ placements'],
              ['Real Estate','Development, sales, marketing & investment – 500+ placements'],
              ['Renewable Energy','Solar, wind & clean energy – 500+ placements'],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-3xl bg-white border border-violet-200 shadow-sm p-6">
                <div className="text-sm font-semibold text-violet-900">{title}</div>
                <p className="mt-2 text-sm text-slate-700">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl bg-violet-600/5 border border-violet-200 p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm font-medium text-violet-900">Don’t See Your Industry? Let’s talk about your hiring needs.</div>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-violet-600 text-white px-5 py-2 text-sm hover:bg-violet-700">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog & FAQs */}
      <section className="py-14 bg-violet-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-violet-900">Recruitment Insights</h3>
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

          <div className="mt-10">
            <h4 className="text-xl font-bold text-violet-900">Frequently Asked Questions</h4>
            <div className="mt-4 divide-y divide-violet-200 border border-violet-200 rounded-2xl bg-white">
              {[
                ['What type of industries do you serve?','We work across technology, healthcare, BFSI, retail, manufacturing and more, tailoring our approach to each industry’s needs.'],
                ['How fast is your hiring turnaround time?','Most roles receive vetted candidates in 24–48 hours with average time-to-hire reduced by up to 80%.'],
                ['How do you ensure candidate quality and cultural fit?','We combine behavioral interviews, structured assessments and culture-fit calibration with hiring managers.'],
                ['How do I get started with Jobs Territory?','Reach out via the contact form or book a call — we’ll scope your roles and kick off immediately.'],
                ['What guarantees do you provide?','We offer replacement guarantees and transparent milestones aligned to your model.'],
              ].map(([q,a], idx) => (
                <details key={q} className="group p-5">
                  <summary className="cursor-pointer list-none font-medium text-violet-900">{q}</summary>
                  <p className="mt-2 text-sm text-slate-700">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
