import Link from 'next/link'

export function generateStaticParams() {
  return [
    { slug: 'cum-declar-crypto-anaf-2026' },
    { slug: 'metoda-fifo-calcul-profit-crypto-2026' },
    { slug: '2026-02-21-cum-platesc-taxe-bitcoin-crypto-romania-ghid-2026' }
  ]
}

const blogPosts: { [key: string]: any } = {
  '2026-02-21-cum-platesc-taxe-bitcoin-crypto-romania-ghid-2026': {
    title: 'Cum Plătești Taxele pe Bitcoin și Criptomonede în România: Ghid Complet 2026',
    description: 'Ghid practic despre cum plătești taxele crypto în România. Metode de plată ANAF, termene-limită, penalități și calcule concrete.',
    date: '21 Februarie 2026',
    readTime: '20 minute',
    author: 'CriptoCalculator Team',
    tags: ['cum platesc taxe', 'taxe crypto', 'ANAF', 'impozit bitcoin', 'penalitati'],
    content: `
<div class="prose-custom">
  <div class="glass-strong rounded-2xl p-8 mb-10 border-l-4 border-crypto-accent">
    <p class="text-lg text-gray-300 leading-relaxed mb-4">
      Ai realizat profit din Bitcoin, Ethereum sau alte criptomonede și acum te întrebi cum plătești taxele? 
      Mulți români știu că trebuie să declare veniturile crypto, dar puțini știu <strong class="text-white">exact cum se face plata efectivă</strong>.
    </p>
    <div class="flex items-center gap-2 text-crypto-red">
      <span>⚠️</span>
      <span class="font-medium">Termenul-limită pentru 2026: 25 mai 2027!</span>
    </div>
  </div>

  <div class="flex flex-col sm:flex-row gap-4 mb-12">
    <a href="/anaf/" class="btn-primary rounded-xl px-6 py-4 font-semibold text-crypto-dark text-center flex items-center justify-center gap-2">
      <span>🧮</span> Calculează Taxele Instant
    </a>
  </div>

  <h2 class="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-crypto-accent/20 text-xl">📊</span>
    Cât Impozit Plătești pe Profitul Crypto în 2026
  </h2>

  <div class="grid md:grid-cols-2 gap-6 mb-10">
    <div class="glass rounded-xl p-6 border border-crypto-accent/20">
      <div class="text-3xl font-bold text-crypto-accent mb-2">10%</div>
      <div class="text-sm text-gray-400 mb-3">Impozit pe Venit</div>
      <p class="text-gray-400 text-sm">Aplicat întotdeauna pe profitul realizat din tranzacții crypto.</p>
    </div>
    <div class="glass rounded-xl p-6 border border-crypto-green/20">
      <div class="text-3xl font-bold text-crypto-green mb-2">10%</div>
      <div class="text-sm text-gray-400 mb-3">CASS (opțional)</div>
      <p class="text-gray-400 text-sm">Doar dacă profitul depășește 12.000 RON/an.</p>
    </div>
  </div>

  <h3 class="text-xl font-bold text-white mb-4">Exemplu: Profit Peste 12.000 RON</h3>
  
  <div class="glass rounded-xl p-6 mb-8">
    <div class="space-y-3">
      <div class="flex justify-between items-center py-2 border-b border-white/5">
        <span class="text-gray-400">Profit total realizat</span>
        <span class="text-white font-mono">25.500 RON</span>
      </div>
      <div class="flex justify-between items-center py-2 border-b border-crypto-accent/30">
        <span class="text-crypto-accent">Impozit 10%</span>
        <span class="text-crypto-accent font-mono">2.550 RON</span>
      </div>
      <div class="flex justify-between items-center py-2 border-b border-crypto-green/30">
        <span class="text-crypto-green">CASS 10%</span>
        <span class="text-crypto-green font-mono">2.550 RON</span>
      </div>
      <div class="flex justify-between items-center py-3 bg-crypto-red/10 rounded-lg px-4 mt-2">
        <span class="text-white font-semibold">TOTAL DE PLATĂ</span>
        <span class="text-crypto-red font-mono font-bold text-lg">5.100 RON</span>
      </div>
    </div>
  </div>

  <div class="glass rounded-xl p-6 mb-8 border border-crypto-accent/20">
    <h4 class="text-lg font-semibold text-white mb-4">💡 Observație Importantă</h4>
    <p class="text-gray-300">CASS se aplică pe <strong>întreg profitul</strong>, nu doar pe suma care depășește 12.000 RON! De la 12.000 RON în sus, plătești efectiv 20% taxe totale.</p>
  </div>

  <h2 class="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-crypto-purple/20 text-xl">🏦</span>
    Metode de Plată a Taxelor Crypto la ANAF
  </h2>

  <div class="space-y-6 mb-10">
    <div class="glass rounded-xl p-6 border border-crypto-accent/20">
      <div class="flex items-center gap-3 mb-4">
        <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-crypto-accent/20 text-2xl">⭐</div>
        <h3 class="text-lg font-semibold text-white">1. Plată Online prin SPV (Recomandată)</h3>
      </div>
      <p class="text-gray-400 text-sm mb-4">Cea mai rapidă metodă. Intră în SPV, navighează la "Obligații de plată", selectează metoda (card sau internet banking) și confirmă.</p>
      <div class="flex flex-wrap gap-2 text-xs">
        <span class="px-2 py-1 bg-crypto-green/20 text-crypto-green rounded">✓ Procesare instantă</span>
        <span class="px-2 py-1 bg-crypto-green/20 text-crypto-green rounded">✓ Fără comisioane</span>
        <span class="px-2 py-1 bg-crypto-green/20 text-crypto-green rounded">✓ 24/7</span>
      </div>
    </div>

    <div class="glass rounded-xl p-6 border border-crypto-purple/20">
      <div class="flex items-center gap-3 mb-4">
        <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-crypto-purple/20 text-2xl">🏦</div>
        <h3 class="text-lg font-semibold text-white">2. Transfer Bancar Direct</h3>
      </div>
      <p class="text-gray-400 text-sm mb-4">Transfer către contul Trezoreriei din județul tău. Verifică IBAN-ul pe anaf.ro — fiecare județ are cod diferit.</p>
      <div class="bg-crypto-dark/50 rounded-lg p-4 font-mono text-xs text-gray-400">
        <div>Beneficiar: ANAF - Trezoreria [Orașul]</div>
        <div>IBAN: ROXX TREZ [cod județ]</div>
        <div>Cod bugetar: 620</div>
        <div>Detalii: Impozit venit 2026, CNP [tău]</div>
      </div>
    </div>

    <div class="glass rounded-xl p-6 border border-crypto-green/20">
      <div class="flex items-center gap-3 mb-4">
        <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-crypto-green/20 text-2xl">👤</div>
        <h3 class="text-lg font-semibold text-white">3. Plată la Ghișeu ANAF</h3>
      </div>
      <p class="text-gray-400 text-sm">Programează-te online, prezintă-te cu buletinul și confirmarea declarației, plătești cash sau cu cardul.</p>
    </div>
  </div>

  <h2 class="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-crypto-red/20 text-xl">⏰</span>
    Penalități de Întârziere
  </h2>

  <div class="glass rounded-xl p-6 mb-8">
    <h4 class="text-lg font-semibold text-white mb-4">Ce se întâmplă dacă plătești târziu?</h4>
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="text-gray-400 border-b border-white/10">
            <th class="text-left py-2">Întârziere</th>
            <th class="text-right py-2">Penalitate</th>
          </tr>
        </thead>
        <tbody class="text-gray-300">
          <tr class="border-b border-white/5">
            <td class="py-2">1-30 zile</td>
            <td class="text-right text-crypto-accent">5% din impozit (min 50 RON)</td>
          </tr>
          <tr class="border-b border-white/5">
            <td class="py-2">31-60 zile</td>
            <td class="text-right text-crypto-accent">10% din impozit (min 100 RON)</td>
          </tr>
          <tr class="border-b border-white/5">
            <td class="py-2">61-90 zile</td>
            <td class="text-right text-crypto-accent">15% din impozit (min 150 RON)</td>
          </tr>
          <tr>
            <td class="py-2">Peste 90 zile</td>
            <td class="text-right text-crypto-red">20% din impozit (min 200 RON)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-gray-400 text-sm mt-4">Plus dobândă de <strong class="text-white">0,02% pe zi</strong> (aproximativ 7,3% anual) pentru ne-plată.</p>
  </div>

  <h2 class="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-crypto-green/20 text-xl">✅</span>
    Sfaturi Practice pentru Plată Fără Stres
  </h2>

  <div class="grid md:grid-cols-2 gap-6 mb-10">
    <div class="glass rounded-xl p-6">
      <h4 class="font-semibold text-crypto-green mb-3">✓ Fă aceste lucruri</h4>
      <ul class="space-y-2 text-sm text-gray-400">
        <li>• Pune-ți bani deoparte lunar (20% din profit)</li>
        <li>• Documentează toate tranzacțiile</li>
        <li>• Plătește cu câteva zile înainte de termen</li>
        <li>• Verifică obligațiile în SPV</li>
      </ul>
    </div>
    <div class="glass rounded-xl p-6">
      <h4 class="font-semibold text-crypto-red mb-3">✗ Evită aceste greșeli</h4>
      <ul class="space-y-2 text-sm text-gray-400">
        <li>• Nu aștepta ultima zi (24-25 mai)</li>
        <li>• Nu plăti fără să verifici suma</li>
        <li>• Nu ignora notificările ANAF</li>
        <li>• Nu pierde dovada plății</li>
      </ul>
    </div>
  </div>

  <h2 class="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-crypto-accent/20 text-xl">🔥</span>
    Cazuri Speciale — FAQ
  </h2>

  <div class="space-y-4 mb-10">
    <div class="glass rounded-xl p-6">
      <h4 class="font-semibold text-white mb-2">Q: Pot plăti în rate?</h4>
      <p class="text-gray-400 text-sm"><strong class="text-crypto-accent">A:</strong> Nu pentru impozitul pe investiții. Suma trebuie plătită integral până pe 25 mai 2027. Pentru sume mari poți solicita eșalonare, dar cu dobândă.</p>
    </div>
    <div class="glass rounded-xl p-6">
      <h4 class="font-semibold text-white mb-2">Q: Ce fac dacă am plătit dar apare că mai am de plată?</h4>
      <p class="text-gray-400 text-sm"><strong class="text-crypto-accent">A:</strong> Poate fi o întârziere de actualizare (2-3 zile lucrătoare). Dacă persistă, sună la ANAF: 031.403.91.60.</p>
    </div>
    <div class="glass rounded-xl p-6">
      <h4 class="font-semibold text-white mb-2">Q: Pot deduce comisioanele exchange-ului?</h4>
      <p class="text-gray-400 text-sm"><strong class="text-crypto-accent">A:</strong> Da! Comisioanele de tranzacționare sunt cheltuieli deductibile. Asigură-te că sunt documentate în exporturile CSV.</p>
    </div>
  </div>

  <div class="glass-strong rounded-2xl p-8 border border-crypto-accent/30 bg-crypto-accent/5">
    <h3 class="text-xl font-bold text-white mb-4 text-center">🧮 Calculează-ți Impozitul în 30 de Secunde</h3>
    <p class="text-gray-400 text-center mb-6">Nu aștepta să vină mai 2027. Folosește calculatorul nostru gratuit:</p>
    <div class="text-center">
      <a href="/anaf/" class="btn-primary inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold text-crypto-dark">
        <span>👉</span> Deschide Calculatorul ANAF
      </a>
    </div>
    <div class="flex justify-center gap-6 mt-6 text-sm text-gray-500">
      <span>✓ Calcul automat FIFO</span>
      <span>✓ Detectare prag CASS</span>
      <span>✓ 100% gratuit</span>
    </div>
  </div>

  <p class="text-gray-500 text-sm italic mt-8">
    *Acest articol are scop informativ. Pentru situații fiscale complexe, consultă un contabil autorizat sau contactează ANAF direct.*
  </p>
</div>
    `
  },
  'metoda-fifo-calcul-profit-crypto-2026': {
    title: 'Metoda FIFO pentru Crypto: Cum Calculezi Corect Profitul la ANAF 2026',
    description: 'Învață cum funcționează metoda FIFO pentru calculul taxelor crypto în România. Exemple practice și sfaturi.',
    date: '19 Februarie 2026',
    readTime: '12 minute',
    author: 'CriptoCalculator Team',
    tags: ['FIFO', 'taxe crypto', 'ANAF', 'calcul profit', 'bitcoin'],
    content: `
<div class="prose-custom">
  <div class="glass-strong rounded-2xl p-8 mb-10 border-l-4 border-crypto-purple">
    <p class="text-lg text-gray-300 leading-relaxed mb-4">
      Dacă ești trader de criptomonede în România și te-ai confruntat cu întrebarea 
      <em>"Cât impozit am de plătit la ANAF?"</em>, atunci trebuie să înțelegi <strong class="text-white">metoda FIFO</strong>.
    </p>
    <div class="flex items-center gap-2 text-crypto-red">
      <span>⚠️</span>
      <span class="font-medium">Folosirea greșită a FIFO poate duce la calcularea incorectă a taxelor!</span>
    </div>
  </div>

  <div class="flex flex-col sm:flex-row gap-4 mb-12">
    <a href="/anaf/" class="btn-primary rounded-xl px-6 py-4 font-semibold text-crypto-dark text-center flex items-center justify-center gap-2">
      <span>🧮</span> Calculează cu FIFO
    </a>
  </div>

  <h2 class="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-crypto-purple/20 text-xl">🤔</span>
    Ce Este Metoda FIFO?
  </h2>

  <p class="text-gray-300 mb-6 leading-relaxed">
    <strong class="text-crypto-purple">FIFO</strong> = <strong>F</strong>irst <strong>I</strong>n, <strong>F</strong>irst <strong>O</strong>ut 
    (Primul Intrare, Primul Ieșire). ANAF folosește această metodă obligatoriu pentru calculul profitului din crypto.
  </p>

  <div class="glass rounded-xl p-6 mb-8">
    <h4 class="text-lg font-semibold text-white mb-4">De Ce FIFO?</h4>
    <div class="grid sm:grid-cols-2 gap-4">
      <div class="flex items-start gap-3">
        <span class="text-crypto-accent text-xl">✓</span>
        <span class="text-gray-400 text-sm">Standardizare pentru toți contribuabilii</span>
      </div>
      <div class="flex items-start gap-3">
        <span class="text-crypto-accent text-xl">✓</span>
        <span class="text-gray-400 text-sm">Prevenirea optimizării fiscale</span>
      </div>
      <div class="flex items-start gap-3">
        <span class="text-crypto-accent text-xl">✓</span>
        <span class="text-gray-400 text-sm">Calcule transparente și verificabile</span>
      </div>
      <div class="flex items-start gap-3">
        <span class="text-crypto-accent text-xl">✓</span>
        <span class="text-gray-400 text-sm">Aliniere cu practica internațională</span>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-crypto-green/20 text-xl">📊</span>
    Exemplu Practic: Calcul FIFO Pas cu Pas
  </h2>

  <div class="glass rounded-xl p-6 mb-8 border border-crypto-accent/20">
    <h4 class="text-lg font-semibold text-white mb-4">📋 Istoricul Tranzacțiilor</h4>
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="text-gray-400 border-b border-white/10">
            <th class="text-left py-2">Data</th>
            <th class="text-left py-2">Tip</th>
            <th class="text-right py-2">Cantitate</th>
            <th class="text-right py-2">Preț (RON)</th>
            <th class="text-right py-2">Total</th>
          </tr>
        </thead>
        <tbody class="text-gray-300">
          <tr class="border-b border-white/5">
            <td class="py-2">15 Ian 2024</td>
            <td><span class="text-crypto-green">Cumpărare</span></td>
            <td class="text-right">0.5 BTC</td>
            <td class="text-right">200.000</td>
            <td class="text-right">100.000 RON</td>
          </tr>
          <tr class="border-b border-white/5">
            <td class="py-2">20 Mar 2024</td>
            <td><span class="text-crypto-green">Cumpărare</span></td>
            <td class="text-right">0.3 BTC</td>
            <td class="text-right">250.000</td>
            <td class="text-right">75.000 RON</td>
          </tr>
          <tr class="border-b border-white/5">
            <td class="py-2">10 Iun 2024</td>
            <td><span class="text-crypto-red">Vânzare</span></td>
            <td class="text-right">0.4 BTC</td>
            <td class="text-right">350.000</td>
            <td class="text-right">140.000 RON</td>
          </tr>
          <tr>
            <td class="py-2">15 Sep 2024</td>
            <td><span class="text-crypto-red">Vânzare</span></td>
            <td class="text-right">0.3 BTC</td>
            <td class="text-right">400.000</td>
            <td class="text-right">120.000 RON</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <h3 class="text-xl font-bold text-white mb-4">🧮 Calculul Folosind FIFO</h3>

  <div class="space-y-6 mb-10">
    <div class="glass rounded-xl p-6 border border-crypto-accent/20">
      <h4 class="font-semibold text-crypto-accent mb-3">Vânzarea 1: 0.4 BTC la 350.000 RON</h4>
      <p class="text-gray-400 text-sm mb-3">După FIFO, primul Bitcoin cumpărat este primul vândut:</p>
      <div class="space-y-2 text-sm">
        <div class="flex justify-between">
          <span class="text-gray-400">Cost achiziție: 0.4 × 200.000</span>
          <span class="text-white font-mono">80.000 RON</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-400">Venit vânzare: 0.4 × 350.000</span>
          <span class="text-white font-mono">140.000 RON</span>
        </div>
        <div class="flex justify-between pt-2 border-t border-crypto-accent/20">
          <span class="text-crypto-green font-semibold">Profit</span>
          <span class="text-crypto-green font-mono font-bold">+60.000 RON ✅</span>
        </div>
      </div>
    </div>

    <div class="glass rounded-xl p-6 border border-crypto-purple/20">
      <h4 class="font-semibold text-crypto-purple mb-3">Vânzarea 2: 0.3 BTC la 400.000 RON</h4>
      <p class="text-gray-400 text-sm mb-3">FIFO continuă cu următoarele cumpărări:</p>
      <div class="space-y-2 text-sm">
        <div class="flex justify-between">
          <span class="text-gray-400">0.1 BTC din prima achiziție × 400.000</span>
          <span class="text-white font-mono">40.000 - 20.000 = +20.000</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-400">0.2 BTC din a doua achiziție × 400.000</span>
          <span class="text-white font-mono">80.000 - 50.000 = +30.000</span>
        </div>
        <div class="flex justify-between pt-2 border-t border-crypto-purple/20">
          <span class="text-crypto-green font-semibold">Profit total vânzare 2</span>
          <span class="text-crypto-green font-mono font-bold">+50.000 RON ✅</span>
        </div>
      </div>
    </div>
  </div>

  <div class="glass-strong rounded-xl p-6 mb-10 border border-crypto-green/30 bg-crypto-green/5">
    <h4 class="text-lg font-semibold text-white mb-4">📊 Rezumat Profit 2024</h4>
    <div class="space-y-2">
      <div class="flex justify-between">
        <span class="text-gray-400">Profit Vânzare 1</span>
        <span class="text-white font-mono">60.000 RON</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-400">Profit Vânzare 2</span>
        <span class="text-white font-mono">50.000 RON</span>
      </div>
      <div class="flex justify-between pt-2 border-t border-white/10">
        <span class="text-crypto-green font-bold">PROFIT TOTAL</span>
        <span class="text-crypto-green font-mono font-bold text-xl">110.000 RON</span>
      </div>
      <div class="flex justify-between pt-2 border-t border-white/10 text-sm">
        <span class="text-gray-400">Impozit 10% + CASS</span>
        <span class="text-crypto-accent font-mono">20.800 RON</span>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-crypto-red/20 text-xl">❌</span>
    Greșeli Comune la Calculul FIFO
  </h2>

  <div class="space-y-6 mb-10">
    <div class="glass rounded-xl p-6 border border-crypto-red/20">
      <h4 class="font-semibold text-crypto-red mb-2">Greșeala #1: Folosirea Prețului Mediu</h4>
      <p class="text-gray-400 text-sm mb-3">Mulți traderi calculează un preț mediu. ANAF folosește strict FIFO!</p>
      <div class="grid sm:grid-cols-2 gap-4 text-sm">
        <div class="bg-crypto-red/10 rounded-lg p-3">
          <div class="text-crypto-red font-semibold mb-1">❌ Greșit</div>
          <div class="text-gray-400">Preț mediu: 225.000 RON<br/>Cost: 90.000 RON</div>
        </div>
        <div class="bg-crypto-green/10 rounded-lg p-3">
          <div class="text-crypto-green font-semibold mb-1">✅ Corect (FIFO)</div>
          <div class="text-gray-400">Prima cumpărare<br/>Cost: 80.000 RON</div>
        </div>
      </div>
      <p class="text-crypto-accent text-sm mt-3">💡 Diferență: 10.000 RON în plus la impozit!</p>
    </div>

    <div class="glass rounded-xl p-6 border border-crypto-accent/20">
      <h4 class="font-semibold text-crypto-accent mb-2">Greșeala #2: Ignorarea Ordinii Cronologice</h4>
      <p class="text-gray-400 text-sm">Nu poți "alege" să vinzi mai întâi cumpărarea mai scumpă pentru a reduce profitul. FIFO înseamnă strict ordinea cronologică.</p>
    </div>

    <div class="glass rounded-xl p-6 border border-crypto-purple/20">
      <h4 class="font-semibold text-crypto-purple mb-2">Greșeala #3: Uitarea Tranzacțiilor din Anii Precedenți</h4>
      <p class="text-gray-400 text-sm">Dacă ai cumpărături din 2023 pe care nu le-ai vândut, acestea intră în calculul FIFO pentru vânzările din 2024.</p>
    </div>
  </div>

  <h2 class="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-crypto-accent/20 text-xl">💡</span>
    Sfaturi Practice pentru Managementul Tranzacțiilor
  </h2>

  <div class="grid md:grid-cols-2 gap-6 mb-10">
    <div class="glass rounded-xl p-6">
      <h4 class="font-semibold text-white mb-3 flex items-center gap-2">
        <span>📊</span> Folosește un Tracker
      </h4>
      <ul class="space-y-2 text-sm text-gray-400">
        <li>• Calculatorul nostru ANAF gratuit</li>
        <li>• Spreadsheet-uri cu formule</li>
        <li>• Aplicații dedicate de tracking</li>
      </ul>
    </div>

    <div class="glass rounded-xl p-6">
      <h4 class="font-semibold text-white mb-3 flex items-center gap-2">
        <span>📅</span> Notează Data Exactă
      </h4>
      <ul class="space-y-2 text-sm text-gray-400">
        <li>• Data exactă (zz/ll/aaaa)</li>
        <li>• Tipul (cumpărare/vânzare)</li>
        <li>• Cantitatea și prețul în RON</li>
        <li>• Exchange-ul folosit</li>
      </ul>
    </div>

    <div class="glass rounded-xl p-6">
      <h4 class="font-semibold text-white mb-3 flex items-center gap-2">
        <span>💾</span> Păstrează Dovezile
      </h4>
      <ul class="space-y-2 text-sm text-gray-400">
        <li>• Screenshots din exchange-uri</li>
        <li>• Confirmări email</li>
        <li>• Rapoarte de tranzacții</li>
      </ul>
    </div>

    <div class="glass rounded-xl p-6">
      <h4 class="font-semibold text-white mb-3 flex items-center gap-2">
        <span>🔄</span> Actualizează Lunar
      </h4>
      <p class="text-gray-400 text-sm">Nu aștepta sfârșitul anului. Actualizează-ți calculele lunar pentru a ști mereu unde te situezi.</p>
    </div>
  </div>

  <h2 class="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-crypto-green/20 text-xl">🧮</span>
    Cum Folosești Calculatorul Nostru FIFO
  </h2>

  <div class="glass rounded-xl p-6 mb-10 border border-crypto-accent/20">
    <p class="text-gray-300 mb-6">În loc să faci toate calculele manual, folosește <a href="/anaf/" class="text-crypto-accent hover:underline">calculatorul nostru ANAF</a>:</p>
    
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="text-center">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-crypto-accent/20 mx-auto mb-2 text-xl">1️⃣</div>
        <p class="text-sm text-gray-400">Adaugă tranzacțiile</p>
      </div>
      <div class="text-center">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-crypto-accent/20 mx-auto mb-2 text-xl">2️⃣</div>
        <p class="text-sm text-gray-400">Calculatorul aplică FIFO automat</p>
      </div>
      <div class="text-center">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-crypto-accent/20 mx-auto mb-2 text-xl">3️⃣</div>
        <p class="text-sm text-gray-400">Vezi rezultatele instant</p>
      </div>
      <div class="text-center">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-crypto-accent/20 mx-auto mb-2 text-xl">4️⃣</div>
        <p class="text-sm text-gray-400">Exportă pentru contabil</p>
      </div>
    </div>

    <div class="mt-6 text-center">
      <a href="/anaf/" class="btn-primary inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold text-crypto-dark">
        <span>🧮</span> Deschide Calculatorul ANAF
      </a>
    </div>
  </div>

  <h2 class="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-crypto-purple/20 text-xl">❓</span>
    FAQ: Întrebări Frecvente despre FIFO
  </h2>

  <div class="space-y-4 mb-10">
    <div class="glass rounded-xl p-6">
      <h4 class="font-semibold text-white mb-2">Q: Pot folosi altă metodă decât FIFO?</h4>
      <p class="text-gray-400 text-sm"><strong class="text-crypto-accent">A:</strong> Nu. ANAF impune obligatoriu metoda FIFO pentru criptomonede. Nu ai opțiunea să alegi LIFO sau altă metodă.</p>
    </div>

    <div class="glass rounded-xl p-6">
      <h4 class="font-semibold text-white mb-2">Q: Ce se întâmplă dacă am cumpărături de la exchange-uri diferite?</h4>
      <p class="text-gray-400 text-sm"><strong class="text-crypto-accent">A:</strong> Nu contează exchange-ul. Toate cumpărăturile tale de BTC (sau alt coin) se grupează împreună și se aplică FIFO pe total.</p>
    </div>

    <div class="glass rounded-xl p-6">
      <h4 class="font-semibold text-white mb-2">Q: Ce fac dacă am pierderi în loc de profit?</h4>
      <p class="text-gray-400 text-sm"><strong class="text-crypto-accent">A:</strong> Pierderile se pot reporta în anii următori. Dacă în 2024 ai -20.000 RON, poți scădea această sumă din profitul din 2025 înainte de calculul impozitului.</p>
    </div>

    <div class="glass rounded-xl p-6">
      <h4 class="font-semibold text-white mb-2">Q: Trebuie să aplic FIFO pentru fiecare criptomonedă separat?</h4>
      <p class="text-gray-400 text-sm"><strong class="text-crypto-accent">A:</strong> Da! Fiecare criptomonedă (BTC, ETH, SOL, etc.) are propriul ei calcul FIFO independent.</p>
    </div>
  </div>

  <h2 class="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-crypto-green/20 text-xl">✅</span>
    Concluzie: Stăpânește FIFO și Fii Compliant
  </h2>

  <div class="glass rounded-xl p-6 mb-8">
    <p class="text-gray-300 mb-4">Metoda FIFO nu este complicată, dar trebuie aplicată corect. Cheia este să:</p>
    <ul class="space-y-2 text-gray-400">
      <li class="flex items-start gap-2">
        <span class="text-crypto-green">✓</span>
        <span>Păstrezi evidența ordonată a tuturor tranzacțiilor</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-crypto-green">✓</span>
        <span>Aplici strict ordinea cronologică la calculul profitului</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-crypto-green">✓</span>
        <span>Nu amesteci cumpărăturile – primul cumpărat, primul vândut</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-crypto-green">✓</span>
        <span>Folosești unelte care să te ajute</span>
      </li>
    </ul>
  </div>

  <div class="glass-strong rounded-2xl p-8 border border-crypto-accent/30 bg-crypto-accent/5">
    <h3 class="text-xl font-bold text-white mb-4 text-center">🧮 Calculează-ți Taxele Crypto cu FIFO în 30 de Secunde</h3>
    <p class="text-gray-400 text-center mb-6">Nu mai pierde timpul cu calcule manuale. Folosește calculatorul nostru ANAF gratuit:</p>
    <div class="text-center">
      <a href="/anaf/" class="btn-primary inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold text-crypto-dark">
        <span>👉</span> Deschide Calculatorul ANAF
      </a>
    </div>
    <div class="flex justify-center gap-6 mt-6 text-sm text-gray-500">
      <span>✓ Calcul automat FIFO</span>
      <span>✓ Suport multiple criptomonede</span>
      <span>✓ 100% gratuit</span>
    </div>
  </div>

  <p class="text-gray-500 text-sm italic mt-8">
    *Acest articol are scop informativ și educațional. Pentru situații fiscale complexe, consultă un contabil autorizat sau contactează ANAF direct.*
  </p>

  <div class="mt-8 pt-6 border-t border-white/10">
    <p class="text-gray-400 text-sm">
      <strong class="text-white">Articol relevant:</strong> 
      <a href="/blog/cum-declar-crypto-anaf-2026/" class="text-crypto-accent hover:underline">Cum Declar Crypto la ANAF 2026 - Ghid Complet</a>
    </p>
  </div>
</div>
    `
  },
  'cum-declar-crypto-anaf-2026': {
    title: 'Cum Declar Crypto la ANAF 2026 - Ghid Complet Pas cu Pas',
    description: 'Ghid complet pentru declararea criptomonedelor la ANAF în 2026.',
    date: '18 Februarie 2026',
    readTime: '8 minute',
    author: 'CriptoCalculator Team',
    tags: ['ANAF', 'taxe crypto', 'declarație unică', 'impozit bitcoin'],
    content: `
<div class="prose-custom">
  <!-- Intro -->
  <div class="glass-strong rounded-2xl p-8 mb-10 border-l-4 border-crypto-accent">
    <p class="text-lg text-gray-300 leading-relaxed mb-0">
      Dacă citești acest articol, probabil că ai realizat că trebuie să declari criptomonedele la ANAF 
      și nu știi exact cum să faci asta. <strong class="text-white">Nu ești singur</strong> — mii de români 
      se confruntă cu aceeași problemă în fiecare an.
    </p>
  </div>

  <!-- Quick CTA -->
  <div class="flex flex-col sm:flex-row gap-4 mb-12">
    <a href="/anaf/" class="btn-primary rounded-xl px-6 py-4 font-semibold text-crypto-dark text-center flex items-center justify-center gap-2">
      <span>🧮</span> Calculează Taxele Instant
    </a>
    <a href="/position-calculator/" class="btn-secondary rounded-xl px-6 py-4 font-semibold text-white text-center flex items-center justify-center gap-2">
      <span>📊</span> Calculator Trading
    </a>
  </div>

  <h2 class="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-crypto-accent/20 text-xl">💰</span>
    Ce Impozite Plătești pe Crypto în România
  </h2>

  <div class="grid md:grid-cols-2 gap-6 mb-10">
    <div class="glass rounded-xl p-6 border border-crypto-accent/20">
      <div class="flex items-center gap-3 mb-4">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-crypto-accent/20 text-2xl">📈</div>
        <div>
          <div class="text-3xl font-bold text-crypto-accent">10%</div>
          <div class="text-sm text-gray-400">Impozit pe Venit</div>
        </div>
      </div>
      <p class="text-gray-400 text-sm">Orice profit realizat din tranzacții cu criptomonede este impozitat cu 10%.</p>
    </div>

    <div class="glass rounded-xl p-6 border border-crypto-green/20">
      <div class="flex items-center gap-3 mb-4">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-crypto-green/20 text-2xl">🏥</div>
        <div>
          <div class="text-3xl font-bold text-crypto-green">10%</div>
          <div class="text-sm text-gray-400">CASS (opțional)</div>
        </div>
      </div>
      <p class="text-gray-400 text-sm">Doar dacă profitul depășește 12.000 RON pe an. Sub această sumă, nu plătești CASS.</p>
    </div>
  </div>

  <h3 class="text-xl font-bold text-white mb-4">Exemplu Concret de Calcul</h3>
  
  <div class="glass rounded-xl p-6 mb-8">
    <div class="space-y-3">
      <div class="flex justify-between items-center py-2 border-b border-white/5">
        <span class="text-gray-400">Cumperi 1 BTC la</span>
        <span class="text-white font-mono">200.000 RON</span>
      </div>
      <div class="flex justify-between items-center py-2 border-b border-white/5">
        <span class="text-gray-400">Vinzi 1 BTC la</span>
        <span class="text-white font-mono">300.000 RON</span>
      </div>
      <div class="flex justify-between items-center py-2 border-b border-crypto-accent/30">
        <span class="text-crypto-accent">Profit</span>
        <span class="text-crypto-accent font-mono font-bold">100.000 RON</span>
      </div>
      <div class="flex justify-between items-center py-3 bg-crypto-accent/10 rounded-lg px-4 mt-2">
        <span class="text-white font-semibold">Impozit de plătit (10%)</span>
        <span class="text-crypto-accent font-mono font-bold text-lg">10.000 RON</span>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-crypto-purple/20 text-xl">🔄</span>
    Metoda FIFO: Cum Se Calculează Profitul
  </h2>

  <p class="text-gray-300 mb-6 leading-relaxed">
    ANAF folosește metoda <strong class="text-crypto-purple">FIFO</strong> (First In, First Out) 
    pentru calculul profitului. Asta înseamnă că primele cumpărări se vând primele.
  </p>

  <div class="glass rounded-xl p-6 mb-8">
    <h4 class="text-lg font-semibold text-white mb-4">Exemplu FIFO:</h4>
    
    <div class="space-y-4">
      <div class="flex items-start gap-4">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-crypto-accent/20 text-crypto-accent text-sm font-bold shrink-0">1</div>
        <div>
          <div class="text-white font-medium">Ianuarie 2026</div>
          <div class="text-gray-400 text-sm">Cumperi 1 BTC la <span class="text-white font-mono">200.000 RON</span></div>
        </div>
      </div>

      <div class="flex items-start gap-4">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-crypto-purple/20 text-crypto-purple text-sm font-bold shrink-0">2</div>
        <div>
          <div class="text-white font-medium">Martie 2026</div>
          <div class="text-gray-400 text-sm">Cumperi 0.5 BTC la <span class="text-white font-mono">250.000 RON</span></div>
        </div>
      </div>

      <div class="flex items-start gap-4">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-crypto-green/20 text-crypto-green text-sm font-bold shrink-0">3</div>
        <div>
          <div class="text-white font-medium">Iunie 2026</div>
          <div class="text-gray-400 text-sm">Vinzi 1.2 BTC la <span class="text-white font-mono">350.000 RON/BTC</span></div>
        </div>
      </div>
    </div>

    <div class="mt-6 pt-6 border-t border-white/10">
      <div class="text-sm text-gray-400 mb-2">Calculul profitului:</div>
      <div class="space-y-2 text-sm">
        <div class="flex justify-between">
          <span class="text-gray-400">1 BTC (din ianuarie) × 350.000 - 200.000</span>
          <span class="text-crypto-accent font-mono">= 150.000 RON</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-400">0.2 BTC (din martie) × 350.000 - 250.000</span>
          <span class="text-crypto-accent font-mono">= 20.000 RON</span>
        </div>
        <div class="flex justify-between pt-2 border-t border-white/10">
          <span class="text-white font-semibold">Profit total</span>
          <span class="text-crypto-green font-mono font-bold">170.000 RON</span>
        </div>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
    <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-crypto-green/20 text-xl">✅</span>
    Pași pentru Declararea Criptomonedelor
  </h2>

  <div class="space-y-6 mb-10">
    <div class="glass rounded-xl p-6 flex gap-4">
      <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-crypto-accent/20 text-2xl shrink-0">🧮</div>
      <div>
        <h3 class="text-lg font-semibold text-white mb-2">Pasul 1: Calculează-ți Profitul</h3>
        <p class="text-gray-400 text-sm leading-relaxed">
          Folosește <a href="/anaf/" class="text-crypto-accent hover:underline">calculatorul nostru ANAF</a> pentru a-ți calcula 
          automat profitul și taxele folosind metoda FIFO. Importă tranzacțiile sau introdu-le manual.
        </p>
      </div>
    </div>

    <div class="glass rounded-xl p-6 flex gap-4">
      <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-crypto-purple/20 text-2xl shrink-0">📝</div>
      <div>
        <h3 class="text-lg font-semibold text-white mb-2">Pasul 2: Completează Declarația Unică</h3>
        <p class="text-gray-400 text-sm leading-relaxed">
          Completează <strong class="text-white">Declarația Unică (D212)</strong> cu datele calculate. 
          Termenul limită este <span class="text-crypto-accent">25 mai 2027</span> pentru veniturile din 2026.
        </p>
      </div>
    </div>

    <div class="glass rounded-xl p-6 flex gap-4">
      <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-crypto-green/20 text-2xl shrink-0">💳</div>
      <div>
        <h3 class="text-lg font-semibold text-white mb-2">Pasul 3: Plătește Impozitul</h3>
        <p class="text-gray-400 text-sm leading-relaxed">
          Plătește impozitul calculat până la termenul limită. Poți plăti online prin 
          <strong class="text-white">ghiseul.ro</strong> sau la bancă.
        </p>
      </div>
    </div>
  </div>

  <!-- Important Dates -->
  <div class="glass rounded-xl p-6 mb-10 border border-crypto-accent/20">
    <h4 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
      <span>📅</span> Date Importante 2026
    </h4>
    <div class="grid sm:grid-cols-2 gap-4">
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-crypto-accent/20 shrink-0">📊</div>
        <div>
          <div class="text-white font-medium">31 Decembrie 2026</div>
          <div class="text-gray-400 text-sm">Sfârșitul anului fiscal</div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-crypto-purple/20 shrink-0">📝</div>
        <div>
          <div class="text-white font-medium">25 Mai 2027</div>
          <div class="text-gray-400 text-sm">Termen declarație & plată</div>
        </div>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-bold text-white mt-12 mb-6">Concluzie</h2>

  <p class="text-gray-300 mb-6 leading-relaxed">
    Declararea criptomonedelor la ANAF nu e complicată dacă știi pașii și folosești uneltele potrivite. 
    Amintiți-vă:
  </p>

  <div class="glass rounded-xl p-6 mb-8">
    <ol class="space-y-3 text-gray-300">
      <li class="flex items-start gap-3">
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-crypto-accent/20 text-crypto-accent text-sm font-bold shrink-0 mt-0.5">1</span>
        <span>Calculează-ți profitul folosind metoda FIFO</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-crypto-accent/20 text-crypto-accent text-sm font-bold shrink-0 mt-0.5">2</span>
        <span>Completează Declarația Unică până pe 25 mai 2027</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-crypto-accent/20 text-crypto-accent text-sm font-bold shrink-0 mt-0.5">3</span>
        <span>Plătește impozitul 10% (+ CASS dacă profitul > 12.000 RON)</span>
      </li>
    </ol>
  </div>

  <p class="text-gray-400 text-sm italic">
    Disclaimer: Acest articol are scop informativ. Pentru situații complexe sau dacă ai dubii, 
    consultă un contabil autorizat.
  </p>
</div>
    `
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]
  
  if (!post) {
    return (
      <main className="relative min-h-screen overflow-hidden">
        <div className="noise" />
        <div className="flex items-center justify-center min-h-screen">
          <div className="glass-strong rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">😕</div>
            <h1 className="text-2xl font-bold text-white mb-4">Articolul nu a fost găsit</h1>
            <Link href="/blog" className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-crypto-dark">
              ← Înapoi la blog
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Noise overlay */}
      <div className="noise" />

      {/* Background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-cyan w-96 h-96 -top-20 -left-20 animate-float" />
        <div className="orb orb-purple w-80 h-80 top-1/2 -right-20 animate-float-delayed" />
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

      {/* Article Header */}
      <section className="relative px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-crypto-accent transition mb-6"
          >
            <span>←</span> Înapoi la articole
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-crypto-accent/10 text-crypto-accent rounded-full border border-crypto-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-crypto-accent/20">
                🧮
              </div>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⏱️</span>
              <span>{post.readTime} de citit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <article 
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Box */}
          <div className="mt-12 glass-strong rounded-2xl p-8 border border-crypto-accent/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-crypto-accent/20 to-crypto-purple/20 text-3xl shrink-0">
                🧮
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-white mb-2">Calculează-ți Taxele Crypto Acum</h3>
                <p className="text-gray-400">
                  Folosește calculatorul nostru gratuit pentru a afla exact cât ai de plătit la ANAF în 2026.
                </p>
              </div>
              <Link 
                href="/anaf/"
                className="btn-primary rounded-xl px-8 py-4 font-semibold text-crypto-dark whitespace-nowrap"
              >
                Deschide Calculatorul →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/5 px-4 py-12 sm:px-6 lg:px-8 mt-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🧮</span>
                <span className="font-bold text-gradient">CriptoCalculator</span>
              </div>
              <p className="text-sm text-gray-500">Unelte profesionale pentru traderi de criptomonede.</p>
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
