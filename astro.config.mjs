import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: true, // Optional: Disable Astro's default Tailwind base styles if needed
        postcss: true, // Ensure PostCSS is enabled
      },
    }),
  ],
});