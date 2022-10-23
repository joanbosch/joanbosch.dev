
import { useRouter } from 'next/router';

import L from 'next/link'
import Image from 'next/image'
import { useTranslation } from './../utils/locales';

export default function Header({ locales }) {

  const Link = props => <L {...props}>{props.children}</L>;

  const { locale } = useTranslation();

  const router = useRouter();

  const handleLocale = locale => {
    router.push(router.asPath, router.asPath, { locale: locale });
  };

  return (
    <div className='sticky top-0 bg-white border-b border-gray-200 z-10'>
      <header className='flex flex-wrap items-center justify-around p-4'>
        <Link href='/'>
          <a className='text-3xl font-bold text-center'>
            Joan Bosch<span className='text-red-400'>.</span>
          </a>
        </Link>
        <section className='flex flex-wrap items-center justify-center'>
        <Link href='/contact'>
            <a
              className='text-xl font-bold'
            >
              {locales.contact}
              <Image
                priority={true}
                src='/arrow.svg'
                width='24'
                height='13'
                alt='arrow'
              />
            </a>
          </Link>
          <select
            className='border-none rounded-md font-bold pl-1 mr-2 py-1 text-left outline-none bg-white'
            name='locale'
            onChange={e => handleLocale(e.target.value)}
          >
            <option value='en' selected={locale == 'en'}>
              English
            </option>
            <option value='es' selected={locale == 'es'}>
              Español
            </option>
            <option value='ca' selected={locale == 'ca'}>
              Catalan
            </option>
          </select>
        </section>
      </header>
    </div> 
  )
}