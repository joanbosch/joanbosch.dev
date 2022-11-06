import { NextSeo } from 'next-seo';
import Form from '../components/Form';
import PageLayout from '../components/PageLayout';
import { useTranslation } from '../utils/locales';

const Contact = () => {
  const { contact } = useTranslation();
  return (
    <>
    <PageLayout>
      <NextSeo title={`${contact.title} | Joan Bosch `} />
      <Form locales={contact} />
    </PageLayout>
    </>
  );
};

export default Contact;