import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'price',
  title: 'Price',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'service',
      title: 'Service',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'text',
    })
  ],
})
