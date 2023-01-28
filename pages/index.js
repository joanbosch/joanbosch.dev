import PageLayout from '../components/PageLayout'
import Avatar from '../components/Avatar'
import Services from '../components/Services';
import Stack from '../components/Stack';
import Posts from '../components/Posts';
import { useTranslation } from './../utils/locales';
import Projects from '../components/Projects';



export default function Home({ posts }) {
  const { hero, services, stack, blog, projects } = useTranslation();
  return (
    <PageLayout>
      <Avatar locales={hero}/>
      <Services locales={services}/>
      <Projects locales={projects}/>
      <Stack locales={stack}/>
    </PageLayout>
  )
}

export const getStaticProps = async ({ locale }) => {
  // const files = fs.readdirSync(path.join('content', locale));

  // const posts = files.map(filename => {
  //   const markdownWithMeta = fs.readFileSync(
  //     path.join('content', locale, filename),
  //     'utf-8'
  //   );
  //   const { data: frontMatter } = matter(markdownWithMeta);

  //   return {
  //     frontMatter,
  //     slug: filename.split('.')[0]
  //   };
  // });

  // posts.sort((a, b) =>
  //   new Date(a.frontMatter.date) < new Date(b.frontMatter.date) ? 1 : -1
  // );

  // generateRSS(posts);

  // return {
  //   props: {
  //     posts
  //   }
  // };
  return { 
    props: {
      posts: []
    }
  }
};