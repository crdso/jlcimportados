import { useState } from 'react'
import { useCart } from '../hooks/useCart.js'
import { SITE } from '../config/site.js'
function fmt(c){ return (c/100).toLocaleString('pt-BR',{style:'currency',currency:'BRL'}) }
export default function ProductModal({ product, onClose }){
  const { addItem } = useCart()
  const [idx,setIdx]=useState(0)
  const [qty,setQty]=useState(1)
  const [mainFailed, setMainFailed] = useState(false)
  const variant=product?.variants?.[0]
  const hasPrice = product?.price != null && product.price > 0
  const inStock = (product?.stock || 0) > 0 && product?.available !== false
  const images=product ? (product.images?.length?product.images:[product.foto_url].filter(Boolean)) : []
  const main=images[idx]||images[0] || SITE.logo
  if(!product) return null
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e=>e.stopPropagation()}>
        <div className="modal-media">
          <div style={{width:'100%'}}>
            <img src={mainFailed ? SITE.logo : main} alt={product.name} onError={()=>setMainFailed(true)} />
            <div style={{display:'flex',gap:8,marginTop:12,overflowX:'auto'}}>
              {images.map((src,i)=> (
                <button key={i} onClick={()=>{ setIdx(i); setMainFailed(false) }} style={{border: idx===i?'2px solid var(--site-accent)':'1px solid var(--site-border)',borderRadius:10,padding:4,background:'var(--site-panel-soft)',cursor:'pointer',flex:'0 0 64px',height:64,overflow:'hidden'}}>
                  <img src={src} alt="" style={{width:'100%',height:'100%',objectFit:'contain'}} />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div style={{padding:20,display:'grid',gap:12,alignContent:'start'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'start',gap:12}}>
            <div><p style={{fontSize:11,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--site-muted)',fontWeight:700}}>{product.category} • {product.condition}</p><h3 style={{fontSize:22,fontWeight:800,letterSpacing:'-.02em'}}>{product.name}</h3><p style={{fontSize:13,color:'var(--site-muted)'}}>{product.armazenamento} • {product.cor} • {product.bateria? `Bateria ${product.bateria}`:''}</p></div>
            <button onClick={onClose} style={{width:34,height:34,borderRadius:999,border:'1px solid var(--site-border)',background:'transparent',color:'var(--site-text)',cursor:'pointer'}}>✕</button>
          </div>
          {(product.description || product.short) && <p style={{fontSize:13,lineHeight:1.6,color:'var(--site-muted)'}}>{product.description || product.short}</p>}
          <div style={{background:'var(--site-panel-soft)',border:'1px solid var(--site-border)',borderRadius:12,padding:12}}>
            <p style={{fontWeight:700,fontSize:12,letterSpacing:'.08em',textTransform:'uppercase',color:'var(--site-muted)',marginBottom:6}}>Especificações</p>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,fontSize:13}}>
              <span>Armazenamento: <strong>{product.armazenamento}</strong></span>
              <span>Cor: <strong>{product.cor||'—'}</strong></span>
              <span>Condição: <strong>{product.condition}</strong></span>
              <span>Garantia: <strong>{product.garantia || product.warranty || 'Consulte'}</strong></span>
            </div>
          </div>
          <div style={{display:'flex',alignItems:'end',gap:12,flexWrap:'wrap'}}>
            <div><p style={{fontSize:22,fontWeight:800}}>{product.price ? fmt(product.price) : 'Consultar preço'}</p></div>
            <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:8}}>
              <div className="cart-qty"><button onClick={()=>setQty(q=>Math.max(1,q-1))}>−</button><span style={{minWidth:18,textAlign:'center',fontWeight:700}}>{qty}</span><button onClick={()=>setQty(q=>Math.min(99,q+1))}>＋</button></div>
               {hasPrice && inStock ? (
                 <button className="btn-primary" onClick={()=>{ addItem(product, variant, qty); onClose() }}>Adicionar ao carrinho</button>
               ) : (
                 <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">Consultar</a>
               )}
            </div>
          </div>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{textAlign:'center'}}>Tirar dúvida no WhatsApp</a>
        </div>
      </div>
    </div>
  )
}
