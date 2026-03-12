module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Add any runtime classes you build dynamically here:
  safelist: [
    // e.g. 'bg-red-500', 'text-white' if created dynamically at runtime
  ],
};
