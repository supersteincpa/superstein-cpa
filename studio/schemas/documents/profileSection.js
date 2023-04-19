export default {
  title: 'Profile Section',
  name: 'profileSection',
  type: 'document',
  fields: [
    {
      title: 'SEO Title',
      name: 'seoTitle',
      type: 'string',
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
    },
    {
      title: 'Slug',
      description: 'Exclude leading and trailing backslashes',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    },
    {
      title: 'Indexed',
      name: 'isIndexed',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      title: 'About',
      name: 'about',
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
      title: 'name',
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
