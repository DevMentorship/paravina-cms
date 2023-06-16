import { defineField, defineType } from "sanity";

export default defineType({
    title: "Gallery",
    type: "document",
    name: "gallery",
    fields: [
        defineField({ 
            type: "string", 
            name: "alt" 
        }),
        defineField({
            name: "index",
            type: "number",
          }),
        defineField({
            title: "GalleryImage",
            type: "image",
            name: "galleryImage",
        })
    ]
})