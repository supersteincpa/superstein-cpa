export default {
  title: 'Mini Hero Section',
  name: 'miniHeroSection',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
        ],
      },
    },
    {
      title: 'Section Title',
      name: 'sectionTitle',
      type: 'string',
      hidden: ({parent}) => !parent?.type || parent?.type === 'secondary',
    },

    {
      title: 'Background Desktop Image',
      name: 'backgroundDesktopImage',
      type: 'customImage',
      hidden: ({parent}) => !parent?.type || parent?.type === 'primary',
    },
    {
      title: 'Background Mobile Image',
      name: 'backgroundMobileImage',
      type: 'customImage',
      hidden: ({parent}) => !parent?.type || parent?.type === 'primary',
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
