import { useState } from "react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import {
  ArrowRight, Check, Zap, Target, BarChart3, FileText, Brain,
  Layers, Clock, AlertTriangle, Send, XCircle, CheckCircle2,
  Sparkles, PenTool, LineChart, LayoutTemplate
} from "lucide-react";
import heroImage from "@/assets/ai-media-operator-hero.png";

/* ─── Data ─── */

const identificationItems = [
  "Roda campanhas mas tudo parece improviso",
  "Perde tempo com tarefas repetitivas",
  "Tem dificuldade de escalar clientes",
  "Sente que está sempre apagando incêndio",
];

const systemIncludes = [
  { icon: Zap, label: "Sistema de prompts prontos" },
  { icon: LayoutTemplate, label: "Estrutura de campanha" },
  { icon: PenTool, label: "Geração de criativos" },
  { icon: LineChart, label: "Análise de performance" },
  { icon: FileText, label: "Relatórios claros" },
];

const beforeItems = [
  "Campanhas sem padrão",
  "Decisões no feeling",
  "Retrabalho constante",
];

const afterItems = [
  "Operação estruturada",
  "Decisões baseadas em dados",
  "Processos replicáveis",
];

const learnings = [
  "Criar estratégias completas com IA",
  "Gerar criativos que convertem",
  "Analisar campanhas com clareza",
  "Estruturar relatórios profissionais",
  "Otimizar campanhas com lógica",
];

const steps = [
  { number: "01", title: "Configure seu ambiente", desc: "Aprenda a configurar Claude e ChatGPT para operações de mídia — sem código, sem complicação." },
  { number: "02", title: "Use as skills", desc: "Acesse a biblioteca de skills prontas e aprenda a criar as suas para cada etapa da operação." },
  { number: "03", title: "Aplique nos seus clientes", desc: "Execute o sistema na prática com seus clientes reais e veja os resultados imediatos." },
];

const offerItems = [
  "Acesso completo ao curso gravado",
  "Biblioteca de skills prontas para mídia paga",
  "Prompts estruturados para cada etapa",
  "Workflows aplicáveis na sua operação",
  "Atualizações futuras inclusas",
];

const resultsItems = [
  "Estruturar campanhas em minutos",
  "Criar criativos com consistência",
  "Entregar relatórios claros para clientes",
  "Escalar sua operação sem aumentar custo",
];

