export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  label: 'new' | 'waterproof' | 'limited_edition' | null;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Refugio 30L",
    description: "Versatile daypack with a laptop sleeve and two mesh side pockets.",
    price: 99,
    currency: "EUR",
    image: "/images/refugio-30l.webp",
    label: null,
    inStock: true
  },
  {
    id: 2,
    name: "Black Hole Pack 32L",
    description: "Built from recycled polyester ripstop with a TPU laminate for serious weather protection.",
    price: 169,
    currency: "EUR",
    image: "/images/black-hole-32l.webp",
    label: "waterproof",
    inStock: true
  },
  {
    id: 3,
    name: "Altvia 28L",
    description: "A clean, lightweight hiking pack.",
    price: 139,
    currency: "EUR",
    image: "/images/altvia-28l.webp",
    label: "new",
    inStock: true
  },
  {
    id: 4,
    name: "Guidewater Backpack 29L",
    description: "Fully waterproof roll-top pack designed for fly fishing, kayaking, and any adventure where your gear cannot get wet.",
    price: 219,
    currency: "EUR",
    image: "/images/guidewater-29l.webp",
    label: "waterproof",
    inStock: true
  },
  {
    id: 5,
    name: "Arbor Lid Pack 28L",
    description: "Heritage-inspired design meets modern functionality.",
    price: 119,
    currency: "EUR",
    image: "/images/arbor-lid-28l.jpg",
    label: null,
    inStock: false
  },
  {
    id: 6,
    name: "Terravia Pack 36L — Alpine Edition",
    description: "High-alpine pack built for multi-day ridge traverses with removable hip belt and dual ice axe loops.",
    price: 249,
    currency: "EUR",
    image: "/images/terravia-36l-alpine.webp",
    label: "limited_edition",
    inStock: true
  },
  {
    id: 7,
    name: "Atom Sling 8L",
    description: "Compact sling for everyday carry.",
    price: 69,
    currency: "EUR",
    image: "/images/atom-sling-8l.webp",
    label: "new",
    inStock: true
  },
  {
    id: 8,
    name: "Descensionist 40L",
    description: "Ski touring pack with a diagonal ski carry system and avy tool pocket.",
    price: 189,
    currency: "EUR",
    image: "/images/descensionist-40l.webp",
    label: null,
    inStock: true
  },
  {
    id: 9,
    name: "Ultralight Black Hole Tote 27L",
    description: "Packs into its own pocket.",
    price: 79,
    currency: "EUR",
    image: "/images/ultralight-tote-27l.webp",
    label: null,
    inStock: true
  },
  {
    id: 10,
    name: "Refugio 26L",
    description: "Slightly smaller sibling of the Refugio 30L. Same clean lines, same recycled fabric.",
    price: 89,
    currency: "EUR",
    image: "/images/refugio-26l.webp",
    label: null,
    inStock: false
  },
  {
    id: 11,
    name: "Black Hole MLC 45L",
    description: "Maximum legal carry-on. Converts from backpack to suitcase with three access points.",
    price: 299,
    currency: "EUR",
    image: "/images/black-hole-mlc-45l.webp",
    label: "limited_edition",
    inStock: true
  },
  {
    id: 12,
    name: "Arbor Roll Top 30L",
    description: "Roll-top commuter pack with a clean silhouette.",
    price: 109,
    currency: "EUR",
    image: "/images/arbor-roll-top-30l.webp",
    label: null,
    inStock: true
  },
  {
    id: 13,
    name: "Altvia 22L",
    description: "Fast and light day hiker with minimalist feature set.",
    price: 119,
    currency: "EUR",
    image: "/images/altvia-22l.webp",
    label: "new",
    inStock: true
  },
  {
    id: 14,
    name: "SnowDrifter 30L — Backcountry Touring",
    description: "Purpose-built for backcountry skiing with dedicated avy tool access and diagonal ski carry.",
    price: 199,
    currency: "EUR",
    image: "/images/snowdrifter-30l.webp",
    label: "waterproof",
    inStock: false
  },
  {
    id: 15,
    name: "Atom 18L",
    description: "Daily driver.",
    price: 79,
    currency: "EUR",
    image: "/images/atom-18l.webp",
    label: null,
    inStock: true
  },
  {
    id: 16,
    name: "Guidewater Sling 15L",
    description: "Waterproof sling designed for wade fishing with welded roll-top main compartment.",
    price: 149,
    currency: "EUR",
    image: "/images/guidewater-sling-15l.webp",
    label: "waterproof",
    inStock: true
  }
];