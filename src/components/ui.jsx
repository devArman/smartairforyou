import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight, ArrowUpRight, Building2, Check, ChevronDown, Circle, Clock, Fan, Flame, MapPin,
  MessageSquare, Phone, Repeat, ShieldCheck, Snowflake, Sparkles, Star, Sun, Thermometer, Wind, Wrench,
} from 'lucide-react'

const Icons = {
  ArrowRight, ArrowUpRight, Building2, Check, ChevronDown, Circle, Clock, Fan, Flame, MapPin,
  MessageSquare, Phone, Repeat, ShieldCheck, Snowflake, Sparkles, Star, Sun, Thermometer, Wind, Wrench,
}

export function Icon({ name, size = 22, ...props }) {
  const Cmp = Icons[name] ?? Circle
  return <Cmp size={size} strokeWidth={1.75} aria-hidden="true" {...props} />
}

// Adds .is-visible once the element scrolls into view.
export function Reveal({ as = 'div', className = '', delay = 0, children, ...rest }) {
  const Tag = as
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function SectionHead({ eyebrow, title, text, align = 'left' }) {
  return (
    <Reveal className={`section-head section-head--${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {text && <p className="section-text">{text}</p>}
    </Reveal>
  )
}
