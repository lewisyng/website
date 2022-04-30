import Landing from '../components/Landing/Landing'
import Projects from '../components/Projects/Projects'
import fetchProjects from '../hooks/fetchProjects'

export default function Home({ projects }: { projects: any }) {
  console.log('projects', projects)
  return (
    <>
      <Landing />
      <Projects projects={projects} />
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
