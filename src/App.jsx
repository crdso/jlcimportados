import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import FloatingWhatsapp from './components/FloatingWhatsapp.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import PageTitle from './components/PageTitle.jsx'
import { useCart } from './hooks/useCart.js'
import Home from './pages/Home.jsx'
import Loja from './pages/Loja.jsx'
import Contato from './pages/Contato.jsx'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade.jsx'
import NotFound from './pages/NotFound.jsx'
import CookieBanner from './components/CookieBanner.jsx'
import { SITE_INACTIVE } from './config/site.js'
import Inactive from './pages/Inactive.jsx'

export default function App(){
  const { count, openCart } = useCart()

  if(SITE_INACTIVE){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Inactive />} />
        </Routes>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageTitle />
      <Header cartCount={count} onCartOpen={openCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <CartDrawer />
      <FloatingWhatsapp />
      <CookieBanner />
    </BrowserRouter>
  )
}
