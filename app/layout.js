import { Inter } from 'next/font/google'
import './globals.css'
import { Header, Footer, HomeHeader } from '@/components'
import Head from 'next/head'

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
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3698348816476734"
        crossorigin="anonymous"></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1772058783125351"
        crossorigin="anonymous"></script> 
        <meta name="google-site-verification" content="Xx0sK_bfwUN70ShmeoG7Mh8iX-bMreD1-6fu5gcDVpc" />     
        <meta name="robots" content="index,follow"></meta>
        <meta name="googlebot" content="index,follow"></meta>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="Intern Insights" />
     </Head>
      <body className={inter.className}>
          <HomeHeader />
          {children}
          <Footer />
      </body>
    </html>
  )
}
