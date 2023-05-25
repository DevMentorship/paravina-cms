import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'promotions',
  title: 'Promotions',
  type: 'document',
  fields: [
    defineField({
      title: 'Promotion up to',
      name: 'Promotion',
      type: 'date',
      options: {
        dateFormat: 'DD-MM',
      },
    }),
    defineField({
      title: 'Image Card',
      name: 'imageCard',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required().min(5),
    }),
  ],
})
