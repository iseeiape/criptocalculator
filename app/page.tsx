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
            Calculatoare criptomonede gratuite pentru traderi. 
            Calculează mărimea poziției, convertește crypto și urmărește profitul ca un profesionist.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="#calculator"
              className="rounded-lg bg-crypto-accent px-8 py-4 font-semibold text-crypto-dark transition hover:scale-105 hover:bg-crypto-accent/90"
            >
              Începe Calculul
            </Link>
            <Link
              href="#converter"
              className="rounded-lg border-2 border-crypto-purple px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-crypto-purple/20"
            >
              Convertește Crypto
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
            Unelte Crypto Gratuite
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Position Size Calculator Card */}
            <Link href="/position-calculator" className="group">
              <div className="rounded-2xl bg-crypto-card p-8 transition hover:scale-[1.02] hover:border-crypto-accent border border-gray-800 h-full">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-crypto-accent/20 text-3xl">
                  📊
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-crypto-accent">
                  Calculator Poziție Trading
                </h3>
                <p className="text-gray-400">
                  Calculează mărimea perfectă a poziției bazată pe toleranța ta la risc. 
                  Nu riști niciodată mai mult decât trebuie.
                </p>
              </div>
            </Link>

            {/* Crypto Converter Card */}
            <Link href="/converter" className="group">
              <div className="rounded-2xl bg-crypto-card p-8 transition hover:scale-[1.02] hover:border-crypto-purple border border-gray-800 h-full">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-crypto-purple/20 text-3xl">
                  💱
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-crypto-purple">
                  Convertor Crypto
                </h3>
                <p className="text-gray-400">
                  Convertește Bitcoin, Ethereum, Solana în RON, USD, EUR. 
                  Rate de schimb în timp real.
                </p>
              </div>
            </Link>

            {/* ANAF Tax Calculator Card */}
            <Link href="/anaf" className="group">
              <div className="rounded-2xl bg-crypto-card p-8 transition hover:scale-[1.02] hover:border-crypto-green border border-gray-800 h-full">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-crypto-green/20 text-3xl">
                  🏛️
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-crypto-green">
                  Calculator Taxe ANAF
                </h3>
                <p className="text-gray-400">
                  Calculează taxele pentru criptomonede conform ANAF 2026. 
                  Metoda FIFO, impozit 10%, CASS. Panică la taxe? Noi te ajutăm!
                </p>
              </div>
            </Link>

            {/* Blog/Resources Card */}
            <Link href="/blog" className="group">
              <div className="rounded-2xl bg-crypto-card p-8 transition hover:scale-[1.02] hover:border-crypto-green border border-gray-800 h-full">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-crypto-green/20 text-3xl">
                  📚
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-crypto-green">
                  Ghiduri & Articole
                </h3>
                <p className="text-gray-400">
                  Articole educative despre taxe crypto și reglementări ANAF.
                  Învață cum să fii compliant și profitabil.
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
              <h4 className="mb-2 text-lg font-semibold">Calcule Instant</h4>
              <p className="text-gray-400">Rezultate în timp real pe măsură ce tastezi</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">🔒</div>
              <h4 className="mb-2 text-lg font-semibold">100% Privat</h4>
              <p className="text-gray-400">Nicio dată stocată, calcule în browser</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">💯</div>
              <h4 className="mb-2 text-lg font-semibold">Gratis pentru Totdeauna</h4>
              <p className="text-gray-400">Fără înregistrare, fără card de credit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center text-gray-500">
          <p>© 2026 CriptoCalculator. Unelte crypto gratuite pentru traderi.</p>
          <p className="mt-2 text-sm">
            Nu este sfat financiar. Tranzacționează responsabil.
          </p>
        </div>
      </footer>
    </main>
  )
}