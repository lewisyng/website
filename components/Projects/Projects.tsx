import projects from '../../content/projects'
import Project from '../Project/Project'
import Heading from '../UI/Heading/Heading'

export const Projects = () => {
  return (
    <div className="mb-20">
      <div className="border-[8px] border-[#0c0c0c] bg-[#0c0c0c] p-4 text-white">
        <Heading variant="h4">
          Woran ich arbeite
        </Heading>

        <Heading variant="h2">Meine Projekte</Heading>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project: any, idx: number) => (
          <Project project={project} key={idx} />
        ))}
      </div>
    </div>
  )
}

export default Projects
