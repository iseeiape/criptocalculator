import Link from 'next/link'

// This would normally be loaded from the markdown file
// For static export, we include the content directly
const blogPosts: { [key: string]: any } = {
  'cum-declar-crypto-anaf-2026': {
    title: 'Cum Declar Crypto la ANAF 2026 - Ghid Complet Pas cu Pas',
    description: 'Ghid complet pentru declararea criptomonedelor la ANAF în 2026.',
    date: '2026-02-18',
    content: `
<h1>Cum Declar Crypto la ANAF 2026 - Ghid Complet Pas cu Pas</h1>

<h2>Introducere: Panica de la Început de An</h2>
<p>Dacă citești acest articol, probabil că ai realizat că trebuie să declari criptomonedele la ANAF și nu știi exact cum să faci asta. Nu ești singur - mii de români se confruntă cu aceeași problemă în fiecare an.</p>

<p><strong>Vestea bună?</strong> Procesul e mai simplu decât pare, iar cu acest ghid vei ști exact ce ai de făcut.</p>

<p><strong>Vestea și mai bună?</strong> Am creat un <a href="/anaf/">calculator de taxe crypto</a> care îți spune EXACT cât ai de plătit în 30 de secunde.</p>

<h2>Ce Impozite Plătești pe Crypto în România (2026)</h2>

<h3>1. Impozitul pe Venit: 10%</h3>
<p>Orice profit realizat din tranzacții cu criptomonede este impozitat cu <strong>10%</strong>.</p>

<p><strong>Ce înseamnă profit realizat?</strong></p>
<ul>
<li>Cumperi 1 BTC la 200.000 RON</li>
<li>Vinzi 1 BTC la 300.000 RON</li>
<li>Profit = 100.000 RON</li>
<li>Impozit = 10.000 RON (10%)</li>
</ul>

<h3>2. CASS (Contribuția la Asigurările Sociale de Sănătate): 10%</h3>

<p>Aici apare o nuanță importantă:</p>
<ul>
<li>Dacă profitul tău anual este <strong>sub 12.000 RON</strong> → <strong>Nu plătești CASS</strong></li>
<li>Dacă profitul tău anual este <strong>peste 12.000 RON</strong> → Plătești 10% CASS pe porțiunea care depășește 12.000 RON</li>
</ul>

<h2>Metoda FIFO: Cum Se Calculează Profitul</h2>

<p>ANAF folosește metoda <strong>FIFO</strong> (First In, First Out) pentru calculul profitului.</p>

<p><strong>Exemplu:</strong></p>
<ul>
<li><strong>Ianuarie 2026:</strong> Cumperi 1 BTC la 200.000 RON</li>
<li><strong>Martie 2026:</strong> Cumperi 0.5 BTC la 250.000 RON</li>
<li><strong>Iunie 2026:</strong> Vinzi 1.2 BTC la 350.000 RON</li>
</ul>

<p><strong>Calcul FIFO:</strong></p>
<ol>
<li>Prima vânzare (1 BTC) se împerechează cu prima cumpărare (Ianuarie)
   <br/>Profit: 350.000 - 200.000 = 150.000 RON</li>
<li>Restul de 0.2 BTC se împerechează cu cumpărarea din Martie
   <br/>Profit: 20.000 RON</li>
</ol>

<p><strong>Profit total: 170.000 RON</strong></p>

<h2>Pași pentru Declararea Criptomonedelor</h2>

<h3>Pasul 1: Calculează-ți Profitul</h3>
<p>Folosește <a href="/anaf/">calculatorul nostru ANAF</a> pentru a-ți calcula automat profitul și taxele folosind metoda FIFO.</p>

<h3>Pasul 2: Completează Declarația Unică</h3>
<p>Termenul este <strong>25 mai 2027</strong> (pentru veniturile din 2026).</p>

<h3>Pasul 3: Plătești Impozitul</h3>
<p>Ai termen până la 25 mai 2027 să plătești impozitul calculat.</p>

<h2>Concluzie</h2>

<p>Declararea criptomonedelor la ANAF nu e complicată dacă știi pașii:</p>

<ol>
<li><strong>Calculează-ți profitul</strong> (folosind metoda FIFO)</li>
<li><strong>Completează Declarația Unică</strong> până pe 25 mai 2027</li>
<li><strong>Plătește impozitul</strong> (10% + CASS dacă e cazul)</li>
</ol>

<div class="bg-crypto-accent/10 border border-crypto-accent p-4 rounded-lg my-6">
  <p class="font-bold text-white">🧮 Accesează Calculatorul ANAF Gratuit</p>
  <p class="text-gray-300">Calculează-ți taxele instant - 100% Gratuit, fără înregistrare.</p>
  <a href="/anaf/" class="inline-block mt-2 bg-crypto-accent text-crypto-dark font-bold py-2 px-4 rounded hover:opacity-90">Deschide Calculatorul →</a>
</div>

<hr/>

<p class="text-sm text-gray-500"><em>Disclaimer: Acest articol are scop informativ. Pentru situații complexe, consultă un contabil autorizat.</em></p>
    `
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]
  
  if (!post) {
    return (
      <main className="min-h-screen bg-crypto-dark px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl text-white">Articolul nu a fost găsit</h1>
          <Link href="/blog" className="text-crypto-accent mt-4 inline-block">
            ← Înapoi la blog
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-crypto-dark px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/blog" className="text-crypto-accent hover:underline">
            ← Înapoi la blog
          </Link>
        </div>

        {/* Article */}
        <article className="prose prose-invert prose-lg max-w-none">
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* CTA */}
        <div className="mt-12 p-6 bg-crypto-card rounded-xl border border-gray-800">
          <h3 className="text-xl font-bold text-white mb-2">Calculează-ți Taxele Crypto</h3>
          <p className="text-gray-400 mb-4">
            Folosește calculatorul nostru gratuit pentru a afla exact cât ai de plătit la ANAF.
          </p>
          <Link 
            href="/anaf/"
            className="inline-block bg-crypto-accent text-crypto-dark font-bold py-3 px-6 rounded-lg hover:opacity-90"
          >
            Deschide Calculatorul ANAF →
          </Link>
        </div>
      </div>
    </main>
  )
}