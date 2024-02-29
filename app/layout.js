import { Inter } from 'next/font/google'
import './globals.css'
import { Footer, HomeHeader } from '@/components'
import { AuthContextProvider } from '@/src/context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Intern Insights',
  description: 'Welcome to InternInsights, a dynamic blog platform where our interns share their triumphs, tribulations, and transformative experiences on the road to becoming exceptional software engineers. 🚀✨',
  keywords: 'intern-insights, nextjs, reactjs, web-development, web-developer, learning-platform',
	author: 'Jayden Oerson',
  openGraph: {
		title: 'Intern Insights',
		description: 'Welcome to InternInsights, a dynamic blog platform where our interns share their triumphs, tribulations, and transformative experiences on the road to becoming exceptional software engineers. 🚀✨',
		author: 'Jayden Oerson',
		url: 'intern-insights.vercel.app',
		locale: 'en_US',
		type: 'website',
		images: ['https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGJsb2d8ZW58MHx8MHx8fDA%3Ds'],
	  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
