/** Placeholder photos via [Lorem Picsum](https://picsum.photos/) — swap for your assets later. */
export function productImageUrl(seed: string, width = 720, height = 900) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
}
