import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { FREE_SHIPPING_THRESHOLD, PRODUCTS, formatPrice } from '../data/products.js'
import Bottle from './Bottle.jsx'
import { IconBag, IconCheck, IconTrash, IconX } from './Icons.jsx'

function resolveProduct(id) {
  return PRODUCTS.find((p) => p.id === id)
}

export default function CartDrawer() {
  const { items, subtotal, isOpen, closeCart, updateQty, removeItem, clearCart } = useCart()
  const [view, setView] = useState('cart') // 'cart' | 'success'
  const [orderNo, setOrderNo] = useState('')

  useEffect(() => {
    if (!isOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, closeCart])

  const handleCheckout = () => {
    setOrderNo(`VL-${Math.floor(100000 + Math.random() * 900000)}`)
    setView('success')
  }

  const handleContinue = () => {
    clearCart()
    closeCart()
    setTimeout(() => setView('cart'), 500)
  }

  const remaining = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0)
  const progress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100)

  return (
    <>
      <div
        className={`overlay${isOpen ? ' open' : ''}`}
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside
        className={`drawer${isOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {view === 'success' ? (
          <div className="checkout-success">
            <div className="success-ring">
              <IconCheck size={40} />
            </div>
            <h4>ORDER PLACED</h4>
            <p>
              Demo order <strong>{orderNo}</strong> confirmed. No payment was processed — this is a
              showcase checkout.
            </p>
            <button type="button" className="btn btn-volt" onClick={handleContinue}>
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            <div className="drawer-head">
              <h3>
                Your cart <span>({items.length})</span>
              </h3>
              <button type="button" className="icon-btn" onClick={closeCart} aria-label="Close cart">
                <IconX />
              </button>
            </div>

            {items.length > 0 && (
              <div className="ship-progress">
                {remaining > 0 ? (
                  <span>
                    You&rsquo;re <strong>{formatPrice(remaining)}</strong> away from free express
                    shipping
                  </span>
                ) : (
                  <span>
                    <strong>Free express shipping unlocked</strong> — nice one.
                  </span>
                )}
                <div className="ship-bar">
                  <i style={{ width: `${progress}%` }} />
                </div>
              </div>
            )}

            <div className="drawer-body">
              {items.length === 0 ? (
                <div className="cart-empty">
                  <IconBag size={52} />
                  <p>Your cart is empty. Time to fix that.</p>
                  <button type="button" className="btn btn-volt" onClick={closeCart}>
                    Browse the lineup
                  </button>
                </div>
              ) : (
                items.map((item) => {
                  const product = resolveProduct(item.id)
                  if (!product) return null
                  return (
                    <div className="cart-item" key={`${item.id}-${item.flavor}`}>
                      <div className="cart-thumb">
                        <Bottle variant={product.variant} accent={product.accent} label={product.name} />
                      </div>
                      <div>
                        <p className="cart-item-name">{product.name}</p>
                        <p className="cart-item-flavor">{item.flavor}</p>
                        <p className="cart-item-price">{formatPrice(product.price * item.qty)}</p>
                        <div className="qty-stepper" aria-label={`Quantity for ${product.name}`}>
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, item.flavor, item.qty - 1)}
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span aria-live="polite">{item.qty}</span>
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, item.flavor, item.qty + 1)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => removeItem(item.id, item.flavor)}
                        aria-label={`Remove ${product.name} (${item.flavor}) from cart`}
                      >
                        <IconTrash />
                      </button>
                    </div>
                  )
                })
              )}
            </div>

            {items.length > 0 && (
              <div className="drawer-foot">
                <div className="subtotal-row">
                  <span>Subtotal</span>
                  <strong>{formatPrice(subtotal)}</strong>
                </div>
                <button type="button" className="btn btn-volt" onClick={handleCheckout}>
                  Checkout — {formatPrice(subtotal)}
                </button>
                <p className="drawer-note">Demo checkout — no payment is processed.</p>
              </div>
            )}
          </>
        )}
      </aside>
    </>
  )
}
