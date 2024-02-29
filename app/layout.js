import { Inter } from 'next/font/google'
import './globals.css'
<<<<<<< HEAD
import Head from 'next/head'
import { Footer, HomeHeader } from '@/components'
=======
import { Header, Footer, HomeHeader } from '@/components'
>>>>>>> parent of e89b019 (adding more SEO support for each page and dynamically created meta data. Also added a sitemap.xml to the root directory.)
import { AuthContextProvider } from '@/src/context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Intern Insights',
  description: 'Welcome to InternInsights, a dynamic blog platform where our interns share their triumphs, tribulations, and transformative experiences on the road to becoming exceptional software engineers. 🚀✨',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <Head>
			<script async src="https://www.googletagmanager.com/gtag/js?id=G-TH5B5N1LHB"></script>
			<script>
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments)}
				gtag('js', new Date());

				gtag('config', 'G-TH5B5N1LHB');
          	</script>
      </Head>
=======
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3698348816476734"
        crossorigin="anonymous"></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1772058783125351"
        crossorigin="anonymous"></script> 
        <meta name="google-site-verification" content="Xx0sK_bfwUN70ShmeoG7Mh8iX-bMreD1-6fu5gcDVpc" />     
     </head>
>>>>>>> parent of e89b019 (adding more SEO support for each page and dynamically created meta data. Also added a sitemap.xml to the root directory.)
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
