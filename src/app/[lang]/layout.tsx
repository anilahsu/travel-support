import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { i18n } from '@/i18n-config'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pocket Change User Guide',
  description: 'Do you know that you can exchange your coins in Japan as well? Pocket Change is a service from Japan that allows travelers to change Japanese yen leftover from their travels in Japan into their desired electronic money, different kinds of gift codes, coupons, and so on?',
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children, params 
}: {
  children: React.ReactNode
  params: {lang: string}
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
