import Reveal from './Reveal.jsx'
import { IconFlask, IconLeaf, IconShield, IconTruck } from './Icons.jsx'

const BENEFITS = [
  {
    icon: IconFlask,
    title: 'Clinically Dosed',
    text: 'Every formula matches the doses used in published research — never pixie-dusted, never hidden behind blends.',
  },
  {
    icon: IconShield,
    title: 'Batch Tested',
    text: 'Each production lot is screened by independent labs for purity, heavy metals, and banned substances.',
  },
  {
    icon: IconLeaf,
    title: 'Clean Ingredients',
    text: 'No artificial dyes, no added sugar traps, no fillers. If it doesn\u2019t serve your training, it doesn\u2019t go in.',
  },
  {
    icon: IconTruck,
    title: 'Fast, Free Shipping',
    text: 'Free express shipping on orders over $75, dispatched within 24 hours from our domestic warehouses.',
  },
]

export default function Benefits() {
  return (
    <section className="section" aria-label="Why Vitalabs">
      <div className="container">
        <div className="benefits-grid">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 90}>
              <article className="benefit-card">
                <div className="benefit-icon">
                  <benefit.icon size={24} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
