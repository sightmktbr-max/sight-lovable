import { useState } from "react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Check, Zap, Target, BarChart3, FileText, Brain, Layers, Clock, AlertTriangle, Send } from "lucide-react";
import heroImage from "@/assets/ai-media-operator-hero.png";

const problems = [
  { icon: AlertTriangle, text: "Campanhas sem consistência - cada conta opera de um jeito" },
  { icon: Layers, text: "Falta de organização — briefings perdidos, dados espalhados" },
  { icon: Target, text: "Dificuldade de escalar — o gargalo é sempre operacional" },
  { icon: Clock, text: "Perda de tempo — retrabalho constante em tarefas repetitivas" },
];

const learnings = [
  "Como usar Claude gratuitamente para operações de mídia",
  "Como criar skills reutilizáveis para cada etapa do processo",
  "Como estruturar campanhas inteiras com IA em minutos",
  "Como gerar relatórios automáticos com dados reais",
  "Como padronizar sua operação com workflows prontos",
  "Como escalar sua operação sem aumentar custo operacional",
];

const solutions = [
  { icon: Brain, title: "Criação de estratégias", desc: "Use IA para analisar mercado, concorrência e definir estratégias de campanha com profundidade." },
  { icon: FileText, title: "Copies e roteiros", desc: "Gere copies para anúncios, roteiros para vídeos e variações de criativos em segundos." },
  { icon: BarChart3, title: "Análise de performance", desc: "Interprete dados de campanha com IA e extraia insights acionáveis automaticamente." },
  { icon: Zap, title: "Relatórios automáticos", desc: "Transforme dados brutos em relatórios profissionais prontos para o cliente." },
];

const steps = [
  { number: "01", title: "Configure seu ambiente", desc: "Aprenda a configurar Claude e ChatGPT para operações de mídia — sem código, sem complicação." },
  { number: "02", title: "Use as skills", desc: "Acesse a biblioteca de skills prontas e aprenda a criar as suas para cada etapa da operação." },
  { number: "03", title: "Aplique nos seus clientes", desc: "Execute o sistema na prática com seus clientes reais e veja os resultados imediatos." },
];

const offerItems = [
  "Acesso completo ao curso gravado",
  "Biblioteca de skills prontas para mídia paga",
  "Workflows completos de operação com IA",
  "Atualizações futuras inclusas",
];

