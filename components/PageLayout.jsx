import L from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Header from './Header';
import { useTranslation } from './../utils/locales';

export default function PageLayout({ children, title = 'Joan Bosch - Home'}) {
  const { header } = useTranslation();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Joan Bosch Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header locales={header}></Header>
      <main>
        {children}
      </main>
    </>
  )
}