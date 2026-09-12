import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useTheme } from './ThemeContext.jsx'

const KEY='jlc_cart_v1'
const Ctx=createContext(null)
function load(){
  try{ const v=localStorage.getItem(KEY); return v?JSON.parse(v):[] }catch{ return [] }
}
export function CartProvider({children}){
  const [items,setItems]=useState(()=>{ try{ return load() }catch{ return [] }})
  const [open,setOpen]=useState(false)
  const { theme } = useTheme()
  useEffect(()=>{ try{ localStorage.setItem(KEY, JSON.stringify(items)) }catch{} },[items, theme])
  const value=useMemo(()=>{
    const count=items.reduce((a,b)=>a+b.quantity,0)
    const subtotal=items.reduce((a,b)=>a+b.price*b.quantity,0)
    const logo = theme === 'light' ? '/logo-escura.png' : '/logo-clara.png'
    return {
      items,count,subtotal,open,
      openCart:()=>setOpen(true), closeCart:()=>setOpen(false),
      addItem:(product, variant, qty=1)=>{
        setItems(prev=>{
          const id=variant?.id||product.slug
          const ex=prev.find(x=>x.variantId===id)
          if(ex) return prev.map(x=>x.variantId===id?{...x, quantity:Math.min(99,x.quantity+qty)}:x)
          return [...prev, {
            variantId:id,
            productSlug:product.slug,
            name:product.name,
            variantLabel:variant?.label||variant?.storage||product.armazenamento||'Unico',
            image:product.images?.[0]||logo,
            price:variant?.price||product.price,
            quantity:qty
          }]
        })
        setOpen(true)
      },
      updateQty:(id,qty)=>{
        if(qty<=0) setItems(p=>p.filter(x=>x.variantId!==id))
        else setItems(p=>p.map(x=>x.variantId===id?{...x, quantity:Math.min(99,qty)}:x))
      },
      removeItem:(id)=> setItems(p=>p.filter(x=>x.variantId!==id)),
      clear:()=> setItems([]),
    }
  },[items,open,theme])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
export function useCart(){
  const v=useContext(Ctx)
  if(!v) throw new Error('useCart missing provider')
  return v
}