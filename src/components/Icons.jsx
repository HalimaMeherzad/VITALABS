// Inline stroke icon set — keeps the project dependency-free.
// All icons inherit currentColor.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const IconCheck = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export const IconStar = ({ size = 15, filled = true }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 2.5l2.9 6.2 6.8.8-5 4.7 1.3 6.7L12 17.3 6 21l1.3-6.8-5-4.7 6.8-.8L12 2.5z" />
  </svg>
)

export const IconPlus = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const IconMinus = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <path d="M5 12h14" />
  </svg>
)

export const IconX = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

export const IconTrash = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14zM10 11v6M14 11v6" />
  </svg>
)

export const IconBag = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <path d="M6 7h12l1.2 13H4.8L6 7z" />
    <path d="M9 10V6a3 3 0 0 1 6 0v4" />
  </svg>
)

export const IconEye = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

export const IconFlask = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <path d="M9 3h6M10 3v6L4.7 18a2 2 0 0 0 1.8 3h11a2 2 0 0 0 1.8-3L14 9V3" />
    <path d="M7.5 14h9" />
  </svg>
)

export const IconShield = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <path d="M12 2 4 5.5V11c0 5 3.4 9.4 8 10.5 4.6-1.1 8-5.5 8-10.5V5.5L12 2z" />
    <path d="m8.7 11.6 2.3 2.3 4.3-4.5" />
  </svg>
)

export const IconBolt = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <path d="M13 2 4.5 13.5H11L9.5 22 19 10h-6.5L13 2z" />
  </svg>
)

export const IconLeaf = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <path d="M5 19c0-8.5 5.5-14 14.5-14C19.5 14.5 14 19 5 19z" />
    <path d="M5 19c3-5.5 7-9.5 11-11.5" />
  </svg>
)

export const IconTruck = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <path d="M1 6h13v11H1zM14 10h4.5L22 13.5V17h-8" />
    <circle cx="6" cy="18.5" r="1.8" />
    <circle cx="17.5" cy="18.5" r="1.8" />
  </svg>
)

export const IconMenu = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <path d="M3 6h18M3 12h18M3 18h12" />
  </svg>
)

export const IconArrowRight = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <path d="M4 12h16m-6-6 6 6-6 6" />
  </svg>
)
