import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Upload a photo",
    description: "Take a quick photo of your item or upload an existing one from your phone or computer.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "AI does the work",
    description: "Our AI instantly analyzes your product and generates a professional listing with title, description, pricing, and more.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Copy & paste to sell",
    description: "One click copies any field. Paste straight into eBay, Facebook Marketplace, Craigslist, or Instagram.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

const features = [
  {
    title: "Product Title",
    description: "Attention-grabbing, keyword-rich titles that show up in search.",
    emoji: "🏷️",
  },
  {
    title: "Sales Description",
    description: "3–4 sentence persuasive copy that highlights benefits and builds trust.",
    emoji: "✍️",
  },
  {
    title: "Price Range",
    description: "Market-aware pricing suggestions based on condition and category.",
    emoji: "💰",
  },
  {
    title: "SEO Keywords",
    description: "5 targeted keywords to boost visibility across every platform.",
    emoji: "🔍",
  },
  {
    title: "Social Caption",
    description: "One punchy caption ready to post on Instagram, TikTok, or Facebook.",
    emoji: "📱",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-20 pb-28 sm:pt-28 sm:pb-36">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,58,237,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border border-violet-200 text-violet-600 bg-violet-50 mb-8 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            Powered by Claude AI
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-gray-900 leading-tight mb-6 animate-fade-in-up-1">
            Sell anything online{" "}
            <span
              className="relative"
              style={{ color: "var(--accent)" }}
            >
              instantly
            </span>
            .
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 animate-fade-in-up-2">
            Upload a photo of any item and ListifyAI writes the perfect product title, description, price range, keywords, and social caption — in seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up-3">
            <Link
              href="/tool"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all hover:opacity-90 active:scale-95 shadow-md"
              style={{ background: "var(--accent)" }}
            >
              Try it free
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-gray-700 font-semibold px-6 py-3 rounded-xl text-sm border border-gray-200 bg-white hover:bg-gray-50 transition-all"
            >
              See pricing
            </Link>
          </div>

          {/* Fake browser mockup */}
          <div className="mt-16 animate-fade-in-up-4 max-w-2xl mx-auto">
            <div className="rounded-2xl border border-gray-200 shadow-2xl overflow-hidden bg-white">
              <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 mx-4 bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-200 text-left">
                  listifyai.com/tool
                </div>
              </div>
              <div className="p-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center gap-2 py-8 text-gray-400 text-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                  Upload photo
                </div>
                <div className="space-y-3">
                  {["Product Title", "Description", "Price Range", "Keywords"].map((label) => (
                    <div key={label} className="shimmer rounded-lg h-8" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-3">How it works</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              From photo to listing in 3 steps
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white mb-4"
                  style={{ background: "var(--accent)" }}
                >
                  {step.icon}
                </div>
                <div className="absolute top-4 right-4 text-4xl font-black text-gray-100 select-none leading-none">
                  {step.number}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-3">What you get</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Everything you need to sell
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base">
              One photo generates five ready-to-use assets. No writing experience needed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-5 hover:border-violet-200 hover:bg-violet-50/30 transition-all">
                <div className="text-2xl mb-3">{f.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
            <div
              className="rounded-2xl p-5 text-white flex flex-col justify-between"
              style={{ background: "var(--accent)" }}
            >
              <div>
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="font-bold text-lg mb-1">Ready in seconds</h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  Stop spending 20 minutes per listing. ListifyAI does it in under 10 seconds.
                </p>
              </div>
              <Link
                href="/tool"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white underline underline-offset-2 opacity-90 hover:opacity-100"
              >
                Try it now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Start selling smarter today
          </h2>
          <p className="text-lg opacity-80 mb-8">
            Join thousands of sellers using AI to write better listings, faster.
          </p>
          <Link
            href="/tool"
            className="inline-flex items-center gap-2 bg-white text-violet-700 font-bold px-8 py-3.5 rounded-xl text-sm hover:bg-violet-50 transition-all shadow-lg active:scale-95"
          >
            Try ListifyAI free
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
