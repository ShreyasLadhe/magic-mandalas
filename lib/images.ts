/**
 * Returns the image URL for a product.
 *
 * Priority:
 *   1. `imageUrl`  — a local path under /public (e.g. "/images/products/foo.jpeg")
 *   2. `imageSeed` — falls back to Lorem Picsum for placeholder products
 */
export function productImageUrl(
  seedOrPath: string,
  width = 720,
  height = 900
): string {
  // If it looks like an absolute path, return it as-is (Next.js serves from /public)
  if (seedOrPath.startsWith("/")) return seedOrPath;
  // Otherwise use Lorem Picsum with the seed (placeholder)
  return `https://picsum.photos/seed/${encodeURIComponent(seedOrPath)}/${width}/${height}`;
}

/**
 * Helper to get the right src from a Product object.
 * Import and use this wherever you currently call productImageUrl(product.imageSeed).
 *
 * Usage:
 *   import { getProductImage } from "@/lib/images";
 *   const src = getProductImage(product, 600, 750);
 */
export function getProductImage(
  product: { imageUrl?: string; imageSeed: string },
  width = 720,
  height = 900
): string {
  return productImageUrl(product.imageUrl ?? product.imageSeed, width, height);
}