import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'index',
      type: 'number',
    }),

    defineField({
      type: 'string',
      name: 'role',
      title: 'Role',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'role',
        maxLength: 96,
      },
    }),

    defineField({
      type: 'array',
      name: 'services',
      title: 'Services',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'service',
          fields: [
            defineField({
              type: 'string',
              name: 'service_title',
              title: 'Service_title',
            }),

            defineField({
              type: 'text',
              name: 'description',
              title: 'Description',
            }),
          ],
        }),
      ],
    }),

    defineField({
      type: 'array',
      name: 'doctors',
      title: 'Doctors',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'doctor',
          fields: [
            defineField({
              type: 'string',
              name: 'name',
              title: 'Name',
            }),

            defineField({
              type: 'image',
              name: 'photo',
              title: 'Photo',
            }),
          ],
        }),
      ],
    }),
  ],
})
