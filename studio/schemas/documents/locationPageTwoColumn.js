export default {
  title: 'location Page Two Column Section',
  name: 'locationPageTwoColumnSection',
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
