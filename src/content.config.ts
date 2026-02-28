/**
 * Astro Content Collections configuration.
 *
 * Defines the schema for all content managed by Decap CMS.
 * Each collection here maps to a folder under src/content/ and
 * a matching collection in public/admin/config.yml.
 *
 * Docs: https://docs.astro.build/en/guides/content-collections/
 */
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// --- Projects collection ---
// Each project is a Markdown file in src/content/projects/
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    thumbnail: z.string().optional(),
    detailImages: z.array(z.string()).default([]),
    contributions: z.string().optional(),
    tools: z.string().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(0),
    published: z.boolean().default(true),
  }),
});

// --- Site settings (singleton) ---
// A single YAML file at src/content/settings/site.yaml
// Editable from Decap CMS under Settings > Site Settings
const settings = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/content/settings" }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    tagline: z.string(),
    heroLines: z.array(z.string()).default([]),
    bio: z.string(),
    about: z.string(),
    linkedin: z.string().url().optional(),
    github: z.string().url().optional(),
    email: z.string().email().optional(),
  }),
});

export const collections = { projects, settings };
