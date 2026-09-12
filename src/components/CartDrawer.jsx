import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart.js'
import { SITE } from '../config/site.js'

function fmt(c){ return (c/100).toLocaleString('pt-BR',{style:'currency',currency:'BRL'}) }

export default function CartDrawer(){
  const { items, count, subtotal, open, closeCart, updateQty, removeItem } = useCart()
  const checkout=()=>{
    if(items.length===0) return
    window.open(SITE.whatsapp,'_blank','noopener')
  }
  return (
    <div className={`cart-overlay ${open?'is-open':''}`} onClick={closeCart} aria-hidden={!open}>
      <div className="cart-panel" role="dialog" aria-modal="true" aria-label="Carrinho" onClick={e=>e.stopPropagation()}>
        <div className="cart-head">
          <div><p style={{fontSize:11,fontWeight:700,letterSpacing:'.18em',textTransform:'uppercase',color:'var(--site-muted)'}}>Bag</p><h3 style={{fontWeight:800}}>Carrinho {count>0?`• ${count}`:''}</h3></div>
          <button onClick={closeCart} aria-label="Fechar" style={{width:36,height:36,borderRadius:999,border:'1px solid var(--site-border)',background:'transparent',color:'var(--site-text)',cursor:'pointer'}}>✕</button>
        </div>
        <div style={{flex:1,overflowY:'auto',padding:16,display:'grid',gap:10,alignContent:'start'}}>
          {items.length===0 ? (
            <div style={{textAlign:'center',padding:'40px 20px',color:'var(--site-muted)'}}>
              <p style={{fontSize:32}}>🛒</p>
              <p style={{fontWeight:700,color:'var(--site-text)',marginTop:8}}>Seu carrinho está vazio.</p>
              <p style={{fontSize:13,marginTop:6}}>Adicione produtos da vitrine para simular a compra.</p>
              <Link to="/loja" onClick={closeCart} className="btn-primary" style={{marginTop:14, textDecoration:'none'}}>Ver loja</Link>
            </div>
          ) : items.map(i=> (
            <div key={i.variantId} className="cart-item">
              <div style={{background:'var(--site-panel-soft)',borderRadius:10,overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid var(--site-border)'}}><img src={i.image} alt={i.name} style={{width:'100%',height:'100%',objectFit:'contain',padding:6}} onError={e=>e.currentTarget.style.display='none'} /></div>
              <div style={{minWidth:0}}>
                <p style={{fontWeight:700,fontSize:13,lineHeight:1.3}}>{i.name}</p>
                <p style={{fontSize:12,color:'#85858b'}}>{i.variantLabel} • {fmt(i.price)}</p>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:8}}>
                  <div className="cart-qty">
                    <button onClick={()=>updateQty(i.variantId, i.quantity-1)} aria-label="diminuir">−</button>
                    <span style={{minWidth:18,textAlign:'center',fontSize:13,fontWeight:700}}>{i.quantity}</span>
                    <button onClick={()=>updateQty(i.variantId, i.quantity+1)} aria-label="aumentar">＋</button>
                  </div>
                  <button onClick={()=>removeItem(i.variantId)} style={{fontSize:12,color:'var(--site-accent)',background:'none',border:'none',cursor:'pointer',fontWeight:700}}>Remover</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{padding:16,borderTop:'1px solid var(--site-border)',display:'grid',gap:10}}>
          <div style={{display:'flex',justifyContent:'space-between',fontWeight:800}}><span>Subtotal</span><span>{fmt(subtotal)}</span></div>
          <button onClick={checkout} disabled={items.length===0} className="btn-primary" style={{width:'100%',opacity:items.length===0?.5:1}}>Finalizar no WhatsApp</button>
          <p style={{fontSize:11,color:'var(--site-muted)',textAlign:'center'}}>Você será direcionado ao WhatsApp oficial da JLC Importados.</p>
        </div>
      </div>
    </div>
  )
}
