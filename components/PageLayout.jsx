import L from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Header from './Header';

export default function PageLayout({ children, title = 'Joan Bosch - Home'}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Joan Bosch Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main>
        {children}
      </main>
    </>
  )
}