export default {
  title: 'Blogs Reference',
  name: 'blogsReference',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
    },
    
  ],
  preview: {
    select: {
      title: 'identifier',
    },
    prepare({title = 'No title'}) {
      return {
        title,
      }
    },
  },
}
