import '../styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';
import Openingstijden from '../components/openingstijden';

export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <meta property="og:image" content="/logo.png" />
        
        <link href="/favico.svg" rel="icon" type="image/svg"/>
        <link href="/favico-32.png" rel="icon" sizes="32x32" type="image/png"/>
        <link href="/favico-16.png" rel="icon" sizes="16x16" type="image/png"/>

        <script src="https://static.elfsight.com/platform/platform.js" async></script>
      </Head>
      <Header/>
      <main>
        <Component {...pageProps} />
        <Openingstijden/>
      </main>
      <Footer/>
    </>
  ) 
}
