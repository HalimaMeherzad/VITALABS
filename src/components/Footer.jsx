const COLUMNS = [
  {
    title: 'Shop',
    links: ['Protein', 'Strength', 'Energy', 'Recovery', 'Wellness'],
  },
  {
    title: 'Company',
    links: ['Our science', 'Certifications', 'Athletes', 'Careers'],
  },
  {
    title: 'Support',
    links: ['FAQ', 'Shipping & returns', 'Subscriptions', 'Contact us'],
  },
]

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="logo" aria-label="VITALABS home">
              <span className="logo-mark">V</span>
              VITAL<em>ABS</em>
            </a>
            <p>
              Lab-grade sports supplements, batch-tested for purity. Built in audited facilities,
              backed by a 30-day guarantee.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#top">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} VITALABS. All rights reserved.</span>
          <span>Demo storefront — no real orders are processed.</span>
        </div>
      </div>
    </footer>
  )
}
