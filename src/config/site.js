/**
 * Flag central para modo inativo / demonstrativo.
 * - true  → todas as rotas públicas exibem a página demonstrativa (site não operacional).
 * - false → site completo volta a funcionar normalmente.
 *
 * Nenhuma página, componente ou asset é deletado — apenas ocultado quando ativo.
 */
export const SITE_INACTIVE = false

export const SITE = {
  name: 'JLC Importados',
  logo: '/logo-jlc.png',
  logoLight: '/logo-clara.png',
  logoDark: '/logo-escura.png',
  instagram: 'https://www.instagram.com/jlc.importados/',
  instagramHandle: '@jlc.importados',
  whatsapp: 'https://api.whatsapp.com/message/3RJBIRM2N7E6I1?autoload=1&app_absent=0&utm_source=ig',
  phone: '(63) 99204-3765',
  phoneHref: 'tel:+5563992043765',
  maps: 'https://maps.app.goo.gl/8auVyEg71ke91Km49',
}
