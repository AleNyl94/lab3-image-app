import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Catan Board Generator',
  description: 'Generera dina Catan-kartor enkelt och smidigt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" className={inter.className}>
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col">
        <header className="border-b border-slate-200 bg-white py-4 px-6 shadow-sm">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-lg font-semibold tracking-tight text-slate-800">
              Catan Board Generator
            </h1>
          </div>
        </header>

        <main className="flex-1 max-w-5xl w-full mx-auto p-6">
          {children}
        </main>

        <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500">
          Catan Board Generator &bull; Deadline onsdag!
        </footer>
      </body>
    </html>
  )
}