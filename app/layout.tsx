import type { Metadata } from 'next'
import Script from 'next/script'
import { Suspense } from 'react'
import { GA_TRACKING_ID } from '@/src/lib/gtag'
import GoogleAnalytics from '@/src/components/GoogleAnalytics'
import './globals.css'

export const metadata: Metadata = {
  title: 'CriptoCalculator - Calculator Crypto Gratuit pentru Traderi | România',
  description: 'Calculator criptomonede gratuit pentru traderi din România. Calculator poziție trading, convertor crypto (BTC, ETH, SOL în RON), tracker P&L. Calculează tranzacțiile ca un profesionist. 100% gratuit.',
  keywords: 'criptocalculator, calculator crypto, calculator poziție trading, convertor bitcoin ron, calculator trading crypto, unelte crypto romania, position size calculator, crypto converter',
  authors: [{ name: 'CriptoCalculator' }],
  creator: 'CriptoCalculator',
  publisher: 'CriptoCalculator',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://criptocalculator.com',
  },
  openGraph: {
    title: 'CriptoCalculator - Calculator Crypto Gratuit pentru Traderi',
    description: 'Calculator criptomonede gratuit pentru traderi din România. Calculator poziție, convertor crypto, tracker P&L. 100% gratuit.',
    type: 'website',
    locale: 'ro_RO',
    url: 'https://criptocalculator.com',
    siteName: 'CriptoCalculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CriptoCalculator - Calculator Crypto Gratuit',
    description: 'Calculator criptomonede gratuit pentru traderi. Calculează pozițiile ca un profesionist!',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="zKajNxApIM1EuRbL9hI3mOeFCwDqZSuyGmLDq1PYDu8" />
        
        {/* Schema.org WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              'name': 'CriptoCalculator',
              'url': 'https://criptocalculator.com',
              'description': 'Cea mai completă suită de calculatoare criptomonede gratuite pentru traderi din România',
              'inLanguage': 'ro-RO',
              'publisher': {
                '@type': 'Organization',
                'name': 'CriptoCalculator',
                'logo': {
                  '@type': 'ImageObject',
                  'url': 'https://criptocalculator.com/logo.png'
                }
              },
              'aggregateRating': {
                '@type': 'AggregateRating',
                'ratingValue': '4.8',
                'reviewCount': '5000'
              },
              'potentialAction': {
                '@type': 'SearchAction',
                'target': 'https://criptocalculator.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            }),
          }}
        />

        {/* Schema.org Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              'name': 'CriptoCalculator',
              'url': 'https://criptocalculator.com',
              'logo': 'https://criptocalculator.com/logo.png',
              'description': 'Suită de calculatoare crypto gratuite pentru traderi români',
              'address': {
                '@type': 'PostalAddress',
                'addressCountry': 'RO'
              },
              'sameAs': [
                'https://twitter.com/criptocalculator',
              ]
            }),
          }}
        />

        {/* Schema.org SoftwareApplication - Position Calculator */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              'name': 'Calculator Poziție Trading Crypto',
              'applicationCategory': 'FinanceApplication',
              'operatingSystem': 'Web',
              'offers': {
                '@type': 'Offer',
                'price': '0',
                'priceCurrency': 'RON'
              },
              'description': 'Calculator gratuit pentru dimensiunea poziției în trading crypto. Calculează volumul de intrare, marja și prețul de liquidare.',
              'aggregateRating': {
                '@type': 'AggregateRating',
                'ratingValue': '4.8',
                'reviewCount': '5000'
              },
              'featureList': 'Calcul dimensiune poziție, Money management, Risk management, Leverage calculator',
            }),
          }}
        />

        {/* Schema.org FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': [
                {
                  '@type': 'Question',
                  'name': 'Cum calculez dimensiunea poziției în trading crypto?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Folosești formula: Dimensiune Poziție = (Capital × Risk %) / (Stop Loss în procente). De exemplu, cu 10,000 USDT capital, 2% risk și 5% stop loss: Poziție = (10,000 × 0.02) / 0.05 = 4,000 USDT. CriptoCalculator.com face asta automat.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'Ce este calculatorul de poziție în trading?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Un instrument care determină cât să investești într-un trade pentru a risca exact procentul dorit din capital. Esențial pentru money management și protejarea capitalului.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'Cât risc să aloc per trade în crypto?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Regula de aur: 1-2% din capital per trade pentru începători, maximum 3% pentru traderi avansați. Niciodată mai mult de 5% per poziție. Calculatorul CriptoCalculator îți calculează automat dimensiunea corectă.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'Cum convertesc Bitcoin în RON?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Folosești convertorul CriptoCalculator - introduci suma în BTC și primești echivalentul în lei la cursul live de la CoinGecko. Prețurile sunt actualizate în timp real.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'Ce este raportul Risk/Reward în trading?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Raportul dintre cât poți pierde vs cât poți câștiga. Un raport 1:3 înseamnă că riști 1$ pentru a câștiga 3$. Minim recomandat pentru trade-uri profitabile: 1:2.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'Cât costă să folosesc CriptoCalculator?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Este 100% gratuit. Nu există abonamente, nu e nevoie de card, nu există limită de utilizare. Toate calculatoarele sunt gratuite pentru traderii din România.'
                  }
                }
              ]
            }),
          }}
        />
        
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true,
                cookie_flags: 'SameSite=None;Secure',
                allow_google_signals: true,
                allow_ad_personalization_signals: true,
                transport_type: 'beacon',
              });
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-crypto-dark text-white antialiased">
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
