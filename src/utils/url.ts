const rawBase = String(import.meta.env.BASE_URL ?? '/');
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

// Prefixes site-root paths with the configured base; leaves external, anchor and mailto links untouched.
export const withBase = (path: string): string => {
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) return path;
  return `${base}${path.replace(/^\//, '')}`;
};

// Returns a usable link or '#' when the value is missing or a placeholder such as "_No response_".
export const safeLink = (link?: string | null): string => {
  if (!link) return '#';
  return /^(https?:|mailto:|tel:|\/|#)/i.test(link) ? withBase(link) : '#';
};
