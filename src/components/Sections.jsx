import { useState } from 'react'
import {
  climate, company, faq, gallery, phoneHref, serviceArea, services, smsHref, steps, trust,
} from '../data/site'
import { Icon, Reveal, SectionHead } from './ui'

export function TrustBar() {
  const icons = ['ShieldCheck', 'Sparkles', 'Check', 'Star']
  return (
    <section id="trust" className="trust">
      <div className="container trust-grid">
        {trust.map((t, i) => (
          <Reveal key={t.title} className="trust-item" delay={i * 80}>
            <span className="trust-icon"><Icon name={icons[i]} size={20} /></span>
            <span>
              <strong>{t.title}</strong>
              <small>{t.text}</small>
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionHead
          eyebrow="What we do"
          title={<>Complete heating &amp; cooling, <em>one call</em> away</>}
          text="From a single thermostat to a whole-building system — installation, repair and maintenance by people who care about the details."
        />
        <div className="bento">
          {services.map((s, i) => (
            <Reveal
              as="article"
              key={s.title}
              delay={(i % 3) * 90}
              className={`card card--${s.tone} ${s.featured ? 'card--featured' : ''} ${s.wide ? 'card--wide' : ''}`}
            >
              {s.image && (
                <div className="card-media">
                  <img src={s.image} alt="" loading="lazy" />
                </div>
              )}
              <div className="card-body">
                <span className="card-icon"><Icon name={s.icon} size={22} /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a href="#contact" className="card-link">
                  Request service <Icon name="ArrowUpRight" size={16} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HeatingCooling() {
  const sides = [
    ['warm', 'Flame', climate.heating],
    ['cool', 'Snowflake', climate.cooling],
  ]
  return (
    <section id="heating-cooling" className="section climate">
      <div className="container">
        <SectionHead
          align="center"
          eyebrow="Two seasons, one team"
          title="Built for New Jersey weather"
          text="Freezing January nights and humid August afternoons — your system has to handle both. We make sure it does."
        />
        <div className="climate-grid">
          {sides.map(([tone, icon, c], i) => (
            <Reveal key={tone} delay={i * 120} className={`climate-card climate-card--${tone}`}>
              <img src={c.image} alt="" loading="lazy" />
              <div className="climate-overlay" />
              <div className="climate-body">
                <span className="climate-kicker"><Icon name={icon} size={16} /> {c.kicker}</span>
                <h3>{c.title}</h3>
                <ul>
                  {c.points.map((p) => (
                    <li key={p}><Icon name="Check" size={16} /> {p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <SectionHead
          eyebrow="How it works"
          title={<>Simple from the <em>first call</em></>}
          text="No runaround, no pressure. Here’s what working with us looks like."
        />
        <ol className="steps">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 100} className="step">
              <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Gallery() {
  return (
    <section className="section gallery-section" aria-label="Our work">
      <div className="container">
        <div className="gallery">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={i * 80} className={`gallery-item gallery-item--${i}`}>
              <img src={g.src} alt={g.alt} loading="lazy" />
            </Reveal>
          ))}
          <Reveal delay={200} className="gallery-quote">
            <Icon name="Sparkles" size={22} />
            <p>“Do the job right, on time, and within budget.”</p>
            <span>— {company.owner}, owner</span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Area() {
  return (
    <section className="section area">
      <div className="container area-grid">
        <SectionHead
          eyebrow="Service area"
          title={<>Proudly serving <em>Ocean &amp; Monmouth</em> counties</>}
          text={`Based in ${company.city}, ${company.state}. Not sure if we cover your town? Just call — we’ll let you know right away.`}
        />
        <Reveal className="chips">
          {serviceArea.map((t) => (
            <span key={t} className="chip"><Icon name="MapPin" size={14} /> {t}</span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section faq">
      <div className="container faq-grid">
        <SectionHead
          eyebrow="FAQ"
          title="Questions, answered"
          text="Don’t see yours? Call or text us — a real person will answer."
        />
        <div className="faq-list">
          {faq.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={i * 60} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {f.q}
                  <Icon name="ChevronDown" size={20} />
                </button>
                <div className="faq-a" id={`faq-a-${i}`} role="region">
                  <div><p>{f.a}</p></div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const [copied, setCopied] = useState(false)
  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(company.phone)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable — number is still selectable text */
    }
  }

  const rows = [
    { icon: 'Phone', label: 'Phone', value: company.phone, href: phoneHref },
    company.email && { icon: 'Mail', label: 'Email', value: company.email, href: `mailto:${company.email}` },
    { icon: 'MapPin', label: 'Based in', value: `${company.city}, ${company.state} ${company.zip}` },
    { icon: 'Clock', label: 'Hours', value: company.hours },
  ].filter(Boolean)

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-glow" aria-hidden="true" />
          <Reveal className="contact-copy">
            <span className="eyebrow">Free estimate</span>
            <h2 className="section-title">Ready for year-round comfort?</h2>
            <p className="section-text">
              Call or text us and we’ll schedule a free, no-obligation visit. Clear quote, honest advice, clean work.
            </p>
            <div className="contact-ctas">
              <a href={phoneHref} className="btn btn--grad btn--lg">
                <Icon name="Phone" size={18} /> Call now
              </a>
              <a href={smsHref()} className="btn btn--ghost btn--lg">
                <Icon name="MessageSquare" size={18} /> Text us
              </a>
            </div>
          </Reveal>

          <Reveal as="address" delay={120} className="contact-info glass">
            <h3>Contact {company.name}</h3>
            <ul>
              {rows.map((r) => (
                <li key={r.label}>
                  <span className="contact-info-icon"><Icon name={r.icon} size={20} /></span>
                  <span className="contact-info-text">
                    <small>{r.label}</small>
                    {r.href ? <a href={r.href}>{r.value}</a> : <span>{r.value}</span>}
                  </span>
                  {r.label === 'Phone' && (
                    <button type="button" className="copy-btn" onClick={copyPhone} aria-live="polite">
                      <Icon name={copied ? 'Check' : 'Copy'} size={16} />
                      <span className="copy-label">{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
