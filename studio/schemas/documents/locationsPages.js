export default {
  title: 'Locations Pages',
  name: 'locationsPages',
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
      title: 'Desktop Image',
      name: 'desktopImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Mobile Image',
      name: 'mobileImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'City',
      name: 'city',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Street Text',
      name: 'streetText',
      type: 'bodyPortableText',
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page Builder',
      of: [
        {
          title: 'Hero Section',
          name: 'heroSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'heroSection'}],
        },
        {
          title: 'Two Column Generic Sections',
          name: 'twoColumnGenericSections',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'twoColumnGenericSections'}],
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
          title: 'Industries Section',
          name: 'industriesSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'industriesSection'}],
        },
        {
          title: 'Why Super Stein Cpa',
          name: 'whySuperSteinCpa',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'whySuperSteinCpa'}],
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
          title: 'Featured Blogs Section',
          name: 'featuredBlogsSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'featuredBlogsSection'}],
        },
        {
          title: 'location Page Two Column Section',
          name: 'locationPageTwoColumnSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'locationPageTwoColumnSection'}],
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
