import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
    title: "PromotionCard",
    type: "document",
    name: "PromotionCard",
    fields: [
        defineField({
            title: "PromotionCard",
            type: "array",
            name: "PromotionCard",
            of: [
                defineArrayMember({
                    type: "image",
                    name: "PromotionCardImage",
                    fields: [
                        defineField({ type: "string", name: "description" }),
                        defineField({ type: "string", name: "firstWords" }),
                        defineField({ type: "string", name: "header" }),
                        defineField({ type: "string", name: "text" }),
                        defineField({ type: "string", name: "footer" }),
                        defineField({ type: "string", name: "alt" }),
                        defineField({ type: "number", name: "index" }),
                    ],
                }),
            ],

        })
    ]
})
