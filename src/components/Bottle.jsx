// Parameterized vector renders of VITALABS packaging.
// One component drives the hero bottle, product cards, modal, cart thumbs, and science section.

import { useId } from 'react'

function Label({ x, y, w, h, accent, label, uid }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={6} fill={accent} />
      <rect x={x} y={y} width={w} height={h} rx={6} fill={`url(#sheen-${uid})`} opacity={0.25} />
      <text
        x={x + w / 2}
        y={y + h * 0.36}
        textAnchor="middle"
        fontFamily="'Archivo', sans-serif"
        fontWeight={900}
        fontSize={Math.max(w * 0.16, 9)}
        letterSpacing="0.06em"
        fill="#0b0d10"
      >
        VITALABS
      </text>
      <text
        x={x + w / 2}
        y={y + h * 0.62}
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight={700}
        fontSize={Math.max(w * 0.085, 5.5)}
        letterSpacing="0.04em"
        fill="#0b0d10"
        opacity={0.85}
      >
        {label.toUpperCase().slice(0, 22)}
      </text>
      <line
        x1={x + w * 0.2}
        y1={y + h * 0.76}
        x2={x + w * 0.8}
        y2={y + h * 0.76}
        stroke="#0b0d10"
        strokeWidth={1.4}
        opacity={0.5}
      />
    </g>
  )
}

function BottleShape({ accent, label, uid }) {
  return (
    <g>
      {/* shadow */}
      <ellipse cx={100} cy={262} rx={52} ry={9} fill="#000" opacity={0.45} />
      {/* cap */}
      <rect x={78} y={14} width={44} height={26} rx={6} fill="#20242b" />
      <rect x={78} y={20} width={44} height={3} fill="#2e333c" />
      <rect x={78} y={28} width={44} height={3} fill="#2e333c" />
      {/* neck ring */}
      <rect x={72} y={40} width={56} height={10} rx={5} fill={accent} opacity={0.9} />
      {/* shoulder + body */}
      <path
        d="M72 50 L128 50 C140 62 146 74 146 90 L146 236 C146 252 136 260 122 260 L78 260 C64 260 54 252 54 236 L54 90 C54 74 60 62 72 50 Z"
        fill={`url(#body-${uid})`}
      />
      {/* side sheen */}
      <path
        d="M64 92 C64 76 68 66 76 56 L84 56 C74 68 70 80 70 96 L70 230 C70 242 72 250 76 256 L70 256 C64 250 62 242 62 230 Z"
        fill="#fff"
        opacity={0.07}
      />
      <Label x={62} y={120} w={76} h={64} accent={accent} label={label} uid={uid} />
      {/* bottom accent stripe */}
      <rect x={54} y={240} width={92} height={7} fill={accent} opacity={0.85} />
    </g>
  )
}

function Jar({ accent, label, uid }) {
  return (
    <g>
      <ellipse cx={100} cy={238} rx={62} ry={10} fill="#000" opacity={0.45} />
      {/* lid */}
      <path d="M46 40 L154 40 L150 66 L50 66 Z" fill="#20242b" />
      <rect x={46} y={52} width={108} height={4} fill="#2e333c" />
      {/* jar body */}
      <path
        d="M50 66 L150 66 L150 212 C150 226 140 234 126 234 L74 234 C60 234 50 226 50 212 Z"
        fill={`url(#body-${uid})`}
      />
      <rect x={56} y={72} width={10} height={150} rx={5} fill="#fff" opacity={0.06} />
      <Label x={62} y={104} w={76} h={62} accent={accent} label={label} uid={uid} />
      <rect x={50} y={216} width={100} height={6} fill={accent} opacity={0.85} />
    </g>
  )
}

function Bar({ accent, label, uid }) {
  return (
    <g>
      <ellipse cx={100} cy={206} rx={74} ry={8} fill="#000" opacity={0.45} />
      {/* wrapper */}
      <path
        d="M26 96 L174 96 L168 196 L32 196 Z"
        fill={`url(#body-${uid})`}
      />
      {/* crimped ends */}
      <path d="M26 96 L174 96 L172 108 L28 108 Z" fill={accent} opacity={0.9} />
      <path d="M32 196 L168 196 L167 184 L33 184 Z" fill={accent} opacity={0.9} />
      {/* wrapper ridges */}
      <line x1={40} y1={112} x2={42} y2={180} stroke="#fff" strokeWidth={2} opacity={0.06} />
      <line x1={160} y1={112} x2={158} y2={180} stroke="#fff" strokeWidth={2} opacity={0.06} />
      <Label x={56} y={118} w={88} h={56} accent={accent} label={label} uid={uid} />
    </g>
  )
}

function Shaker({ accent, label, uid }) {
  return (
    <g>
      <ellipse cx={100} cy={252} rx={54} ry={8} fill="#000" opacity={0.45} />
      {/* flip cap */}
      <rect x={74} y={26} width={52} height={20} rx={9} fill="#20242b" />
      <rect x={120} y={18} width={18} height={14} rx={6} fill={accent} />
      {/* lid */}
      <path d="M66 46 L134 46 L130 64 L70 64 Z" fill="#20242b" />
      {/* body — tapered shaker cup */}
      <path
        d="M70 64 L130 64 L140 226 C141 242 132 250 118 250 L82 250 C68 250 59 242 60 226 Z"
        fill={`url(#body-${uid})`}
      />
      <path d="M68 76 C66 120 66 170 70 224 L76 224 C72 170 72 120 74 76 Z" fill="#fff" opacity={0.07} />
      <Label x={68} y={116} w={64} h={58} accent={accent} label={label} uid={uid} />
      <rect x={61} y={228} width={78} height={6} fill={accent} opacity={0.85} />
    </g>
  )
}

const VARIANTS = { bottle: BottleShape, jar: Jar, bar: Bar, shaker: Shaker }

export default function Bottle({ variant = 'bottle', accent = '#d8ff3e', label = 'VITALABS', className = '' }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')
  const Shape = VARIANTS[variant] || BottleShape

  return (
    <svg
      viewBox="0 0 200 280"
      className={className}
      role="img"
      aria-label={`VITALABS ${label} packaging`}
      width="100%"
    >
      <defs>
        <linearGradient id={`body-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2a2f38" />
          <stop offset="45%" stopColor="#171b21" />
          <stop offset="100%" stopColor="#0d1015" />
        </linearGradient>
        <linearGradient id={`sheen-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="60%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <Shape accent={accent} label={label} uid={uid} />
    </svg>
  )
}
