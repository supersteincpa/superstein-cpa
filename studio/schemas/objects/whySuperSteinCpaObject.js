export default {
  title: 'Why Super Stein Cpa Object',
  name: 'whySuperSteinCpaObject',
  type: 'object',
  fields: [
    {
      title: 'Select Icon',
      name: 'icon',
      type: 'string',
      options: {
        list: [
          'chat-circle',
          'statistic-icon',
          'star-icon',
          'model-game',
          'law-icon',
          'laptop-setting',
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Sub Text',
      name: 'subText',
      type: 'bodyPortableText',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title = 'No title'}) {
      return {
        title,
      }
    },
  },
}
