import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import '@/app/globals.css'
import { AuthProvider } from '@/context/AuthContext'
import { AlertProvider } from '@/context/AlertContext'
import Footer from '@/components/Footer'
import NavigationLoadingProvider from '@/components/NavigationLoadingProvider'
import GoogleAnalyticsTag from '@/components/GoogleAnalyticsTag'
import { getSiteUrl } from '@/utils/seo'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400', '500', '700', '800'] })

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SHUIN｜知っている街の、知らない散歩道 — 駅からはじまる街歩き・散策ルート',
    template: '%s | SHUIN｜知っている街の、知らない散歩道',
  },
  description:
    '「知っている街の、知らない散歩道」を歩く。普段通り過ぎる駅や地元の路地に眠る物語と、訪れた場所のしるしを刻む街歩き・散歩・散策ルート案内。ひとり散歩にも休日のお出かけにも。',
  keywords: [
    'SHUIN',
    '知っている街の、知らない散歩道',
    'まちのしるし',
    '街歩き',
    '散歩コース',
    '散策ルート',
    'ひとり散歩',
    '休日のお出かけ',
    '地元 散歩',
    '街歩きアプリ',
    '散歩マップ',
    '御朱印',
  ],
  openGraph: {
    title: 'SHUIN｜知っている街の、知らない散歩道 — 駅からはじまる街歩き・散策ルート',
    description:
      '「知っている街の、知らない散歩道」を歩く。普段通り過ぎる駅や地元の路地に眠る物語と、訪れた場所のしるしを刻む街歩き・散歩・散策ルート案内。',
    url: siteUrl,
    siteName: 'SHUIN｜知っている街の、知らない散歩道',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHUIN｜知っている街の、知らない散歩道 — 駅からはじまる街歩き・散策ルート',
    description:
      '「知っている街の、知らない散歩道」を歩く。街を歩いて、しるしを刻む街歩き・散策ルート。',
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={notoSansJP.className}>
        <GoogleAnalyticsTag />
        <AuthProvider>
          <AlertProvider>
            <NavigationLoadingProvider />
            <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
              {children}
            </div>
            <Footer />
          </AlertProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
