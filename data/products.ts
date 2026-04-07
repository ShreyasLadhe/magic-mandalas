export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  category: string;
  /** Local path under /public e.g. "/images/products/foo.jpeg"
   *  Leave undefined to fall back to the Lorem Picsum seed (for placeholders). */
  imageUrl?: string;
  imageSeed: string;
};

export const categories = [
  "All",
  "Lippan art",
  "Mandala art",
  "Handmade jewellery",
  "Flower Bouquets",
] as const;

export const products: Product[] = [

  /* ─── LIPPAN ART ─── */
  {
    id: "p1",
    slug: "jagannath-mukha-lippan-10inch",
    name: "Jagannath Mukha — 10 inch",
    shortDescription: "Sacred Lippan wall plate hand-sculpted in clay.",
    description:
      "Crafted using the traditional Lippan art technique, this 10-inch wall plate captures the divine face of Lord Jagannath with intricate clay relief work, mirror inlay, and vivid hand-painted colour. Each piece is one-of-a-kind and carries the meditative energy of the craft. Looks stunning on a pooja room wall, entryway, or living room feature wall. Diameter: ~25 cm.",
    price: 550,
    category: "Lippan art",
    imageUrl: "/images/products/550_10inch.jpeg",
    imageSeed: "mm-jagannath-10",
  },
  {
    id: "p4",
    slug: "jagannath-sudarshana-lippan-8inch",
    name: "Jagannath Sudarshana — 8 inch",
    shortDescription: "Lotus-petal Lippan plate in bold red & gold.",
    description:
      "Inspired by the Sudarshana Chakra, this 8-inch Lippan art plate features Lord Jagannath at the centre of a twelve-petal lotus rendered in clay relief. Finished with hand-dotted gold accents, pearl bead detail, and a white enamel border. The warm red and gold palette makes it an ideal devotional piece or a statement gift. Diameter: ~20 cm.",
    price: 450,
    category: "Lippan art",
    imageUrl: "/images/products/450_8in_art.jpeg",
    imageSeed: "mm-jagannath-8",
  },
  {
    id: "p5",
    slug: "jagannath-surya-mandala-lippan-6inch",
    name: "Jagannath Surya Mandala — 6 inch",
    shortDescription: "Compact sun mandala in vivid yellow & crimson.",
    description:
      "A bold, vibrant 6-inch Lippan plate where Lord Jagannath's divine face sits within a radiant sun mandala of deep yellow, crimson, and black. Every petal is shaped by hand and the detailing is done with fine clay — no two pieces are identical. Perfect for gifting, as a puja shelf centrepiece, or layered in a wall gallery. Diameter: ~15 cm.",
    price: 250,
    category: "Lippan art",
    imageUrl: "/images/products/250_6in_art.jpeg",
    imageSeed: "mm-jagannath-6",
  },
  {
    id: "p6",
    slug: "jagannath-tritaya-framed-wall-art",
    name: "Jagannath Tritaya — Framed Wall Art",
    shortDescription: "The holy trio on a saffron-gold framed panel.",
    description:
      "Tritaya means 'the three' — and this framed Lippan wall panel brings together the divine trio of Jagannath, Balabhadra, and Subhadra on a rich saffron background, set in a dark wooden frame. Each face is built up in layered clay relief with fine dot work, gold coin motifs, and floral detailing borrowed from the Puri Rath Yatra tradition. A rare collector piece as much as a devotional artwork. Frame size: approx. 30 × 15 cm.",
    price: 650,
    category: "Lippan art",
    imageUrl: "/images/products/650_wall_art.jpeg",
    imageSeed: "mm-jagannath-trio",
  },

  /* ─── MANDALA ART / WALL HANGINGS ─── */
  {
    id: "p2",
    slug: "shubh-labh-peacock-pair",
    name: "Shubh Labh Peacock Pair",
    shortDescription: "Hand-painted peacock duo with lotus drops.",
    description:
      "A beautifully matched pair of wall hangings depicting two peacocks facing each other — a timeless symbol of prosperity and grace. Each panel carries Shubh and Labh script in gold, suspended below the peacock with a hand-crafted lotus charm. Finished with pearl-bead accents and a mirror centrepiece. Ideal for doorways, pooja rooms, or as a festive gift. Set of 2.",
    price: 450,
    category: "Mandala art",
    imageUrl: "/images/products/wall_450_1.jpeg",
    imageSeed: "mm-peacock-pair",
  },
  {
    id: "p3",
    slug: "shubh-labh-lotus-mandala-pair",
    name: "Shubh Labh Lotus Mandala Pair",
    shortDescription: "Paired mandala motifs with Shubh Labh drops.",
    description:
      "This pair of wall hangings blends the lotus mandala form with peacock motifs in an orange, navy, and green palette. The Shubh and Labh calligraphy pendants are set in bold enamel against layered floral backgrounds, finishing with an oval mirror charm. Crafted for home entryways, Diwali décor, or gifting. Set of 2.",
    price: 450,
    category: "Mandala art",
    imageUrl: "/images/products/wall_450_2.jpeg",
    imageSeed: "mm-lotus-pair",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string | undefined) {
  if (!category || category === "All") return products;
  return products.filter((p) => p.category === category);
}