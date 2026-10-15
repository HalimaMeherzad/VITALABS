import { useEffect, useRef } from 'react'
import Bottle from './Bottle.jsx'
import Reveal from './Reveal.jsx'
import { IconArrowRight, IconBolt, IconFlask, IconShield } from './Icons.jsx'

const HERO_PRODUCT = { variant: 'bottle', accent: '#d8ff3e', label: 'Whey Isolate 900' }

export default function Hero() {
  const parallaxRef = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return undefined

    const onMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 2
      const y = (e.clientY / innerHeight - 0.5) * 2
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        if (parallaxRef.current) {
          parallaxRef.current.style.transform = `translate3d(${x * 14}px, ${y * 10}px, 0) rotateY(${x * 6}deg)`
        }
      })
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal>
            <span className="hero-kicker">
              <span className="dot" />
              Lab-grade supplements · Batch tested
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="hero-title">
              UNLEASH
              <br />
              <span className="stroke">YOUR</span>
              <br />
              <span className="volt">POTENTIAL.</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="hero-sub">
              Clinically dosed protein, creatine, and recovery formulas — engineered for athletes
              who refuse to coast. No fillers, no dyes, no proprietary blends. Just results you
              can measure.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="hero-ctas">
              <a href="#products" className="btn btn-volt">
                Shop the lineup <IconArrowRight />
              </a>
              <a href="#science" className="btn btn-ghost">
                Explore the science
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>12k+</strong>
                <span>Athletes fueled</span>
              </div>
              <div className="hero-stat">
                <strong>100%</strong>
                <span>Batch tested</span>
              </div>
              <div className="hero-stat">
                <strong>4.9/5</strong>
                <span>Average rating</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal variant="zoom" delay={150} className="hero-art">
          <div className="halo" />
          <div className="orbit-ring" />
          <div ref={parallaxRef} style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}>
            <div className="bottle-float">
              <Bottle
                variant={HERO_PRODUCT.variant}
                accent={HERO_PRODUCT.accent}
                label={HERO_PRODUCT.label}
              />
            </div>
          </div>

          <span className="spec-chip c1">
            <IconFlask size={16} /> 27g <strong>protein</strong>
          </span>
          <span className="spec-chip c2">
            <IconShield size={16} /> 3rd-party <strong>tested</strong>
          </span>
          <span className="spec-chip c3">
            <IconBolt size={16} /> Instant <strong>energy</strong>
          </span>
        </Reveal>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        Scroll
      </div>
    </section>
  )
}
