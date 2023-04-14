export default {
  title: 'Testimonials',
  name: 'testimonials',
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
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Desktop Background Image',
      name: 'desktopBackgroundImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Mobile Background Image',
      name: 'mobileBackgroundImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'identifier',
      media: 'mobileBackgroundImage',
    },
    prepare({title = 'No title', media}) {
      return {
        title,
        media,
      }
    },
  },
}
