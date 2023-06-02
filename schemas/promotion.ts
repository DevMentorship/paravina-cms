import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'promotion',
  title: 'Promotion',
  type: 'document',
  fields: [
    defineField({
      name: "index",
      type: "number",
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'blockContent',
    }),
    defineField({
      name: 'dateImage',
      title: 'Date on Image',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icon image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'alt',
      title: 'Alt',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'string',
    }),
  ],
})
