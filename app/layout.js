import { Inter } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/components'
import { AuthContextProvider } from '@/src/context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'InternInsights',
  description: 'Welcome to InternInsights, a dynamic blog platform where our interns share their triumphs, tribulations, and transformative experiences on the road to becoming exceptional software engineers. 🚀✨',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Header />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  )
}
