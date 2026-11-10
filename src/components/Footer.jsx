import { company, phoneHref, smsHref } from '../data/site'
import { Logo } from './Header'
import { Icon } from './ui'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Logo />
            <p className="footer-slogan">{company.slogan}</p>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href={phoneHref}><Icon name="Phone" size={16} /> {company.phone}</a>
            <span><Icon name="MapPin" size={16} /> {company.city}, {company.state} {company.zip}</span>
            <span><Icon name="Clock" size={16} /> {company.hours}</span>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <a href="#services">Services</a>
            <a href="#heating-cooling">Heating &amp; Cooling</a>
            <a href="#process">How it works</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</span>
          <span>Licensed &amp; Insured · New Jersey</span>
        </div>
      </footer>

      <div className="mobile-bar">
        <a href={phoneHref} className="btn btn--grad"><Icon name="Phone" size={18} /> Call now</a>
        <a href={smsHref()} className="btn btn--ghost"><Icon name="MessageSquare" size={18} /> Text us</a>
      </div>
    </>
  )
}
