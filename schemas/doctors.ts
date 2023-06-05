import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'doctor',
  title: 'Doctor',
  type: 'document',
  fields: [
    defineField({
      name: "index",
      type: "number",
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
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
      type: "string",
      name: "name",
      title: "Name"
    }),
    defineField({
      type: "string",
      name: "role",
      title: "Role"
    }),
    defineField({
      type: "image",
      name: "doctorImage",
      title: "DoctorImage"
    }),
  ],
})