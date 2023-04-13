export default {
  title: 'Reviews',
  name: 'reviews',
  type: 'document',
  fields: [
    {
      title: 'About Person',
      name: 'aboutPerson',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Sub Heading',
      name: 'subHeading',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },

    {
      title: 'Testimonial',
      name: 'text',
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
      title: 'logo',
      name: 'logo',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'aboutPerson',
      media: 'image',
    },
    prepare({title = 'No title', media}) {
      return {
        title,
        media,
      }
    },
  },
}
