import { defineField, defineType } from "sanity";

export default defineType({
    title: "Cosmetology",
    type: "document",
    name: "cosmetology",
    fields: [
        defineField({
            name: "index",
            type: "number",
          }),
        defineField({
            title: "CosmetologyImage",
            type: "image",
            name: "cosmetologyImage",
        }),
        defineField({
             type: "string", 
             name: "description"
             }),
        defineField({
             type: "string", 
             name: "title" 
            }),
    ]
})