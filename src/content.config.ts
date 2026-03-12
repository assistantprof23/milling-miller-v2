import { defineCollection, z } from 'astro:content';

const pressReleasesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishDate: z.coerce.date(),
    cardImage: z.string().optional(),
  }),
});

export const collections = {
  'press-releases': pressReleasesCollection,
};
