import Image from 'next/image'
import { urlFor } from '../../sanity'
import Card from '../UI/Card/Card'
import CardContent from '../UI/Card/CardContent'
import Heading from '../UI/Heading/Heading'
import CustomLink from '../UI/Link/Link'

export const Project = ({ project }: { project: any }) => {
  console.log('project', project)

  const {
    _id,
    title,
    description,
    image,
    links: { github: githubUrl, testing: testingUrl },
  } = project

  return (
    <div className="border-[8px] border-black px-4 pb-4 hover:shadow-[10px_10px_0_0_rgb(255,0,255)] sm:p-4">
      <Card className="flex">
        {/* IMAGE */}
        {image && (
          <div className="relative mr-4 hidden h-[200px] flex-[0_0_150px] sm:block">
            <Image src={urlFor(image.asset._ref).url()} layout="fill" objectFit="cover" />
          </div>
        )}

        {/* TITLE & DESCRIPTION */}
        <div className="prose flex flex-col justify-between">
          <div>
            {title && <Heading variant="h3">{title}</Heading>}

            {description && <CardContent>{description}</CardContent>}
          </div>

          {/* LINKS */}
          <div className={'flex gap-4'}>
            {testingUrl && (
              <CustomLink
                as="a"
                target="_blank"
                href={testingUrl}
                type="primary"
              >
                Ausprobieren
              </CustomLink>
            )}

            {githubUrl && (
              <CustomLink as="a" target="_blank" href={githubUrl} type="text">
                Github
              </CustomLink>
            )}

            {githubUrl && (
              <CustomLink
                className="ml-auto"
                as="Link"
                target="_self"
                href={{
                  pathname: '/project/[id]',
                  query: { id: _id },
                }}
                type="text"
              >
                Details
              </CustomLink>
            )}
          </div>
        </div>

        {/* TODO Actions */}
      </Card>
    </div>
  )
}

export default Project
