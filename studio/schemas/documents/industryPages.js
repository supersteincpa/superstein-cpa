export default {
  title: 'Industry Pages',
  name: 'industryPages',
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
      title: 'Industry Services Card',
      name: 'industryCard',
      type: 'industryServicesCardObject',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page Builder',
      of: [
        {
          title: 'Two Column Heroes',
          name: 'twoColumnHeroes',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'twoColumnHeroes'}],
        },
        {
          title: 'Challenges Section',
          name: 'challengesSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'challengesSection'}],
        },
        {
          title: 'Industry Two Column Section',
          name: 'industryTwoColumnSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'industryTwoColumnSection'}],
        },
        {
          title: 'Services Section',
          name: 'servicesSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'servicesSection'}],
        },
        {
          title: 'Testimonials',
          name: 'testimonials',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'testimonials'}],
        },
        {
          title: 'Location Section',
          name: 'locationSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'locationSection'}],
        },
        {
          title: 'CTA',
          name: 'cta',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'cta'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title = 'No title'}) {
      return {
        title,
      }
    },
  },
}
