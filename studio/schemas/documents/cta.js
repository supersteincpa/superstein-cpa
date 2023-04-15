export default {
  title: 'CTA',
  name: 'cta',
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
      title: 'Sub Text',
      name: 'subText',
      type: 'bodyPortableText',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Button',
      name: 'button',
      type: 'array',
      of: [
        {
          type: 'button',
        },
      ],
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (value.length > 2) {
            return 'Maximum of 2 buttons are allowed in this section'
          }
          return true
        }),
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
