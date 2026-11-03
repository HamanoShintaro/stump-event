import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import '@/app/globals.css'
import { AuthProvider } from '@/context/AuthContext'
import { AlertProvider } from '@/context/AlertContext'
import Footer from '@/components/Footer'
import NavigationLoadingProvider from '@/components/NavigationLoadingProvider'
import { getSiteUrl } from '@/utils/seo'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400', '500', '700', '800'] })

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SHUIN まちのしるし｜全国の観光モデルコース・街歩き・散歩ルートをめぐる物語',
    template: '%s | SHUIN まちのしるし',
  },
  description:
    '街を歩いて、しるしを刻む。訪れた場所が、あなたのしるしになる。全国の駅や街を徒歩（車なし）でめぐる観光モデルコース・半日街歩き・食べ歩き・散歩ルート（所要時間・距離・マップ付き）を紹介するSHUIN。',
  keywords: [
    'SHUIN',
    'まちのしるし',
    '観光モデルコース',
    '街歩き',
    '食べ歩き',
    '散歩コース',
    '半日観光',
    '車なし観光',
    '御朱印',
  ],
  openGraph: {
    title: 'SHUIN まちのしるし｜全国の観光モデルコース・街歩き・散歩ルートをめぐる物語',
    description:
      '街を歩いて、しるしを刻む。訪れた場所が、あなたのしるしになる。全国の街を徒歩でめぐる観光モデルコース・街歩きルート。',
    url: siteUrl,
    siteName: 'SHUIN まちのしるし',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHUIN まちのしるし｜全国の観光モデルコース・街歩き・散歩ルートをめぐる物語',
    description:
      '街を歩いて、しるしを刻む。訪れた場所が、あなたのしるしになる。',
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
