# Connecting Sanity CMS to Your Aenon Ministries Site

This guide walks you through setting up Sanity as your headless CMS so you can
edit stories (and programs) from a visual dashboard instead of code files.

---

## Step 1 — Create a Sanity Project

```bash
cd aenon-next
npm install sanity @sanity/client @sanity/image-url next-sanity
npx sanity@latest init --env
```

When prompted:
- **Project name:** `aenon-ministries`
- **Dataset:** `production`
- **Project output path:** use the default or `./sanity-studio`
- **Template:** Clean project with no predefined schemas

This creates a `.env.local` file with your `NEXT_PUBLIC_SANITY_PROJECT_ID` and
`NEXT_PUBLIC_SANITY_DATASET`.

---

## Step 2 — Add the Schemas

Copy the schema files from `./sanity/` into your Sanity config:

```ts
// sanity.config.ts (at project root)
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { story } from "./sanity/story";
import { program } from "./sanity/program";

export default defineConfig({
  name: "aenon-ministries",
  title: "Aenon Ministries CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [structureTool()],
  schema: {
    types: [story, program],
  },
});
```

---

## Step 3 — Create a Sanity Client

```ts
// src/lib/sanity.ts
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export function urlFor(source: any) {
  return builder.image(source);
}
```

---

## Step 4 — Fetch Stories from Sanity (Instead of Local Data)

Replace the local data imports with Sanity queries. Example for the stories
listing page:

```ts
// src/app/stories/page.tsx
import { client } from "@/lib/sanity";

// GROQ query to fetch all stories
const STORIES_QUERY = `*[_type == "story"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  subtitle,
  excerpt,
  category,
  location,
  icon,
  featuredImage,
  ctaLabel,
  ctaProgram,
  featured
}`;

export default async function StoriesPage() {
  const stories = await client.fetch(STORIES_QUERY);
  // ... render using the same JSX, just use `stories` from Sanity
}
```

For individual story pages:

```ts
// src/app/stories/[slug]/page.tsx
import { client } from "@/lib/sanity";
import { PortableText } from "next-sanity";

const STORY_QUERY = `*[_type == "story" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  subtitle,
  category,
  location,
  icon,
  featuredImage,
  body,
  ctaLabel,
  ctaProgram
}`;

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(
    `*[_type == "story"]{ "slug": slug.current }`
  );
  return slugs.map((s) => ({ slug: s.slug }));
}

export default async function StoryPage({ params }) {
  const { slug } = await params;
  const story = await client.fetch(STORY_QUERY, { slug });
  if (!story) notFound();

  return (
    // ... same layout, but use <PortableText value={story.body} />
    // instead of mapping over plain text paragraphs
  );
}
```

---

## Step 5 — Embed Sanity Studio (Optional)

You can embed Sanity Studio directly in your Next.js app at `/studio`:

```bash
npm install sanity next-sanity
```

Create `src/app/studio/[[...tool]]/page.tsx`:

```tsx
"use client";
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
```

Now editors can manage content at `yoursite.com/studio`.

---

## Step 6 — Enable Revalidation (Live Updates)

For content to update when editors publish changes, set up webhook-based
revalidation:

```ts
// src/app/api/revalidate/route.ts
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  // Revalidate based on content type
  if (body._type === "story") {
    revalidatePath("/stories");
    revalidatePath(`/stories/${body.slug?.current}`);
  }
  if (body._type === "program") {
    revalidatePath("/work");
    revalidatePath(`/work/${body.slug?.current}`);
  }
  revalidatePath("/"); // Home page shows stories too

  return NextResponse.json({ revalidated: true });
}
```

Then in Sanity dashboard → Settings → API → Webhooks, add a webhook pointing
to `https://yoursite.com/api/revalidate`.

---

## Migration: Moving Existing Content to Sanity

Once Sanity is set up, you can seed it with your existing data:

```ts
// scripts/seed-sanity.ts (run with ts-node or tsx)
import { createClient } from "@sanity/client";
import { stories } from "../src/data/stories";

const client = createClient({
  projectId: "YOUR_PROJECT_ID",
  dataset: "production",
  token: "YOUR_WRITE_TOKEN", // from sanity.io/manage
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function seed() {
  for (const story of stories) {
    await client.create({
      _type: "story",
      title: story.title,
      slug: { _type: "slug", current: story.slug },
      subtitle: story.subtitle,
      excerpt: story.excerpt,
      category: story.category,
      location: story.location,
      icon: story.icon,
      ctaLabel: story.ctaLabel,
      ctaProgram: story.ctaProgram,
      body: story.body.map((paragraph) => ({
        _type: "block",
        _key: Math.random().toString(36).slice(2),
        children: [
          {
            _type: "span",
            _key: Math.random().toString(36).slice(2),
            text: paragraph,
          },
        ],
        style: "normal",
      })),
    });
    console.log(`Created: ${story.title}`);
  }
}

seed();
```

---

## Summary

| What | How |
|------|-----|
| Edit stories | Sanity Studio at `/studio` or sanity.io |
| Add new stories | Create in Sanity → auto-appears on site |
| Change story text | Edit in Sanity → webhook triggers rebuild |
| Add images | Upload in Sanity → use `urlFor()` helper |
| Edit programs | Same flow as stories |

Your site currently works with local data files (`src/data/stories.ts` and
`src/data/programs.ts`). You can migrate to Sanity incrementally — start with
stories, then programs, then other content as needed.
