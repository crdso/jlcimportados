import { ArrowUpRight, MapPin, Phone } from 'lucide-react'
import { SITE } from '../config/site.js'

export default function LocationSection(){
  return (
    <section id="localizacao" className="location-section">
      <div className="site-shell location-layout">
        <div className="location-copy reveal">
          <p className="section-kicker">CONTATO E LOCALIZAÇÃO</p>
          <h2>Mais perto do seu próximo upgrade.</h2>
          <p>Fale diretamente com a JLC Importados ou abra a rota oficial para chegar até a loja.</p>
          <div className="location-actions">
            <a href={SITE.maps} target="_blank" rel="noopener noreferrer" className="btn-primary">Como chegar <ArrowUpRight size={16} /></a>
            <a href={SITE.phoneHref} className="btn-ghost"><Phone size={16} /> {SITE.phone}</a>
          </div>
        </div>
        <a href={SITE.maps} target="_blank" rel="noopener noreferrer" className="location-visual reveal" aria-label="Abrir localização da JLC Importados no mapa">
          <span className="location-orbit location-orbit--one" aria-hidden="true" />
          <span className="location-orbit location-orbit--two" aria-hidden="true" />
          <span className="location-pin"><MapPin size={30} strokeWidth={1.6} /></span>
          <strong>JLC Importados</strong>
          <small>Abrir rota oficial</small>
        </a>
      </div>
    </section>
  )
}
