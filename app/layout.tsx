import type { Metadata } from 'next'
import Script from 'next/script'
import { Suspense } from 'react'
import { GA_TRACKING_ID } from '@/src/lib/gtag'
import GoogleAnalytics from '@/src/components/GoogleAnalytics'
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
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="zKajNxApIM1EuRbL9hI3mOeFCwDqZSuyGmLDq1PYDu8" />
        
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