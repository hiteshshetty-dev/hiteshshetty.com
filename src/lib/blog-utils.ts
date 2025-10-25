/**
 * Generate cover image path for a blog post
 * @param slug - The blog post slug
 * @returns The cover image path
 */
export function getBlogCoverImage(slug: string): string {
  return `/images/blogs/${slug}/cover.webp`;
}

/**
 * Generate Open Graph image path for a blog post
 * @param slug - The blog post slug
 * @returns The Open Graph image path
 */
export function getBlogOgImage(slug: string): string {
  return `/images/blogs/${slug}/og-image.webp`;
}
