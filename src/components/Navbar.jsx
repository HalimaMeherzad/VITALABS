import { useEffect, useRef, useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { IconBag, IconMenu, IconX } from './Icons.jsx'

const LINKS = [
  { href: '#products', label: 'Shop' },
  { href: '#science', label: 'Science' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [pop, setPop] = useState(false)
  const progressRef = useRef(null)
  const prevCount = useRef(count)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8)
        const max = document.documentElement.scrollHeight - window.innerHeight
        const ratio = max > 0 ? window.scrollY / max : 0
        if (progressRef.current) progressRef.current.style.setProperty('--scroll', String(ratio))
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    if (count > prevCount.current) {
      setPop(true)
      const t = setTimeout(() => setPop(false), 500)
      prevCount.current = count
      return () => clearTimeout(t)
    }
    prevCount.current = count
    return undefined
  }, [count])

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#top" className="logo" aria-label="VITALABS home">
            <span className="logo-mark">V</span>
            VITAL<em>ABS</em>
          </a>

          <nav aria-label="Primary">
            <ul className="nav-links">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <button type="button" className="cart-btn" onClick={openCart} aria-label={`Open cart, ${count} items`}>
              <IconBag />
              <span className="cart-label">Cart</span>
              {count > 0 && <span className={`cart-count${pop ? ' pop' : ''}`}>{count}</span>}
            </button>
            <button
              type="button"
              className="hamburger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>
        </div>
        <div className="scroll-progress" ref={progressRef} />
      </header>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
