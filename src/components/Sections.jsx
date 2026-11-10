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
  const [form, setForm] = useState({ name: '', service: 'Repair', details: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const body = `Hi SmartAir! My name is ${form.name || '…'}. I need: ${form.service}.${form.details ? ` ${form.details}` : ''}`

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
            <a href={phoneHref} className="contact-phone">
              <Icon name="Phone" size={26} /> {company.phone}
            </a>
            <ul className="contact-meta">
              <li><Icon name="MapPin" size={18} /> {company.city}, {company.state} {company.zip}</li>
              <li><Icon name="Clock" size={18} /> {company.hours}</li>
            </ul>
          </Reveal>

          <Reveal as="form" delay={120} className="quote glass" onSubmit={(e) => {
            e.preventDefault()
            window.location.href = smsHref(body)
          }}>
            <h3>Request a quote by text</h3>
            <label>
              <span>Your name</span>
              <input value={form.name} onChange={set('name')} placeholder="John Smith" autoComplete="name" required />
            </label>
            <label>
              <span>What do you need?</span>
              <select value={form.service} onChange={set('service')}>
                {['Repair', 'AC installation', 'Heating installation', 'Heat pump / mini-split', 'Maintenance / tune-up', 'Commercial project', 'Something else'].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <label>
              <span>Details <i>(optional)</i></span>
              <textarea value={form.details} onChange={set('details')} rows={3} placeholder="Address, system age, what’s happening…" />
            </label>
            <button className="btn btn--grad btn--lg btn--block" type="submit">
              <Icon name="MessageSquare" size={18} /> Send text message
            </button>
            <small className="quote-note">Opens your messages app with everything filled in.</small>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
