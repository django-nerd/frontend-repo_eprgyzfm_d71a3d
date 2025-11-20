export default function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-violet-100 via-fuchsia-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-violet-900">About Us</h1>
          <p className="mt-4 text-slate-700 text-lg max-w-3xl">Jobs Territory is one of India’s leading recruitment agencies delivering end‑to‑end hiring solutions for startups to large enterprises. We align talent with your vision, culture and growth strategy, using technology, industry expertise and an extensive talent pool to streamline recruitment.</p>

          <p className="mt-6 text-slate-700 max-w-3xl">For candidates, we guide professionals to roles where they can thrive by understanding their goals and matching them with positions that fit both their strengths and aspirations.</p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              ['15000+','successful hires'],
              ['100%','service commitment'],
              ['500+','leadership roles closed'],
              ['20+','locations covered'],
            ].map(([value,label]) => (
              <div key={value} className="rounded-2xl bg-white border border-violet-200 shadow-sm p-6 text-center">
                <div className="text-2xl font-bold text-violet-900">{value}</div>
                <div className="text-xs text-slate-600">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-white border border-violet-200 shadow-sm p-6">
              <h2 className="text-xl font-semibold text-violet-900">Our Vision</h2>
              <p className="mt-2 text-sm text-slate-700">To streamline hiring through customized recruitment solutions that align with each client’s culture, goals and long‑term growth, combining innovation, industry insights and a people‑first approach.</p>
            </div>
            <div className="rounded-3xl bg-white border border-violet-200 shadow-sm p-6">
              <h2 className="text-xl font-semibold text-violet-900">Our Mission</h2>
              <p className="mt-2 text-sm text-slate-700">To connect businesses with the right talent through experienced recruiters and innovative strategies, prioritising quality, precision and long‑term fit.</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              ['24–48 hrs','turnaround to submit candidates'],
              ['500+','happy clients'],
              ['100+','recruitment specialists'],
              ['98%','client retention rate'],
            ].map(([value,label]) => (
              <div key={value} className="rounded-2xl bg-white border border-violet-200 shadow-sm p-6 text-center">
                <div className="text-2xl font-bold text-violet-900">{value}</div>
                <div className="text-xs text-slate-600">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-semibold text-violet-900">FAQs</h2>
            <div className="mt-4 divide-y divide-violet-200 border border-violet-200 rounded-2xl bg-white">
              {[
                'What industries do you specialise in?',
                'Do you only work with large companies?',
                'How do you ensure the right candidate fit?',
                'What services do you offer for businesses?',
                'How do you support job seekers?',
                'What makes you different from other recruitment agencies?',
                'Do you provide recruitment support outside India?',
                'How quickly can you fill a position?',
                'What is your commitment to clients?',
                'How can I get started with you?',
              ].map((q) => (
                <details key={q} className="group p-5">
                  <summary className="cursor-pointer list-none font-medium text-violet-900">{q}</summary>
                  <p className="mt-2 text-sm text-slate-700">We tailor our approach to your needs, leveraging deep industry expertise and a robust network to deliver the right talent, fast.</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
