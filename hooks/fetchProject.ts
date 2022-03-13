import { sanityClient } from '../sanity'

export default async function fetchProject(id: string) {
  const query = `
    *[_id == "${id}"]{
        _id,
        title,
        description,
        content,
        image
    }
    `

  const project = await sanityClient.fetch(query)

  return project
}