const AIMediaOperator = () => {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSending(true);
    try {
      const mailtoLink = `mailto:contato@sightmkt.com.br?subject=${encodeURIComponent("Lista de espera — AI Media Operator")}&body=${encodeURIComponent(`Email para lista de espera: ${email}`)}`;
      window.open(mailtoLink, "_blank");
      setSent(true);
      setEmail("");
    } catch {
      // silent
    } finally {
      setSending(false);
    }
  };

  return (
    <Layout>
      {/* ═══════════════ HERO — dark ═══════════════ */}
      <section className="section-padding min-h-[85vh] flex items-center">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-subtle mb-6">
              Curso · AI + Mídia Paga
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-foreground mb-6 leading-[1.08] max-w-3xl">
              Você não precisa de mais conhecimento de tráfego. Você precisa de um sistema.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-text-body leading-relaxed max-w-2xl mb-10">
              Aprenda a operar mídia paga com IA usando Claude + ChatGPT — sem código, sem automações complexas.
            </p>
          </FadeIn>
          <FadeIn delay={0.14}>
            <a
              href="#waitlist"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-base font-medium rounded-sm hover:opacity-90 transition-opacity"
            >
              Quero estruturar minha operação
              <ArrowRight size={18} />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ HERO VISUAL — light ═══════════════ */}
      <section className="section-padding section-light">
        <div className="container-wide mx-auto">
          <FadeIn>
            <div className="rounded-sm overflow-hidden border border-border shadow-2xl">
              <img src={heroImage} alt="AI Media Operator — sistema de operação com IA" className="w-full h-auto" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ PROBLEMA — dark ═══════════════ */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-subtle mb-4">
              O problema
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 max-w-2xl">
              Você sabe operar. Mas opera no improviso.
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((p, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="flex items-start gap-4 p-6 border border-border rounded-sm bg-card">
                  <p.icon size={20} className="text-text-subtle mt-0.5 shrink-0" />
                  <p className="text-text-body leading-relaxed">{p.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ BIG IDEA — light ═══════════════ */}
      <section className="section-padding section-light">
        <div className="container-narrow mx-auto text-center">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-subtle mb-6">
              A verdade
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 max-w-2xl mx-auto">
              O problema não é falta de conhecimento. É falta de sistema.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-body text-lg leading-relaxed max-w-xl mx-auto">
              Você já sabe rodar campanhas. O que falta é um método replicável que funcione para qualquer cliente, qualquer conta, qualquer escala.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ SOLUÇÃO — dark ═══════════════ */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-subtle mb-4">
              A solução
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 max-w-2xl">
              Um sistema completo de operação com IA.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-body text-lg leading-relaxed max-w-2xl mb-16">
              Do planejamento à análise de resultados — cada etapa da sua operação estruturada com inteligência artificial.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((s, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="p-8 border border-border rounded-sm bg-card">
                  <s.icon size={24} className="text-foreground mb-4" />
                  <h3 className="font-serif text-xl text-foreground mb-3">{s.title}</h3>
                  <p className="text-text-body text-sm leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ O QUE VOCÊ VAI APRENDER — light ═══════════════ */}
      <section className="section-padding section-light">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-subtle mb-4">
              Conteúdo
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">
              O que você vai aprender
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-4">
            {learnings.map((item, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="flex items-start gap-3 py-4">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full border border-border mt-0.5 shrink-0">
                    <Check size={12} className="text-foreground" />
                  </span>
                  <p className="text-text-body leading-relaxed">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ COMO FUNCIONA — dark ═══════════════ */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-subtle mb-4">
              Como funciona
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-16">
              Três passos para transformar sua operação.
            </h2>
          </FadeIn>
          <div className="space-y-16">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                  <span className="font-serif text-5xl md:text-6xl text-foreground/10">{step.number}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-3">{step.title}</h3>
                    <p className="text-text-body leading-relaxed max-w-lg">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ DIFERENCIAL + AUTORIDADE — light ═══════════════ */}
      <section className="section-padding section-light">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-subtle mb-4">
              Quem criou
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              Criado por quem opera, não por quem ensina.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-6 max-w-2xl">
              <p className="text-text-body text-lg leading-relaxed">
                Este sistema foi desenvolvido por uma especialista com experiência gerenciando grandes contas de mídia paga - de operações locais a campanhas com atuação internacional.
              </p>
              <p className="text-text-body text-lg leading-relaxed">
                Não é teoria. É um método construído na prática, testado em cenários reais, com clientes reais e orçamentos reais. O AI Media Operator é o sistema que usamos internamente — agora disponível para outros profissionais.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ OFERTA — dark ═══════════════ */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-subtle mb-4">
              O que você recebe
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10">
              Tudo que você precisa para operar com IA.
            </h2>
          </FadeIn>
          <div className="border border-border rounded-sm bg-card p-8 md:p-12">
            <ul className="space-y-5 mb-10">
              {offerItems.map((item, i) => (
                <FadeIn key={i} delay={i * 0.04}>
                  <li className="flex items-center gap-4 text-text-body">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-foreground/10">
                      <Check size={14} className="text-foreground" />
                    </span>
                    <span className="text-lg">{item}</span>
                  </li>
                </FadeIn>
              ))}
            </ul>
            <FadeIn delay={0.2}>
              <div className="pt-6 border-t border-border">
                <p className="text-text-subtle text-sm mb-2 uppercase tracking-widest font-medium">Status</p>
                <p className="font-serif text-2xl text-foreground">Em breve</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA FINAL + WAITLIST — light ═══════════════ */}
      <section id="waitlist" className="section-padding section-light">
        <div className="container-narrow mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Seja o primeiro a acessar.
            </h2>
          </FadeIn>
          <FadeIn delay={0.06}>
            <p className="text-text-body text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Entre na lista de espera e receba acesso antecipado ao AI Media Operator com condições exclusivas de lançamento.
            </p>
          </FadeIn>
          <FadeIn delay={0.12}>
            {sent ? (
              <p className="text-foreground text-lg font-medium">
                Pronto! Você está na lista. ✓
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-4 rounded-sm border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  <Send size={16} />
                  Entrar na lista
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default AIMediaOperator;
