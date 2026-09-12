import { useState } from 'react'
import { Link } from 'react-router-dom'
import CineHero from '../components/CineHero.jsx'
import InstagramSection from '../components/InstagramSection.jsx'
import Units from '../components/Units.jsx'
import FAQ from '../components/FAQ.jsx'
import ProductModal from '../components/ProductModal.jsx'
import ProductCard from '../components/ProductCard.jsx'
import GlintDivider from '../components/GlintDivider.jsx'
import products from '../data/products.json'

function FeaturedHomeProducts({ onOpen }){
  const visible = products.filter((p) => !p.hidden && p.available !== false)
  const featured = visible.slice(0,4)
  return (
    <section id="produtos" className="products-apple-section">
      <div className="site-shell">
        <div style={{display:'flex', flexWrap:'wrap', alignItems:'end', justifyContent:'space-between', gap:12, marginBottom:18}}>
          <div>
            <p className="section-kicker">SELEÇÃO JLC</p>
            <h2 style={{fontSize:'clamp(1.7rem,3vw,2.4rem)', fontWeight:800, letterSpacing:'-.03em', marginTop:8}}>Tecnologia para o seu próximo upgrade.</h2>
          </div>
          <Link to="/loja" style={{display:'inline-flex', alignItems:'center', gap:6, height:36, padding:'0 14px', borderRadius:999, border:'1px solid var(--site-border)', background:'color-mix(in srgb,var(--site-panel) 86%, transparent)', fontSize:13, fontWeight:700, textDecoration:'none'}}>Abrir catálogo →</Link>
        </div>
        {featured.length > 0 ? (
          <div className="product-grid">
            {featured.map(p=> <ProductCard key={p.slug} product={p} onOpen={onOpen} />)}
          </div>
        ) : (
          <div style={{border:'1px solid var(--site-border)', borderRadius:16, padding:24, background:'var(--site-panel)', color:'var(--site-muted)', lineHeight:1.6}}>
            Catálogo em atualização. Fale com a JLC Importados pelos canais oficiais para consultar disponibilidade.
          </div>
        )}
      </div>
    </section>
  )
}

export default function Home(){
  const [selected,setSelected]=useState(null)
  return (
    <main>
      <CineHero />
      <div className="home-content-after-cinema">
        <FeaturedHomeProducts onOpen={setSelected} />
        <InstagramSection />
        <GlintDivider />
        <Units />
        <GlintDivider />
        <FAQ />
        <GlintDivider />
        <section className="cta-section" style={{background:'transparent', borderTop:'none'}}>
          <div className="site-shell" style={{textAlign:'center', padding:'clamp(2.5rem,6vw,4rem) 0'}}>
            <p style={{fontSize:11,letterSpacing:'.22em',textTransform:'uppercase',color:'var(--site-muted)',fontWeight:700}}>FALE COM A JLC</p>
            <h2 style={{fontSize:'clamp(1.8rem,3.2vw,2.8rem)',fontWeight:800,letterSpacing:'-.03em',marginTop:8}}>Encontre seu próximo<br/>aparelho.</h2>
            <p style={{color:'var(--site-muted)',marginTop:10,maxWidth:'56ch',marginInline:'auto',lineHeight:1.6}}>Consulte produtos, disponibilidade e novidades diretamente com a equipe da JLC Importados.</p>
            <div style={{display:'flex',gap:10,justifyContent:'center',marginTop:18,flexWrap:'wrap'}}>
              <a href="https://api.whatsapp.com/message/3RJBIRM2N7E6I1?autoload=1&app_absent=0&utm_source=ig" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{background:'#25D366'}}>Falar no WhatsApp</a>
              <a href="https://maps.app.goo.gl/8auVyEg71ke91Km49" target="_blank" rel="noopener noreferrer" className="btn-ghost">Como chegar</a>
            </div>
          </div>
        </section>
      </div>
      {selected && <ProductModal product={selected} onClose={()=>setSelected(null)} />}
    </main>
  )
}
