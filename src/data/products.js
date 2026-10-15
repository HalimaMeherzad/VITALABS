// VITALABS product catalog — demo data
// accent drives the SVG bottle art; flavors render as selectable dots

export const PRODUCTS = [
  {
    id: 'whey-isolate-900',
    name: 'Whey Isolate 900',
    tagline: '27g fast-absorbing isolate per scoop. Zero added sugar, lactose-filtered.',
    category: 'Protein',
    price: 54.99,
    compareAt: 64.99,
    rating: 4.9,
    reviews: 2314,
    badge: 'Best Seller',
    accent: '#d8ff3e',
    variant: 'bottle',
    stats: { protein: '27g', servings: '30', kcal: '110' },
    flavors: [
      { name: 'Vanilla Frost', color: '#f2e9d8' },
      { name: 'Double Chocolate', color: '#5a3b28' },
      { name: 'Strawberry Milk', color: '#f4a7b9' },
    ],
    description:
      'Cold-filtered whey isolate with 27g protein per serving and a complete amino profile. Micro-filtered to remove excess lactose and fat, engineered to mix clear with zero clumps.',
  },
  {
    id: 'creatine-monohydrate-500',
    name: 'Creapure Creatine',
    tagline: '500g micronized creatine monohydrate. 99.99% pure, single-ingredient.',
    category: 'Strength',
    price: 39.99,
    compareAt: null,
    rating: 4.8,
    reviews: 1876,
    badge: null,
    accent: '#7dd8f7',
    variant: 'jar',
    stats: { protein: '5g', servings: '100', kcal: '0' },
    flavors: [{ name: 'Unflavored', color: '#e8e8e8' }],
    description:
      'Micronized Creapure-grade creatine monohydrate, batch-tested for purity. Supports strength, power output, and lean muscle when taken daily at 3–5g.',
  },
  {
    id: 'pre-workout-igniter',
    name: 'Igniter Pre-Workout',
    tagline: '200mg caffeine, 6g citrulline, 3.2g beta-alanine. No crash, no jitters.',
    category: 'Energy',
    price: 44.99,
    compareAt: 49.99,
    rating: 4.7,
    reviews: 1542,
    badge: 'New',
    accent: '#ff6b57',
    variant: 'bottle',
    stats: { protein: '6g', servings: '25', kcal: '10' },
    flavors: [
      { name: 'Sour Volt', color: '#d8ff3e' },
      { name: 'Blue Razz', color: '#4f8ef7' },
      { name: 'Blood Orange', color: '#ff6b57' },
    ],
    description:
      'A fully-dosed pre-workout built on clinical citrulline and beta-alanine doses with a clean 200mg caffeine lift. Transparent label — every dose on the panel, nothing hidden.',
  },
  {
    id: 'bcaa-recovery',
    name: 'BCAA Recovery 2:1:1',
    tagline: '8g BCAAs + electrolytes for intra-workout hydration and faster recovery.',
    category: 'Recovery',
    price: 34.99,
    compareAt: null,
    rating: 4.6,
    reviews: 987,
    badge: null,
    accent: '#b18cff',
    variant: 'bottle',
    stats: { protein: '8g', servings: '30', kcal: '15' },
    flavors: [
      { name: 'Watermelon', color: '#ff7d9c' },
      { name: 'Grape Surge', color: '#b18cff' },
    ],
    description:
      'Ferment-derived 2:1:1 BCAAs with added sodium, potassium, and magnesium to replace what you sweat out. Light, refreshing, built for long sessions.',
  },
  {
    id: 'omega-3-fish-oil',
    name: 'Omega-3 Ultra',
    tagline: 'Triple-strength EPA/DHA softgels. Wild-caught, molecularly distilled.',
    category: 'Wellness',
    price: 29.99,
    compareAt: null,
    rating: 4.8,
    reviews: 1204,
    badge: null,
    accent: '#4fd1a5',
    variant: 'jar',
    stats: { protein: '1.2g', servings: '90', kcal: '15' },
    flavors: [{ name: 'Lemon', color: '#f7e08a' }],
    description:
      '1,200mg combined EPA+DHA per serving from wild-caught anchovy oil, distilled for purity and IFOS-certified. Supports heart, joint, and brain health.',
  },
  {
    id: 'vitamin-d3-k2',
    name: 'D3 + K2 Complex',
    tagline: '5,000 IU D3 with 200mcg K2-MK7 for immune and bone support.',
    category: 'Wellness',
    price: 24.99,
    compareAt: null,
    rating: 4.9,
    reviews: 2130,
    badge: 'Staff Pick',
    accent: '#f7c948',
    variant: 'jar',
    stats: { protein: '—', servings: '120', kcal: '0' },
    flavors: [{ name: 'Unflavored', color: '#e8e8e8' }],
    description:
      'High-potency vitamin D3 paired with K2-MK7 in an MCT oil base for absorption. Third-party tested for potency — one softgel a day.',
  },
  {
    id: 'protein-bar-crate',
    name: 'Fuel Bar Crate',
    tagline: '12 x 20g protein bars. Crisp texture, no sugar alcohol bloat.',
    category: 'Protein',
    price: 32.99,
    compareAt: 38.99,
    rating: 4.5,
    reviews: 764,
    badge: null,
    accent: '#f7a26a',
    variant: 'bar',
    stats: { protein: '20g', servings: '12', kcal: '210' },
    flavors: [
      { name: 'Chocolate Crunch', color: '#5a3b28' },
      { name: 'Salted Caramel', color: '#d9a05b' },
    ],
    description:
      'A bakery-grade protein bar with 20g whey crisp and a chocolate shell that actually snaps. No sugar alcohols — no digestive surprises.',
  },
  {
    id: 'electrolyte-hydration',
    name: 'Hydro Fuel Electrolytes',
    tagline: '1,000mg sodium + full trace mineral profile. Zero sugar sticks.',
    category: 'Recovery',
    price: 27.99,
    compareAt: null,
    rating: 4.7,
    reviews: 1093,
    badge: null,
    accent: '#8be9fd',
    variant: 'shaker',
    stats: { protein: '—', servings: '40', kcal: '5' },
    flavors: [
      { name: 'Lime Lightning', color: '#d8ff3e' },
      { name: 'Peach Mango', color: '#ffb37d' },
    ],
    description:
      'A training-day hydration formula with 1,000mg sodium, potassium, and 72 trace minerals per stick. Zero sugar, zero dyes — just fuel.',
  },
]

export const CATEGORIES = ['All', 'Protein', 'Strength', 'Energy', 'Recovery', 'Wellness']

export const FREE_SHIPPING_THRESHOLD = 75

export const formatPrice = (n) => `$${n.toFixed(2)}`
