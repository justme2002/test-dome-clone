import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar>
          <Main />
          <NextScript />
        </Navbar>
      </body>
      <Footer />
    </Html>
  )
}
