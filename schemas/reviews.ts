import { defineField, defineType } from "sanity";

export default defineType({
    title: "Review",
    type: "document",
    name: "review",
    fields: [
        defineField({
            name: "index",
            type: "number",
          }),
        defineField({
            type: "image",
            name: "reviewImage",
            title: "ReviewImage",
        }),
    ]
})
