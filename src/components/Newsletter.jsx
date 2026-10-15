import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { IconArrowRight, IconCheck } from './Icons.jsx'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    if (!valid) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <section className="section" aria-label="Newsletter signup">
      <div className="container">
        <Reveal variant="zoom">
          <div className="newsletter-panel">
            <div>
              <p className="eyebrow">The inside track</p>
              <h2 className="section-title">JOIN THE VITALABS LIST</h2>
              <p className="section-sub">
                Training protocols, early product drops, and 10% off your first order. One email a
                week — no noise, unsubscribe anytime.
              </p>
            </div>

            {subscribed ? (
              <p className="newsletter-success" role="status">
                <IconCheck size={20} />
                You&rsquo;re on the list. Watch your inbox for the welcome code.
              </p>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? 'newsletter-error' : undefined}
                />
                <button type="submit" className="btn btn-volt">
                  Get 10% off <IconArrowRight />
                </button>
                {error && (
                  <p id="newsletter-error" role="alert" style={{ color: 'var(--danger)', width: '100%', margin: 0 }}>
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
