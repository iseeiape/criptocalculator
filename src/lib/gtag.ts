// Google Analytics 4 tracking for CriptoCalculator
// Measurement ID: G-FENT7H2THT

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-FENT7H2THT'

// Log page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Log specific events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track calculator usage
export const trackCalculatorUse = (calculator: string) => {
  event({
    action: 'use_calculator',
    category: 'engagement',
    label: calculator,
  })
}

// Track blog article views
export const trackArticleView = (slug: string, title: string) => {
  event({
    action: 'view_article',
    category: 'content',
    label: `${slug} - ${title}`,
  })
}
