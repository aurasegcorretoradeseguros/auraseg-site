'use client';
import {
  ShieldCheck, PhoneCall, ArrowRight, CheckCircle2, MessageCircle, Mail,
  HeartPulse, BriefcaseBusiness, Users, Trophy, Clock, Lock, MapPin, Plane
} from 'lucide-react';

export default function Page() {
  // ====== DADOS DA AURASEG (edite) ======
  const whatsappLink =
    'https://wa.me/5511912302872?text=Ol%C3%A1%20quero%20uma%20cota%C3%A7%C3%A3o%20com%20a%20AuraSeg';
  const formspreeEndpoint = 'https://formspree.io/f/xblpgegb';
  const recaptchaSiteKey = '6LdOUforAAAAAOZBNR5K1bJ4Ttsa2iicxNVxSX2G';

  const emailDestino = 'aurasegcorretoradeseguros@gmail.com';
  const endereco = 'Rua das Uvaias 55';
  const cnpj = '00.000.000/0001-00';
  const susep = 'SUSEP: 000000000';
  // =====================================

  const navItems = [
    { href: '#servicos', label: 'Serviços' },
    { href: '#por-que', label: 'Por que a AuraSeg' },
    { href: '#faq', label: 'Dúvidas' },
    { href: '#contato', label: 'Contato' },
  ];

  const servicos = [
    { icon: HeartPulse, title: 'Saúde', desc: 'Planos individuais, familiares e empresariais com ampla rede e telemedicina.', bullets: ['Rede credenciada ampla', 'Sem pegadinhas', 'Telemedicina 24h'] },
    { icon: Plane, title: 'Viagem', desc: 'Seguro viagem nacional e internacional com assistência médica e bagagem.', bullets: ['Assistência médica', 'Bagagem e atrasos', 'Cobertura COVID quando aplicável'] },
    { icon: ShieldCheck, title: 'Vida', desc: 'Proteção financeira para você e sua família com coberturas sob medida.', bullets: ['Morte e Invalidez', 'Doenças Graves', 'Assistência Funeral'] },
    { icon: BriefcaseBusiness, title: 'Empresarial', desc: 'Benefícios para CNPJ: saúde PME, vida em grupo e consultoria.', bullets: ['Planos PME/Empresarial', 'Vida em Grupo', 'Consultoria de benefícios'] },
  ];

  const diferenciais = [
    { icon: Trophy, title: 'Atendimento 5★', desc: 'Suporte ágil por WhatsApp, e-mail e telefone.' },
    { icon: Clock, title: 'Cotações Rápidas', desc: 'Comparação entre seguradoras em minutos.' },
    { icon: Lock, title: 'Segurança', desc: 'Parceiros homologados e LGPD como padrão.' },
    { icon: Users, title: 'Consultoria', desc: 'Análise de perfil para pagar menos e cobrir mais.' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-xl bg-[#1C3D5A] grid place-items-center shadow-sm">
              <ShieldCheck className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-bold leading-none tracking-tight">AuraSeg</p>
              <p className="text-xs text-slate-500 -mt-0.5">Corretora de Seguros</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-slate-700 hover:text-slate-900">{n.label}</a>
            ))}
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-[#1C3D5A] text-white text-sm shadow-sm hover:opacity-95">
              <PhoneCall className="h-4 w-4" /> Falar agora
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C3D5A] via-[#224b70] to-[#0f1f2d] opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-24 grid md:grid-cols-2 items-center gap-10">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">Proteção e confiança para sua saúde, suas viagens e seu negócio.</h1>
            <p className="mt-4 text-white/90 text-lg">A AuraSeg compara as melhores seguradoras e encontra a apólice ideal. Atendimento humano, rápido e sem burocracia.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-white text-slate-900 font-medium shadow-md">
                <MessageCircle className="h-5 w-5" /> Pedir cotação
              </a>
              <a href="#servicos" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-white/30 text-white">
                Ver serviços <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-white/80">
              {['Atendimento 5★', 'Cotações multi-seguradora', 'Assistência no sinistro', 'LGPD & Segurança'].map((b) => (
                <div key={b} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />{b}</div>
              ))}
            </div>
          </div>

          {/* FORM HERO */}
          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <h3 className="text-xl font-semibold">Cotação Rápida</h3>
            <p className="text-sm text-slate-500">Preencha e retornamos em minutos.</p>
            <form className="mt-4 grid gap-3" action={formspreeEndpoint} method="POST">
              <input type="hidden" name="_subject" value="Nova cotação pelo site AuraSeg" />
              <input type="hidden" name="_next" value="https://www.aurasegcorretora.com.br/obrigado" />
              <input type="text" name="nome" placeholder="Seu nome" className="w-full rounded-xl border border-slate-200 px-4 py-3" required />
              <input type="tel" name="telefone" placeholder="WhatsApp" className="w-full rounded-xl border border-slate-200 px-4 py-3" required />
              <input type="email" name="email" placeholder="E-mail" className="w-full rounded-xl border border-slate-200 px-4 py-3" required />
              <select name="interesse" className="w-full rounded-xl border border-slate-200 px-4 py-3" required>
                <option value="">Selecione o tipo de seguro</option>
                <option>Saúde</option>
                <option>Viagem</option>
                <option>Vida</option>
                <option>Empresarial</option>
              </select>
              <textarea name="mensagem" placeholder="Conte um pouco do que precisa" className="w-full rounded-xl border border-slate-200 px-4 py-3 min-h-[100px]" />
              {/* Honeypot + reCAPTCHA v2 */}
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <div className="g-recaptcha" data-sitekey={recaptchaSiteKey}></div>
              <p className="text-xs text-slate-500">Ao enviar você concorda com nossa <a className="underline" href="#privacidade">Política de Privacidade</a>.</p>
              <button type="submit" className="rounded-2xl px-5 py-3 bg-[#1C3D5A] text-white font-medium shadow-md hover:opacity-95">Enviar</button>
            </form>
          </div>
        </div>
      </section>

      {/* LOGOS / PARCEIROS */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-6 gap-6 place-items-center opacity-80">
          {['SulAmérica', 'Bradesco', 'Porto', 'Allianz', 'Assist Card', 'Travel Ace'].map((n) => (
            <div key={n} className="text-slate-500 text-sm">{n}</div>
          ))}
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold">Nossos Serviços</h2>
          <p className="mt-2 text-slate-600">Soluções para pessoas e empresas.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicos.map(({ icon: Icon, title, desc, bullets }) => (
            <div key={title} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
              <div className="h-12 w-12 rounded-2xl bg-slate-100 grid place-items-center mb-4"><Icon className="h-6 w-6" /></div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-sm text-slate-600 mt-1">{desc}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" />{b}</li>
                ))}
              </ul>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#1C3D5A]">Falar com especialista <ArrowRight className="h-4 w-4" /></a>
            </div>
          ))}
        </div>
      </section>

      {/* POR QUE A AURASEG */}
      <section id="por-que" className="bg-slate-100/60">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold">Por que a AuraSeg?</h2>
            <p className="mt-2 text-slate-600">Mais que preço, entregamos estratégia de proteção e tranquilidade em cada etapa.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {diferenciais.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                  <div className="h-10 w-10 rounded-xl bg-slate-100 grid place-items-center mb-2"><Icon className="h-5 w-5" /></div>
                  <p className="font-medium">{title}</p>
                  <p className="text-sm text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200">
            <h3 className="text-lg font-semibold">Como funciona</h3>
            <ol className="mt-3 space-y-3 text-sm text-slate-700">
              <li className="flex gap-3"><span className="h-7 w-7 rounded-full bg-[#1C3D5A] text-white grid place-items-center text-xs">1</span>Você pede uma cotação informando seu perfil.</li>
              <li className="flex gap-3"><span className="h-7 w-7 rounded-full bg-[#1C3D5A] text-white grid place-items-center text-xs">2</span>Nós comparamos coberturas em várias seguradoras.</li>
              <li className="flex gap-3"><span className="h-7 w-7 rounded-full bg-[#1C3D5A] text-white grid place-items-center text-xs">3</span>Você escolhe a melhor opção (preço x proteção).</li>
              <li className="flex gap-3"><span className="h-7 w-7 rounded-full bg-[#1C3D5A] text-white grid place-items-center text-xs">4</span>Ativamos sua apólice e acompanhamos no dia a dia.</li>
            </ol>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-[#1C3D5A] text-white font-medium">Começar agora <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      {/* CTA STRIPE */}
      <section className="bg-[#1C3D5A]">
        <div className="max-w-7xl mx-auto px-4 py-10 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xl md:text-2xl font-semibold">Quer economizar sem abrir mão da proteção?</p>
            <p className="text-white/85">Converse com nossos especialistas e receba sua proposta hoje.</p>
          </div>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-white text-slate-900 font-medium">Chamar no WhatsApp <PhoneCall className="h-4 w-4" /></a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold">Perguntas Frequentes</h2>
          <p className="mt-2 text-slate-600">Tire suas dúvidas sobre o processo e coberturas.</p>
        </div>
        <div className="mt-8 divide-y rounded-2xl border border-slate-200 bg-white shadow-sm">
          {[
            { q: 'Quanto tempo leva para receber uma cotação?', a: 'Normalmente entre 15 e 60 minutos em horário comercial, dependendo do produto e da seguradora.' },
            { q: 'Vocês dão suporte em caso de sinistro?', a: 'Sim. Acompanhamos todo o processo, desde a abertura até a indenização.' },
            { q: 'A AuraSeg trabalha com quais seguradoras?', a: 'Trabalhamos com um portfólio amplo de seguradoras líderes no mercado. Indicamos a melhor conforme seu perfil.' },
            { q: 'Posso contratar 100% online?', a: 'Sim. Fazemos tudo digitalmente, com assinatura eletrônica e emissão rápida.' },
          ].map((f, i) => (
            <details key={i} className="group open:bg-slate-50">
              <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between">
                <span className="font-medium">{f.q}</span>
                <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
              </summary>
              <div className="px-5 pb-5 text-slate-700 text-sm">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-extrabold">Fale com a gente</h2>
          <p className="mt-2 text-slate-600">Estamos prontos para ajudar você a escolher a melhor proteção.</p>
          <div className="mt-6 space-y-3 text-slate-700">
            <p className="flex items-center gap-2"><PhoneCall className="h-5 w-5" /> (11) 91230-2872</p>
            <p className="flex items-center gap-2"><Mail className="h-5 w-5" /> {emailDestino}</p>
            <p className="flex items-center gap-2"><MapPin className="h-5 w-5" /> {endereco}</p>
          </div>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-[#1C3D5A] text-white font-medium">Atendimento imediato <MessageCircle className="h-4 w-4" /></a>
        </div>

        {/* FORM CONTATO */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200">
          <h3 className="text-lg font-semibold">Envie uma mensagem</h3>
          <form className="mt-4 grid gap-3" action={formspreeEndpoint} method="POST">
            <input type="hidden" name="_subject" value="Contato pelo site AuraSeg" />
            <input type="hidden" name="_next" value="https://www.aurasegcorretora.com.br/obrigado" />
            <input type="text" name="nome" placeholder="Seu nome" className="w-full rounded-xl border border-slate-200 px-4 py-3" required />
            <input type="tel" name="telefone" placeholder="WhatsApp" className="w-full rounded-xl border border-slate-200 px-4 py-3" required />
            <input type="email" name="email" placeholder="E-mail" className="w-full rounded-xl border border-slate-200 px-4 py-3" required />
            <textarea name="mensagem" placeholder="Como podemos ajudar?" className="w-full rounded-xl border border-slate-200 px-4 py-3 min-h-[120px]" />
            {/* Honeypot + reCAPTCHA v2 */}
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="g-recaptcha" data-sitekey={recaptchaSiteKey}></div>
            <p className="text-xs text-slate-500">Ao enviar você concorda com nossa <a className="underline" href="#privacidade">Política de Privacidade</a>.</p>
            <button type="submit" className="rounded-2xl px-5 py-3 bg-[#1C3D5A] text-white font-medium shadow-md hover:opacity-95">Enviar</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 items-start">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-[#1C3D5A] grid place-items-center"><ShieldCheck className="h-4 w-4 text-white" /></div>
              <p className="font-semibold">AuraSeg Corretora de Seguros</p>
            </div>
            <p className="mt-2 text-sm text-slate-600">{endereco}</p>
            <p className="mt-1 text-xs text-slate-500">CNPJ: {cnpj} · {susep}</p>
            <p className="mt-4 text-xs text-slate-500" id="privacidade">Política de Privacidade: seus dados são tratados conforme a LGPD. Utilizamos apenas o necessário para contato e cotação.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-semibold">Empresa</p>
              <ul className="mt-2 space-y-2 text-slate-600">
                <li><a href="#por-que">Sobre</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Ajuda</p>
              <ul className="mt-2 space-y-2 text-slate-600">
                <li><a href="#faq">FAQ</a></li>
                <li><a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Soluções</p>
              <ul className="mt-2 space-y-2 text-slate-600">
                <li>Seguro Saúde</li>
                <li>Seguro Viagem</li>
                <li>Seguro de Vida</li>
                <li>Seguro Empresarial</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} AuraSeg. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
