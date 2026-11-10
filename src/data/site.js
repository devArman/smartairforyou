// All editable business content lives here.
// TODO(client): confirm phone, service area and hours before launch.

// Photos are self-hosted in public/images (downloaded from Unsplash, free license).
// Replace with the company's own job photos when available.
const img = (id) => `${import.meta.env.BASE_URL}images/${id}.jpg`

export const company = {
  name: 'SmartAir System',
  legalName: 'SMARTAIR SYSTEM LLC',
  owner: 'Farrukh Ismatov',
  phone: '848-313-3778',
  city: 'Lakewood',
  state: 'NJ',
  zip: '08701',
  hours: 'Mon–Sat · 8:00 AM – 6:00 PM',
  email: '', // TODO: set to info@smartairforyou.com once the Zoho mailbox works
  slogan: 'Warm winters. Cool summers. Comfort all year round.',
}

export const phoneHref = `tel:+1${company.phone.replace(/\D/g, '')}`
export const smsHref = (body = '') =>
  `sms:+1${company.phone.replace(/\D/g, '')}${body ? `?&body=${encodeURIComponent(body)}` : ''}`

export const seasons = {
  winter: {
    key: 'winter',
    label: 'Heating',
    temp: 72,
    outside: 18,
    image: img('photo-1696814543693-31fcf942ccb7', 2000),
    caption: 'Furnaces, boilers & heat pumps that keep every room toasty.',
  },
  summer: {
    key: 'summer',
    label: 'Cooling',
    temp: 70,
    outside: 94,
    image: img('photo-1633505899118-4ca6bd143043', 2000),
    caption: 'Central AC & ductless systems for crisp, quiet comfort.',
  },
}

export const trust = [
  { title: 'Licensed & Insured', text: 'Registered New Jersey LLC' },
  { title: 'Free Estimates', text: 'Clear quote before any work' },
  { title: 'Honest Pricing', text: 'No surprise fees' },
  { title: 'Clean Work', text: 'We leave your home spotless' },
]

export const services = [
  {
    icon: 'Snowflake',
    tone: 'cool',
    title: 'AC Installation',
    text: 'Right-sized central air systems installed for maximum efficiency and quiet operation.',
    image: img('photo-1718203862467-c33159fdc504', 900, 700),
    featured: true,
  },
  {
    icon: 'Flame',
    tone: 'warm',
    title: 'Furnace & Boiler',
    text: 'Installation, replacement and repair of gas and electric heating systems.',
    image: img('photo-1761319914911-71b059a655d8', 900, 700),
    featured: true,
  },
  {
    icon: 'Fan',
    tone: 'cool',
    title: 'Ductless Mini-Splits',
    text: 'Room-by-room comfort without ductwork — perfect for additions and older homes.',
  },
  {
    icon: 'Repeat',
    tone: 'mix',
    title: 'Heat Pumps',
    text: 'One efficient system that heats in winter and cools in summer.',
  },
  {
    icon: 'Wrench',
    tone: 'warm',
    title: 'Repairs',
    text: 'Fast diagnostics and lasting fixes for no heat, no cool, leaks and strange noises.',
  },
  {
    icon: 'Thermometer',
    tone: 'mix',
    title: 'Smart Thermostats',
    text: 'Wi-Fi thermostats installed and set up so you control comfort from your phone.',
  },
  {
    icon: 'Wind',
    tone: 'cool',
    title: 'Ductwork & Air Quality',
    text: 'Duct installation, sealing, filters and humidity control for cleaner air.',
  },
  {
    icon: 'ShieldCheck',
    tone: 'warm',
    title: 'Seasonal Maintenance',
    text: 'Tune-ups before winter and summer to prevent breakdowns and lower bills.',
  },
  {
    icon: 'Building2',
    tone: 'mix',
    title: 'Commercial HVAC',
    text: 'Rooftop units, multi-zone systems and service contracts for offices, retail spaces, rentals and multi-family buildings.',
    wide: true,
  },
]

export const climate = {
  heating: {
    title: 'Heating',
    kicker: 'Warm winters',
    image: img('photo-1770736158887-9a0f3702416e', 1200, 900),
    points: ['Furnace installation & replacement', 'Boiler service', 'Heat pump systems', 'No-heat repairs'],
  },
  cooling: {
    title: 'Cooling',
    kicker: 'Cool summers',
    image: img('photo-1618221639244-c1a8502c0eb9', 1200, 900),
    points: ['Central air conditioning', 'Ductless mini-splits', 'Refrigerant & leak repair', 'Pre-summer tune-ups'],
  },
}

export const steps = [
  { title: 'Call or text', text: 'Tell us what’s going on — we answer and schedule quickly.' },
  { title: 'Free on-site estimate', text: 'We inspect, measure and explain your options in plain English.' },
  { title: 'Clean installation', text: 'Licensed techs install or repair with care for your home.' },
  { title: 'Final check & walkthrough', text: 'We test everything, show you how it works and make sure you’re happy before we leave.' },
]

export const gallery = [
  { src: img('photo-1642749776312-aa42ce20c9f5', 1200, 900), alt: 'Technicians installing rooftop HVAC units' },
  { src: img('photo-1776860150305-108ed577d7d4', 900, 900), alt: 'Outdoor heat pump unit next to a brick home' },
  { src: img('photo-1770625467384-304e461ef1be', 900, 900), alt: 'Adjusting a modern smart thermostat' },
  { src: img('photo-1776860155275-eee24bfb1dee', 1200, 900), alt: 'Modern house exterior with a heat pump' },
]

// TODO(client): confirm the towns you actually serve.
export const serviceArea = [
  'Lakewood', 'Toms River', 'Jackson', 'Howell', 'Brick', 'Freehold',
  'Manchester', 'Point Pleasant', 'Wall', 'Ocean County', 'Monmouth County',
]

export const faq = [
  {
    q: 'Do you offer free estimates?',
    a: 'Yes. We come out, look at your system and home, and give you a clear written quote before any work starts.',
  },
  {
    q: 'Should I repair or replace my system?',
    a: 'It depends on age, condition and repair cost. We’ll give you an honest recommendation — if a repair makes sense, we’ll tell you.',
  },
  {
    q: 'How often should my HVAC be serviced?',
    a: 'Twice a year is ideal: heating before winter and cooling before summer. Regular tune-ups prevent breakdowns and keep bills down.',
  },
  {
    q: 'Do you work on homes and businesses?',
    a: 'Both. We handle single-family homes, multi-family buildings, offices and retail spaces.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. SmartAir System LLC is a registered New Jersey company and fully insured for your protection.',
  },
]
