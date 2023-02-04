import Footer from '@/components/footer'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main className='h-screen flex flex-col'>
          <div className='content grow'>
            {children}
          </div>
          <Footer/>
        </main>
      </body>
    </html>
  )
}
