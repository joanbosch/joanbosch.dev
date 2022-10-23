import { useRouter } from 'next/router';
import es from './../locales/es';
import en from './../locales/en';
import ca from './../locales/ca';

export const useTranslation = () => {
  const router = useRouter();
  const locale = router.locale === undefined ? 'en' : 'es';

  const locales = {
    es,
    en,
    ca
  };

  return locales[locale];
};