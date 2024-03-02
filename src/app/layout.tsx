import ThemeRegistry from '@/theme/ThemeRegistry'
import type { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'BuscaCEP',
  description: 'Pesquise CEPs de todo o Brasil!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
    <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
    </Head>
    <body>
      <ThemeRegistry>
          {children}
      </ThemeRegistry>
    </body>
    </html>
  )
}
