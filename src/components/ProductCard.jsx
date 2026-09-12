import { useCart } from '../hooks/useCart.js'
import { useState } from 'react'
import { SITE } from '../config/site.js'

function formatBRL(cents){
  return (cents/100).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
}
function formatDisplayName(raw){
  if(!raw) return raw
  let n = raw.replace(/\s+/g, ' ').trim()
  n = n.replace(/\biphone\b/gi, 'iPhone')
  n = n.replace(/\bpro\s*max\b/gi, 'Pro Max')
  // avoid double replace: if already Pro Max, don't replace Pro again
  if(!/Pro Max/.test(n)) n = n.replace(/\bpro\b/gi, 'Pro')
  n = n.replace(/\s+B$/i, ' - Branco')
  n = n.replace(/\s+/g, ' ').trim()
  // ensure " - Branco" has correct dash
  n = n.replace(/\s*-\s*Branco/i, ' - Branco')
  return n
}
function isSeminovo(product){
  return product.condition === 'Seminovo'
}

export default function ProductCard({ product, onOpen }){
  const { addItem } = useCart()
  const variant = product.variants?.[0]
  const inStock = (product.stock||0) > 0 && product.available !== false
  const compare = product.compareAt && product.compareAt > product.price ? product.compareAt : null
  const img = product.foto_url || product.images?.[0] || SITE.logo
  const [imageFailed, setImageFailed] = useState(false)
  const displayedImage = imageFailed ? SITE.logo : img
  const displayName = formatDisplayName(product.name)
  const showSeminovo = isSeminovo(product)
  const hasPrice = product.price != null && product.price > 0
  const handleAction = () => {
    if(!hasPrice){
      window.open(SITE.whatsapp, '_blank', 'noopener')
      return
    }
    if(inStock) addItem(product, variant, 1)
  }
  return (
    <article className="product-card">
      <div className="product-card-media" onClick={()=>onOpen?.(product)} style={{cursor:'pointer'}}>
        <img src={displayedImage} alt={displayName} loading="lazy" onError={()=>setImageFailed(true)} />
      </div>
      <div className="product-card-body">
        {showSeminovo && <p className="product-status">Seminovo</p>}
        <h3 className="product-card-title" onClick={()=>onOpen?.(product)} style={{cursor:'pointer'}}>{displayName}</h3>
        <div className="product-card-price">
          <div>
            {hasPrice ? (
              <>
                <p style={{fontSize:10, color:'var(--site-faint)', marginBottom:2, letterSpacing:'0.02em'}}>a partir de</p>
                <div style={{display:'flex', alignItems:'center', gap:6}}>
                  <span className="price-main">{formatBRL(product.price)}</span>
                  {compare && <span className="price-compare" style={{marginLeft:2}}>{formatBRL(compare)}</span>}
                </div>
              </>
            ) : (
              <span className="price-main" style={{color:'var(--site-text)', fontSize:14, fontWeight:700}}>Consultar preço</span>
            )}
          </div>
          <button type="button" onClick={handleAction} disabled={hasPrice ? !inStock : false} className="store-add-button">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 2H2"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>
            {hasPrice ? (inStock ? 'Adicionar' : 'Indisponível') : 'Consultar'}
          </button>
        </div>
      </div>
    </article>
  )
}
