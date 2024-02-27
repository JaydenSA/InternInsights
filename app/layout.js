import { Inter } from 'next/font/google'
import './globals.css'
import { Header, Footer, HomeHeader } from '@/components'
import { AuthContextProvider } from '@/src/context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Intern Insights',
  description: 'Welcome to InternInsights, a dynamic blog platform where our interns share their triumphs, tribulations, and transformative experiences on the road to becoming exceptional software engineers. 🚀✨',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3698348816476734"
        crossorigin="anonymous"></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1772058783125351"
        crossorigin="anonymous"></script> 
        <meta name="google-site-verification" content="Xx0sK_bfwUN70ShmeoG7Mh8iX-bMreD1-6fu5gcDVpc" />     
     </head>
      <body className={inter.className}>
        <AuthContextProvider>
          <HomeHeader />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  )
}
