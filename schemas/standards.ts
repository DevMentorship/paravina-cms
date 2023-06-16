import { defineField, defineType } from "sanity";

export default defineType({
    title: "Standards",
    type: "document",
    name: "standards",
    fields: [
        defineField({
            name: "index",
            type: "number",
          }),
        defineField({
            title: "StandardImage",
            type: "image",
            name: "standardImage",
        }),
        defineField({ 
            type: "string", 
            name: "text"
         }),
        defineField({ 
            type: "string",
            name: "title" 
        }),
    ]
})