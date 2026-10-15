import Reveal from './Reveal.jsx'
import { IconStar } from './Icons.jsx'

const TESTIMONIALS = [
  {
    quote:
      'The whey isolate is the first protein that actually mixes clear and doesn\u2019t sit heavy. Two scoops a day for eight months — recovery is measurably better.',
    name: 'Marcus Reid',
    role: 'Competitive powerlifter · 83kg class',
    rating: 5,
  },
  {
    quote:
      'I\u2019ve been burned by underdosed pre-workouts for years. Igniter lists every dose on the panel and it shows — clean energy, zero crash, PRs followed.',
    name: 'Elena Vargas',
    role: 'CrossFit L2 coach',
    rating: 5,
  },
  {
    quote:
      'As a dietitian I read certificates of analysis before marketing copy. Vitalabs sends theirs without asking. That\u2019s the entire reason I recommend them.',
    name: 'Dr. Priya Nair',
    role: 'Sports nutritionist, RD',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">Athlete verified</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title">TRUSTED IN THE TRENCHES</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="section-sub">
              Real reviews from verified buyers — coaches, competitors, and everyday athletes who
              put our formulas through the wringer.
            </p>
          </Reveal>
        </div>

        <div className="testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 110}>
              <article className="testimonial-card">
                <span className="stars" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }, (_, s) => (
                    <IconStar key={s} size={15} />
                  ))}
                </span>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="testimonial-who">
                  <span className="avatar" aria-hidden="true">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
