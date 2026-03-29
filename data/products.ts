export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  category: string;
  imageSeed: string;
};

export const categories = [
  "All",
  "Macramé",
  "Wall art",
  "Plant hangers",
  "Accessories",
] as const;

export const products: Product[] = [
  {
    id: "p1",
    slug: "sunrise-wall-hanging",
    name: "Sunrise wall hanging",
    shortDescription: "Layered cotton cord with wooden dowel.",
    description:
      "Hand-knotted sunrise motif on soft ivory cord. Includes a light oak dowel and cotton hanging cord. Size shown: 45 × 55 cm (placeholder).",
    price: 1899,
    category: "Wall art",
    imageSeed: "knots-sunrise",
  },
  {
    id: "p2",
    slug: "terra-planter-set",
    name: "Terra planter set (2)",
    shortDescription: "Matching pair for medium pots.",
    description:
      "A pair of square-knot hangers with brass rings. Fits pots roughly 15–20 cm wide (placeholder sizing).",
    price: 1299,
    category: "Plant hangers",
    imageSeed: "knots-terra",
  },
  {
    id: "p3",
    slug: "luna-key-fob",
    name: "Luna key fob",
    shortDescription: "Mini charm with waxed cord.",
    description:
      "Compact half-moon pattern with a sturdy clasp. Great as a gift add-on (placeholder).",
    price: 349,
    category: "Accessories",
    imageSeed: "knots-luna",
  },
  {
    id: "p4",
    slug: "drift-coasters",
    name: "Drift coasters (set of 4)",
    shortDescription: "Flat knots with cork backing.",
    description:
      "Four coasters in a muted sand palette. Wipe clean; cork base (placeholder materials).",
    price: 799,
    category: "Accessories",
    imageSeed: "knots-drift",
  },
  {
    id: "p5",
    slug: "aurora-panel",
    name: "Aurora panel",
    shortDescription: "Vertical fringe with gradient dip.",
    description:
      "Statement panel with long fringe. Colour placement varies slightly piece to piece (placeholder).",
    price: 2499,
    category: "Macramé",
    imageSeed: "knots-aurora",
  },
  {
    id: "p6",
    slug: "harbor-basket",
    name: "Harbor basket",
    shortDescription: "Soft storage with rope handles.",
    description:
      "Square-bottom basket with twisted handles. Ideal for throws or craft supplies (placeholder).",
    price: 1599,
    category: "Macramé",
    imageSeed: "knots-harbor",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string | undefined) {
  if (!category || category === "All") return products;
  return products.filter((p) => p.category === category);
}
