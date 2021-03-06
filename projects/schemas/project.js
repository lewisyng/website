export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'object',
      fields: [
        { name: 'github', title: 'Github', type: 'url' },
        { name: 'testing', title: 'Testing', type: 'url' },
      ],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
  ],
}
