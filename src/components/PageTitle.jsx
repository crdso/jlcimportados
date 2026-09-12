import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const DEFAULT_DESCRIPTION = 'Conheça a JLC Importados, confira os produtos disponíveis e fale com a equipe pelo WhatsApp.'
const META = {
  '/': {
    title: 'JLC Importados | Tecnologia para o seu próximo upgrade',
    description: DEFAULT_DESCRIPTION,
  },
  '/loja': {
    title: 'Produtos | JLC Importados',
    description: 'Confira os aparelhos disponíveis no catálogo da JLC Importados.',
  },
  '/contato': {
    title: 'Contato e localização | JLC Importados',
    description: 'Fale com a JLC Importados pelo WhatsApp, telefone ou Instagram e veja como chegar.',
  },
  '/politica-de-privacidade': {
    title: 'Política de Privacidade | JLC Importados',
    description: 'Entenda como o site da JLC Importados utiliza dados e preferências locais.',
  },
}

function setMeta(selector, value){
  document.querySelector(selector)?.setAttribute('content', value)
}

export default function PageTitle(){
  const { pathname } = useLocation()

  useEffect(()=>{
    const path = pathname.replace(/\/+$/, '') || '/'
    const meta = META[path] || { title: 'Página não encontrada | JLC Importados', description: DEFAULT_DESCRIPTION }
    document.title = meta.title
    setMeta('meta[name="description"]', meta.description)
    setMeta('meta[property="og:title"]', meta.title)
    setMeta('meta[property="og:description"]', meta.description)
    setMeta('meta[name="twitter:title"]', meta.title)
    setMeta('meta[name="twitter:description"]', meta.description)
  },[pathname])

  return null
}
