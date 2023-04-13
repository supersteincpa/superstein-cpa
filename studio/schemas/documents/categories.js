export default {
  title: 'Blog Categories',
  name: 'blogCategory',
  type: 'document',
  fields: [
    {
      title: 'Category',
      name: 'category',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'category',
    },
  },
}
