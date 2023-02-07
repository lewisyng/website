import Landing from '../components/Landing/Landing'
import Projects from '../components/Projects/Projects'
import TechStack from '../components/TechStack/TechStack'
import fetchProjects from '../hooks/fetchProjects'

export default function Home({ projects }: { projects: any }) {
  return (
    <>
      <Landing />

      <Projects projects={projects} />

      <TechStack />
    </>
  )
}

export const getServerSideProps = async () => {
  const projects = await fetchProjects()

  return {
    props: {
      projects: projects,
    },
  }
}
