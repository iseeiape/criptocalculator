import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CriptoCalculator - Calculator Crypto Gratuite',
  description: 'Calculator criptomonede gratuit pentru traderi. Calculator poziție trading, convertor crypto, tracker P&L. Calculează tranzacțiile ca un profesionist.',
  keywords: 'criptocalculator, calculator crypto, calculator poziție, convertor bitcoin, unelte crypto, calculator trading, crypto calculator romania',
  openGraph: {
    title: 'CriptoCalculator - Calculator Crypto Gratuite',
    description: 'Calculator criptomonede gratuit pentru traderi',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body className="min-h-screen bg-crypto-dark text-white antialiased">
        {children}
      </body>
    </html>
  )
}