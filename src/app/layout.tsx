import './globals.css'
import { Bitter } from 'next/font/google'

const bitter = Bitter({ subsets: ['latin'], variable: "--font-bitter" })

export const metadata = {
  title: 'Thinh Nguyen: Personal Portfolio',
  description: 'Thinh Nguyen, a experienced web developer specialize in typescript and golang field. If you want to contact me, please email: thinh@thinh.tech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bitter.variable}>{children}</body>
    </html>
  )
}
