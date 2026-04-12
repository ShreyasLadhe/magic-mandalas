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
  {
    id: "p14",
    slug: "jagannath-yellow-folk-mukha-4inch",
    name: "Jagannath Mukha — Yellow Folk (4 inch)",
    shortDescription: "Sun-bright yellow plate with full mukha & garland detail.",
    description:
      "A compact 4-inch circular piece with a vivid yellow field and a hand-painted Jagannath mukha in a bold Odisha folk palette — black and red face, wide white eyes, and layered garlands in white, green, and orange. Brush-visible texture gives it a warm artisan feel. Lovely on a pooja shelf, as a small wall accent, or paired with other minis. Diameter: ~10 cm.",
    price: 150,
    category: "Lippan art",
    imageUrl: "/images/products/150_4in_lippan.jpeg",
    imageSeed: "mm-jagannath-yellow-folk-4",
  },
  {
    id: "p15",
    slug: "jagannath-pattachitra-scroll-border-4inch",
    name: "Jagannath Pattachitra Face — Scroll Border (4 inch)",
    shortDescription: "Classic red-black mukha with a white scrollwork rim.",
    description:
      "Hand-painted in a Pattachitra-inspired style, this 4-inch disc centres the iconic Jagannath face — large white eyes, red field, and fine tilak accents — inside an ornate white scroll-and-dot border that reads like traditional temple jewellery. Works as a mini wall hanging or decorative coaster. Diameter: ~10 cm.",
    price: 150,
    category: "Mandala art",
    imageUrl: "/images/products/150_4inred.jpeg",
    imageSeed: "mm-jagannath-pattachitra-scroll-4",
  },
  {
    id: "p16",
    slug: "jagannath-pattachitra-blue-border-6inch",
    name: "Jagannath Pattachitra — Indigo Border (6 inch)",
    shortDescription: "Six-inch mukha with quadrant blue-and-white floral rim.",
    description:
      "A 6-inch round hand-painted panel featuring Lord Jagannath's mukha in red, black, and white, framed by a striking indigo border split into quadrants with white leaf and teardrop motifs. The palette and geometry echo classic Odisha Pattachitra. Ideal as focal wall art for a pooja nook or ethnic gallery wall. Diameter: ~15 cm.",
    price: 300,
    category: "Mandala art",
    imageUrl: "/images/products/300_6in.jpeg",
    imageSeed: "mm-jagannath-pattachitra-blue-6",
  },
  {
    id: "p17",
    slug: "jagannath-sambalpuri-checker-ring-6inch",
    name: "Jagannath Mukha — Sambalpuri Checker Ring (6 inch)",
    shortDescription: "Twelve-panel rim with red-white checks on black.",
    description:
      "This 6-inch Jagannath mukha piece pairs the classic large-eyed face with an outer ring divided into twelve segments, each carrying a tiny red-and-white checker motif reminiscent of Sambalpuri and temple textile patterns. High contrast black, red, and white make it read clearly from a distance — strong as solo devotional art or beside other circular pieces. Diameter: ~15 cm.",
    price: 400,
    category: "Lippan art",
    imageUrl: "/images/products/400_6in.jpeg",
    imageSeed: "mm-jagannath-checker-ring-6",
  },
  {
    id: "p18",
    slug: "jagannath-yellow-halo-mukha-4inch",
    name: "Jagannath Mukha — Yellow Halo (4 inch)",
    shortDescription: "Pattachitra-style mukha with a bright yellow crown ring.",
    description:
      "A 4-inch hand-painted disc focusing on Jagannath's iconic face — large white eyes, black mukha, red smile, and jewel-like nose dots — framed by a saturated yellow halo with fine black line work. Warm and devotional in a small footprint; lovely as a mini wall dot, shelf accent, or gift. Diameter: ~10 cm.",
    price: 150,
    category: "Mandala art",
    imageUrl: "/images/products/150_4inyellow.jpeg",
    imageSeed: "mm-jagannath-yellow-halo-4",
  },
  {
    id: "p19",
    slug: "jagannath-pattachitra-filigree-5inch",
    name: "Jagannath Pattachitra — Filigree Field (5 inch)",
    shortDescription: "Five-inch mukha on crimson with dense white scrollwork.",
    description:
      "Step up from the 4-inch minis: a 5-inch round panel with Jagannath's face at the centre and an outer field of intricate white filigree, florals, and dots on deep red — very Pattachitra in spirit. The yellow tilak and jewelled nose detail pop against the busy border. Statement enough for a focal nook, still easy to mount. Diameter: ~12.5 cm.",
    price: 250,
    category: "Mandala art",
    imageUrl: "/images/products/250_5in.jpeg",
    imageSeed: "mm-jagannath-filigree-5",
  },
  {
    id: "p20",
    slug: "folk-mandala-mini-red-4inch",
    name: "Folk Mandala Mini — Red & White (4 inch)",
    shortDescription: "Rangoli-style wheel and lotus motifs on a red disc.",
    description:
      "A non-figurative 4-inch piece in classic Indian folk geometry: a spoked central wheel, four directional lotus forms, and teardrop accents — all hand-painted in white on a vivid red ground. Use as coasters, table scatter, or mini wall clusters for festive colour without a deity motif. Diameter: ~10 cm.",
    price: 150,
    category: "Mandala art",
    imageUrl: "/images/products/150_4inreddesign.jpeg",
    imageSeed: "mm-folk-mandala-red-4",
  },
  {
    id: "p21",
    slug: "folk-mandala-mini-blue-4inch",
    name: "Folk Mandala Mini — Sky Blue (4 inch)",
    shortDescription: "Blue base with white paisleys and a red-centred sun wheel.",
    description:
      "Companion to the red mandala mini: the same rangoli-inspired layout on a bright sky-blue field, with white paisley-butta shapes, petal fans, and a red-dot centre. Cheerful and versatile for kitchens, desks, or bohemian gallery walls. Diameter: ~10 cm.",
    price: 150,
    category: "Mandala art",
    imageUrl: "/images/products/150_4inblue.jpeg",
    imageSeed: "mm-folk-mandala-blue-4",
  },
  {
    id: "p22",
    slug: "jagannath-grand-checker-mandala-20inch",
    name: "Jagannath Grand Checker Mandala — 20 inch",
    shortDescription: "Statement disc with checker rings and dotted jewelled borders.",
    description:
      "A commanding 20-inch circular wall piece: Jagannath's mukha at the heart, encircled by concentric bands of red-and-white checks, diamond tessellation on black, and yellow dot jewellery along the rim. Bold temple-textile energy scaled for a feature wall, entryway, or pooja room backdrop. Diameter: ~51 cm.",
    price: 2200,
    category: "Lippan art",
    imageUrl: "/images/products/2200_20in.jpeg",
    imageSeed: "mm-jagannath-grand-checker-20",
  },
  {
    id: "p23",
    slug: "jagannath-surya-mirror-lippan-20inch",
    name: "Jagannath Surya Mirror Ring — 20 inch",
    shortDescription: "Sun-ray petals, mirrors, and yellow paisley outer garden.",
    description:
      "Large-format Lippan-style work in hot yellow, orange, red, and black: Jagannath's face sits inside a dotted inner ring, then a radiating petal corridor with mirror inlay, finishing in red heart-paisley motifs on sun-yellow. High relief and sparkle make it a true focal piece for collectors of Gujarati-Odisha hybrid wall craft. Diameter: ~51 cm.",
    price: 2200,
    category: "Lippan art",
    imageUrl: "/images/products/2200_20inyellow.jpeg",
    imageSeed: "mm-jagannath-surya-mirror-20",
  },
  {
    id: "p24",
    slug: "jagannath-indigo-lotus-lippan-20inch",
    name: "Jagannath Indigo Lotus Lippan — 20 inch",
    shortDescription: "Blue lotus bands, mirror chips, and diamond outer guard.",
    description:
      "Twenty inches of layered mandala structure: the mukha in classic black, red, and white, then alternating red lotus petals and indigo scroll fields studded with mirror work, closed by a red-and-white diamond border. Cool blues against warm reds suit both traditional and contemporary interiors. Diameter: ~51 cm.",
    price: 2200,
    category: "Lippan art",
    imageUrl: "/images/products/2200_20inblue.jpeg",
    imageSeed: "mm-jagannath-indigo-lippan-20",
  },
  {
    id: "p25",
    slug: "jagannath-crimson-azure-lippan-20inch",
    name: "Jagannath Crimson & Azure Lippan — 20 inch",
    shortDescription: "Balanced red-blue mandala rings with mirror highlights.",
    description:
      "A 20-inch Jagannath centrepiece built from concentric crimson and azure rings — floral petals, dotted lanes, and fine white linework — with mirror accents catching light like temple shisha work. Rich, symmetrical, and unmistakably devotional; ideal as the hero piece above a console or altar. Diameter: ~51 cm.",
    price: 2200,
    category: "Lippan art",
    imageUrl: "/images/products/2200_20redblue.jpeg",
    imageSeed: "mm-jagannath-crimson-azure-20",
  },
  {
    id: "p26",
    slug: "jagannath-eclipse-garden-mandala-20inch",
    name: "Jagannath Eclipse Garden Mandala — 20 inch",
    shortDescription: "Layered red-and-gold petals with a black floral outer ring.",
    description:
      "A 20-inch circular panel with Jagannath's mukha at the centre, wrapped in concentric lotus bands of scarlet, saffron, and cream, then a deep black outer garden of yellow-and-white folk florals. The read is bold hand-painted mandala illustration — graphic, sunburst, and temple-festive. Diameter: ~51 cm.",
    price: 2200,
    category: "Mandala art",
    imageUrl: "/images/products/2200_20inblackred.jpeg",
    imageSeed: "mm-jagannath-eclipse-garden-20",
  },
  {
    id: "p27",
    slug: "jagannath-amber-lotus-relief-20inch",
    name: "Jagannath Amber Lotus Relief — 20 inch",
    shortDescription: "Oversized mukha with mirror-set petals and dotted waves.",
    description:
      "This 20-inch piece pushes the face forward: Jagannath sits inside dotted yellow-and-coral petal rings, each petal picked out with mirror chips and fine white linework, finishing in a wavy black-and-white outer guard. Strong Lippan-meets-mandala relief — tactile, glittering, and devotional at living-room scale. Diameter: ~51 cm.",
    price: 2200,
    category: "Lippan art",
    imageUrl: "/images/products/2200_20inbighead.jpeg",
    imageSeed: "mm-jagannath-amber-lotus-20",
  },
  {
    id: "p28",
    slug: "jagannath-jewelled-lotus-mukha-8inch",
    name: "Jagannath Jewelled Lotus Mukha — 8 inch",
    shortDescription: "Eight-inch relief plate with pearl drops and metallic bead rim.",
    description:
      "An 8-inch Jagannath mukha built like a jewelled icon: red lotus petals around the face, pearl teardrops between petals, and a dense gold-and-silver bead collar catching the light. The black field and classic red-eye makeup keep the spiritual graphic sharp. Ideal for pooja shelves, alcoves, or gifting. Diameter: ~20 cm.",
    price: 350,
    category: "Lippan art",
    imageUrl: "/images/products/350_8inblack.jpeg",
    imageSeed: "mm-jagannath-jewelled-lotus-8",
  },
  {
    id: "p29",
    slug: "jagannath-flame-petal-zigzag-20inch",
    name: "Jagannath Flame Petal Mandala — 20 inch",
    shortDescription: "Sunset petal stacks and a graphic black-white zigzag skirt.",
    description:
      "Warm layers of red, orange, and amber petals radiate from Jagannath's face, detailed with white dots and leaf hints, then drop into a crisp black band with a sawtooth white border. Reads as hand-painted folk mandala on a grand diameter — fiery, rhythmic, and unmistakably Odia in spirit. Diameter: ~51 cm.",
    price: 2200,
    category: "Mandala art",
    imageUrl: "/images/products/2200_20in_redshade.jpeg",
    imageSeed: "mm-jagannath-flame-zigzag-20",
  },
  {
    id: "p30",
    slug: "jagannath-sunrise-pearl-ring-20inch",
    name: "Jagannath Sunrise Pearl Ring — 20 inch",
    shortDescription: "Saffron-and-crimson petals with a pearl lane and dotted rim.",
    description:
      "Twenty inches of sunrise colour: the mukha is ringed by yellow and red petal corridors, a band of raised white pearls, and an outer black skirt finished with delicate white pointillism. The palette stays traditional while the scale feels like a ceremonial halo for the wall. Diameter: ~51 cm.",
    price: 2200,
    category: "Lippan art",
    imageUrl: "/images/products/2200_20inbigyellow.jpeg",
    imageSeed: "mm-jagannath-sunrise-pearl-20",
  },
  {
    id: "p31",
    slug: "durga-kauri-mirror-lippan-12inch",
    name: "Maa Durga — Kauri & Mirror Lippan (12 inch)",
    shortDescription: "Terracotta disc with cowrie ring, mirrors, and crowned Devi.",
    description:
      "A 12-inch Lippan-style wall plate centred on Maa Durga — golden face, crown, and jewellery on a white ground with red scrollwork. Concentric lanes of diamond mirrors, dotted white borders, a full ring of kauri shells, and leaf mirrors on terracotta red give it authentic Kutch festival energy. A striking alternative to Jagannath-centric pieces for Navratri or year-round shakti corners. Diameter: ~30 cm.",
    price: 1200,
    category: "Lippan art",
    imageUrl: "/images/products/1200_12infemale.jpeg",
    imageSeed: "mm-durga-kauri-lippan-12",
  },
  {
    id: "p32",
    slug: "midnight-blue-dot-mandala-coaster-set-6",
    name: "Midnight Blue Dot Mandala Coaster Set — 6 × 4 inch",
    shortDescription: "Six unique blue-on-black dot mandalas for table or wall clusters.",
    description:
      "A boxed set of six 4-inch round coasters, each with its own radial dot-mandala composition in navy, royal, and cyan blues over a matte black ground. Fine white pointillism ties the collection together while every piece stays visually distinct — floral, geometric, wave, and ring variants. Use as drink coasters or mount as a mini gallery. Six discs × ~10 cm diameter.",
    price: 600,
    category: "Mandala art",
    imageUrl: "/images/products/600_4incoaster.jpeg",
    imageSeed: "mm-dot-coaster-set-6",
  },
  {
    id: "p33",
    slug: "jagannath-saffron-lotus-jewels-8inch",
    name: "Jagannath Saffron Lotus Jewels — 8 inch",
    shortDescription: "Gold-bead halo, jewelled red petals, and silver crystal rim.",
    description:
      "An 8-inch Jagannath mukha in classic black, red, and yellow, lifted by a collar of raised gold spheres and sixteen alternating red-and-saffron petals — each set with pearl teardrops and glittering silver outlines. A final white ring of tiny crystals frames the disc for extra sparkle in pooja nooks or festive walls. Diameter: ~20 cm.",
    price: 400,
    category: "Lippan art",
    imageUrl: "/images/products/400_8inyellowblack.jpeg",
    imageSeed: "mm-jagannath-saffron-jewels-8",
  },
  {
    id: "p34",
    slug: "neelambari-mirror-lippan-hanging-6inch",
    name: "Neelambari Mirror Lippan Hanging — 6 inch",
    shortDescription: "Concentric blue rings, diamond & circle mirrors, yarn tassel.",
    description:
      "A 6-inch navy-and-cyan Lippan-style disc built from mirrored lanes: diamond shisha on the outer guard, bands of round mirrors, pearl-white separators, and a starburst of triangular mirrors around a central round glass. Hung with a beaded top loop and a deep blue yarn tassel — ready for windows, doorways, or bohemian feature walls. Diameter: ~15 cm.",
    price: 250,
    category: "Lippan art",
    imageUrl: "/images/products/250_6inwall1.jpeg",
    imageSeed: "mm-neelambari-lippan-6",
  },
  {
    id: "p35",
    slug: "nila-tara-mirror-lippan-hanging-5inch",
    name: "Nila Tara Mirror Lippan Hanging — 5 inch",
    shortDescription: "Sky-blue field with starburst mirrors and matching tassel.",
    description:
      "A compact 5-inch hanging in ocean blues: a dark indigo centre explodes into diamond mirror geometry, ringed by small circular shisha on a lighter blue band, with white pearl accents top and bottom. The teal cord, triple pearls, and plush blue tassel echo coastal and festive Indian décor alike. Diameter: ~12.5 cm.",
    price: 200,
    category: "Lippan art",
    imageUrl: "/images/products/200_5inwall3.jpeg",
    imageSeed: "mm-nila-tara-lippan-5",
  },
  {
    id: "p36",
    slug: "jagannath-mirror-petal-halo-12inch",
    name: "Jagannath Mirror Petal Halo — 12 inch",
    shortDescription: "Twelve-inch mukha with saffron petals, shisha, and teal dot rim.",
    description:
      "Lord Jagannath's face sits on black with crisp white linework, wrapped in a corona of yellow-and-amber lotus petals — each petal carrying a teardrop mirror — and finished with a playful turquoise-and-gold dotted outer band. Substantial enough for a hall or altar focal point without hitting the largest 20-inch scale. Diameter: ~30 cm.",
    price: 1000,
    category: "Lippan art",
    imageUrl: "/images/products/1000_12inblack.jpeg",
    imageSeed: "mm-jagannath-mirror-halo-12",
  },
  {
    id: "p37",
    slug: "ocean-mirror-lippan-mini-hanging-5inch",
    name: "Ocean Mirror Lippan Mini Hanging — 5 inch",
    shortDescription: "Entry-level blue mirror mandala with beads and tassel.",
    description:
      "A friendly 5-inch non-figurative Lippan disc: alternating royal and sky-blue rings, circular mirror dots, white raised separators, and a central dark medallion stitched with diamond mirror rays. Beaded hanger and blue tassel included — an easy gift or starter piece for mirror-work lovers. Diameter: ~12.5 cm.",
    price: 150,
    category: "Lippan art",
    imageUrl: "/images/products/150_5inwall2.jpeg",
    imageSeed: "mm-ocean-mini-lippan-5",
  },
  {
    id: "p38",
    slug: "jal-deep-scallop-lippan-mandala-6inch",
    name: "Jal Deep Scallop Lippan Mandala — 6 inch",
    shortDescription: "Navy petals, teardrop shisha, and raised white Lippan outlines.",
    description:
      "Six inches of watery blues: a scalloped flower silhouette in deep navy, sky blue, and chalk-white relief, with a round mirror heart, rings of tiny shisha, and teardrop mirrors nested in each outer petal. Reads like a frozen rangoli — graphic from afar, intricate up close. Diameter: ~15 cm.",
    price: 250,
    category: "Lippan art",
    imageUrl: "/images/products/250_6indesign.jpeg",
    imageSeed: "mm-jal-deep-scallop-6",
  },
  {
    id: "p39",
    slug: "gulaal-sunrise-scallop-lippan-6inch",
    name: "Gulaal Sunrise Scallop Lippan — 6 inch",
    shortDescription: "Pink-and-gold petal sun with mirror inlay, no hanging cord.",
    description:
      "A festive 6-inch scalloped mandala in gulaal pink, marigold yellow, and white clay lines — central round mirror, mirrored teardrops in yellow petals, and triple shisha fans in each pink point. Perfect for Diwali trays, table centres, or mounting in a cluster with the blue scallop variant. Diameter: ~15 cm.",
    price: 250,
    category: "Lippan art",
    imageUrl: "/images/products/250_6indesign2.jpeg",
    imageSeed: "mm-gulaal-scallop-6",
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