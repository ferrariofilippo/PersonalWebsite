import '@/styles/globals.css';

import Layout from '@/components/layout'
import { Orbitron } from 'next/font/google' 

const orbitron = Orbitron({
  weight: ['400', '600', '900'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <>
     <style jsx global>{`
        html {
          font-family: ${orbitron.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
