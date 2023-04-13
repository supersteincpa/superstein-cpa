export default {
  title: 'Blog Authors',
  name: 'authors',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'customImage',
    },
  },
}
