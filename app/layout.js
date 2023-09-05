import AppHeader from '@/components/AppHeader'
import Providers from './providers'
import './globals.css'

export const metadata = {
  title: 'Souhail | Home',
  description: "souhail's portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
          <Providers>
            <AppHeader />
            <main className='flex flex-col w-full sm:px-6 md:px-12 gap-6 pt-[8vh] pb-20 xl:py-20'>
              {children}
            </main>
          </Providers>
        </body>
    </html>
  )
}
