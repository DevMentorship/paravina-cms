import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
    title: "Team",
    type: "document",
    name: "team",
    fields: [
        defineField({
            title: "TeamImages",
            type: "array",
            name: "teamImages",
            of: [
                defineArrayMember({
                    type: "image",
                    name: "teamImages",
                    fields: [
                        defineField({ type: "string", name: "name" }),
                        defineField({ type: "string", name: "role" }),
                    ],
                }),
            ],

        })
    ]
})