import Head from 'next/head';
import Landing from '../components/Landing/Landing';
import Projects from '../components/Projects/Projects';
import TechStack from '../components/TechStack/TechStack';
import fetchProjects from '../hooks/fetchProjects';

export default function Home({ projects }: { projects: any }) {
  return (
    <>
      <Head>
        <title>Lewis Young - Webdevelopment Portfolio</title>
        <meta name="description" content="Webdevelopment Portfolio" />
      </Head>

      <Landing />

      <Projects projects={projects} />

      <TechStack />
    </>
  );
}

export const getServerSideProps = async () => {
  const projects = await fetchProjects();

  return {
    props: {
      projects: projects,
    },
  };
};
