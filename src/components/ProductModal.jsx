import { useEffect, useRef, useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../data/products.js'
import Bottle from './Bottle.jsx'
import { IconBag, IconCheck, IconShield, IconStar, IconTruck, IconX } from './Icons.jsx'

export default function ProductModal({ product, onClose }) {
  const { addItem, openCart } = useCart()
  const [flavorIdx, setFlavorIdx] = useState(0)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const panelRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const panel = panelRef.current
    const focusable = panel?.querySelector('button, [href], input')
    focusable?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  const handleAdd = () => {
    addItem(product.id, product.flavors[flavorIdx]?.name, qty)
    setAdded(true)
    setTimeout(() => {
      onClose()
      openCart()
    }, 450)
  }

  const filled = Math.round(product.rating)

  return (
    <div className="modal open" role="dialog" aria-modal="true" aria-label={`${product.name} quick view`}>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-panel" ref={panelRef}>
        <button type="button" className="icon-btn modal-close" onClick={onClose} aria-label="Close quick view">
          <IconX />
        </button>

        <div className="modal-media">
          <div className="bottle-wrap">
            <Bottle variant={product.variant} accent={product.accent} label={product.name} />
          </div>
        </div>

        <div className="modal-info">
          <div>
            <p className="product-cat">{product.category}</p>
            <h3>{product.name}</h3>
          </div>

          <div className="modal-price-row">
            <p className="price">
              {product.compareAt && <s>{formatPrice(product.compareAt)}</s>}
              {formatPrice(product.price)}
            </p>
            <span className="stars" aria-label={`Rated ${product.rating} out of 5`}>
              {Array.from({ length: 5 }, (_, i) => (
                <IconStar key={i} size={14} filled={i < filled} />
              ))}
              <small>
                {product.rating} · {product.reviews.toLocaleString()} reviews
              </small>
            </span>
          </div>

          <p className="modal-desc">{product.description}</p>

          <div>
            <p className="product-cat" style={{ marginBottom: 10 }}>
              Flavor — {product.flavors[flavorIdx]?.name}
            </p>
            <div className="flavor-picker" role="group" aria-label="Choose flavor">
              {product.flavors.map((flavor, i) => (
                <button
                  key={flavor.name}
                  type="button"
                  className={`flavor-pill${i === flavorIdx ? ' selected' : ''}`}
                  onClick={() => setFlavorIdx(i)}
                  aria-pressed={i === flavorIdx}
                >
                  <i style={{ background: flavor.color }} />
                  {flavor.name}
                </button>
              ))}
            </div>
          </div>

          <ul className="modal-perks">
            <li>
              <IconTruck size={16} /> Free express shipping on orders over $75
            </li>
            <li>
              <IconShield size={16} /> Third-party batch tested · 30-day guarantee
            </li>
          </ul>

          <div className="modal-actions">
            <div className="modal-qty">
              <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
                −
              </button>
              <span aria-live="polite">{qty}</span>
              <button type="button" onClick={() => setQty((q) => Math.min(99, q + 1))} aria-label="Increase quantity">
                +
              </button>
            </div>
            <button type="button" className={`btn btn-volt add-btn${added ? ' added' : ''}`} onClick={handleAdd}>
              {added ? (
                <>
                  <IconCheck size={16} /> Added
                </>
              ) : (
                <>
                  <IconBag size={16} /> Add to cart — {formatPrice(product.price * qty)}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
