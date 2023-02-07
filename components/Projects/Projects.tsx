import Project from '../Project/Project'
import Heading from '../UI/Heading/Heading'

export const Projects = ({ projects }: { projects: any }) => {
  const workProjects = projects
    .filter((project: any) => project.work)
    .sort((a: any, b: any) => a.position - b.position)
  const privateProjects = projects.filter((project: any) => !project.work)

  return (
    <div className="py-4">
      <div className="prose max-w-full border-[8px] border-[#0c0c0c] bg-[#0c0c0c] p-4 text-center">
        <Heading className="text-white" variant="h2">
          Meine aktuellen Projekte
        </Heading>
      </div>

      {/* <Heading variant="h3" className="py-8 text-center text-2xl">
        Arbeit
      </Heading> */}

      <div className="grid gap-4 pt-8 pb-4 lg:grid-cols-2">
        {workProjects.map((project: any, idx: number) => (
          <Project project={project} key={idx} />
        ))}
      </div>

      {/* <Heading variant="h3" className="py-8 text-center text-2xl">
        Privat
      </Heading>

      <div className="grid gap-4 lg:grid-cols-2">
        {privateProjects.map((project: any, idx: number) => (
          <Project project={project} key={idx} />
        ))}
      </div> */}
    </div>
  )
}

export default Projects
