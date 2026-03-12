import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const [repoOwner, repoName] = (process.env.GITHUB_REPOSITORY || '').split('/');
const isUserOrOrgSite = repoName ? repoName.toLowerCase() === `${repoOwner}.github.io`.toLowerCase() : false;

// Project pages are served from /<repo>/, while user/org pages are served from /
const base = isGitHubActions && repoName && !isUserOrOrgSite ? `/${repoName}` : '/';
const site = repoOwner ? `https://${repoOwner}.github.io` : undefined;

export default defineConfig({
  output: 'static',
  site,
  base,
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: true, // Optional: Disable Astro's default Tailwind base styles if needed
        postcss: true, // Ensure PostCSS is enabled
      },
    }),
  ],
});