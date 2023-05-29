import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
    title: "Review",
    type: "document",
    name: "review",
    fields: [
        defineField({
            title: "Reviews",
            type: "array",
            name: "reviews",
            of: [
                defineArrayMember({
                    type: "image",
                    name: "reviewImage",
                }),
            ],

        })
    ]
})