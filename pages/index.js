import PageLayout from '../components/PageLayout'
import Avatar from '../components/Avatar'
import Services from '../components/Services';
import Stack from '../components/Stack';
import { useTranslation } from './../utils/locales';

export default function Home() {
  const { hero, services, stack } = useTranslation();
  return (
    <PageLayout>
      <Avatar locales={hero}/>
      <Services locales={services}/>
      <Stack locales={stack}/>
    </PageLayout>
  )
}
