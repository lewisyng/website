import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/shared/Footer/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-[100vw] relative overflow-hidden"> 
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
