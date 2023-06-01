import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
    title: "Stomatology",
    type: "document",
    name: "stomatology",
    fields: [
        defineField({
            title: "StomatologyImages",
            type: "array",
            name: "stomatologyImages",
            of: [
                defineArrayMember({
                    type: "image",
                    name: "stomatologyImages",
                    fields: [
                        defineField({ type: "string", name: "description" }),
                        defineField({ type: "string", name: "title" }),
                    ],
                }),
            ],

        })
    ]
})