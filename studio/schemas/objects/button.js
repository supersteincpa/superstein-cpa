export default {
  title: 'Button',
  name: 'button',
  type: 'object',
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string',
    },
    {
      title: 'Variant',
      name: 'variant',
      type: 'string',

      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
          {title: 'Text-Link-Dark', value: 'text-link-dark'},
         {title: 'Text-Link-Light', value: 'text-link-light'},
        ],
      },
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'boolean',
      initialValue: false,
      // validation: (Rule) => Rule.required().custom((_, { parent }) => parent.action === "link" && false),
      hidden: ({parent}) =>
        !parent?.variant ||
        parent?.variant === 'primary' ||
        parent?.variant === 'secondary' ||
        parent?.variant === 'white' ||
        parent?.variant === 'ghost' ||
        parent?.variant === 'over-photo',
    },

    {
      title: 'Action',
      name: 'action',
      type: 'string',

      options: {
        list: ['link', 'form'],
      },
    },
    {
      title: 'Link',
      name: 'slug',
      type: 'slug',
      options: {
        isUnique: () => true,
      },
      validation: (Rule) =>
        Rule.custom((slug, {parent}) => {
          if (!slug && parent.action === 'link') {
            return 'slug is required'
          }
          return true
        }),
      // validation: (Rule) => Rule.required().custom((_, { parent }) => parent.action === "link" && false),
      hidden: ({parent}) => !parent?.action || parent?.action === 'form',
    },
    {
      title: 'Form',
      name: 'form',
      type: 'string',
      options: {
        list: ['Contact Us'],
      },
      validation: (Rule) =>
        Rule.custom((form, {parent}) => {
          if (!form && parent.action === 'form') {
            return 'slug type is required'
          }
          return true
        }),
      hidden: ({parent}) => !parent?.action || parent?.action === 'link',
    },
  ],
  preview: {
    select: {
      label: 'label',
      slug: 'slug',
    },
    prepare({label = 'No Label', slug = {}}) {
      return {
        title: label,
        slug: `/${slug.current}/`,
      }
    },
  },
}
