import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { AuthProvider } from '@/context/AuthContext'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'みんなのスタンプラリー',
  description: 'すべての好きが、地図になる。GPSとQRコードを活用した新しいスタンプラリー体験。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
            {children}
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
