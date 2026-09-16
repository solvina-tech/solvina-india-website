/**
 * Prefix public assets when the site is deployed under a subpath, such as a
 * GitHub Pages project site. The value is provided by the Pages workflow at
 * build time and is intentionally empty for a root-domain deployment.
 */
export function assetPath(path: string): string {
  const normalizedPath = `/${path.replace(/^\.?\//, "")}`;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

  return `${basePath}${normalizedPath}`;
}
