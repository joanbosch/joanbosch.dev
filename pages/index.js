import PageLayout from '../components/PageLayout'
import Avatar from '../components/Avatar'
import { useTranslation } from './../utils/locales';

export default function Home() {
  const { hero } = useTranslation();
  return (
    <PageLayout>
      <Avatar locales={hero}/>
    </PageLayout>
  )
}
