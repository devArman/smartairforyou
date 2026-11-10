import { useEffect, useState } from 'react'
import { company, phoneHref, seasons } from '../data/site'
import { Icon } from './ui'

const order = ['winter', 'summer']
const AUTO_MS = 6500

function Dial({ season }) {
  const s = seasons[season]
  // 270° arc, value mapped from 60–80°F
  const r = 78
  const c = 2 * Math.PI * r
  const arc = c * 0.75
  const pct = Math.min(1, Math.max(0, (s.temp - 60) / 20))

  return (
    <div className={`dial dial--${season}`}>
      <svg viewBox="0 0 200 200" className="dial-svg" aria-hidden="true">
        <defs>
          <linearGradient id="dial-warm" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#ffb547" />
            <stop offset="1" stopColor="#ff5a36" />
          </linearGradient>
          <linearGradient id="dial-cool" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#7cf3ff" />
            <stop offset="1" stopColor="#2f7bff" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r={r} className="dial-track" strokeDasharray={`${arc} ${c}`} transform="rotate(135 100 100)" />
        <circle
          cx="100" cy="100" r={r}
          className="dial-value"
          stroke={`url(#dial-${season === 'winter' ? 'warm' : 'cool'})`}
          strokeDasharray={`${arc * pct} ${c}`}
          transform="rotate(135 100 100)"
        />
        {Array.from({ length: 28 }, (_, i) => {
          const a = ((135 + (i * 270) / 27) * Math.PI) / 180
          return (
            <line
              key={i}
              x1={100 + Math.cos(a) * 62} y1={100 + Math.sin(a) * 62}
              x2={100 + Math.cos(a) * (i % 3 ? 58 : 54)} y2={100 + Math.sin(a) * (i % 3 ? 58 : 54)}
              className="dial-tick"
            />
          )
        })}
      </svg>
      <div className="dial-center">
        <span className="dial-mode">
          <Icon name={season === 'winter' ? 'Flame' : 'Snowflake'} size={14} /> {s.label}
        </span>
        <span className="dial-temp" key={season}>
          {s.temp}
          <sup>°F</sup>
        </span>
        <span className="dial-out">Outside {s.outside}°F</span>
      </div>
    </div>
  )
}

export default function Hero() {
  const [season, setSeason] = useState('winter')
  const [auto, setAuto] = useState(true)

  useEffect(() => {
    if (!auto) return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const t = setInterval(() => setSeason((s) => (s === 'winter' ? 'summer' : 'winter')), AUTO_MS)
    return () => clearInterval(t)
  }, [auto])

  const pick = (key) => {
    setAuto(false)
    setSeason(key)
  }

  return (
    <section id="top" className={`hero hero--${season}`}>
      <div className="hero-bg" aria-hidden="true">
        {order.map((key) => (
          <div
            key={key}
            className={`hero-img ${season === key ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${seasons[key].image})` }}
          />
        ))}
        <div className="hero-shade" />
        <div className="hero-glow" />
        <div className="hero-grain" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="pill">
            <Icon name="ShieldCheck" size={16} /> Licensed &amp; insured · Free estimates
          </span>

          <h1 className="hero-title">
            <span className="t-kicker">Heating &amp; Air Conditioning in {company.city}, {company.state}</span>
            <span className="t-warm">Warm winters.</span>
            <span className="t-cool">Cool summers.</span>
            <span className="t-plain">Comfort all year round.</span>
          </h1>

          <p className="hero-lead">
            {company.name} installs, repairs and maintains heating and air conditioning for homes and
            businesses across New Jersey — done right, on time, and priced honestly.
          </p>

          <div className="hero-ctas">
            <a href={phoneHref} className="btn btn--grad btn--lg">
              <Icon name="Phone" size={18} /> Call {company.phone}
            </a>
            <a href="#contact" className="btn btn--ghost btn--lg">
              Get a free estimate <Icon name="ArrowRight" size={18} />
            </a>
          </div>

          <ul className="hero-points">
            <li><Icon name="Check" size={16} /> Free estimates</li>
            <li><Icon name="Check" size={16} /> Honest, upfront pricing</li>
            <li><Icon name="Check" size={16} /> Residential &amp; commercial</li>
          </ul>
        </div>

        <div className="hero-panel glass">
          <div className="season-switch" role="tablist" aria-label="Season">
            <span className={`season-thumb season-thumb--${season}`} aria-hidden="true" />
            <button role="tab" aria-selected={season === 'winter'} onClick={() => pick('winter')}>
              <Icon name="Flame" size={16} /> Winter
            </button>
            <button role="tab" aria-selected={season === 'summer'} onClick={() => pick('summer')}>
              <Icon name="Sun" size={16} /> Summer
            </button>
          </div>
          <Dial season={season} />
          <p className="hero-panel-caption" key={season}>{seasons[season].caption}</p>
        </div>
      </div>

      <a href="#trust" className="scroll-cue" aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}
