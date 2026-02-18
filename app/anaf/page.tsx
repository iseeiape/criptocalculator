'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Transaction {
  id: string
  type: 'buy' | 'sell'
  crypto: string
  amount: number
  price: number
  date: string
}

export default function ANAFCalculator() {
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

  // Add transaction
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

  // Remove transaction
  const removeTransaction = (id: string) => {
    setTransactions(transactions.filter(t => t.id !== id))
  }

  // Load example data
  const loadExample = () => {
    const exampleTransactions: Transaction[] = [
      {
        id: 'example-1',
        type: 'buy',
        crypto: 'BTC',
        amount: 0.5,
        price: 200000,
        date: '2024-01-15'
      },
      {
        id: 'example-2',
        type: 'buy',
        crypto: 'BTC',
        amount: 0.3,
        price: 250000,
        date: '2024-03-20'
      },
      {
        id: 'example-3',
        type: 'sell',
        crypto: 'BTC',
        amount: 0.4,
        price: 350000,
        date: '2024-06-10'
      },
      {
        id: 'example-4',
        type: 'sell',
        crypto: 'BTC',
        amount: 0.3,
        price: 400000,
        date: '2024-09-15'
      }
    ]
    setTransactions(exampleTransactions)
  }

  // Calculate taxes
  useEffect(() => {
    let profit = 0
    
    // Group by crypto
    const cryptoGroups: { [key: string]: Transaction[] } = {}
    transactions.forEach(t => {
      if (!cryptoGroups[t.crypto]) cryptoGroups[t.crypto] = []
      cryptoGroups[t.crypto].push(t)
    })
    
    // Calculate profit for each crypto (FIFO method)
    Object.keys(cryptoGroups).forEach(crypto => {
      const cryptoTrans = cryptoGroups[crypto].sort((a, b) => 
        new Date(a.date).getTime() - new Date(b.date).getTime()
      )
      
      const buys: { amount: number; price: number }[] = []
      
      cryptoTrans.forEach(t => {
        if (t.type === 'buy') {
          buys.push({ amount: t.amount, price: t.price })
        } else {
          // Sell - calculate profit with FIFO
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
    
    // Taxable profit (profit > 0)
    const taxable = Math.max(0, profit)
    setTaxableProfit(taxable)
    
    // 10% income tax
    const incomeTax = taxable * 0.10
    setTaxAmount(incomeTax)
    
    // Health tax (CASS) - 10% of min(taxable, 180000 RON) if taxable > 12000 RON
    let cass = 0
    if (taxable > 12000) {
      cass = Math.min(taxable, 180000) * 0.10
    }
    setHealthTax(cass)
    
    setTotalTax(incomeTax + cass)
  }, [transactions])

  const formatRON = (value: number) => {
    return value.toLocaleString('ro-RO', { 
      style: 'currency', 
      currency: 'RON',
      maximumFractionDigits: 2 
    })
  }

  return (
    <main className="min-h-screen bg-crypto-dark px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-crypto-accent hover:opacity-80">
            ← Înapoi
          </Link>
          <div className="text-right">
            <h1 className="text-3xl font-bold text-white">Calculator Taxe ANAF</h1>
            <p className="text-sm text-gray-500">Crypto 2026 - Metoda FIFO</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Input */}
          <div className="space-y-6">
            {/* Add Transaction */}
            <div className="rounded-2xl bg-crypto-card p-6 border border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">Adaugă Tranzacție</h2>
                <button
                  onClick={loadExample}
                  className="text-sm text-crypto-accent hover:underline"
                >
                  Încarcă Exemplu ↓
                </button>
              </div>
              
              <div className="grid gap-4">
                {/* Type */}
                <div className="flex gap-4">
                  <button
                    onClick={() => setCurrentType('buy')}
                    className={`flex-1 rounded-lg py-2 font-semibold transition ${
                      currentType === 'buy'
                        ? 'bg-crypto-green text-white'
                        : 'bg-crypto-dark border border-gray-700 text-gray-400'
                    }`}
                  >
                    Cumpărare
                  </button>
                  <button
                    onClick={() => setCurrentType('sell')}
                    className={`flex-1 rounded-lg py-2 font-semibold transition ${
                      currentType === 'sell'
                        ? 'bg-crypto-red text-white'
                        : 'bg-crypto-dark border border-gray-700 text-gray-400'
                    }`}
                  >
                    Vânzare
                  </button>
                </div>

                {/* Crypto Select */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">Criptomonedă</label>
                  <select
                    value={currentCrypto}
                    onChange={(e) => setCurrentCrypto(e.target.value)}
                    className="w-full rounded-lg bg-crypto-dark border border-gray-700 px-4 py-3 text-white"
                  >
                    <option value="BTC">Bitcoin (BTC)</option>
                    <option value="ETH">Ethereum (ETH)</option>
                    <option value="SOL">Solana (SOL)</option>
                    <option value="ADA">Cardano (ADA)</option>
                    <option value="DOT">Polkadot (DOT)</option>
                    <option value="MATIC">Polygon (MATIC)</option>
                    <option value="OTHER">Altele</option>
                  </select>
                </div>

                {/* Amount */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">Cantitate</label>
                  <input
                    type="number"
                    step="0.000001"
                    value={currentAmount}
                    onChange={(e) => setCurrentAmount(e.target.value)}
                    placeholder="0.5"
                    className="w-full rounded-lg bg-crypto-dark border border-gray-700 px-4 py-3 text-white"
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Preț per unitate (RON)
                  </label>
                  <input
                    type="number"
                    value={currentPrice}
                    onChange={(e) => setCurrentPrice(e.target.value)}
                    placeholder="250000"
                    className="w-full rounded-lg bg-crypto-dark border border-gray-700 px-4 py-3 text-white"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">Data</label>
                  <input
                    type="date"
                    value={currentDate}
                    onChange={(e) => setCurrentDate(e.target.value)}
                    className="w-full rounded-lg bg-crypto-dark border border-gray-700 px-4 py-3 text-white"
                  />
                </div>

                <button
                  onClick={addTransaction}
                  className="w-full rounded-lg bg-crypto-accent py-3 font-bold text-crypto-dark transition hover:opacity-90"
                >
                  Adaugă Tranzacție
                </button>
              </div>
            </div>

            {/* Transactions List */}
            <div className="rounded-2xl bg-crypto-card p-6 border border-gray-800">
              <h2 className="mb-4 text-xl font-bold text-white">Istoric Tranzacții</h2>
              
              {transactions.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Nicio tranzacție adăugată</p>
              ) : (
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {transactions.map((t) => (
                    <div
                      key={t.id}
                      className={`flex items-center justify-between rounded-lg p-3 border ${
                        t.type === 'buy' 
                          ? 'bg-crypto-green/10 border-crypto-green/30' 
                          : 'bg-crypto-red/10 border-crypto-red/30'
                      }`}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`font-bold ${
                            t.type === 'buy' ? 'text-crypto-green' : 'text-crypto-red'
                          }`}>
                            {t.type === 'buy' ? 'CUMPĂRARE' : 'VÂNZARE'}
                          </span>
                          <span className="text-white font-semibold">{t.crypto}</span>
                        </div>
                        <div className="text-sm text-gray-400">
                          {t.amount} unități @ {formatRON(t.price)} / unitate
                        </div>
                        <div className="text-xs text-gray-500">{t.date}</div>
                      </div>
                      <div className="text-right mr-4">
                        <div className="text-white font-bold">
                          {formatRON(t.amount * t.price)}
                        </div>
                      </div>
                      <button
                        onClick={() => removeTransaction(t.id)}
                        className="text-crypto-red hover:text-red-400 px-2"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Tax Results */}
          <div className="space-y-6">
            {/* Tax Summary */}
            <div className="rounded-2xl bg-crypto-card p-6 border border-gray-800">
              <h2 className="mb-6 text-xl font-bold text-white">Rezumat Taxe</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">Profit/Pierdere Total</span>
                  <span className={`text-xl font-bold ${
                    totalProfit >= 0 ? 'text-crypto-green' : 'text-crypto-red'
                  }`}>
                    {formatRON(totalProfit)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">Profit Impozabil</span>
                  <span className="text-xl font-bold text-white">{formatRON(taxableProfit)}</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <div>
                    <span className="text-gray-300">Impozit Venit (10%)</span>
                    <p className="text-xs text-gray-500">Impozit pe veniturile din investiții</p>
                  </div>
                  <span className="text-xl font-bold text-crypto-accent">{formatRON(taxAmount)}</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <div>
                    <span className="text-gray-300">CASS (10%)</span>
                    <p className="text-xs text-gray-500">Contribuție asigurări sănătate</p>
                    <p className="text-xs text-gray-600">Se aplică dacă profitul &gt; 12.000 RON</p>
                  </div>
                  <span className="text-xl font-bold text-crypto-purple">{formatRON(healthTax)}</span>
                </div>

                <div className="flex justify-between items-center py-4 bg-crypto-dark rounded-lg px-4 mt-4">
                  <span className="text-lg font-bold text-white">TOTAL DE PLĂTIT</span>
                  <span className="text-2xl font-bold text-crypto-green">{formatRON(totalTax)}</span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="rounded-2xl bg-crypto-card/50 p-6 border border-gray-800">
              <h3 className="mb-4 text-lg font-semibold text-white">Informații ANAF 2026</h3>
              
              <div className="space-y-3 text-sm text-gray-400">
                <p>
                  <span className="text-crypto-accent font-semibold">Regim fiscal:</span> Veniturile din cripto sunt impozitate ca venituri din investiții (categoria I).
                </p>
                
                <p>
                  <span className="text-crypto-accent font-semibold">Impozit:</span> 10% din profitul realizat (diferența între prețul de vânzare și prețul de cumpărare).
                </p>
                
                <p>
                  <span className="text-crypto-accent font-semibold">CASS:</span> 10% aplicat asupra profitului impozabil, doar dacă acesta depășește 12.000 RON pe an.
                </p>
                
                <p>
                  <span className="text-crypto-accent font-semibold">Metoda FIFO:</span> First In, First Out - prima cumpărare se împerechează cu prima vânzare.
                </p>
                
                <p>
                  <span className="text-crypto-accent font-semibold">Termen plată:</span> 25 mai 2027 pentru declarația unică pe veniturile din 2026.
                </p>
                
                <p className="text-xs text-gray-500 pt-2 border-t border-gray-700 mt-4">
                  ⚠️ Acest calculator are scop informativ. Consultă un contabil pentru situații complexe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}