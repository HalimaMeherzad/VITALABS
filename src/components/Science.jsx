import { useEffect, useRef, useState } from 'react'
import Bottle from './Bottle.jsx'
import Reveal from './Reveal.jsx'
import { useInView } from '../hooks/useInView.js'
import { IconCheck } from './Icons.jsx'

function useCountUp(target, active, duration = 1400) {
  const [value, setValue] = useState(0)
  const rafRef = useRef(0)

  useEffect(() => {
    if (!active) return undefined
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(eased * target))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [target, active, duration])

  return value
}

const STATS = [
  { value: 27, suffix: 'g', label: 'Avg protein / serving' },
  { value: 100, suffix: '%', label: 'Batches third-party tested' },
  { value: 0, suffix: '', label: 'Artificial dyes or fillers' },
]

const CHECKS = [
  { strong: 'Fully transparent labels.', rest: 'Every active dose is printed on the panel — nothing hidden in proprietary blends.' },
  { strong: 'Informed-Sport certified manufacturing.', rest: 'Produced in audited facilities with banned-substance controls.' },
  { strong: '30-day money-back guarantee.', rest: 'If a formula doesn\u2019t earn its place in your stack, we refund it. No forms, no fuss.' },
]

function StatCard({ stat, active }) {
  const value = useCountUp(stat.value, active)
  return (
    <div className="stat-card">
      <strong>
        {value}
        {stat.suffix}
      </strong>
      <span>{stat.label}</span>
    </div>
  )
}

export default function Science() {
  const [statsRef, statsInView] = useInView({ threshold: 0.3 })

  return (
    <section className="section science" id="science">
      <div className="container science-grid">
        <Reveal variant="left" className="science-art">
          <div className="science-ring" />
          <div className="science-ring r2" />
          <div className="bottle-wrap">
            <Bottle variant="bottle" accent="#d8ff3e" label="Creapure Creatine" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">The Vitalabs standard</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title">LAB-GRADE. NOTHING LESS.</h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="section-sub">
              Most brands chase margins. We chase certificates of analysis. Every raw material is
              identity-tested on arrival, every finished lot is screened before it ships, and every
              label matches what&rsquo;s actually inside.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="stat-grid" ref={statsRef}>
              {STATS.map((stat) => (
                <StatCard key={stat.label} stat={stat} active={statsInView} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <ul className="check-list">
              {CHECKS.map((check) => (
                <li key={check.strong}>
                  <IconCheck size={18} />
                  <span>
                    <strong>{check.strong}</strong> {check.rest}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
