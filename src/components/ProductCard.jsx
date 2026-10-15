import { useRef, useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../data/products.js'
import Bottle from './Bottle.jsx'
import { IconBag, IconCheck, IconEye, IconStar } from './Icons.jsx'

const MAX_TILT = 7

function Stars({ rating, reviews }) {
  const filled = Math.round(rating)
  return (
    <span className="stars" aria-label={`Rated ${rating} out of 5 from ${reviews} reviews`}>
      {Array.from({ length: 5 }, (_, i) => (
        <IconStar key={i} filled={i < filled} />
      ))}
      <small>
        {rating} ({reviews.toLocaleString()})
      </small>
    </span>
  )
}

export default function ProductCard({ product, onQuickView }) {
  const { addItem } = useCart()
  const [flavorIdx, setFlavorIdx] = useState(0)
  const [added, setAdded] = useState(false)
  const cardRef = useRef(null)
  const rafRef = useRef(0)
  const resetTimer = useRef(0)

  const handleMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      card.style.transform = `perspective(900px) rotateX(${(-py * MAX_TILT).toFixed(2)}deg) rotateY(${(px * MAX_TILT).toFixed(2)}deg) translateY(-4px)`
    })
  }

  const handleLeave = () => {
    const card = cardRef.current
    if (!card) return
    cancelAnimationFrame(rafRef.current)
    card.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
    card.style.transform = ''
    setTimeout(() => {
      if (card) card.style.transition = ''
    }, 500)
  }

  const handleAdd = () => {
    addItem(product.id, product.flavors[flavorIdx]?.name)
    setAdded(true)
    clearTimeout(resetTimer.current)
    resetTimer.current = setTimeout(() => setAdded(false), 1400)
  }

  return (
    <article
      className="product-card"
      ref={cardRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <div className="product-media">
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <button
          type="button"
          className="quick-view"
          onClick={() => onQuickView(product)}
          aria-label={`Quick view ${product.name}`}
        >
          <IconEye />
        </button>
        <div className="bottle-wrap">
          <Bottle variant={product.variant} accent={product.accent} label={product.name} />
        </div>
      </div>

      <div className="product-info">
        <p className="product-cat">{product.category}</p>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-tagline">{product.tagline}</p>

        <div className="product-meta">
          <Stars rating={product.rating} reviews={product.reviews} />
        </div>

        {product.flavors.length > 1 && (
          <div className="flavors" role="group" aria-label="Choose flavor">
            {product.flavors.map((flavor, i) => (
              <button
                key={flavor.name}
                type="button"
                className={`flavor-dot${i === flavorIdx ? ' selected' : ''}`}
                style={{ background: flavor.color }}
                onClick={() => setFlavorIdx(i)}
                aria-label={`Flavor: ${flavor.name}`}
                aria-pressed={i === flavorIdx}
                title={flavor.name}
              />
            ))}
          </div>
        )}

        <div className="product-foot">
          <p className="price">
            {product.compareAt && <s>{formatPrice(product.compareAt)}</s>}
            {formatPrice(product.price)}
          </p>
          <button
            type="button"
            className={`add-btn${added ? ' added' : ''}`}
            onClick={handleAdd}
          >
            {added ? (
              <>
                <IconCheck size={15} /> <span className="add-label">Added</span>
              </>
            ) : (
              <>
                <IconBag size={15} /> <span className="add-label">Add to cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  )
}
