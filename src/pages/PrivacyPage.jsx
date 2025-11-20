export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-violet-100 via-fuchsia-50 to-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-extrabold text-violet-900">Privacy Policy</h1>
          <p className="mt-4 text-slate-700">This policy explains what data we collect, how we collect it, how we use it and when we share it.</p>

          <div className="mt-8 space-y-6 text-sm text-slate-700">
            <div>
              <h2 className="text-violet-900 font-semibold">Data We Collect</h2>
              <p>Personal information (name, email, phone), technical information (IP, device, cookies), transaction details and preferences.</p>
            </div>
            <div>
              <h2 className="text-violet-900 font-semibold">How We Collect</h2>
              <p>Directly from you (forms, email), automatically (cookies, analytics) and from third parties (partners, public sources).</p>
            </div>
            <div>
              <h2 className="text-violet-900 font-semibold">How We Use</h2>
              <p>To provide and improve services, communicate with you, ensure security and process payments where applicable.</p>
            </div>
            <div>
              <h2 className="text-violet-900 font-semibold">Sharing</h2>
              <p>With service providers, with your consent or to comply with legal obligations.</p>
            </div>
            <div>
              <h2 className="text-violet-900 font-semibold">Your Rights</h2>
              <p>You can request access, correction or deletion of your data and opt out of marketing communications.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
