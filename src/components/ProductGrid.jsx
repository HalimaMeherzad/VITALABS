import { useMemo, useState } from 'react'
import { CATEGORIES, PRODUCTS } from '../data/products.js'
import ProductCard from './ProductCard.jsx'
import Reveal from './Reveal.jsx'

export default function ProductGrid({ onQuickView }) {
  const [category, setCategory] = useState('All')

  const visible = useMemo(
    () => (category === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === category)),
    [category],
  )

  return (
    <section className="section" id="products">
      <div className="container">
        <div className="section-head split">
          <div>
            <Reveal>
              <p className="eyebrow">The lineup</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title">BUILT FOR EVERY REP</h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="section-sub">
                Eight core formulas covering protein, strength, energy, recovery, and daily
                wellness. Pick your goal — we handle the chemistry.
              </p>
            </Reveal>
          </div>
          <Reveal delay={200} className="filters" role="group" aria-label="Filter products by category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-chip${cat === category ? ' active' : ''}`}
                onClick={() => setCategory(cat)}
                aria-pressed={cat === category}
              >
                {cat}
              </button>
            ))}
          </Reveal>
        </div>

        <div className="product-grid">
          {visible.map((product, i) => (
            <Reveal key={product.id} delay={Math.min(i * 70, 420)}>
              <ProductCard product={product} onQuickView={onQuickView} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
