export default {
  title: 'Services Section',
  name: 'servicesSection',
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
      title: 'Text',
      name: 'Text',
      type: 'bodyPortableText',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Is Background Color',
      name: 'isBackgroundColor',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Is Filter Bar',
      name: 'isFilterBar',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'identifier',
    },
  },
}
