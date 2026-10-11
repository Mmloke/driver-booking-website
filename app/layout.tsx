import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'سائقك | خدمات النقل الموثوق',
    template: '%s | سائقك'
  },
  description:
    'موقع احترافي لخدمات السائقين والرحلات المريحة مع حجز مباشر عبر الإنترنت.',
  keywords: ['سائق', 'حجز رحلات', 'خدمة سيارات', 'تأمين رحلة', 'رحلة مريحة'],
  openGraph: {
    title: 'سائقك | خدمات النقل الموثوق',
    description: 'احجز رحلتك بسهولة مع خدمات سائقين احترافية ومجموعة سيارات متنوعة.',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
