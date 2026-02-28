import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Noise overlay */}
      <div className="noise" />
      
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-cyan w-96 h-96 -top-20 -left-20 animate-float" />
        <div className="orb orb-purple w-80 h-80 top-1/3 -right-20 animate-float-delayed" />
        <div className="orb orb-pink w-64 h-64 bottom-20 left-1/4 animate-pulse-slow" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 glass-strong sticky top-0 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-crypto-accent to-crypto-purple text-xl shadow-glow-cyan">
                🧮
              </div>
              <span className="text-xl font-bold text-gradient">CriptoCalculator</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/position-calculator" className="text-sm text-gray-400 hover:text-white transition">Trading</Link>
              <Link href="/converter" className="text-sm text-gray-400 hover:text-white transition">Convertor</Link>
              <Link href="/anaf" className="text-sm text-gray-400 hover:text-white transition">Taxe ANAF</Link>
              <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition">Blog</Link>
            </div>
            <Link 
              href="/position-calculator" 
              className="btn-primary rounded-xl px-6 py-2.5 text-sm font-semibold text-crypto-dark"
            >
              Începe Acum
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-32 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-crypto-accent/30 bg-crypto-accent/10 px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crypto-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-crypto-accent"></span>
            </span>
            <span className="text-sm text-crypto-accent font-medium">100% Gratuit • Fără Înregistrare</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-white">Unelte Crypto pentru</span>
            <br />
            <span className="text-gradient">Traderi Profesioniști</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
            Calculează mărimea poziției, convertește criptomonede și declară-ți taxele ANAF 
            ca un pro. Toate uneltele de care ai nevoie, într-un singur loc.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/position-calculator"
              className="btn-primary rounded-2xl px-8 py-4 font-semibold text-crypto-dark flex items-center gap-2"
            >
              <span>🚀</span> Începe Calculul
            </Link>
            <Link
              href="/anaf"
              className="btn-secondary rounded-2xl px-8 py-4 font-semibold text-white flex items-center gap-2"
            >
              <span>🏛️</span> Calculator Taxe
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-bold text-gradient-cyan">4+</div>
              <div className="text-sm text-gray-500 mt-1">Unelte Gratuite</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient-cyan">100%</div>
              <div className="text-sm text-gray-500 mt-1">Privat & Sigur</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient-cyan">0 RON</div>
              <div className="text-sm text-gray-500 mt-1">Cost Permanent</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ce Îți Oferim
            </h2>
            <p className="mt-4 text-gray-400">Unelte profesionale, zero costuri</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Position Calculator Card */}
            <Link href="/position-calculator" className="group">
              <div className="glass card-hover border-gradient rounded-2xl p-8 h-full">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-crypto-accent/20 to-crypto-accent/5 text-2xl border border-crypto-accent/20 group-hover:border-crypto-accent/50 transition">
                  📊
                </div>
                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-crypto-accent transition">
                  Calculator Poziție
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Calculează mărimea perfectă a poziției bazată pe toleranța ta la risc. 
                  Protecție inteligentă pentru capital.
                </p>
                <div className="mt-5 flex items-center gap-2 text-crypto-accent text-sm font-medium">
                  <span>Încearcă acum</span>
                  <span className="group-hover:translate-x-1 transition">→</span>
                </div>
              </div>
            </Link>

            {/* Crypto Converter Card */}
            <Link href="/converter" className="group">
              <div className="glass card-hover border-gradient rounded-2xl p-8 h-full">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-crypto-purple/20 to-crypto-purple/5 text-2xl border border-crypto-purple/20 group-hover:border-crypto-purple/50 transition">
                  💱
                </div>
                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-crypto-purple transition">
                  Convertor Crypto
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Convertește Bitcoin, Ethereum, Solana în RON, USD, EUR. 
                  Rate în timp real de la CoinGecko.
                </p>
                <div className="mt-5 flex items-center gap-2 text-crypto-purple text-sm font-medium">
                  <span>Convertește</span>
                  <span className="group-hover:translate-x-1 transition">→</span>
                </div>
              </div>
            </Link>

            {/* ANAF Tax Calculator Card */}
            <Link href="/anaf" className="group">
              <div className="glass card-hover border-gradient rounded-2xl p-8 h-full">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-crypto-green/20 to-crypto-green/5 text-2xl border border-crypto-green/20 group-hover:border-crypto-green/50 transition">
                  🏛️
                </div>
                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-crypto-green transition">
                  Taxe ANAF 2026
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Calculează taxele pentru cripto conform ANAF 2026. 
                  Metoda FIFO, impozit 16%, CASS. Fără panică!
                </p>
                <div className="mt-5 flex items-center gap-2 text-crypto-green text-sm font-medium">
                  <span>Calculează taxele</span>
                  <span className="group-hover:translate-x-1 transition">→</span>
                </div>
              </div>
            </Link>

            {/* Blog Card */}
            <Link href="/blog" className="group">
              <div className="glass card-hover border-gradient rounded-2xl p-8 h-full">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-crypto-pink/20 to-crypto-pink/5 text-2xl border border-crypto-pink/20 group-hover:border-crypto-pink/50 transition">
                  📚
                </div>
                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-crypto-pink transition">
                  Ghiduri & Articole
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Articole educative despre taxe crypto și reglementări ANAF.
                  Fii compliant și profitabil.
                </p>
                <div className="mt-5 flex items-center gap-2 text-crypto-pink text-sm font-medium">
                  <span>Citește</span>
                  <span className="group-hover:translate-x-1 transition">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-crypto-accent/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl">
          <div className="glass rounded-3xl p-8 md:p-16">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="text-center group">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-crypto-accent/10 border border-crypto-accent/20 group-hover:border-crypto-accent/40 transition">
                  <span className="text-4xl">⚡</span>
                </div>
                <h4 className="mb-3 text-xl font-bold text-white">Calcule Instant</h4>
                <p className="text-gray-400 leading-relaxed">Rezultate în timp real pe măsură ce tastezi. Nicio așteptare, nicio pagină reîncărcată.</p>
              </div>
              <div className="text-center group">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-crypto-purple/10 border border-crypto-purple/20 group-hover:border-crypto-purple/40 transition">
                  <span className="text-4xl">🔒</span>
                </div>
                <h4 className="mb-3 text-xl font-bold text-white">100% Privat</h4>
                <p className="text-gray-400 leading-relaxed">Nicio dată stocată pe servere. Toate calculele se fac în browser-ul tău.</p>
              </div>
              <div className="text-center group">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-crypto-green/10 border border-crypto-green/20 group-hover:border-crypto-green/40 transition">
                  <span className="text-4xl">💯</span>
                </div>
                <h4 className="mb-3 text-xl font-bold text-white">Gratis pentru Totdeauna</h4>
                <p className="text-gray-400 leading-relaxed">Fără înregistrare, fără card de credit, fără limitări. Pur și simplu funcționează.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="glass-strong rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-crypto-accent/10 via-crypto-purple/10 to-crypto-pink/10" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">
                Gata să Tranzacționezi mai Inteligent?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Alătură-te miilor de traderi români care folosesc CriptoCalculator pentru a-și proteja capitalul și maximiza profiturile.
              </p>
              <Link
                href="/position-calculator"
                className="btn-primary inline-flex items-center gap-2 rounded-2xl px-8 py-4 font-semibold text-crypto-dark"
              >
                <span>🎯</span> Începe Gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/5 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🧮</span>
                <span className="font-bold text-gradient">CriptoCalculator</span>
              </div>
              <p className="text-sm text-gray-500">
                Unelte profesionale pentru traderi de criptomonede. 100% gratuite, 100% private.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Unelte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/position-calculator" className="hover:text-crypto-accent transition">Calculator Poziție</Link></li>
                <li><Link href="/converter" className="hover:text-crypto-accent transition">Convertor Crypto</Link></li>
                <li><Link href="/anaf" className="hover:text-crypto-accent transition">Taxe ANAF</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resurse</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/blog" className="hover:text-crypto-accent transition">Blog</Link></li>
                <li><Link href="/blog/cum-declar-crypto-anaf-2026" className="hover:text-crypto-accent transition">Ghid ANAF 2026</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><span className="text-gray-600">Nu este sfat financiar</span></li>
                <li><span className="text-gray-600">© 2026 CriptoCalculator</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-600">
            <p>Tranzacționează responsabil. Criptomonedele sunt volatile.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
