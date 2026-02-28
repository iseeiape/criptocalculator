'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { trackCalculatorUse } from '@/src/lib/gtag'

interface Transaction {
  id: string
  type: 'buy' | 'sell'
  crypto: string
  amount: number
  price: number
  date: string
}

export default function ANAFCalculator() {
  const [mounted, setMounted] = useState(false)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [currentCrypto, setCurrentCrypto] = useState('BTC')
  const [currentAmount, setCurrentAmount] = useState('')
  const [currentPrice, setCurrentPrice] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [currentType, setCurrentType] = useState<'buy' | 'sell'>('buy')
  
  const [totalProfit, setTotalProfit] = useState(0)
  const [taxableProfit, setTaxableProfit] = useState(0)
  const [taxAmount, setTaxAmount] = useState(0)
  const [healthTax, setHealthTax] = useState(0)
  const [totalTax, setTotalTax] = useState(0)

  useEffect(() => {
    setMounted(true)
    // Track calculator usage
    trackCalculatorUse('anaf_tax_calculator')
  }, [])

  const addTransaction = () => {
    if (!currentAmount || !currentPrice || !currentDate) return
    
    const newTransaction: Transaction = {
      id: Date.now().toString(),
      type: currentType,
      crypto: currentCrypto,
      amount: parseFloat(currentAmount),
      price: parseFloat(currentPrice),
      date: currentDate
    }
    
    setTransactions([...transactions, newTransaction])
    setCurrentAmount('')
    setCurrentPrice('')
  }

  const removeTransaction = (id: string) => {
    setTransactions(transactions.filter(t => t.id !== id))
  }

  const loadExample = () => {
    const exampleTransactions: Transaction[] = [
      { id: 'example-1', type: 'buy', crypto: 'BTC', amount: 0.5, price: 200000, date: '2024-01-15' },
      { id: 'example-2', type: 'buy', crypto: 'BTC', amount: 0.3, price: 250000, date: '2024-03-20' },
      { id: 'example-3', type: 'sell', crypto: 'BTC', amount: 0.4, price: 350000, date: '2024-06-10' },
      { id: 'example-4', type: 'sell', crypto: 'BTC', amount: 0.3, price: 400000, date: '2024-09-15' }
    ]
    setTransactions(exampleTransactions)
  }

  useEffect(() => {
    let profit = 0
    const cryptoGroups: { [key: string]: Transaction[] } = {}
    
    transactions.forEach(t => {
      if (!cryptoGroups[t.crypto]) cryptoGroups[t.crypto] = []
      cryptoGroups[t.crypto].push(t)
    })
    
    Object.keys(cryptoGroups).forEach(crypto => {
      const cryptoTrans = cryptoGroups[crypto].sort((a, b) => 
        new Date(a.date).getTime() - new Date(b.date).getTime()
      )
      
      const buys: { amount: number; price: number }[] = []
      
      cryptoTrans.forEach(t => {
        if (t.type === 'buy') {
          buys.push({ amount: t.amount, price: t.price })
        } else {
          let sellAmount = t.amount
          let costBasis = 0
          
          while (sellAmount > 0 && buys.length > 0) {
            const buy = buys[0]
            const usedAmount = Math.min(sellAmount, buy.amount)
            costBasis += usedAmount * buy.price
            buy.amount -= usedAmount
            sellAmount -= usedAmount
            if (buy.amount === 0) buys.shift()
          }
          
          const revenue = t.amount * t.price
          profit += revenue - costBasis
        }
      })
    })
    
    setTotalProfit(profit)
    const taxable = Math.max(0, profit)
    setTaxableProfit(taxable)
    const incomeTax = taxable * 0.16  // 16% impozit din 2026
    setTaxAmount(incomeTax)
    let cass = 0
    if (taxable > 12000) cass = Math.min(taxable, 180000) * 0.10  // CASS 10% peste 12k
    setHealthTax(cass)
    setTotalTax(incomeTax + cass)
  }, [transactions])

  const formatRON = (value: number) => {
    return value.toLocaleString('ro-RO', { style: 'currency', currency: 'RON', maximumFractionDigits: 2 })
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="noise" />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-green w-96 h-96 -top-20 -left-20 animate-float" />
        <div className="orb orb-cyan w-80 h-80 top-1/3 -right-20 animate-float-delayed" />
      </div>

      <nav className="relative z-10 glass-strong sticky top-0 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-crypto-accent to-crypto-purple text-xl shadow-glow-cyan">🧮</div>
              <span className="text-xl font-bold text-gradient">CriptoCalculator</span>
            </Link>
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition">← Înapoi la unelte</Link>
          </div>
        </div>
      </nav>

      <section className="relative px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-crypto-green/30 bg-crypto-green/10 px-4 py-1.5 mb-6">
              <span className="text-sm text-crypto-green font-medium">🏛️ Oficial ANAF 2026</span>
            </div>

            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Calculator <span className="text-gradient">Taxe ANAF</span>
            </h1>
            
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Calculează taxele pentru criptomonede conform ANAF 2026. Metoda FIFO, impozit 16%, CASS 10%.
              Fără panică la taxe!
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {!mounted ? (
              <div className="lg:col-span-2">
                <div className="glass border-gradient rounded-2xl p-8 text-center">
                  <div className="text-crypto-green text-lg">⚡ Se încarcă calculatorul...</div>
                </div>
              </div>
            ) : (
              <>
            {/* Left Column - Input */}
            <div className="space-y-6">
              <div className="glass border-gradient rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>📝</span> Adaugă Tranzacție
                  </h2>
                  <button onClick={loadExample} className="text-sm text-crypto-accent hover:underline flex items-center gap-1">
                    📥 Încarcă Exemplu
                  </button>
                </div>
                
                <div className="space-y-5">
                  <div className="flex gap-3">
                    <button onClick={() => setCurrentType('buy')} className={`flex-1 rounded-xl py-3 font-semibold transition flex items-center justify-center gap-2 ${currentType === 'buy' ? 'bg-crypto-green text-white shadow-glow-green' : 'bg-crypto-dark/80 border border-gray-700 text-gray-400'}`}>
                      🟢 Cumpărare
                    </button>
                    <button onClick={() => setCurrentType('sell')} className={`flex-1 rounded-xl py-3 font-semibold transition flex items-center justify-center gap-2 ${currentType === 'sell' ? 'bg-crypto-red text-white' : 'bg-crypto-dark/80 border border-gray-700 text-gray-400'}`}>
                      🔴 Vânzare
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Criptomonedă</label>
                    <select value={currentCrypto} onChange={(e) => setCurrentCrypto(e.target.value)} className="w-full rounded-xl bg-crypto-dark/80 border border-gray-700 px-4 py-3 text-white">
                      <option value="BTC">₿ Bitcoin (BTC)</option>
                      <option value="ETH">Ξ Ethereum (ETH)</option>
                      <option value="SOL">◎ Solana (SOL)</option>
                      <option value="ADA">₳ Cardano (ADA)</option>
                      <option value="DOT">● Polkadot (DOT)</option>
                      <option value="MATIC">M Polygon (MATIC)</option>
                      <option value="OTHER">🪙 Altele</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Cantitate</label>
                      <input type="number" step="0.000001" value={currentAmount} onChange={(e) => setCurrentAmount(e.target.value)} placeholder="0.5" className="w-full rounded-xl bg-crypto-dark/80 border border-gray-700 px-4 py-3 text-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Preț (RON)</label>
                      <input type="number" value={currentPrice} onChange={(e) => setCurrentPrice(e.target.value)} placeholder="250000" className="w-full rounded-xl bg-crypto-dark/80 border border-gray-700 px-4 py-3 text-white" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Data Tranzacției</label>
                    <input type="date" value={currentDate} onChange={(e) => setCurrentDate(e.target.value)} className="w-full rounded-xl bg-crypto-dark/80 border border-gray-700 px-4 py-3 text-white" />
                  </div>

                  <button onClick={addTransaction} className="w-full btn-primary rounded-xl py-4 font-bold text-crypto-dark text-lg">
                    ➕ Adaugă Tranzacție
                  </button>
                </div>
              </div>

              {/* Transactions List */}
              <div className="glass rounded-2xl p-6 border border-white/5">
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span>📋</span> Istoric Tranzacții ({transactions.length})
                </h2>
                
                {transactions.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <div className="text-4xl mb-2">📝</div>
                    <p>Nicio tranzacție adăugată</p>
                    <p className="text-sm">Adaugă tranzacții sau încarcă exemplul</p>
                  </div>
                ) : (
                  <div className="space-y-2 max-h-80 overflow-y-auto pr-2">
                    {transactions.map((t) => (
                      <div key={t.id} className={`flex items-center justify-between rounded-xl p-4 border ${t.type === 'buy' ? 'bg-crypto-green/5 border-crypto-green/20' : 'bg-crypto-red/5 border-crypto-red/20'}`}>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-0.5 rounded text-xs font-bold ${t.type === 'buy' ? 'bg-crypto-green text-white' : 'bg-crypto-red text-white'}`}>
                              {t.type === 'buy' ? 'CUMPĂRARE' : 'VÂNZARE'}
                            </span>
                            <span className="text-white font-bold">{t.crypto}</span>
                          </div>
                          <div className="text-sm text-gray-400 mt-1">
                            {t.amount} unități × {formatRON(t.price)}
                          </div>
                          <div className="text-xs text-gray-500">{t.date}</div>
                        </div>
                        <div className="text-right mr-4">
                          <div className="text-white font-bold">{formatRON(t.amount * t.price)}</div>
                        </div>
                        <button onClick={() => removeTransaction(t.id)} className="text-crypto-red hover:text-red-400 p-2 hover:bg-crypto-red/10 rounded-lg transition">✕</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Tax Results */}
            <div className="space-y-6">
              <div className="glass-strong border-gradient rounded-2xl p-8">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span>🧮</span> Rezumat Taxe 2026
                </h2>
                
                <div className="space-y-4">
                  <div className="glass rounded-xl p-4 flex justify-between items-center">
                    <div>
                      <span className="text-gray-400">Profit/Pierdere Total</span>
                    </div>
                    <span className={`text-2xl font-bold ${totalProfit >= 0 ? 'text-crypto-green' : 'text-crypto-red'}`}>
                      {formatRON(totalProfit)}
                    </span>
                  </div>

                  <div className="glass rounded-xl p-4 flex justify-between items-center">
                    <span className="text-gray-400">Profit Impozabil</span>
                    <span className="text-xl font-bold text-white">{formatRON(taxableProfit)}</span>
                  </div>

                  <div className="glass rounded-xl p-4 border border-crypto-accent/20">
                    <div className="flex justify-between items-center mb-1">
                      <div>
                        <span className="text-gray-300">Impozit Venit</span>
                        <p className="text-xs text-gray-500">16% din profit (2026)</p>
                      </div>
                      <span className="text-xl font-bold text-crypto-accent">{formatRON(taxAmount)}</span>
                    </div>
                  </div>

                  <div className="glass rounded-xl p-4 border border-crypto-purple/20">
                    <div className="flex justify-between items-center mb-1">
                      <div>
                        <span className="text-gray-300">CASS</span>
                        <p className="text-xs text-gray-500">10% dacă profit &gt; 12.000 RON</p>
                      </div>
                      <span className="text-xl font-bold text-crypto-purple">{formatRON(healthTax)}</span>
                    </div>
                  </div>

                  <div className="glass-strong rounded-xl p-6 border border-crypto-green/30 bg-crypto-green/5 mt-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-lg font-bold text-white">TOTAL DE PLĂTIT</span>
                        <p className="text-xs text-gray-400">până pe 25 mai 2027</p>
                      </div>
                      <span className="text-3xl font-bold text-crypto-green">{formatRON(totalTax)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="glass rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span>ℹ️</span> Informații ANAF 2026
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <span className="text-crypto-accent">📌</span>
                    <p className="text-gray-400"><strong className="text-white">Impozit 2026:</strong> 16% din profit realizat (venituri din investiții, cat. I)</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="text-crypto-accent">📌</span>
                    <p className="text-gray-400"><strong className="text-white">CASS:</strong> 10% aplicat doar dacă profitul &gt; 12.000 RON/an</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="text-crypto-accent">📌</span>
                    <p className="text-gray-400"><strong className="text-white">Metoda FIFO:</strong> First In, First Out - prima cumpărare se împerechează cu prima vânzare</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="text-crypto-accent">📌</span>
                    <p className="text-gray-400"><strong className="text-white">Termen plată:</strong> 25 mai 2027 (pentru veniturile 2026)</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-500">
                    ⚠️ Acest calculator are scop informativ. Consultă un contabil pentru situații complexe.
                  </p>
                </div>
              </div>
            </div>
              </>
            )}
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/5 px-4 py-12 sm:px-6 lg:px-8 mt-12">
        <div className="mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🧮</span>
            <span className="font-bold text-gradient">CriptoCalculator</span>
          </div>
          <p className="text-sm text-gray-500">Nu este sfat financiar. Consultă un specialist pentru decizii fiscale.</p>
        </div>
      </footer>
    </main>
  )
}
