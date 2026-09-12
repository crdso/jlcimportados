import { SITE } from '../config/site.js'

const codeStyle = {background:'var(--site-panel-soft)', border:'1px solid var(--site-border)', padding:'1px 6px', borderRadius:6, fontSize:12}
const textStyle = {color:'var(--site-muted)', fontSize:14, lineHeight:1.7}

export default function PoliticaPrivacidade(){
  return (
    <main className="privacy-page">
      <section>
        <div className="privacy-shell">
          <p className="section-kicker">POLÍTICA DE PRIVACIDADE</p>
          <h1>Como cuidamos dos seus dados</h1>
          <p className="privacy-lead">Informações objetivas sobre o funcionamento atual do site da JLC Importados.</p>
          <div className="privacy-content">
            <section><h2>1. Resumo direto</h2><p style={textStyle}>A JLC Importados usa este site para apresentar produtos e disponibilizar formas de contato. Não há pagamento online no site.</p></section>
            <section><h2>2. Dados utilizados</h2><p style={textStyle}>Não é necessário cadastro ou login para navegar. Ao abrir um canal externo, as informações compartilhadas seguem as regras da plataforma escolhida.</p></section>
            <section><h2>3. Carrinho e armazenamento local</h2><p style={textStyle}>Os itens adicionados ao carrinho ficam salvos apenas no navegador em <code style={codeStyle}>jlc_cart_v1</code>. Eles permanecem ali até serem removidos ou até a limpeza dos dados locais.</p></section>
            <section><h2>4. WhatsApp</h2><p style={textStyle}>Os botões de WhatsApp abrem o canal oficial da JLC Importados. A conversa só acontece quando você prossegue no aplicativo ou site do WhatsApp.</p></section>
            <section><h2>5. Links externos</h2><p style={textStyle}>Links para Google Maps, Instagram e WhatsApp levam a serviços externos, cada um com suas próprias políticas e condições de uso.</p></section>
            <section>
              <h2>6. Preferências essenciais</h2>
              <p style={textStyle}>O site utiliza armazenamento local para manter o carrinho e registrar a escolha exibida no aviso de privacidade:</p>
              <ul>
                <li><code style={codeStyle}>jlc_cart_v1</code> guarda os itens do carrinho;</li>
                <li><code style={codeStyle}>jlc_cookie_consent</code> guarda sua escolha no aviso.</li>
              </ul>
              <p style={textStyle}>Não há cookies de rastreamento ou publicidade implementados no site.</p>
            </section>
            <section><h2>7. Direitos do usuário</h2><p style={textStyle}>Você pode solicitar informações, correção ou exclusão dos dados que tenha enviado diretamente à JLC Importados, conforme a legislação aplicável.</p></section>
            <section><h2>8. Contato</h2><p style={textStyle}>Para assuntos de privacidade, fale com a JLC Importados pelo <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a> ou telefone <a href={SITE.phoneHref}>{SITE.phone}</a>.</p></section>
            <section><h2>9. Última atualização</h2><p style={textStyle}>Setembro de 2026.</p></section>
          </div>
        </div>
      </section>
    </main>
  )
}
