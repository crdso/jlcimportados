import { Link } from 'react-router-dom'
import { SITE } from '../config/site.js'

const FAQS = [
  { q: 'Quais produtos aparecem no catálogo?', a: 'A vitrine reúne aparelhos Apple, Samsung, Xiaomi e Realme cadastrados pela JLC Importados.' },
  { q: 'Como confirmar preço e disponibilidade?', a: 'Abra o produto desejado ou fale diretamente com a equipe pelo WhatsApp oficial.' },
  { q: 'Há aparelhos novos e seminovos?', a: 'Sim. A condição de cada aparelho é identificada individualmente na vitrine.' },
  { q: 'Como chegar até a JLC Importados?', a: 'Use o botão Como chegar para abrir a localização oficial no mapa.' },
  { q: 'Onde acompanho as novidades?', a: `Siga ${SITE.instagramHandle} no Instagram.` },
]

export default function FAQ(){
  return (
    <section className="home-faq-section">
      <div className="site-shell home-faq-grid">
        <div className="reveal">
          <p className="section-kicker">DÚVIDAS FREQUENTES</p>
          <h2>Informação direta para escolher melhor.</h2>
          <p>Veja o catálogo ou fale com a JLC pelos canais oficiais.</p>
          <Link to="/loja">Ver produtos →</Link>
        </div>
        <div className="home-faq-list reveal">
          {FAQS.map((item) => <details key={item.q}><summary>{item.q} <span>＋</span></summary><p>{item.a}</p></details>)}
        </div>
      </div>
    </section>
  )
}
