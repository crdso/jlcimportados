import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

const TITLES = {
  '/': 'JLC Importados | Seu próximo upgrade começa aqui',
  '/loja': 'Loja | JLC Importados',
  '/contato': 'Contato | JLC Importados',
  '/politica-de-privacidade': 'Política de Privacidade | JLC Importados',
}

function getTitle(pathname){
  const p = pathname.replace(/\/+$/, '') || '/'
  if(TITLES[p]) return TITLES[p]
  return '404 | JLC Importados'
}

export default function PageTitle(){
  const { pathname } = useLocation()
  const title = getTitle(pathname)
  useLayoutEffect(()=>{
    document.title = title
  },[title])
  useEffect(()=>{
    document.title = title
  },[title])
  return null
}
