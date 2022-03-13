import Landing from '../components/Landing/Landing'
import Projects from '../components/Projects/Projects'
import useFetchProjects from '../hooks/useFetchProjects'

export default function Home({ projects }) {
  console.log('projects', projects)
  return (
    <>
      <Landing />
      <Projects projects={projects} />
    </>
  )
}

export const getServerSideProps = async () => {
  const projects = await useFetchProjects()

  return {
    props: {
      projects: projects,
    },
  }
}
