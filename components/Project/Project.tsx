import Image from 'next/image'
import Card from '../UI/Card/Card'
import CardContent from '../UI/Card/CardContent'
import Heading from '../UI/Heading/Heading'
import CustomLink from '../UI/Link/Link'

export const Project = ({ project }: { project: any }) => {
  console.log('project', project)
  return (
    <div className="border-[8px] border-black p-4 hover:shadow-[10px_10px_0_0_rgb(255,0,255)]">
      <Card backgroundImage={project.backgroundImg} className="flex">
        <div className="relative mr-4 h-[200px] flex-[0_0_150px]">
          <Image src={project.backgroundImg} layout="fill" objectFit="cover" />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <Heading variant="h3">{project.name}</Heading>
            <CardContent>{project.description}</CardContent>
          </div>

          <div className={'flex gap-4'}>
            <CustomLink as="a" target="_blank" href={project.pageLink} type="primary">Ausprobieren</CustomLink>
            <CustomLink as="a" target="_blank" href={project.githubLink} type="text">Github</CustomLink>
          </div>
        </div>

        {/* TODO Actions */}
      </Card>
    </div>
  )
}

export default Project
