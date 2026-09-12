import { useMemo, useState } from 'react'
import { Search, ListFilter, LayoutGrid, ChevronDown, ShieldCheck, Truck, SlidersHorizontal } from 'lucide-react'
import ProductCard from '../components/ProductCard.jsx'
import ProductModal from '../components/ProductModal.jsx'
import products from '../data/products.json'
import './Loja.css'
import { useCart } from '../context/CartContext.jsx'

const CATS = ['Todos']

export default function Loja(){
  const [q,setQ]=useState('')
  const [cat,setCat]=useState('Todos')
  const [sort,setSort]=useState('relevancia')
  const [selected,setSelected]=useState(null)
  const [viewMode,setViewMode]=useState('grid')
  const { openCart } = useCart()

  const filtered = useMemo(()=>{
    let list = products.filter(p=>!p.hidden)
    if(cat==='iPhones') list=list.filter(p=>p.category==='iphones')
    else if(cat==='Samsung') list=list.filter(p=> (p.marca||'').toLowerCase().includes('samsung') || p.category==='samsung')
    else if(cat==='Xiaomi') list=list.filter(p=> (p.marca||'').toLowerCase().includes('xiaomi') || p.category==='xiaomi')
    else if(cat==='Realme') list=list.filter(p=>p.category==='realme' || (p.marca||'').toLowerCase().includes('realme'))
    if(q) {
      const qq = q.toLowerCase()
      list=list.filter(p=> p.name.toLowerCase().includes(qq) || (p.modelo||'').toLowerCase().includes(qq) || (p.marca||'').toLowerCase().includes(qq))
    }
    if(sort==='menor') list=[...list].sort((a,b)=> (a.price ?? 999999999) - (b.price ?? 999999999))
    if(sort==='maior') list=[...list].sort((a,b)=> (b.price ?? 0) - (a.price ?? 0))
    if(sort==='nome') list=[...list].sort((a,b)=>a.name.localeCompare(b.name))
    return list
  },[q,cat,sort])

  return (
    <main style={{paddingTop:'calc(var(--mobile-header-height) + 8px)'}}>
      {/* HERO — store-hero-open max-w 1280 mx-auto px-4 sm:px-6 */}
      <section className="store-hero-open">
        <div className="store-hero-grid">
          <div>
            <p className="section-kicker">JLC IMPORTADOS</p>
            <h1 className="store-hero-title">Tecnologia para escolher bem.</h1>
            <p className="store-hero-lead">Explore o catálogo e fale com a equipe da JLC Importados pelo WhatsApp para consultar detalhes.</p>
          </div>
          <div className="store-hero-visual store-hero-banner">
            <div className="store-hero-banner-inner">
              <img src="/logo-jlc.png" alt="JLC Importados" style={{objectFit:'contain', padding:24, background:'#fff'}} />
            </div>
          </div>
        </div>
        <div className="store-hero-benefits">
          <div className="store-benefit">
            <ShieldCheck size={20} strokeWidth={1.8} />
            <strong>Atendimento</strong>
            <span>Canal oficial</span>
          </div>
          <div className="store-benefit">
            <Truck size={20} strokeWidth={1.8} />
            <strong>Catálogo</strong>
            <span>Consulte disponibilidade</span>
          </div>
          <div className="store-benefit">
            <SlidersHorizontal size={20} strokeWidth={1.8} />
            <strong>Contato</strong>
            <span>WhatsApp oficial</span>
          </div>
        </div>
      </section>

      {/* CATÁLOGO — store-products-section */}
      <section className="store-products-section">
        <div className="store-toolbar">
          <div className="store-toolbar-row">
            <label className="store-search-field">
              <Search size={16} strokeWidth={2} />
              <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Buscar por modelo ou marca..." />
            </label>
            <button type="button" className="store-icon-btn" onClick={()=>setViewMode(v=>v==='grid'?'list':'grid')} aria-label={viewMode==='grid'?'Alternar para lista':'Alternar para grade'}>
              {viewMode==='grid' ? <><ListFilter size={16} strokeWidth={2} /> Lista</> : <><LayoutGrid size={16} strokeWidth={2} /> Grade</>}
            </button>
            <label className="store-sort-field">
              <select value={sort} onChange={e=>setSort(e.target.value)}>
                <option value="relevancia">Destaques</option>
                <option value="menor">Menor preço</option>
                <option value="maior">Maior preço</option>
                <option value="nome">Nome</option>
              </select>
              <ChevronDown size={14} strokeWidth={2} />
            </label>
          </div>
          <div className="store-filter-row">
            {CATS.map(c=> (
              <button key={c} onClick={()=>setCat(c)} className={`store-filter-pill ${cat===c?'is-active':''}`}>{c}</button>
            ))}
          </div>
        </div>

        <div className="store-collection-header">
          <div>
            <p>{filtered.length} itens encontrados</p>
            <h2>Produtos em destaque</h2>
          </div>
          <button type="button" onClick={openCart} className="store-view-cart">Ver carrinho</button>
        </div>

        <div className={`store-products-grid ${viewMode==='list'?'is-list':''}`}>
          {filtered.map(p=> <ProductCard key={p.slug} product={p} onOpen={setSelected} />)}
        </div>
        {filtered.length===0 && <p style={{textAlign:'center', color:'var(--site-muted)', marginTop:18}}>Nenhum produto encontrado.</p>}
      </section>

      {selected && <ProductModal product={selected} onClose={()=>setSelected(null)} />}
    </main>
  )
}
