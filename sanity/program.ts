// Sanity schema for Program content type

import { defineField, defineType } from "sanity";

export const program = defineType({
  name: "program",
  title: "Program",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "number",
      title: "Program Number",
      type: "string",
      description: 'e.g. "01", "02"',
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "text",
      rows: 2,
      description: "Short description shown in the program hero.",
    }),
    defineField({
      name: "description",
      title: "Card Description",
      type: "text",
      rows: 2,
      description: "Short description shown on the programs listing card.",
    }),
    defineField({
      name: "location",
      title: "Location / Tag",
      type: "string",
      description: 'e.g. "Tamil Nadu · Karnataka" or "Multi-state"',
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Education", value: "edu" },
          { title: "Healthcare", value: "health" },
          { title: "Users/Community", value: "users" },
          { title: "Globe/Outreach", value: "globe" },
          { title: "Alert/Emergency", value: "alert" },
          { title: "Hands/Leadership", value: "hands" },
          { title: "Home", value: "home" },
          { title: "Heart", value: "heart" },
        ],
      },
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "body",
      title: "Body Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H3", value: "h3" },
          ],
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "stats",
      title: "Impact Statistics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", type: "string", title: "Value" },
            { name: "label", type: "string", title: "Label" },
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        },
      ],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in which programs appear on the listing page.",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "location",
      media: "heroImage",
    },
  },
});
