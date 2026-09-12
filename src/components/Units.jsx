import { MapPin, ArrowUpRight } from 'lucide-react'

export default function Units(){
  return (
    <section id="unidades" style={{padding:'clamp(3rem,6vw,5rem) 0', background:'var(--site-bg)'}}>
      <div style={{maxWidth:1280, margin:'0 auto', padding:'0 clamp(1rem,3vw,1.5rem)'}}>
        <div style={{textAlign:'center', marginBottom:40}}>
          <p style={{fontSize:11, fontWeight:600, letterSpacing:'.22em', textTransform:'uppercase', color:'var(--site-faint)', marginBottom:12}}>Onde estamos</p>
          <h2 style={{fontSize:'clamp(34px,4vw,48px)', fontWeight:800, letterSpacing:'-.03em', lineHeight:1, color:'var(--site-text)'}}>Visite a JLC Importados.</h2>
        </div>
        <div className="units-grid" style={{display:'grid', gridTemplateColumns:'repeat(1, minmax(0,1fr))', gap:24, maxWidth:520, margin:'0 auto'}}>
            <div className="location-card group" style={{background:'var(--site-panel-soft)', border:'1px solid var(--site-border)', borderRadius:16, padding:'28px', transition:'border-color .18s, transform .18s, box-shadow .18s'}}>
              <div style={{display:'flex', alignItems:'start', justifyContent:'space-between', marginBottom:24}}>
                <div style={{width:40, height:40, borderRadius:12, background:'color-mix(in srgb,var(--site-orange) 10%, transparent)', display:'flex', alignItems:'center', justifyContent:'center', transition:'background .18s'}}>
                  <MapPin size={20} style={{color:'var(--site-orange)'}} />
                </div>
                <a href="https://maps.app.goo.gl/8auVyEg71ke91Km49" target="_blank" rel="noopener noreferrer" aria-label="Abrir JLC Importados no Maps" style={{color:'var(--site-faint)', marginTop:4, transition:'color .18s'}}>
                  <ArrowUpRight size={16} />
                </a>
              </div>
              <p style={{fontSize:11, fontWeight:600, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--site-faint)', marginBottom:6}}>JLC Importados</p>
              <h3 style={{fontSize:17, fontWeight:600, color:'var(--site-text)', marginBottom:8}}>Como chegar</h3>
              <p style={{fontSize:14, color:'var(--site-muted)', lineHeight:1.6, marginBottom:4}}>Abra a rota oficial no mapa.</p>
              <p style={{fontSize:13, color:'var(--site-muted)'}}>WhatsApp (63) 99204-3765</p>
              <a href="https://maps.app.goo.gl/8auVyEg71ke91Km49" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex', alignItems:'center', gap:6, marginTop:20, fontSize:14, fontWeight:500, color:'var(--site-orange)', textDecoration:'none'}}>
                Ver no Maps <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      <style>{`@media(max-width:768px){ #unidades div[style*="grid-template-columns:repeat(2"]{grid-template-columns:1fr !important} } .location-card:hover{border-color:var(--site-hairline); transform:translateY(-2px); box-shadow:0 10px 28px rgba(0,0,0,0.08)} .location-card:hover a{color:var(--site-orange)}`}</style>
    </section>
  )
}
