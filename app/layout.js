import AppHeader from '@/components/AppHeader'
import './globals.css'
import { Inter } from 'next/font/google'
import AppFooter from '@/components/AppFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Souhail | Home',
  description: "souhail's portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} grid grid grid-rows-[auto_1fr] max-w-screen-2xl mx-auto bg-[#F8F7F2] px-4 md:px-20 min-h-screen`}>
        <AppHeader />
        <main className='flex flex-col w-full sm:px-6 gap-6 pt-12 pb-20 xl:py-20'>
          {children}
        </main>
      </body>
    </html>
  )
}
