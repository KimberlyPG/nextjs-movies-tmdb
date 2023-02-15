import type { AppProps } from 'next/app';

import Layout from '../components/Layout';

import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps} }: AppProps) {
  return(
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp