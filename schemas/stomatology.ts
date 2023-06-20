import { defineField, defineType } from "sanity";

export default defineType({
    title: "Stomatology",
    type: "document",
    name: "stomatology",
    fields: [
        defineField({
            name: "index",
            type: "number",
          }),
        defineField({
            title: "StomatologyImages",
            type: "image",
            name: "stomatologyImages",
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