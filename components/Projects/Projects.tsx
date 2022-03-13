import Project from '../Project/Project'
import Heading from '../UI/Heading/Heading'

export const Projects = ({ projects }: {
  projects: any
}) => {
  return (
    <div className="mb-20">
      <div className="prose max-w-full border-[8px] border-[#0c0c0c] bg-[#0c0c0c] p-4 text-center">
        <Heading className="text-white" variant="h2">
          Meine aktuellen Projekte
        </Heading>
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
