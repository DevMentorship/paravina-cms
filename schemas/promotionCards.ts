import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
    title: "PromotionCard",
    type: "document",
    name: "promotionCard",
    fields: [
        defineField({
            title: "PromotionCards",
            type: "array",
            name: "promotionCards",
            of: [
                defineArrayMember({
                    type: "image",
                    name: "promotionCardImage",
                }),
            ],

        })
    ]
})