import { ArrowUpRight, MapPin, MessageCircle, Phone } from 'lucide-react'
import { SITE } from '../config/site.js'

const channels = [
  { label: 'WhatsApp', value: 'Falar com a equipe', href: SITE.whatsapp, Icon: MessageCircle },
  { label: 'Telefone', value: SITE.phone, href: SITE.phoneHref, Icon: Phone },
  { label: 'Instagram', value: SITE.instagramHandle, href: SITE.instagram, Icon: InstagramIcon },
  { label: 'Localização', value: 'Como chegar', href: SITE.maps, Icon: MapPin },
]

export default function Contato(){
  return (
    <main className="contact-page">
      <section className="contact-hero site-shell">
        <div className="contact-heading reveal">
          <p className="section-kicker">CONTATO</p>
          <h1>Fale com a<br/><span>JLC Importados.</span></h1>
          <p>Consulte produtos, disponibilidade e novidades pelos canais oficiais.</p>
        </div>
        <div className="contact-grid reveal">
          {channels.map(({ label, value, href, Icon }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="contact-channel">
              <span className="contact-channel-icon"><Icon size={21} strokeWidth={1.7} /></span>
              <span><small>{label}</small><strong>{value}</strong></span>
              <ArrowUpRight size={17} className="contact-channel-arrow" />
            </a>
          ))}
        </div>
      </section>
      <section className="contact-location">
        <div className="site-shell contact-location-inner">
          <div>
            <p className="section-kicker">VISITE A JLC</p>
            <h2>Abra a rota oficial.</h2>
            <p>Use o link confirmado no mapa para chegar até a JLC Importados.</p>
          </div>
          <a href={SITE.maps} target="_blank" rel="noopener noreferrer" className="btn-primary">Como chegar <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </main>
  )
}
function InstagramIcon({ size = 21 }){
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg>
}
