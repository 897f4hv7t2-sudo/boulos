import Link from "next/link";

const features = [
  "Unlimited product analyses",
  "AI-generated title, description & price",
  "5 SEO keywords per listing",
  "Social media caption included",
  "One-click copy for every field",
  "Works on any device",
  "eBay, Facebook, Craigslist & more",
  "Priority support",
];

const faqs = [
  {
    q: "How does ListifyAI work?",
    a: "You upload a photo of any product. Our AI (powered by Claude) analyzes the image and instantly generates a complete marketplace listing — title, description, price range, keywords, and a social caption.",
  },
  {
    q: "What marketplaces is this for?",
    a: "Any! eBay, Facebook Marketplace, Craigslist, Depop, Poshmark, Instagram, TikTok Shop, and more. Just copy and paste.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — try the tool once for free on our tool page, no signup required. Subscribe when you're ready to list without limits.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. Cancel any time from your account settings with no penalties or fees.",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-3">Pricing</p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
            One plan. Everything included.
          </h1>
          <p className="text-gray-500 text-lg">
            No tiers, no hidden limits. Pay one flat rate and generate as many listings as you need.
          </p>
        </div>
      </section>

      {/* Pricing card */}
      <section className="pb-20">
        <div className="max-w-sm mx-auto px-4 sm:px-6">
          <div className="relative rounded-3xl border-2 overflow-hidden shadow-xl" style={{ borderColor: "var(--accent)" }}>
            {/* Badge */}
            <div
              className="absolute top-5 right-5 text-xs font-bold text-white px-3 py-1 rounded-full"
              style={{ background: "var(--accent)" }}
            >
              Most popular
            </div>

            <div className="p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-1">Pro</h2>
              <p className="text-gray-500 text-sm mb-6">Everything you need to sell faster.</p>

              <div className="flex items-end gap-1 mb-2">
                <span className="text-5xl font-black text-gray-900">$14</span>
                <span className="text-gray-500 text-base mb-2">/month</span>
              </div>
              <p className="text-xs text-gray-400 mb-8">Billed monthly. Cancel anytime.</p>

              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <span
                      className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                      style={{ background: "var(--accent-light)" }}
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--accent)" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/tool"
                className="block w-full text-center py-3.5 rounded-xl font-bold text-white text-sm transition-all hover:opacity-90 active:scale-95 shadow-md"
                style={{ background: "var(--accent)" }}
              >
                Get started — $14/mo
              </Link>
              <p className="text-center text-xs text-gray-400 mt-3">Try free first, no credit card required</p>
            </div>
          </div>

          {/* Compare note */}
          <div className="mt-8 p-4 rounded-2xl bg-gray-50 border border-gray-100 text-center">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Save 20+ minutes per listing.</span> At just $14/mo, one saved hour pays for months.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black text-gray-900 text-center mb-10">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)" }}
      >
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-black mb-4">Ready to list faster?</h2>
          <p className="opacity-80 mb-8 text-base">Try the tool free — no account needed.</p>
          <Link
            href="/tool"
            className="inline-flex items-center gap-2 bg-white text-violet-700 font-bold px-7 py-3 rounded-xl text-sm hover:bg-violet-50 transition-all shadow-lg active:scale-95"
          >
            Try it free
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
