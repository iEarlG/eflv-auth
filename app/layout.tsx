import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ["400", "500", "600", "500", "800"]
})

export const metadata: Metadata = {
  title: 'EFLV Authentication',
  description: 'EFLV Authentication is the most secure way to authenticate your users.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
