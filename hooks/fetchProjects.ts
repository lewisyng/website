import { sanityClient } from '../sanity';

export default async function fetchProjects() {
  const query = `
    *[_type == "project"]{
        _id,
        title,
        description,
        description_en,
        links,
        image,
        work,
        position,
        content,
        content_en,
    }
  `;

  const projects = await sanityClient.fetch(query);

  return projects;
}
