import { sanityClient } from '../sanity'

export default async function fetchProjects() {
  const query = `
    *[_type == "project"]{
        _id,
        title,
        description,
        links,
        image,
        work,
        position,
        content
    }
  `

  const projects = await sanityClient.fetch(query)

  return projects
}
