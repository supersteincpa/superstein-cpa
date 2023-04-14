export default {
  title: 'Services Card Object',
  name: 'servicesCardObject',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Sub Text',
      name: 'subText',
      type: 'bodyPortableText',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Services Type',
      name: 'servicesType',
      type: 'string',
      options: {
        list: ['Advisory', 'Tax', 'Assurance'],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title = 'No title'}) {
      return {
        title,
      }
    },
  },
}
