'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { trackCalculatorUse } from '@/src/lib/gtag'

interface Prices {
  [key: string]: number
}

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
  const [mounted, setMounted] = useState(false)
  const [amount, setAmount] = useState('1')
  const [fromCrypto, setFromCrypto] = useState('BTC')
  const [toFiat, setToFiat] = useState('RON')
  const [result, setResult] = useState(0)
  const [prices, setPrices] = useState<Prices>(FALLBACK_PRICES)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [lastUpdate, setLastUpdate] = useState('')

  useEffect(() => {
    setMounted(true)
    // Track calculator usage
    trackCalculatorUse('crypto_converter')
  }, [])

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,cardano,polkadot,matic-network&vs_currencies=usd'
        )
        
        if (!response.ok) throw new Error('API Error')
        
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
        setError('Prețurile nu s-au putut actualiza. Se folosesc valorile implicite.')
        setPrices(FALLBACK_PRICES)
      } finally {
        setLoading(false)
      }
    }

    fetchPrices()
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

  const cryptoIcons: { [key: string]: string } = {
    BTC: '₿', ETH: 'Ξ', SOL: '◎', ADA: '₳', DOT: '●', MATIC: 'M'
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="noise" />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-purple w-96 h-96 -top-20 -left-20 animate-float" />
        <div className="orb orb-cyan w-80 h-80 top-1/2 -right-20 animate-float-delayed" />
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
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-crypto-purple/30 bg-crypto-purple/10 px-4 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crypto-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-crypto-green"></span>
            </span>
            <span className="text-sm text-crypto-green font-medium">Rate în timp real</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Convertor <span className="text-gradient">Crypto</span>
          </h1>
          
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Convertește Bitcoin, Ethereum și alte criptomonede în RON, USD sau EUR. 
            Rate actualizate live de la CoinGecko.
          </p>
          {lastUpdate && (
            <p className="mt-2 text-sm text-gray-500">Ultima actualizare: {lastUpdate}</p>
          )}
        </div>
      </section>

      <section className="relative px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {!mounted ? (
            <div className="glass border-gradient rounded-2xl p-8 text-center">
              <div className="text-crypto-accent text-lg">⚡ Se încarcă convertorul...</div>
            </div>
          ) : (
            <>
          {error && (
            <div className="mb-6 rounded-xl bg-yellow-500/10 border border-yellow-500/30 p-4 text-yellow-200 text-center">
              ⚠️ {error}
            </div>
          )}

          <div className="glass border-gradient rounded-2xl p-8">
            {loading && (
              <div className="mb-6 text-center">
                <div className="inline-flex items-center gap-2 text-crypto-accent">
                  <span className="animate-spin">⟳</span> Se încarcă prețurile...
                </div>
              </div>
            )}
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Sumă</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="1"
                  min="0"
                  step="0.000001"
                  className="w-full rounded-xl bg-crypto-dark/80 border border-gray-700 px-4 py-4 text-white placeholder-gray-500 focus:border-crypto-accent focus:outline-none transition text-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Din Criptomonedă</label>
                <select
                  value={fromCrypto}
                  onChange={(e) => setFromCrypto(e.target.value)}
                  className="w-full rounded-xl bg-crypto-dark/80 border border-gray-700 px-4 py-4 text-white focus:border-crypto-accent focus:outline-none transition"
                >
                  {Object.keys(prices).map((crypto) => (
                    <option key={crypto} value={crypto}>
                      {cryptoIcons[crypto]} {crypto === 'BTC' ? 'Bitcoin' : crypto === 'ETH' ? 'Ethereum' : crypto === 'SOL' ? 'Solana' : crypto === 'ADA' ? 'Cardano' : crypto === 'DOT' ? 'Polkadot' : 'Polygon'} ({crypto})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-300 mb-3">În Monedă</label>
              <div className="flex gap-3">
                {(['RON', 'USD', 'EUR'] as const).map((currency) => (
                  <button
                    key={currency}
                    onClick={() => setToFiat(currency)}
                    className={`flex-1 rounded-xl py-4 font-semibold transition flex items-center justify-center gap-2 ${
                      toFiat === currency
                        ? 'bg-crypto-accent text-crypto-dark'
                        : 'bg-crypto-dark/80 border border-gray-700 text-white hover:border-crypto-accent'
                    }`}
                  >
                    <span className="text-xl">{currency === 'RON' ? '🇷🇴' : currency === 'USD' ? '🇺🇸' : '🇪🇺'}</span>
                    {currency}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 glass-strong rounded-2xl p-8 text-center border border-crypto-green/20">
              <p className="text-sm text-gray-400 mb-2">Rezultat</p>
              <p className="text-5xl sm:text-6xl font-bold text-crypto-green">
                {formatResult(result, toFiat)}
              </p>
              {prices[fromCrypto] && (
                <p className="mt-3 text-sm text-gray-500">
                  1 {fromCrypto} = {formatResult(
                    prices[fromCrypto] * (FIAT_RATES[toFiat as keyof typeof FIAT_RATES] || 1), 
                    toFiat
                  )}
                </p>
              )}
            </div>
          </div>

          {/* Live Rates */}
          <div className="mt-8 glass rounded-2xl p-8 border border-white/5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>📊</span> Rate Live (USD)
              </h3>
              <span className="text-xs text-crypto-accent bg-crypto-accent/10 px-3 py-1 rounded-full">Sursă: CoinGecko</span>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-3">
              {Object.entries(prices).map(([crypto, price]) => (
                <div key={crypto} className="glass rounded-xl p-4 flex items-center justify-between border border-gray-700/50 hover:border-crypto-accent/30 transition">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{cryptoIcons[crypto]}</span>
                    <span className="font-bold text-white">{crypto}</span>
                  </div>
                  <span className="text-crypto-accent font-mono">${typeof price === 'number' ? price.toLocaleString() : '-'}</span>
                </div>
              ))}
            </div>
          </div>
            </>
          )}
        </div>
      </section>

      <footer className="relative border-t border-white/5 px-4 py-12 sm:px-6 lg:px-8 mt-12">
        <div className="mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🧮</span>
            <span className="font-bold text-gradient">CriptoCalculator</span>
          </div>
          <p className="text-sm text-gray-500">Rate actualizate în timp real. Prețurile pot varia.</p>
        </div>
      </footer>
    </main>
  )
}
