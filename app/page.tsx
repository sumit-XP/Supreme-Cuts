import { ArrowUpRight, ChevronDown, Clock3, MapPin, Scissors, Star, Phone } from 'lucide-react'

const phone = '[PHONE]'
const phoneHref = 'tel:[PHONE]'
const bookingLink = '[URL or "walk-ins only"]'
const shopName = '[NAME]'
const city = '[CITY]'
const address = '[ADDRESS]'
const instagram = '[@HANDLE]'

const services = [
  { name: '[SERVICE 01]', detail: '[Short service description]', price: '[PRICE]' },
  { name: '[SERVICE 02]', detail: '[Short service description]', price: '[PRICE]' },
  { name: '[SERVICE 03]', detail: '[Short service description]', price: '[PRICE]' },
  { name: '[SERVICE 04]', detail: '[Short service description]', price: '[PRICE]' },
  { name: '[SERVICE 05]', detail: '[Short service description]', price: '[PRICE]' },
  { name: '[SERVICE 06]', detail: '[Short service description]', price: '[PRICE]' },
]

const gallery = [
  { src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85', alt: 'Fresh skin fade with textured top' },
  { src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=85', alt: 'Barber shaping a clean beard line' },
  { src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85', alt: 'Barber working in a warm, classic shop' },
  { src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=85', alt: 'Close-up of a precise taper haircut' },
  { src: 'https://images.unsplash.com/photo-1512690459411-b0fd44f1e7a5?auto=format&fit=crop&w=900&q=85', alt: 'Classic scissor cut with natural texture' },
  { src: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=900&q=85', alt: 'Detail of a sharp line-up and fade' },
]

const faqs = [
  ['Do you take walk-ins?', '[PLACEHOLDER — confirm walk-in policy.]'],
  ['Do you cut kids’ hair?', '[PLACEHOLDER — confirm age range and policy.]'],
  ['How can I pay?', '[PLACEHOLDER — list accepted payment methods.]'],
  ['Where can I park?', '[PLACEHOLDER — add parking guidance.]'],
]

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  )
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: shopName,
    address: { '@type': 'PostalAddress', streetAddress: address, addressLocality: city },
    telephone: phone,
    openingHours: '[HOURS]',
    url: bookingLink,
    sameAs: [`https://instagram.com/${instagram.replace('@', '')}`],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={`${shopName} home`}><span className="mark">S</span>{shopName}</a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a><a href="#barbers">The team</a><a href="#visit">Visit</a>
        </nav>
        <a className="header-cta" href={bookingLink}>Book a cut <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow"><span className="dot" /> {city} · Est. [YEAR]</p>
          <h1>Good hair.<br /><em>Good energy.</em></h1>
          <p className="hero-copy">A proper barbershop for sharp cuts, clean lines, and the people who notice the difference.</p>
          <div className="hero-actions"><a className="button button-primary" href={phoneHref}><Phone size={17} /> Call now</a><a className="button button-outline" href={bookingLink}>Book a cut <ArrowUpRight size={17} /></a></div>
        </div>
        <div className="hero-stamp" aria-hidden="true"><Scissors size={18} /><span>Classic cuts<br />Modern finish</span></div>
        <div className="scroll-cue" aria-hidden="true">Scroll to explore <span /></div>
      </section>

      <section className="intro section-wrap"><p className="intro-kicker">The neighborhood standard</p><p className="intro-text">Come in for the cut. Stay for the conversation. Leave looking like you’ve got somewhere better to be.</p></section>

      <section className="section-wrap" id="services"><SectionHeading eyebrow="01 / Services" title="The menu" copy="No mystery. Just the good stuff, done properly." /><div className="services-grid">{services.map((service, index) => <article className="service-card" key={service.name}><span className="service-number">0{index + 1}</span><div><h3>{service.name}</h3><p>{service.detail}</p></div><strong>{service.price}</strong></article>)}</div></section>

      <section className="gallery-section section-wrap"><div className="gallery-intro"><SectionHeading eyebrow="02 / The work" title="Fresh from the chair" copy="A few recent cuts, fades, and finishes from the shop." /><a className="text-link" href={`https://instagram.com/${instagram.replace('@', '')}`}>See more on Instagram <ArrowUpRight size={15} /></a></div><div className="gallery-grid">{gallery.map((image, index) => <figure className={`gallery-item gallery-${index + 1}`} key={image.src}><img src={image.src} alt={image.alt} width="900" height="1100" loading="lazy" /></figure>)}</div></section>

      <section className="team-section section-wrap" id="barbers"><SectionHeading eyebrow="03 / The barbers" title="Good hands only" /><div className="team-grid"><article className="barber-card"><div className="portrait portrait-one" /><div className="barber-info"><h3>[BARBER NAME]</h3><p>[One-line specialty]</p><span>01</span></div></article><article className="barber-card"><div className="portrait portrait-two" /><div className="barber-info"><h3>[BARBER NAME]</h3><p>[One-line specialty]</p><span>02</span></div></article><article className="barber-card"><div className="portrait portrait-three" /><div className="barber-info"><h3>[BARBER NAME]</h3><p>[One-line specialty]</p><span>03</span></div></article></div></section>

      <section className="reviews section-wrap"><div className="review-top"><SectionHeading eyebrow="04 / Word on the street" title="Don’t take our word for it" /><div className="rating"><Star size={18} fill="currentColor" /><span>[RATING]</span><small>[REVIEW COUNT] Google reviews</small></div></div><div className="review-grid"><blockquote>“[REAL REVIEW QUOTE]”<cite>— [FIRST NAME]</cite></blockquote><blockquote>“[REAL REVIEW QUOTE]”<cite>— [FIRST NAME]</cite></blockquote><blockquote>“[REAL REVIEW QUOTE]”<cite>— [FIRST NAME]</cite></blockquote></div></section>

      <section className="visit-section" id="visit"><div className="visit-image" /><div className="visit-content"><SectionHeading eyebrow="05 / Find us" title="Come through." copy="Your next good hair day is closer than you think." /><div className="visit-details"><div><MapPin size={19} /><p><strong>{address}</strong><br />{city}</p></div><div><Clock3 size={19} /><p><strong>Hours</strong><br />[HOURS]</p></div><div><Phone size={19} /><p><a href={phoneHref}><strong>{phone}</strong></a><br />Call for availability</p></div></div><a className="button button-primary" href="[MAP LINK]" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={17} /></a></div></section>

      <section className="faq section-wrap"><SectionHeading eyebrow="06 / Good to know" title="Questions, answered." /><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div></section>

      <footer className="site-footer"><div><a className="wordmark" href="#top"><span className="mark">S</span>{shopName}</a><p>Sharp cuts. Good energy.<br />{city}, [STATE]</p></div><div className="footer-links"><a href={`https://instagram.com/${instagram.replace('@', '')}`}><span aria-hidden="true">◎</span> {instagram}</a><a href={phoneHref}><Phone size={16} /> {phone}</a><a href="#visit"><MapPin size={16} /> {address}</a></div><p className="copyright">© [YEAR] {shopName}. All rights reserved.</p></footer>

      <div className="mobile-bar"><a href={phoneHref}><Phone size={17} /> Call</a><a href={bookingLink}><Scissors size={17} /> Book a cut</a></div>
    </main>
  )
}

export const metadata = {
  title: `[NAME] | ${'[CITY]'} Barbershop`,
  description: `A local ${'[CITY]'} barbershop for sharp cuts, clean lines, and good energy.`,
  openGraph: { title: `[NAME] | ${'[CITY]'} Barbershop`, description: `Sharp cuts and good energy in ${'[CITY]'}.`, type: 'website' },
}
