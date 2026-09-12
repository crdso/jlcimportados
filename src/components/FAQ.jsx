import { Link } from 'react-router-dom'
const FAQS=[
  {q:'Como consultar produtos?',a:'Acesse a Loja e fale com a equipe pelo WhatsApp para confirmar detalhes.'},
  {q:'Como pedir mais informações?',a:'Envie o modelo desejado pelo WhatsApp oficial da JLC Importados.'},
  {q:'Como acompanhar novidades?',a:'Siga a JLC Importados no Instagram @jlc.importados.'},
  {q:'Onde fica a JLC Importados?',a:'Use o botão Como chegar para abrir a localização oficial no mapa.'},
  {q:'Qual é o contato oficial?',a:'WhatsApp https://api.whatsapp.com/message/3RJBIRM2N7E6I1?autoload=1&app_absent=0&utm_source=ig e telefone (63) 99204-3765.'},
]
export default function FAQ(){
  return (
    <section className="home-faq-section">
      <div className="site-shell home-faq-grid">
        <div className="reveal">
          <p className="section-kicker">Dúvidas frequentes</p>
          <h2 style={{fontSize:'clamp(1.6rem,2.6vw,2.4rem)',fontWeight:800,letterSpacing:'-.03em',marginTop:8}}>Antes de visitar ou chamar.</h2>
          <p style={{color:'var(--site-muted)',marginTop:8}}>Respostas rápidas sobre a JLC Importados.</p>
          <Link to="/loja" style={{display:'inline-flex',marginTop:12,fontWeight:700,color:'#ff6a00', textDecoration:'none'}}>Ver produtos →</Link>
        </div>
        <div className="home-faq-list reveal">
          {FAQS.map(f=> (
            <details key={f.q}><summary>{f.q} <span>＋</span></summary><p>{f.a}</p></details>
          ))}
        </div>
      </div>
    </section>
  )
}
