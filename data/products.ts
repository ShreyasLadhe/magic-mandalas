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
  {
    id: "p9",
    slug: "jagannath-checker-halo-lippan-8inch",
    name: "Jagannath Checker Halo — 8 inch",
    shortDescription: "Bold red-black Jagannath plaque with checker outer ring.",
    description:
      "A striking 8-inch Jagannath mukha plaque in classic red, black, and white. The key design feature is the checker-pattern halo around the face, giving it a traditional temple-motif look with a modern contrast finish. Hand-painted and relief-detailed for depth, this one works beautifully as a statement devotional wall piece. Diameter: ~20 cm.",
    price: 700,
    category: "Lippan art",
    imageUrl: "/images/products/700_8in.jpeg",
    imageSeed: "mm-jagannath-checker-8",
  },
  {
    id: "p10",
    slug: "jagannath-mini-lotus-crown-4inch",
    name: "Jagannath Mini Lotus Crown — 4 inch",
    shortDescription: "Yellow lotus-petal border mini Jagannath plaque.",
    description:
      "A 4-inch mini Jagannath piece with a yellow lotus-crown outer silhouette and fine hand-painted spiritual symbols on each petal. Compact and vibrant, ideal for return gifts, small pooja shelves, or mini wall clusters. Diameter: ~10 cm.",
    price: 150,
    category: "Lippan art",
    imageUrl: "/images/products/150_4in.jpeg",
    imageSeed: "mm-jagannath-mini-lotus-yellow",
  },
  {
    id: "p11",
    slug: "jagannath-mini-sunray-4inch",
    name: "Jagannath Mini Sunray — 4 inch",
    shortDescription: "Red sunray-edge version with pointed outer design.",
    description:
      "This 4-inch variant features a sharper sunray-style outer edge in red and yellow, creating a more dynamic silhouette compared to the rounded versions. Hand-painted detailing and contrast eyes keep the devotional character strong even in a small format. Diameter: ~10 cm.",
    price: 150,
    category: "Lippan art",
    imageUrl: "/images/products/150_4in2.jpeg",
    imageSeed: "mm-jagannath-mini-sunray-red",
  },
  {
    id: "p12",
    slug: "jagannath-mini-scallop-blue-4inch",
    name: "Jagannath Mini Scallop Blue — 4 inch",
    shortDescription: "Cool blue scalloped-border mini Jagannath piece.",
    description:
      "A calming blue-themed 4-inch Jagannath plaque with a rounded scallop-loop outer border. This variant stands out for its cool palette and softer edge pattern, making it perfect for mixed-colour gallery walls or gifting sets. Diameter: ~10 cm.",
    price: 150,
    category: "Lippan art",
    imageUrl: "/images/products/150_4in3.jpeg",
    imageSeed: "mm-jagannath-mini-scallop-blue",
  },
  {
    id: "p13",
    slug: "jagannath-mini-scallop-red-4inch",
    name: "Jagannath Mini Scallop Red — 4 inch",
    shortDescription: "Warm red-yellow scalloped-border mini Jagannath.",
    description:
      "A 4-inch companion to the blue scallop variant, this version uses a red and yellow scalloped outer design for a warmer festive look. Great for pairing with other minis while still keeping each piece distinct through border style and colour mood. Diameter: ~10 cm.",
    price: 150,
    category: "Lippan art",
    imageUrl: "/images/products/150_4in4.jpeg",
    imageSeed: "mm-jagannath-mini-scallop-red",
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
  {
    id: "p7",
    slug: "shri-radha-devotional-plaque-5inch",
    name: "Shri Radha Devotional Plaque — 5 inch",
    shortDescription: "Compact handcrafted plaque with peacock-feather motif.",
    description:
      "A graceful 5-inch circular wall plaque featuring Shri Radha lettering in raised relief, highlighted with a peacock-feather accent and concentric bead detailing. The bright yellow and blue palette gives it a divine yet cheerful look, making it perfect for pooja corners, entry walls, or festive gifting. Lightweight and easy to mount. Diameter: ~12.5 cm.",
    price: 200,
    category: "Mandala art",
    imageUrl: "/images/products/200-radha.jpeg",
    imageSeed: "mm-shri-radha-5",
  },
  {
    id: "p8",
    slug: "shubh-labh-classic-red-pair-6inch",
    name: "Shubh Labh Classic Red Pair — 6 inch",
    shortDescription: "Traditional red-gold hanging pair with tassel drops.",
    description:
      "A festive Shubh Labh wall-hanging set in a rich red and gold palette, decorated with mirror stones, hand-painted accents, and soft tassel drops. Each 6-inch disc is designed for positive energy at doorways and pooja spaces, while also doubling as statement festive decor. Ideal for housewarming and Diwali gifting. Set of 2 pieces.",
    price: 300,
    category: "Mandala art",
    imageUrl: "/images/products/300-wall.jpeg",
    imageSeed: "mm-shubh-labh-red-6",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string | undefined) {
  if (!category || category === "All") return products;
  return products.filter((p) => p.category === category);
}