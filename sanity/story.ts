// Sanity schema for Story content type
// To use: install Sanity, create a project, and add this schema to your sanity.config.ts

import { defineField, defineType } from "sanity";

export const story = defineType({
  name: "story",
  title: "Story",
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
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
      description: "A short description shown below the title on the story page.",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 2,
      description: "Short summary shown on the stories listing cards.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Education",
          "Healthcare",
          "Women & Children",
          "Village Outreach",
          "Disaster Relief",
          "COVID Relief",
          "Community Leadership",
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: 'e.g. "Tirunelveli, Tamil Nadu"',
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
          { title: "Home", value: "home" },
          { title: "Heart", value: "heart" },
        ],
      },
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      description: "Main image for the story. Shows on the detail page and card.",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
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
      description: "The full story content. Use block quotes for testimonials.",
    }),
    defineField({
      name: "ctaLabel",
      title: "Call-to-Action Label",
      type: "string",
      description: 'e.g. "Support Education Programs"',
    }),
    defineField({
      name: "ctaProgram",
      title: "Related Program",
      type: "string",
      options: {
        list: [
          { title: "Education", value: "education" },
          { title: "Healthcare", value: "healthcare" },
          { title: "Women & Children", value: "women" },
          { title: "Village Outreach", value: "outreach" },
          { title: "Disaster Relief", value: "relief" },
          { title: "Community Leadership", value: "leadership" },
        ],
      },
    }),
    defineField({
      name: "featured",
      title: "Featured Story",
      type: "boolean",
      description: "Show this story as the featured card at the top of the stories page.",
      initialValue: false,
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
  ],
  orderings: [
    {
      title: "Published Date, New",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "featuredImage",
    },
  },
});
