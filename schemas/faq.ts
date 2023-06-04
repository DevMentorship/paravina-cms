import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
    title: "Faq",
    type: "document",
    name: "faq",
    fields: [
        defineField({
            title: "Faq Items",
            type: "array",
            name: "faqItems",
            of: [
                defineArrayMember({
                    type: "object",
                    name: "inline",
                    fields: [
                        defineField({ type: "string", name: "title" }),
                        defineField({ type: "string", name: "content" }),
                    ],
                }),
            ],

        })
    ]
})
