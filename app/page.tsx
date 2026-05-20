export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Content Protection
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Track Where Your Content<br />
          <span className="text-[#58a6ff]">Gets Stolen Online</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Automatically crawl the web for plagiarized copies of your content, generate DMCA takedown notices in one click, and track every enforcement action — all in one dashboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Protecting — $12/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-[#8b949e]">
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Automated web monitoring</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> One-click DMCA notices</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Enforcement tracking</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Instant alerts</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-extrabold text-white">$12</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to protect your content</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Monitor up to 50 content pieces",
              "Daily automated web crawls",
              "Instant email & dashboard alerts",
              "Auto-generated DMCA notices",
              "Enforcement status tracking",
              "Export reports as PDF"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Now
          </a>
          <p className="text-xs text-[#8b949e] mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the plagiarism detection work?</h3>
            <p className="text-[#8b949e] text-sm">We use search APIs to crawl the web for text matching your original content. When a match above your threshold is found, you receive an instant alert with the source URL, similarity score, and a pre-filled DMCA notice ready to send.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What is a DMCA takedown notice?</h3>
            <p className="text-[#8b949e] text-sm">A DMCA (Digital Millennium Copyright Act) notice is a formal legal request to remove infringing content. We auto-generate compliant notices for each detected violation so you can send them to hosting providers or Google with a single click.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Who is this tool built for?</h3>
            <p className="text-[#8b949e] text-sm">Bloggers, online course creators, content agencies, and anyone who publishes original written content online. If you create content professionally and want to protect your intellectual property, this tool is for you.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Content Plagiarism Source Tracker. All rights reserved.
      </footer>
    </main>
  );
}
