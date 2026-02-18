'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PositionCalculator() {
  const [accountBalance, setAccountBalance] = useState('')
  const [riskPercent, setRiskPercent] = useState('2')
  const [entryPrice, setEntryPrice] = useState('')
  const [stopLoss, setStopLoss] = useState('')
  const [positionSize, setPositionSize] = useState(0)
  const [riskAmount, setRiskAmount] = useState(0)
  const [coinsToBuy, setCoinsToBuy] = useState(0)

  const calculatePosition = () => {
    const balance = parseFloat(accountBalance)
    const risk = parseFloat(riskPercent)
    const entry = parseFloat(entryPrice)
    const stop = parseFloat(stopLoss)

    if (balance && risk && entry && stop && entry !== stop) {
      const riskAmt = balance * (risk / 100)
      const riskPerCoin = Math.abs(entry - stop)
      const posSize = riskAmt / riskPerCoin
      const coins = posSize / entry

      setRiskAmount(riskAmt)
      setPositionSize(posSize)
      setCoinsToBuy(coins)
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Noise overlay */}
      <div className="noise" />

      {/* Background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-cyan w-96 h-96 -top-20 -right-20 animate-float" />
        <div className="orb orb-purple w-80 h-80 top-1/3 -left-20 animate-float-delayed" />
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
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition">
              ← Înapoi la unelte
            </Link>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="relative px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-crypto-accent/30 bg-crypto-accent/10 px-4 py-1.5 mb-6">
            <span className="text-sm text-crypto-accent font-medium">📊 Risk Management</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Calculator <span className="text-gradient">Poziție Trading</span>
          </h1>
          
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Calculează mărimea perfectă a poziției bazată pe toleranța ta la risc. 
            Protecție inteligentă pentru capitalul tău.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="relative px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="glass border-gradient rounded-2xl p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Balanța Contului (USD)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={accountBalance}
                    onChange={(e) => {
                      setAccountBalance(e.target.value)
                      calculatePosition()
                    }}
                    placeholder="10000"
                    className="w-full rounded-xl bg-crypto-dark/80 border border-gray-700 px-4 py-4 pl-8 text-white placeholder-gray-500 focus:border-crypto-accent focus:outline-none transition"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Risc per Tranzacție (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={riskPercent}
                    onChange={(e) => {
                      setRiskPercent(e.target.value)
                      calculatePosition()
                    }}
                    placeholder="2"
                    min="0.1"
                    max="100"
                    step="0.1"
                    className="w-full rounded-xl bg-crypto-dark/80 border border-gray-700 px-4 py-4 text-white placeholder-gray-500 focus:border-crypto-accent focus:outline-none transition"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                </div>
                <p className="text-xs text-gray-500">Recomandat: 1-3% per tranzacție</p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Preț Intrare ($)
                </label>
                <input
                  type="number"
                  value={entryPrice}
                  onChange={(e) => {
                    setEntryPrice(e.target.value)
                    calculatePosition()
                  }}
                  placeholder="50000"
                  className="w-full rounded-xl bg-crypto-dark/80 border border-gray-700 px-4 py-4 text-white placeholder-gray-500 focus:border-crypto-accent focus:outline-none transition"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Stop Loss ($)
                </label>
                <input
                  type="number"
                  value={stopLoss}
                  onChange={(e) => {
                    setStopLoss(e.target.value)
                    calculatePosition()
                  }}
                  placeholder="48000"
                  className="w-full rounded-xl bg-crypto-dark/80 border border-gray-700 px-4 py-4 text-white placeholder-gray-500 focus:border-crypto-accent focus:outline-none transition"
                />
              </div>
            </div>

            <button
              onClick={calculatePosition}
              className="mt-8 w-full btn-primary rounded-xl py-4 font-bold text-crypto-dark text-lg"
            >
              🎯 Calculează Mărimea Poziției
            </button>

            {/* Results */}
            {positionSize > 0 && (
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="glass rounded-xl p-6 text-center border border-crypto-red/20">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl">⚠️</span>
                    <p className="text-sm text-gray-400">Sumă Riscată</p>
                  </div>
                  <p className="text-3xl font-bold text-crypto-red">${riskAmount.toFixed(2)}</p>
                  <p className="text-xs text-gray-500 mt-1">{riskPercent}% din cont</p>
                </div>
                
                <div className="glass rounded-xl p-6 text-center border border-crypto-accent/20">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl">💰</span>
                    <p className="text-sm text-gray-400">Mărime Poziție</p>
                  </div>
                  <p className="text-3xl font-bold text-crypto-accent">${positionSize.toFixed(2)}</p>
                  <p className="text-xs text-gray-500 mt-1">total capital în poziție</p>
                </div>
                
                <div className="glass rounded-xl p-6 text-center border border-crypto-green/20">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl">🪙</span>
                    <p className="text-sm text-gray-400">Monede de Cumpărat</p>
                  </div>
                  <p className="text-3xl font-bold text-crypto-green">{coinsToBuy.toFixed(6)}</p>
                  <p className="text-xs text-gray-500 mt-1">unități</p>
                </div>
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="mt-8 glass rounded-2xl p-8 border border-white/5">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>💡</span> Cum funcționează
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-crypto-accent/20 text-crypto-accent text-sm font-bold shrink-0">1</div>
                  <div>
                    <p className="text-white font-medium">Introdu balanța totală</p>
                    <p className="text-sm text-gray-400">Suma totală disponibilă în contul tău de trading</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-crypto-accent/20 text-crypto-accent text-sm font-bold shrink-0">2</div>
                  <div>
                    <p className="text-white font-medium">Setează procentul de risc</p>
                    <p className="text-sm text-gray-400">1-3% recomandat pentru management sănătos</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-crypto-accent/20 text-crypto-accent text-sm font-bold shrink-0">3</div>
                  <div>
                    <p className="text-white font-medium">Preț intrare & stop loss</p>
                    <p className="text-sm text-gray-400">Nivelele tale de entry și protecție</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-crypto-accent/20 text-crypto-accent text-sm font-bold shrink-0">4</div>
                  <div>
                    <p className="text-white font-medium">Obții mărimea optimă</p>
                    <p className="text-sm text-gray-400">Calculatorul îți spune exact cât să cumperi</p>
                  </div>
                </div>
              </div>
            </div>
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
          <p className="text-sm text-gray-500">Nu este sfat financiar. Tranzacționează responsabil.</p>
        </div>
      </footer>
    </main>
  )
}
