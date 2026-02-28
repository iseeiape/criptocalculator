import Link from 'next/link'

interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  readTime: string
}

export default function BlogPage() {
  const posts: BlogPost[] = [
    {
      slug: '2026-02-28-cum-sa-citesti-grafice-analiza-tehnica-incepatori',
      title: 'Cum să Citești Grafice Crypto: Analiză Tehnică pentru Începători - Ghid Complet 2026',
      description: 'Învață să citești și interpretezi graficele de preț crypto. Ghid complet despre support, resistance, indicatori tehnici (RSI, MACD), lumânări japoneze și trenduri pentru începători.',
      date: '28 Feb 2026',
      tags: ['analiza tehnica crypto', 'grafice crypto', 'support resistance', 'indicatori tehnici', 'RSI', 'MACD', 'trading crypto romania'],
      readTime: '25 min'
    },
    {
      slug: '2026-02-27-risk-management-crypto-trading-protectia-capitalului',
      title: 'Risk Management în Crypto Trading: Protecția Capitalului - Ghid Complet 2026',
      description: 'Învață cum să îți protejezi fondurile în piața crypto volatile. Reguli de risk management, stop loss-uri, raport risc/recompensă și strategii pentru trading sustenabil.',
      date: '27 Feb 2026',
      tags: ['risk management crypto', 'stop loss', 'money management', 'trading discipline', 'protectie capital'],
      readTime: '22 min'
    },
    {
      slug: '2026-02-26-cum-sa-incepi-cu-bitcoin-2026-ghid-incepatori',
      title: 'Cum să Începi cu Bitcoin în 2026: Ghid Complet pentru Începători',
      description: 'Ghid pas cu pas pentru începători în Bitcoin 2026. Află cum cumperi primul tău Bitcoin, unde îl păstrezi în siguranță, strategii de investiții și cum plătești taxele în România.',
      date: '26 Feb 2026',
      tags: ['bitcoin incepatori', 'cum cumpar bitcoin', 'primii pasi crypto', 'ghid crypto 2026', 'investitii bitcoin romania'],
      readTime: '18 min'
    },
    {
      slug: '2026-02-24-cum-sa-iti-securizezi-criptomonedele-cold-vs-hot-wallet',
      title: 'Cum să Îți Securizezi Criptomonedele: Cold vs Hot Wallet - Ghid Complet 2026',
      description: 'Ghid complet despre securitatea criptomonedelor. Află diferențele dintre cold wallet și hot wallet, cum să îți protejezi fondurile și ce greșeli să eviți în 2026.',
      date: '24 Feb 2026',
      tags: ['securitate crypto', 'cold wallet', 'hot wallet', 'hardware wallet', 'seed phrase'],
      readTime: '16 min'
    },
    {
      slug: '2026-02-22-trading-crypto-romania-legal-ghid-complet',
      title: 'Trading Crypto în România 2026: Ghid Legal Complet + Cum Plătești Taxele Corect',
      description: 'Este legal trading-ul crypto în România? Ghid complet despre reglementări ANAF 2026, cum plătești taxe crypto, impozitul pe Bitcoin și cum să fii 100% compliant cu legea.',
      date: '22 Feb 2026',
      tags: ['trading legal', 'taxe crypto', 'ANAF', 'impozit bitcoin', 'reglementari'],
      readTime: '22 min'
    },
    {
      slug: '2026-02-21-cum-platesc-taxe-bitcoin-crypto-romania-ghid-2026',
      title: 'Cum Plătești Taxele pe Bitcoin și Criptomonede în România: Ghid Complet 2026',
      description: 'Ghid practic despre cum plătești taxele crypto în România. Metode de plată ANAF, termene-limită, penalități de întârziere și calcule concrete pentru impozitul pe Bitcoin și criptomonede în 2026.',
      date: '21 Feb 2026',
      tags: ['cum platesc taxe', 'taxe crypto', 'ANAF', 'impozit bitcoin', 'penalitati'],
      readTime: '20 min'
    },
    {
      slug: '2026-02-20-declaratie-unica-crypto-ghid-complet-anaf-2026',
      title: 'Declarația Unică pentru Crypto: Ghid Complet ANAF 2026 + Pași Practic',
      description: 'Cum completezi Declarația Unică pentru criptomonede în 2026. Ghid pas cu pas cu exemple concrete, formulare PDF și instrucțiuni pentru plata taxelor crypto la ANAF.',
      date: '20 Feb 2026',
      tags: ['declaratie unica', 'taxe crypto', 'ANAF', 'ghid practic', 'formular 212'],
      readTime: '18 min'
    },
    {
      slug: '2026-02-19-trading-crypto-romania-legal-ghid-plata-taxe',
      title: 'Trading Crypto în România: Ghid Legal și Cum Plătești Taxele Corect',
      description: 'Tot ce trebuie să știi despre legalitatea tradingului crypto în România și cum plătești taxele. Ghid complet cu pași practici pentru plata impozitelor ANAF pe Bitcoin și criptomonede în 2026.',
      date: '19 Feb 2026',
      tags: ['trading legal', 'taxe crypto', 'plata impozit', 'ANAF', 'ghid practic'],
      readTime: '15 min'
    },
    {
      slug: 'metoda-fifo-calcul-profit-crypto-2026',
      title: 'Metoda FIFO pentru Crypto: Cum Calculezi Corect Profitul la ANAF 2026',
      description: 'Învață cum funcționează metoda FIFO pentru calculul taxelor crypto în România. Exemple practice, calcule pas cu pas și sfaturi pentru a plăti corect impozitul.',
      date: '19 Feb 2026',
      tags: ['FIFO', 'taxe crypto', 'ANAF', 'calcul profit', 'bitcoin'],
      readTime: '12 min'
    },
    {
      slug: 'cum-declar-crypto-anaf-2026',
      title: 'Cum Declar Crypto la ANAF 2026 - Ghid Complet Pas cu Pas',
      description: 'Ghid complet pentru declararea criptomonedelor la ANAF în 2026. Află cât plătești impozit, cum funcționează metoda FIFO și cum completezi Declarația Unică.',
      date: '18 Feb 2026',
      tags: ['ANAF', 'taxe crypto', 'declarație unică', 'impozit bitcoin'],
      readTime: '8 min'
    }
  ]

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Noise overlay */}
      <div className="noise" />

      {/* Background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-purple w-96 h-96 -top-20 -right-20 animate-float" />
        <div className="orb orb-cyan w-80 h-80 top-1/3 -left-20 animate-float-delayed" />
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
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm text-gray-400 hover:text-white transition">Unelte</Link>
              <Link href="/blog" className="text-sm text-crypto-accent">Blog</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-crypto-pink/30 bg-crypto-pink/10 px-4 py-1.5 mb-6">
            <span className="text-sm text-crypto-pink font-medium">📚 Centru Educațional</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Blog <span className="text-gradient">CriptoCalculator</span>
          </h1>
          
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Articole educative despre taxe crypto, trading și reglementări în România. 
            Fii compliant și profitabil.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="relative px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="glass border-gradient rounded-2xl p-8 card-hover group"
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-crypto-accent/10 text-crypto-accent rounded-full border border-crypto-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold text-white group-hover:text-crypto-accent transition">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="mt-3 text-gray-400 leading-relaxed">{post.description}</p>
                
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <span>📅</span> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <span>⏱️</span> {post.readTime} de citit
                    </span>
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-2 text-crypto-accent font-medium group/link"
                  >
                    <span>Citește articolul</span>
                    <span className="group-hover/link:translate-x-1 transition">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-12 glass rounded-2xl p-8 text-center border border-white/5">
            <div className="text-4xl mb-4">🚧</div>
            <h3 className="text-xl font-bold text-white mb-2">Mai multe articole în curând</h3>
            <p className="text-gray-400 mb-6">
              Urmărește-ne pentru ghiduri noi despre taxe crypto, trading și reglementări
            </p>
            <Link 
              href="/" 
              className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-crypto-dark"
            >
              <span>🧮</span> Explorează Uneltele
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/5 px-4 py-12 sm:px-6 lg:px-8 mt-12">
        <div className="mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🧮</span>
            <span className="font-bold text-gradient">CriptoCalculator</span>
          </div>
          <p className="text-sm text-gray-500">
            © 2026 CriptoCalculator. Toate drepturile rezervate.
          </p>
        </div>
      </footer>
    </main>
  )
}
