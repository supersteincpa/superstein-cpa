export default {
  title: 'Industry Two Column Section',
  name: 'industryTwoColumnSection',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
    },
    {
      title: 'Generic Sections',
      name: 'genericSections',
      type: 'genericSectionFields',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'identifier',
      media: 'genericSections.mobileImage',
    },
  },
}
