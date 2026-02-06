import { defineCollection, z } from 'astro:content';

const badge = z.object({
  text: z.string(),
  color: z.enum(['blue', 'purple', 'green', 'amber', 'orange', 'cyan', 'red', 'pink', 'teal', 'indigo', 'yellow']),
  pulse: z.boolean().optional(),
});

const feature = z.object({
  text: z.string(),
  color: z.enum(['blue', 'purple', 'green', 'amber', 'orange', 'cyan', 'red', 'pink', 'teal', 'indigo', 'yellow']),
});

const action = z.object({
  text: z.string(),
  href: z.string(),
  external: z.boolean().optional(),
  variant: z.enum(['primary', 'outline']).optional(),
});

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string(),
    order: z.number(),
    iconType: z.enum(['image', 'video']),
    icon: z.string(),
    gradientFrom: z.enum(['blue', 'purple', 'green', 'amber', 'orange', 'cyan', 'red', 'pink', 'teal', 'indigo', 'yellow']),
    gradientTo: z.enum(['blue', 'purple', 'green', 'amber', 'orange', 'cyan', 'red', 'pink', 'teal', 'indigo', 'yellow']),
    badges: z.array(badge).default([]),
    featureTitle: z.string().default('核心特性'),
    features: z.array(feature).default([]),
    features2Title: z.string().optional(),
    features2: z.array(feature).optional(),
    actions: z.array(action).default([]),
    downloadKey: z.enum(['aisql']).optional(),
    ctaTitle: z.string().optional(),
    ctaDescription: z.string().optional(),
    ctaHref: z.string().optional(),
    ctaLabel: z.string().optional(),
  }),
});

export const collections = { products };
