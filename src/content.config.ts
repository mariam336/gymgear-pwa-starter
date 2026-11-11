import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  status: z.enum(['demo', 'draft', 'published']).default('draft'),
  author: z.string().default('Editorial team (add your real name)'),
  image: z.string().optional(),
  featured: z.boolean().default(false),
  bestFor: z.string().optional(),
  notFor: z.string().optional(),
  verdict: z.string().optional(),
  productIds: z.array(z.string()).default([]),
  pros: z.array(z.string()).default([]),
  cons: z.array(z.string()).default([]),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
});
const folder = (name: string) => defineCollection({
  loader: glob({ base: `./src/content/${name}`, pattern: '**/*.md' }),
  schema: articleSchema
});
export const collections = {
  reviews: folder('reviews'),
  best: folder('best'),
  comparisons: folder('comparisons'),
  buyingGuides: folder('buyingGuides'),
  fitnessAdvice: folder('fitnessAdvice')
};
