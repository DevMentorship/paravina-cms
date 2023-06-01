import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
    title: "Cosmetology",
    type: "document",
    name: "cosmetology",
    fields: [
        defineField({
            title: "CosmetologyImages",
            type: "array",
            name: "cosmetologyImages",
            of: [
                defineArrayMember({
                    type: "image",
                    name: "cosmetologyImages",
                    fields: [
                        defineField({ type: "string", name: "description" }),
                        defineField({ type: "string", name: "title" }),
                    ],
                }),
            ],

        })
    ]
})