/* ─── Page ─── */

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
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="section-padding min-h-[85vh] flex items-center">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-text-subtle mb-8">
              Curso · AI + Mídia Paga
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-foreground mb-8 leading-[1.08] max-w-3xl">
              Você não precisa de mais conhecimento de tráfego.{" "}
              <span className="text-text-body">
                Você precisa de um sistema que funcione com vários clientes ao mesmo tempo.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-text-body leading-relaxed max-w-2xl mb-12">
              Aprenda a estruturar, executar e otimizar campanhas com IA usando Claude + ChatGPT — sem código e sem automações complexas.
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

      {/* ═══════════════ HERO VISUAL ═══════════════ */}
      <section className="section-padding section-light">
        <div className="container-wide mx-auto">
          <FadeIn>
            <div className="rounded-sm overflow-hidden border border-border shadow-2xl">
              <img src={heroImage} alt="AI Media Operator — sistema de operação com IA" className="w-full h-auto" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ IDENTIFICAÇÃO ═══════════════ */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-text-subtle mb-4">
              Isso soa familiar?
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 max-w-2xl">
              Se você se identifica com algum desses cenários:
            </h2>
          </FadeIn>
          <div className="space-y-5 mb-14">
            {identificationItems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-center gap-4 p-5 border border-border rounded-sm bg-card">
                  <AlertTriangle size={18} className="text-text-subtle shrink-0" />
                  <p className="text-text-body text-lg">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <p className="font-serif text-2xl md:text-3xl text-foreground">
              Esse sistema foi feito pra você.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ BIG IDEA ═══════════════ */}
      <section className="section-padding section-light">
        <div className="container-narrow mx-auto text-center">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-text-subtle mb-6">
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

      {/* ═══════════════ VISUAL DO PRODUTO ═══════════════ */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-text-subtle mb-4">
              O que está dentro
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-14 max-w-2xl">
              Dentro do AI Media Operator você recebe:
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemIncludes.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="p-8 border border-border rounded-sm bg-card text-center">
                  <item.icon size={28} className="text-foreground mx-auto mb-4" />
                  <p className="text-foreground font-medium text-lg">{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ ANTES / DEPOIS ═══════════════ */}
      <section className="section-padding section-light">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-text-subtle mb-4">
              Transformação
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-14">
              O que muda na sua operação.
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="p-8 border border-border rounded-sm bg-card">
                <div className="flex items-center gap-2 mb-6">
                  <XCircle size={20} className="text-text-subtle" />
                  <p className="text-sm font-medium tracking-[0.15em] uppercase text-text-subtle">Antes</p>
                </div>
                <ul className="space-y-4">
                  {beforeItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-text-body text-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-text-subtle shrink-0" style={{ backgroundColor: "hsl(var(--text-subtle))" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.16}>
              <div className="p-8 border border-border rounded-sm bg-card">
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle2 size={20} className="text-foreground" />
                  <p className="text-sm font-medium tracking-[0.15em] uppercase text-foreground">Depois</p>
                </div>
                <ul className="space-y-4">
                  {afterItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground text-lg font-medium">
                      <Check size={16} className="text-foreground shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════ O QUE VOCÊ VAI APRENDER ═══════════════ */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-text-subtle mb-4">
              Conteúdo
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">
              Você vai aprender a:
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {learnings.map((item, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="flex items-center gap-4 py-5 border-b border-border">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full border border-border shrink-0">
                    <Check size={14} className="text-foreground" />
                  </span>
                  <p className="text-text-body text-lg">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ COMO FUNCIONA ═══════════════ */}
      <section className="section-padding section-light">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-text-subtle mb-4">
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
                  <span className="font-serif text-6xl md:text-7xl text-foreground/10 leading-none">{step.number}</span>
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

      {/* ═══════════════ DIFERENCIAL + AUTORIDADE ═══════════════ */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-text-subtle mb-4">
              Quem criou
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 max-w-2xl">
              Criado por quem já operou campanhas para Google, Estée Lauder, Dexcom e outras marcas globais.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-body text-lg leading-relaxed max-w-2xl">
              Aplicando estrutura de nível enterprise na rotina de gestores. Não é teoria — é um método construído na prática, com clientes reais e orçamentos reais. O AI Media Operator é o sistema que usamos internamente, agora disponível para outros profissionais.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ OFERTA ═══════════════ */}
      <section className="section-padding section-light">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-text-subtle mb-4">
              O que você recebe
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">
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
            <FadeIn delay={0.24}>
              <div className="pt-6 border-t border-border">
                <p className="text-text-subtle text-sm mb-2 uppercase tracking-widest font-medium">Status</p>
                <p className="font-serif text-2xl text-foreground">Em breve</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════ RESULTADOS ═══════════════ */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-text-subtle mb-4">
              Resultados
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 max-w-2xl">
              O que você consegue fazer depois disso.
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {resultsItems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-start gap-4 p-6 border border-border rounded-sm bg-card">
                  <Sparkles size={20} className="text-foreground mt-0.5 shrink-0" />
                  <p className="text-text-body text-lg leading-relaxed">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA FINAL + WAITLIST ═══════════════ */}
      <section id="waitlist" className="section-padding section-light">
        <div className="container-narrow mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 max-w-2xl mx-auto">
              Pare de operar no improviso. Comece a operar com sistema.
            </h2>
          </FadeIn>
          <FadeIn delay={0.06}>
            <p className="text-text-body text-lg mb-12 max-w-xl mx-auto leading-relaxed">
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
                  Começar agora
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
