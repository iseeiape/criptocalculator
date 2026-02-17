'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Prices {
  [key: string]: number
}

// Fallback prices in case API fails
const FALLBACK_PRICES: Prices = {
  BTC: 96750,
  ETH: 2650,
  SOL: 145,
  ADA: 0.78,
  DOT: 4.85,
  MATIC: 0.42
}

const FIAT_RATES = {
  USD: 1,
  EUR: 0.92,
  RON: 4.58
}

export default function Converter() {
  const [amount, setAmount] = useState('1')
  const [fromCrypto, setFromCrypto] = useState('BTC')
  const [toFiat, setToFiat] = useState('RON')
  const [result, setResult] = useState(0)
  const [prices, setPrices] = useState<Prices>(FALLBACK_PRICES)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [lastUpdate, setLastUpdate] = useState('')

  // Fetch real-time prices from CoinGecko
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,cardano,polkadot,matic-network&vs_currencies=usd'
        )
        
        if (!response.ok) {
          throw new Error('API Error')
        }
        
        const data = await response.json()
        
        setPrices({
          BTC: data.bitcoin?.usd || FALLBACK_PRICES.BTC,
          ETH: data.ethereum?.usd || FALLBACK_PRICES.ETH,
          SOL: data.solana?.usd || FALLBACK_PRICES.SOL,
          ADA: data.cardano?.usd || FALLBACK_PRICES.ADA,
          DOT: data.polkadot?.usd || FALLBACK_PRICES.DOT,
          MATIC: data['matic-network']?.usd || FALLBACK_PRICES.MATIC
        })
        setLastUpdate(new Date().toLocaleTimeString('ro-RO'))
        setError('')
      } catch (err) {
        console.error('Error fetching prices:', err)
        setError('Prețurile nu s-au putut actualiza. Se folosesc valorile implicite.')
        setPrices(FALLBACK_PRICES)
      } finally {
        setLoading(false)
      }
    }

    fetchPrices()
    // Refresh every 60 seconds
    const interval = setInterval(fetchPrices, 60000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const cryptoPrice = prices[fromCrypto] || 0
    const fiatRate = FIAT_RATES[toFiat as keyof typeof FIAT_RATES] || 1
    const converted = parseFloat(amount || '0') * cryptoPrice * fiatRate
    setResult(converted)
  }, [amount, fromCrypto, toFiat, prices])

  const formatResult = (value: number, currency: string) => {
    if (isNaN(value)) return '-'
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
            ← Înapoi
          </Link>
          <div className="text-right">
            <h1 className="text-3xl font-bold text-white">Convertor Crypto</h1>
            {lastUpdate && (
              <p className="text-sm text-gray-500">
                Actualizat: {lastUpdate}
              </p>
            )}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 rounded-lg bg-yellow-500/20 border border-yellow-500 p-4 text-yellow-200">
            {error}
          </div>
        )}

        {/* Converter Card */}
        <div className="rounded-2xl bg-crypto-card p-6 sm:p-8 border border-gray-800">
          {loading && (
            <div className="mb-4 text-center text-crypto-accent">
              Se încarcă prețurile...
            </div>
          )}
          
          <div className="grid gap-6 md:grid-cols-2">
            {/* Amount Input */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Sumă
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="1"
                min="0"
                step="0.000001"
                className="w-full rounded-lg bg-crypto-dark border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-crypto-accent focus:outline-none"
              />
            </div>

            {/* From Crypto */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Din Criptomonedă
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
                În Monedă
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
            <p className="mb-2 text-sm text-gray-400">Rezultat</p>
            <p className="text-4xl font-bold text-crypto-green sm:text-5xl">
              {formatResult(result, toFiat)}
            </p>
            {prices[fromCrypto] && (
              <p className="mt-2 text-sm text-gray-500">
                1 {fromCrypto} = {formatResult(
                  prices[fromCrypto] * 
                  (FIAT_RATES[toFiat as keyof typeof FIAT_RATES] || 1), 
                  toFiat
                )}
              </p>
            )}
          </div>
        </div>

        {/* Quick Rates */}
        <div className="mt-8 rounded-xl bg-crypto-card/50 p-6 border border-gray-800">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Rate Live (USD)</h3>
            <span className="text-xs text-crypto-accent">Sursă: CoinGecko</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {Object.entries(prices).map(([crypto, price]) => (
              <div key={crypto} className="flex items-center justify-between rounded-lg bg-crypto-dark p-3 border border-gray-700">
                <span className="font-semibold text-white">{crypto}</span>
                <span className="text-crypto-accent">${typeof price === 'number' ? price.toLocaleString() : '-'}</span>
              </div>
            ))}
          </div>        </div>
      </div>
    </main>
  )
}