/**
 * Prefix public assets when the site is deployed under a subpath,
 * such as a GitHub Pages project site.
 *
 * For GitHub Pages:
 *   /repository-name/images/logo.png
 *
 * For a root domain:
 *   /images/logo.png
 */
export function assetPath(path: string): string {
  const normalizedPath = `/${path.replace(/^\/+/, "")}`;

  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

  return `${basePath}${normalizedPath}`;
}