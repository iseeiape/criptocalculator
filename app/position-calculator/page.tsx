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
    <main className="min-h-screen bg-crypto-dark px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-crypto-accent hover:opacity-80">
            ← Înapoi
          </Link>
          <h1 className="text-3xl font-bold text-white">Calculator Poziție Trading</h1>
        </div>

        {/* Calculator Card */}
        <div className="rounded-2xl bg-crypto-card p-6 sm:p-8 border border-gray-800">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Balanța Contului (USD)
              </label>
              <input
                type="number"
                value={accountBalance}
                onChange={(e) => {
                  setAccountBalance(e.target.value)
                  calculatePosition()
                }}
                placeholder="10000"
                className="w-full rounded-lg bg-crypto-dark border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-crypto-accent focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Risc per Tranzacție (%)
              </label>
              <input
                type="number"
                value={riskPercent}
                onChange={(e) => {
                  setRiskPercent(e.target.value)
                  calculatePosition()
                }}
                placeholder="2"
                className="w-full rounded-lg bg-crypto-dark border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-crypto-accent focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
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
                className="w-full rounded-lg bg-crypto-dark border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-crypto-accent focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
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
                className="w-full rounded-lg bg-crypto-dark border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-crypto-accent focus:outline-none"
              />
            </div>
          </div>

          <button
            onClick={calculatePosition}
            className="mt-6 w-full rounded-lg bg-crypto-accent py-4 font-bold text-crypto-dark transition hover:opacity-90"
          >
            Calculează Mărimea Poziției
          </button>

          {/* Results */}
          {positionSize > 0 && (
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-crypto-dark p-4 text-center border border-gray-700">
                <p className="text-sm text-gray-400">Sumă Riscată</p>
                <p className="text-2xl font-bold text-crypto-red">${riskAmount.toFixed(2)}</p>
              </div>
              
              <div className="rounded-xl bg-crypto-dark p-4 text-center border border-gray-700">
                <p className="text-sm text-gray-400">Mărime Poziție</p>
                <p className="text-2xl font-bold text-crypto-accent">${positionSize.toFixed(2)}</p>
              </div>
              
              <div className="rounded-xl bg-crypto-dark p-4 text-center border border-gray-700">
                <p className="text-sm text-gray-400">Monede de Cumpărat</p>
                <p className="text-2xl font-bold text-crypto-green">{coinsToBuy.toFixed(6)}</p>
              </div>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="mt-8 rounded-xl bg-crypto-card/50 p-6 border border-gray-800">
          <h3 className="mb-4 text-lg font-semibold text-white">Cum funcționează</h3>
          <ul className="list-inside list-disc space-y-2 text-gray-400">
            <li>Introdu balanța totală a contului</li>
            <li>Setează procentul pe care ești dispus să-l riști (1-3% recomandat)</li>
            <li>Introdu prețul de intrare planificat</li>
            <li>Setează prețul stop loss</li>
            <li>Obții mărimea optimă a poziției pentru a limita riscul</li>
          </ul>
        </div>
      </div>
    </main>
  )
}