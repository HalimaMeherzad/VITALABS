const ITEMS = [
  'Whey Isolate',
  'Creatine Monohydrate',
  'Pre-Workout',
  'BCAA Recovery',
  'Electrolytes',
  'Daily Vitamins',
  'Third-Party Tested',
  'Free Shipping Over $75',
]

export default function Marquee() {
  const row = (key) => (
    <span key={key} aria-hidden={key === 1}>
      {ITEMS.map((item) => (
        <span key={`${key}-${item}`}>{item}</span>
      ))}
    </span>
  )

  return (
    <div className="marquee" role="marquee" aria-label="Product highlights ticker">
      <div className="marquee-track">
        {row(0)}
        {row(1)}
      </div>
    </div>
  )
}
