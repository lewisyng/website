import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '../../sanity'
import Card from '../UI/Card/Card'
import Heading from '../UI/Heading/Heading'
import CustomLink from '../UI/Link/Link'
import Text from '../UI/Text/Text'

export const Project = ({ project }: { project: any }) => {
  const {
    _id,
    title,
    description,
    content,
    image,
    links: { github: githubUrl, testing: testingUrl },
  } = project

  return (
    <div className="border-[8px] border-black px-4 pb-4 hover:shadow-[10px_10px_0_0_rgb(255,0,255)] sm:p-4">
      <Card className="flex h-full">
        {/* IMAGE */}
        {image && (
          <div className="relative mr-4 hidden h-[150px] flex-[0_0_150px] sm:block">
            <Image
              src={urlFor(image.asset._ref).url()}
              layout="fill"
              objectFit="cover"
              alt=""
              className="!h-auto !min-h-0"
            />
          </div>
        )}

        {/* TITLE & DESCRIPTION */}
        <div className="prose flex grow flex-col">
          <div className="grow">
            {title && (
              <Heading variant="h3" className="text-2xl">
                {title}
              </Heading>
            )}

            {description && <Text className="text-sm">{description}</Text>}

            {content && <PortableText value={content} />}
          </div>

          {/* LINKS */}
          <div>
            <div className={'flex gap-4'}>
              {testingUrl && (
                <CustomLink
                  as="a"
                  target="_blank"
                  href={testingUrl}
                  type="primary"
                >
                  Anschauen
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
        </div>
      </Card>
    </div>
  )
}

export default Project
