import { defineField, defineType } from "sanity";

export default defineType({
    title: "Faq",
    type: "document",
    name: "faq",
    fields: [
        defineField({
            name: "index",
            type: "number",
          }),
        defineField({
            title: "Title",
            type: "string",
            name: "title"
        }),
        defineField({
            title: "Content", 
            type: "string", 
            name: "content"
            }),
    ]
})
