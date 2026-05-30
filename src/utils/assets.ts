/** Resolve public asset paths for GitHub Pages subpath deployment. */
export function asset(path: string): string {
  const normalized = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${normalized}`;
}
