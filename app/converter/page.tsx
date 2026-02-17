'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const CRYPTO_PRICES = {
  BTC: 67230,
  ETH: 3450,
  SOL: 148.50,
  ADA: 0.58,
  DOT: 7.85,
  MATIC: 0.72
}

const FIAT_RATES = {
  USD: 1,
  EUR: 0.92,
  RON: 4.58
}

export default function Converter() {
  const [amount, setAmount] = useState('1')
  const [fromCrypto, setFromCrypto] = useState('BTC')
  const [toFiat, setToFiat] = useState('USD')
  const [result, setResult] = useState(0)

  useEffect(() => {
    const cryptoPrice = CRYPTO_PRICES[fromCrypto as keyof typeof CRYPTO_PRICES]
    const fiatRate = FIAT_RATES[toFiat as keyof typeof FIAT_RATES]
    const converted = parseFloat(amount || '0') * cryptoPrice * fiatRate
    setResult(converted)
  }, [amount, fromCrypto, toFiat])

  const formatResult = (value: number, currency: string) => {
    if (currency === 'RON') {
      return value.toLocaleString('ro-RO', { style: 'currency', currency: 'RON' })
    } else if (currency === 'EUR') {
      return value.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    }
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  }

  return (
    <main className="min-h-screen bg-crypto-dark px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-crypto-accent hover:opacity-80">
            ← Back
          </Link>
          <h1 className="text-3xl font-bold text-white">Crypto Converter</h1>
        </div>

        {/* Converter Card */}
        <div className="rounded-2xl bg-crypto-card p-6 sm:p-8 border border-gray-800">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Amount Input */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Amount
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="1"
                className="w-full rounded-lg bg-crypto-dark border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-crypto-accent focus:outline-none"
              />
            </div>

            {/* From Crypto */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                From Crypto
              </label>
              <select
                value={fromCrypto}
                onChange={(e) => setFromCrypto(e.target.value)}
                className="w-full rounded-lg bg-crypto-dark border border-gray-700 px-4 py-3 text-white focus:border-crypto-accent focus:outline-none"
              >
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="SOL">Solana (SOL)</option>
                <option value="ADA">Cardano (ADA)</option>
                <option value="DOT">Polkadot (DOT)</option>
                <option value="MATIC">Polygon (MATIC)</option>
              </select>
            </div>

            {/* To Currency */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-300">
                To Currency
              </label>
              <div className="flex gap-4">
                {(['USD', 'EUR', 'RON'] as const).map((currency) => (
                  <button
                    key={currency}
                    onClick={() => setToFiat(currency)}
                    className={`flex-1 rounded-lg py-3 font-semibold transition ${
                      toFiat === currency
                        ? 'bg-crypto-accent text-crypto-dark'
                        : 'bg-crypto-dark border border-gray-700 text-white hover:border-crypto-accent'
                    }`}
                  >
                    {currency}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="mt-8 rounded-xl bg-crypto-dark p-6 text-center border border-gray-700">
            <p className="mb-2 text-sm text-gray-400">Result</p>
            <p className="text-4xl font-bold text-crypto-green sm:text-5xl">
              {formatResult(result, toFiat)}
            </p>
            <p className="mt-2 text-sm text-gray-500">
              1 {fromCrypto} = {formatResult(
                CRYPTO_PRICES[fromCrypto as keyof typeof CRYPTO_PRICES] * 
                FIAT_RATES[toFiat as keyof typeof FIAT_RATES], 
                toFiat
              )}
            </p>
          </div>
        </div>

        {/* Quick Rates */}
        <div className="mt-8 rounded-xl bg-crypto-card/50 p-6 border border-gray-800">
          <h3 className="mb-4 text-lg font-semibold text-white">Current Rates (USD)</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {Object.entries(CRYPTO_PRICES).map(([crypto, price]) => (
              <div key={crypto} className="flex items-center justify-between rounded-lg bg-crypto-dark p-3 border border-gray-700">
                <span className="font-semibold text-white">{crypto}</span>
                <span className="text-crypto-accent">${price.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}