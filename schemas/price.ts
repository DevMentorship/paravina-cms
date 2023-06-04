import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
    title: "Price",
    type: "document",
    name: "price",
    fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
            title: "Price Items",
            type: "array",
            name: "items",
            of: [
                defineArrayMember({
                    type: "object",
                    name: "inline",
                    fields: [
                        defineField({ type: "string", name: "title" }),
                        defineField({
                          title: "Price Sub Items",
                          type: "array",
                          name: "subItems",
                          of: [
                              defineArrayMember({
                                  type: "object",
                                  name: "inline",
                                  fields: [
                                      defineField({ type: "string", name: "code" }),
                                      defineField({ type: "string", name: "description" }),
                                      defineField({ type: "string", name: "price" }),
                                  ],
                              }),
                          ],
                      })
                    ],
                }),
            ],
        })
    ]
})
