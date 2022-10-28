import PageLayout from '../components/PageLayout'
import Avatar from '../components/Avatar'
import Services from '../components/Services';
import { useTranslation } from './../utils/locales';

export default function Home() {
  const { hero, services } = useTranslation();
  return (
    <PageLayout>
      <Avatar locales={hero}/>
      <Services locales={services}/>
    </PageLayout>
  )
}
