import { Link } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'
import { SITE } from '../config/site.js'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="brand-logo-frame brand-logo-frame--footer"><img src={SITE.logo} alt="" /></span>
              <span>JLC Importados</span>
            </Link>
            <p>Tecnologia, produtos e novidades com contato direto pelos canais oficiais da JLC Importados.</p>
            <div className="footer-social">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da JLC Importados"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg></a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Navegação</h5>
            <div className="footer-nav-grid">
              <Link to="/">Início</Link>
              <Link to="/loja">Produtos</Link>
              <Link to="/contato">Contato</Link>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={SITE.maps} target="_blank" rel="noopener noreferrer">Como chegar</a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Contato</h5>
            <div className="footer-contact-list">
              <a href={SITE.phoneHref}><Phone size={16} /> {SITE.phone}</a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
              <a href={SITE.maps} target="_blank" rel="noopener noreferrer"><MapPin size={16} /> Como chegar</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 JLC Importados · Todos os direitos reservados</span>
          <Link to="/politica-de-privacidade">Política de Privacidade</Link>
        </div>
      </div>
    </footer>
  )
}
