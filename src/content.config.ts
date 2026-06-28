import { defineCollection, z } from 'astro:content';

const pressReleasesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishDate: z.coerce.date(),
    cardImage: z.string().optional(),
  }),
});

const newsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    type: z.enum(['Rice', 'Wheat', 'Biofuel', 'General', 'Industry']),
    image: z.string().optional(),
    summary: z.string().optional(),
    publishDate: z.coerce.date(),
  }),
});

const eventsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(), // YYYY-MM-DD string for display
    time: z.string(),
    location: z.string(),
    organizer: z.string(),
    image: z.string().optional(),
    description: z.string(),
    link: z.string().optional(),
  }),
});

const machineryCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    vendor: z.string(),
    price: z.string(),
    location: z.string(),
    contact: z.string(),
    image: z.string().optional(),
    link: z.string().optional(),
  }),
});

const policiesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    file: z.string(), // PDF URL or path under /public/
    date: z.coerce.date(),
  }),
});

export const collections = {
  'press-releases': pressReleasesCollection,
  news: newsCollection,
  events: eventsCollection,
  machinery: machineryCollection,
  policies: policiesCollection,
};
