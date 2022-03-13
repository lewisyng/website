import fetchProject from '../../hooks/fetchProject'
import { PortableText } from '@portabletext/react'

export const Project = ({ project }: {
  project: any
}) => {
  console.log('project', project)

  const { content } = project

  return (
    <div className="prose mx-auto mt-4 font-brutalReg">
      <PortableText value={content}></PortableText>
    </div>
  )
}

export default Project

export const getServerSideProps = async ({
  params,
}: {
  params: Record<string, string>
}) => {
  const { id: _id } = params

  const project = await fetchProject(_id)

  return {
    props: {
      project: project[0],
    },
  }
}
