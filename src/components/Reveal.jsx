import { useInView } from '../hooks/useInView.js'

export default function Reveal({ as: Tag = 'div', className = '', variant = '', delay = 0, children, ...rest }) {
  const [ref, inView] = useInView()
  const classes = ['reveal', variant && `rv-${variant}`, inView && 'is-visible', className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag ref={ref} className={classes} style={{ '--d': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}
