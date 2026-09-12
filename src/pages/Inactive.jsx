import './Inactive.css'
import { SITE } from '../config/site.js'

export default function Inactive(){
  return (
    <div className="jlc-inactive">
      <div className="jlc-inactive-bg" aria-hidden="true" />
      <main className="jlc-inactive-main">
        <div className="jlc-inactive-brand ia-reveal ia-d1">
          <span className="brand-logo-frame brand-logo-frame--inactive"><img src={SITE.logo} alt="" /></span>
          <span>JLC Importados</span>
        </div>
        <h1 className="jlc-inactive-title ia-reveal ia-d2">Site temporariamente indisponível</h1>
        <p className="jlc-inactive-subtitle ia-reveal ia-d3">Fale com a equipe pelos canais oficiais.</p>
        <span className="jlc-inactive-divider ia-reveal ia-d3" aria-hidden="true" />
        <div className="jlc-inactive-contact ia-reveal ia-d4">
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="jlc-inactive-cta">Abrir WhatsApp</a>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="jlc-inactive-link">{SITE.instagramHandle}</a>
        </div>
      </main>
      <footer className="jlc-inactive-footer ia-reveal ia-d5">JLC Importados</footer>
    </div>
  )
}
