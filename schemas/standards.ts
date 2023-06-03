import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
    title: "Standards",
    type: "document",
    name: "standards",
    fields: [
        defineField({
            title: "StandardImages",
            type: "array",
            name: "standardImages",
            of: [
                defineArrayMember({
                    type: "image",
                    name: "standardImage",
                    fields: [
                        defineField({ type: "string", name: "text" }),
                        defineField({ type: "string", name: "title" }),
                    ],
                }),
                
            ],

        })
    ]
})