import projects from '../../content/projects'
import Project from '../Project/Project'
import Heading from '../UI/Heading/Heading'

export const Projects = () => {
  return (
    <>
      <div className="border-[8px] bg-[#0c0c0c] text-[#fce8ce] border-[#0c0c0c] p-4">
        <Heading variant="h4" className="text-[#e06d8a]">Woran ich arbeite</Heading>
        <Heading variant="h2">Meine Projekte</Heading>
      </div>
      <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2">
        {projects.map((project: any, idx: number) => (
            <Project project={project} key={idx} />
        ))}
      </div>
    </>
  )
}

export default Projects
