import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { PRODUCTS } from '../data/products.js'

const CartContext = createContext(null)
const STORAGE_KEY = 'vitalabs-cart'

function readStoredCart() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((i) => i && i.id && i.qty > 0) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStoredCart)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // storage unavailable (private mode) — cart still works in-memory
    }
  }, [items])

  const addItem = useCallback((productId, flavorName, qty = 1) => {
    const product = PRODUCTS.find((p) => p.id === productId)
    if (!product) return
    const flavor = flavorName || product.flavors[0]?.name || 'Default'

    setItems((prev) => {
      const idx = prev.findIndex((i) => i.id === productId && i.flavor === flavor)
      if (idx >= 0) {
        const next = [...prev]
        next[idx] = { ...next[idx], qty: Math.min(next[idx].qty + qty, 99) }
        return next
      }
      return [...prev, { id: productId, flavor, qty }]
    })
  }, [])

  const removeItem = useCallback((productId, flavor) => {
    setItems((prev) => prev.filter((i) => !(i.id === productId && i.flavor === flavor)))
  }, [])

  const updateQty = useCallback((productId, flavor, qty) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => !(i.id === productId && i.flavor === flavor))
        : prev.map((i) => (i.id === productId && i.flavor === flavor ? { ...i, qty: Math.min(qty, 99) } : i)),
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])
  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const { count, subtotal } = useMemo(() => {
    let c = 0
    let s = 0
    for (const item of items) {
      const product = PRODUCTS.find((p) => p.id === item.id)
      if (!product) continue
      c += item.qty
      s += product.price * item.qty
    }
    return { count: c, subtotal: s }
  }, [items])

  const value = useMemo(
    () => ({ items, count, subtotal, isOpen, addItem, removeItem, updateQty, clearCart, openCart, closeCart }),
    [items, count, subtotal, isOpen, addItem, removeItem, updateQty, clearCart, openCart, closeCart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
