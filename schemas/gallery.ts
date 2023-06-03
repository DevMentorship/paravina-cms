import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
    title: "Gallery",
    type: "document",
    name: "gallery",
    fields: [
        defineField({
            title: "GalleryImages",
            type: "array",
            name: "galleryImages",
            of: [
                defineArrayMember({
                    type: "image",
                    name: "galleryImage",
                    fields: [
                        defineField({ type: "string", name: "alt" }),
                    ],
                }),
            ],

        })
    ]
})