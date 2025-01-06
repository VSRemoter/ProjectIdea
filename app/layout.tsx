import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { MotionConfig } from 'framer-motion'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const Navigation = dynamic(() => import('./components/navigation'), { ssr: true })

export const metadata: Metadata = {
  title: "Who's Him NBA",
  description: 'NBA Data Analytics and Statistics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Existing meta tags */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/logo.png" as="image" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <MotionConfig reducedMotion="user">
            <div className="flex flex-col min-h-screen">
              <Suspense fallback={<div>Loading...</div>}>
                <Navigation />
              </Suspense>
              <main className="flex-grow container mx-auto px-4 py-8">
                {children}
              </main>
              <footer className="bg-primary text-primary-foreground py-4 text-center">
                <p>&copy; 2023 Who's Him NBA. All rights reserved.</p>
              </footer>
            </div>
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  )
}

