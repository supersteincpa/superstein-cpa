export default {
  title: 'Blog Posts',
  name: 'blogs',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
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
      title: 'Published at',
      name: 'publishedAt',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Make this post featured',
      name: 'featured',
      type: 'boolean',
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
      title: 'Author',
      name: 'authors',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      options: {
        disableNew: true,
      },
      to: [{type: 'authors'}],
    },
    {
      title: 'Blog Category',
      name: 'blogCategory',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      options: {
        disableNew: true,
      },
      to: [{type: 'blogCategory'}],
    },
    {
      title: 'Body',
      name: 'body',
      type: 'bodyPortableText',
    },
  ],
  orderings: [
    {
      title: 'Publishing date new–>old',
      name: 'publishingDateDesc',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc',
        },
        {
          field: 'title',
          direction: 'desc',
        },
      ],
    },
    {
      title: 'Publishing date old->new',
      name: 'publishingDateAsc',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mobileImage',
    },
    prepare({title = 'No title', slug = {}, media}) {
      return {
        title,
        subtitle: `/${slug.current}/`,
        media,
      }
    },
  },
}
