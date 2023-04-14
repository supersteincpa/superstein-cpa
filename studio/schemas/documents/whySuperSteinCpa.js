export default {
  title: 'Why Super Stein Cpa',
  name: 'whySuperSteinCpa',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Main Heading',
      name: 'mainHeading',
      type: 'string',
    },
    {
      title: 'Cards',
      name: 'cards',
      type: 'array',
      of: [
        {
          type: 'whySuperSteinCpaObject',
        },
      ],
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
