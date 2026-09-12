import { useEffect, useState } from 'react'
import { Pin, Copy } from 'lucide-react'
import fallback from '../data/instagramFallback.json'

const INSTAGRAM_AVATAR_LOGO = '/logo-clara.png'

const STATIC_POSTS = []

export default function InstagramSection(){
  const [data,setData]=useState(fallback)
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    let cancelled=false
    async function load(){
      try{
        const res = await fetch('/.netlify/functions/instagram', { headers:{Accept:'application/json'} })
        if(!res.ok) throw new Error('no function')
        const json = await res.json()
        if(json && json.username && Array.isArray(json.posts) && !cancelled){
          setData(json)
        }
      }catch{
      } finally {
        if(!cancelled) setLoading(false)
      }
    }
    const t = setTimeout(load, 300)
    return ()=>{ cancelled=true; clearTimeout(t); setLoading(false) }
  },[])

  const posts = STATIC_POSTS

  return (
    <section id="instagram" className="instagram-clean-section">
      <div className="site-shell">
        <div className="reveal">
          <p className="section-kicker">NO INSTAGRAM</p>
          <h2 style={{fontSize:'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight:800, letterSpacing:'-.03em', marginTop:12, lineHeight:0.95}}>
            Acompanhe a<br />JLC de perto.
          </h2>
        </div>

        <div className="ig-profile-card reveal" style={{marginTop:'2.5rem'}}>
          {/* COLUNA ESQUERDA - perfil solto, sem card externo */}
          <div style={{display:'grid', gap:18, alignContent:'start'}}>
            <div style={{display:'flex', gap:16, alignItems:'center'}}>
              {(() => {
                const isLogo = !data.profilePic || data.profilePic.includes('logo-')
                const src = isLogo ? INSTAGRAM_AVATAR_LOGO : data.profilePic
                return (
                  <img
                    src={src}
                    alt={data.username}
                    className="ig-avatar"
                    style={{
                      width:96,
                      height:96,
                      minWidth:96,
                      borderRadius:999,
                      objectFit: isLogo ? 'contain' : 'cover',
                      background:'#0a0a0a',
                      border:'3px solid var(--site-border)',
                      padding: isLogo ? 10 : 0
                    }}
                    loading="lazy"
                    onError={e=>{ e.currentTarget.src = INSTAGRAM_AVATAR_LOGO; e.currentTarget.style.background='#0a0a0a'; e.currentTarget.style.objectFit='contain'; e.currentTarget.style.padding='10px' }}
                  />
                )
              })()}
              <div>
                <p style={{fontWeight:800, fontSize:15, color:'var(--site-text)', lineHeight:1.2}}>@{data.username}</p>
                <p style={{color:'var(--site-muted)', fontSize:13, marginTop:2}}>{data.fullName}</p>
              </div>
            </div>

            <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:8, textAlign:'center', padding:'14px 0', borderTop:'1px solid var(--site-border)', borderBottom:'1px solid var(--site-border)'}}>
              <div><strong style={{display:'block', fontSize:15, color:'var(--site-text)', fontWeight:800}}>{loading ? '—' : data.postsCount}</strong><span style={{fontSize:11,color:'var(--site-muted)'}}>publicações</span></div>
              <div><strong style={{display:'block', fontSize:15, color:'var(--site-text)', fontWeight:800}}>{loading ? '—' : (data.followers >= 1000 ? (data.followers/1000).toFixed(1).replace('.0','').replace('.',',') + ' mil' : data.followers)}</strong><span style={{fontSize:11,color:'var(--site-muted)'}}>seguidores</span></div>
              <div><strong style={{display:'block', fontSize:15, color:'var(--site-text)', fontWeight:800}}>{loading ? '—' : data.following.toLocaleString('pt-BR')}</strong><span style={{fontSize:11,color:'var(--site-muted)'}}>seguindo</span></div>
            </div>

            {(() => {
              const raw = data.bio || fallback.bio || ''
              const lines = raw.split('\n').map(s=>s.trim()).filter(Boolean)
              const category = lines[0] || 'Loja de celulares'
              const bodyLines = lines.slice(1)
              return (
                <>
                  <p style={{fontSize:13, lineHeight:1.4, color:'var(--site-faint)', letterSpacing:'0.01em'}}>{category}</p>
                  <div style={{display:'grid', gap:2, marginTop:2}}>
                    {bodyLines.map((l,i)=> (
                      <p key={i} style={{fontSize:14, lineHeight:1.55, color:'var(--site-text)', whiteSpace:'pre-line', fontWeight: i===0 ? 400 : 400}}>{l}</p>
                    ))}
                  </div>
                  <div style={{display:'grid', gap:6, marginTop:10}}>
                    <a href="https://www.instagram.com/jlc.importados/" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex', alignItems:'center', gap:6, fontSize:14, fontWeight:600, color:'#0095f6', textDecoration:'none'}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                      instagram.com/jlc.importados
                    </a>
                    <span style={{display:'inline-flex', alignItems:'center', gap:6, fontSize:14, color:'var(--site-text)'}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M16 8h.01"/><path d="M12 2a10 10 0 0 1 10 10"/><path d="M2 12a10 10 0 0 1 10-10"/></svg>
                      jlc.importados
                    </span>
                  </div>
                </>
              )
            })()}

            <a href={data.profileUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{justifyContent:'center', textDecoration:'none', marginTop:12}}>Seguir no Instagram</a>
          </div>

          {/* COLUNA DIREITA - grade 3x2 — 6 imagens reais de public/instagram em ordem fixada */}
          <div className="ig-grid" style={{alignContent:'start'}}>
            {posts.map((p, idx)=> {
              const isPinned = idx === 0 || idx === 1 || idx === 2
              const isAlbum = idx === 3 || idx === 5
              return (
                <a key={p.id} href={p.permalink} target="_blank" rel="noopener" className="ig-tile" aria-label={`Abrir post no Instagram`} style={{position:'relative'}}>
                  <img src={p.image} alt={p.alt} loading="lazy" style={{objectPosition:'center'}} onError={e=>{e.currentTarget.style.display='none'}} />
                  {isPinned && (
                    <span aria-hidden="true" style={{position:'absolute', top:8, right:8, color:'#fff', filter:'drop-shadow(0 1px 3px rgba(0,0,0,0.7))', lineHeight:0}}>
                      <Pin size={14} strokeWidth={2} fill="white" style={{transform:'rotate(45deg)', display:'block'}} />
                    </span>
                  )}
                  {isAlbum && (
                    <span aria-hidden="true" style={{position:'absolute', top:8, right:8, color:'#fff', filter:'drop-shadow(0 1px 3px rgba(0,0,0,0.7))', lineHeight:0}}>
                      <Copy size={14} strokeWidth={2} style={{display:'block'}} />
                    </span>
                  )}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
