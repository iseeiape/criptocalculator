import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-crypto-purple/20 via-transparent to-crypto-accent/20" />
        
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="bg-gradient-to-r from-crypto-accent via-crypto-purple to-crypto-accent bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            CriptoCalculator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
            Free cryptocurrency calculators and trading tools. 
            Calculate position sizes, convert crypto, and track profits like a pro.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="#calculator"
              className="rounded-lg bg-crypto-accent px-8 py-4 font-semibold text-crypto-dark transition hover:scale-105 hover:bg-crypto-accent/90"
            >
              Start Calculating
            </Link>
            <Link
              href="#converter"
              className="rounded-lg border-2 border-crypto-purple px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-crypto-purple/20"
            >
              Convert Crypto
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
            Free Crypto Tools
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {/* Position Size Calculator Card */}
            <Link href="/position-calculator" className="group">
              <div className="rounded-2xl bg-crypto-card p-8 transition hover:scale-[1.02] hover:border-crypto-accent border border-gray-800">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-crypto-accent/20 text-3xl">
                  📊
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-crypto-accent">
                  Position Size Calculator
                </h3>
                <p className="text-gray-400">
                  Calculate the perfect position size based on your risk tolerance. 
                  Never risk more than you should.
                </p>
              </div>
            </Link>

            {/* Crypto Converter Card */}
            <Link href="/converter" className="group">
              <div className="rounded-2xl bg-crypto-card p-8 transition hover:scale-[1.02] hover:border-crypto-purple border border-gray-800">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-crypto-purple/20 text-3xl">
                  💱
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-crypto-purple">
                  Crypto Converter
                </h3>
                <p className="text-gray-400">
                  Convert Bitcoin, Ethereum, Solana to RON, USD, EUR. 
                  Real-time exchange rates.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-gray-800 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-4xl">⚡</div>
              <h4 className="mb-2 text-lg font-semibold">Instant Calculations</h4>
              <p className="text-gray-400">Real-time results as you type</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">🔒</div>
              <h4 className="mb-2 text-lg font-semibold">100% Private</h4>
              <p className="text-gray-400">No data stored, calculations in browser</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">💯</div>
              <h4 className="mb-2 text-lg font-semibold">Free Forever</h4>
              <p className="text-gray-400">No signup, no credit card required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center text-gray-500">
          <p>© 2025 CriptoCalculator. Free crypto tools for traders.</p>
          <p className="mt-2 text-sm">
            Not financial advice. Trade responsibly.
          </p>
        </div>
      </footer>
    </main>
  )
}