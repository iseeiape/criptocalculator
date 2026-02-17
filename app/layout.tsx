import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CriptoCalculator - Free Crypto Trading Tools',
  description: 'Free cryptocurrency calculators for traders. Position size calculator, crypto converter, P&L tracker. Calculate your crypto trades like a pro.',
  keywords: 'crypto calculator, trading calculator, position size, bitcoin converter, crypto tools, trading risk calculator, cripto calculator',
  openGraph: {
    title: 'CriptoCalculator - Free Crypto Trading Tools',
    description: 'Free cryptocurrency calculators for traders',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-crypto-dark text-white antialiased">
        {children}
      </body>
    </html>
  )
}