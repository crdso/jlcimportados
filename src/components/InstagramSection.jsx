import { ArrowUpRight } from 'lucide-react'
import { SITE } from '../config/site.js'

export default function InstagramSection(){
  return (
    <section id="instagram" className="instagram-clean-section">
      <div className="site-shell instagram-layout">
        <div className="instagram-copy reveal">
          <p className="section-kicker">NO INSTAGRAM</p>
          <h2>Acompanhe a<br/>JLC de perto.</h2>
          <p>Produtos e novidades no perfil oficial da JLC Importados.</p>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg> Seguir {SITE.instagramHandle}
          </a>
        </div>
        <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="instagram-visual reveal" aria-label="Abrir Instagram da JLC Importados">
          <span className="instagram-glow" aria-hidden="true" />
          <span className="brand-logo-frame brand-logo-frame--instagram"><img src={SITE.logo} alt="Logo da JLC Importados" /></span>
          <span className="instagram-handle">{SITE.instagramHandle}</span>
          <span className="instagram-open">Abrir perfil <ArrowUpRight size={15} /></span>
        </a>
      </div>
    </section>
  )
}
