export default {
  title: 'Meet The Team Pages',
  name: 'meetTheTeam',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
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
      title: 'Is Nav White',
      name: 'isNavWhite',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'positions Title',
      name: 'positionsTitle',
      type: 'reference',
      options: {
        disableNew: true,
      },
      to: [{type: 'positions'}],
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Phone Number',
      name: 'phoneNumber',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Fax Number',
      name: 'faxNumber',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'LinkedIn Url',
      name: 'linkedinUrl',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/http(s)?:\/\/([\w]+\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?/, {
          name: 'linkedinUrl',
          invert: false,
        }),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'bodyPortableText',
    },
    {
      title: 'Profile Image',
      name: 'profileImage',
      type: 'customImage',
    },
    {
      title: 'Preview Image',
      name: 'previewImage',
      type: 'customImage',
    },
    {
      title: 'Button',
      name: 'button',
      type: 'button',
      of: [
        {
          type: 'button',
        },
      ],
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
    },
    prepare({title = 'No title'}) {
      return {
        title,
      }
    },
  },
}
