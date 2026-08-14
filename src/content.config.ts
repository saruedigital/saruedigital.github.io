import { glob } from "astro/loaders";
import { defineCollection 	} from "astro:content";

const blog = defineCollection({
	loader: glob({
		base: "./src/assets/blog",
		pattern: "**/*.{md,mdx}"
	})
})

export const collections = { blog: blog }
