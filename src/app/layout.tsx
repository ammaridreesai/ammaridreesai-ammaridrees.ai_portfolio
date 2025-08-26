import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ammar Idrees - Portfolio',
  description: 'Software Engineer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}