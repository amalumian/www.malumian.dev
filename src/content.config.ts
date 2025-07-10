import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),

	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			imageData: z.object({
				image: image(),
				alt: z.string(),
				figcaption: z.string(),
			}),
			tags: z.array(z.string()),
		}),
});

export const collections = { blog };
