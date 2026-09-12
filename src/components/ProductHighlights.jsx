import { useEffect, useRef, useState } from 'react'
import { Apple, Smartphone, Boxes, Gem, PackageOpen, RefreshCw } from 'lucide-react'

const items = [
  { title: 'iPhones', desc: 'Modelos Apple novos e seminovos reunidos no catálogo.', Icon: Apple },
  { title: 'Samsung', desc: 'Confira os aparelhos Samsung disponíveis na seleção.', Icon: Smartphone },
  { title: 'Xiaomi', desc: 'Explore os modelos Xiaomi presentes na loja.', Icon: Boxes },
  { title: 'Realme', desc: 'Veja as opções Realme disponíveis no catálogo.', Icon: Gem },
  { title: 'Novos', desc: 'Aparelhos novos identificados de forma clara em cada item.', Icon: PackageOpen },
  { title: 'Seminovos', desc: 'Opções seminovas com condição e detalhes informados na vitrine.', Icon: RefreshCw },
]

export default function ProductHighlights(){
  const gridRef = useRef(null)
  const [visible, setVisible] = useState(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion:reduce)').matches)

  useEffect(()=>{
    const el = gridRef.current
    if(!el) return
    if(window.matchMedia('(prefers-reduced-motion:reduce)').matches) return
    const observer = new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting) setVisible(true)
    },{threshold:0.2})
    observer.observe(el)
    return ()=> observer.disconnect()
  },[])

  return (
    <section className="product-highlights-section">
      <div className="site-shell">
        <div className="product-highlights-heading reveal">
          <p className="section-kicker">ESCOLHAS PARA CADA PERFIL</p>
          <h2>Um catálogo direto,<br/>organizado e atual.</h2>
        </div>
        <div className="product-highlights-spacer" aria-hidden="true" />
        <div ref={gridRef} className="product-highlights-grid">
          {items.map(({ title, desc, Icon }) => (
            <div key={title} className="product-highlight-cell">
              <Icon className="product-highlight-icon" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
          <div className="grid-lines" aria-hidden="true">
            <div className={`grid-line grid-line--v ${visible?'is-visible':''}`} style={{left:'33.333%'}}><span className="grid-glint" /></div>
            <div className={`grid-line grid-line--v ${visible?'is-visible':''}`} style={{left:'66.666%'}}><span className="grid-glint" /></div>
            <div className={`grid-line grid-line--h ${visible?'is-visible':''}`} style={{top:'50%'}}><span className="grid-glint" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}
