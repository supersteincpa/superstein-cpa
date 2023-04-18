export default {
  title: 'Profile Section',
  name: 'profileSection',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Info Text',
      name: 'infoText',
      type: 'bodyPortableText',
    },
    {
      title: 'Phone',
      name: 'phone',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'LinkedIn',
      name: 'linkedIn',
      type: 'url',
    },
    {
      title: 'Biography Text',
      name: 'biographyText',
      type: 'bodyPortableText',
    },
    {
      title: 'Affiliation Text',
      name: 'affiliationText',
      type: 'bodyPortableText',
    },
    {
      title: 'Expertise Text',
      name: 'expertiseText',
      type: 'bodyPortableText',
    },
    {
      title: 'Review Cards',
      name: 'reviewCards',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'reviews'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'identifier',
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
