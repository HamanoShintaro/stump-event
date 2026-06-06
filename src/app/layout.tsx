import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import '@/app/globals.css'
import { AuthProvider } from '@/context/AuthContext'
import { AlertProvider } from '@/context/AlertContext'
import Footer from '@/components/Footer'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400', '500', '700', '800'] })

export const metadata: Metadata = {
  title: 'SHUIN まちのしるし',
  description: '街を歩いて、しるしを刻む。訪れた場所が、あなたのしるしになる。',
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
