import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, AlertTriangle, Clock, TrendingDown, Layers, CheckCircle, Zap, BarChart3, FileText } from "lucide-react";
import mockupImage from "@/assets/mockup.png";
import problemChaosImage from "@/assets/problem-chaos.png";
import beforeAfterImage from "@/assets/before-after.png";
import estruturaImage from "@/assets/MediaManagerToolkitEstruturaDeCampanha.png";
import orcamentosImage from "@/assets/mmtorcamento.png";
import briefingImage from "@/assets/MediaManagerToolkitTemplateDeBriefing.png";

const problems = [
  {
    icon: AlertTriangle,
    title: "Estrutura de campanha bagunçada",
    description: "Nomes sem padrão, campanhas duplicadas e uma conta impossível de escalar.",
  },
  {
    icon: Layers,
    title: "Falta de padronização",
    description: "Cada gestor faz do seu jeito. Sem processo claro, a qualidade cai e o retrabalho aumenta.",
  },
  {
    icon: TrendingDown,
    title: "Dificuldade para escalar",
    description: "Sem organização, escalar campanhas significa escalar problemas.",
  },
  {
    icon: Clock,
    title: "Tempo desperdiçado",
    description: "Horas perdidas procurando informações, refazendo relatórios e corrigindo erros evitáveis.",
  },
];

const templates = [
  {
    image: estruturaImage,
    title: "Estrutura de Conta",
    description: "Organize a hierarquia de campanhas, grupos de anúncios e segmentações de forma visual e padronizada.",
    benefit: "Nunca mais perca tempo tentando entender a estrutura de uma conta desorganizada.",
  },
  {
    image: orcamentosImage,
    title: "Orçamentos e Precificação",
    description: "Calcule automaticamente o valor de cada serviço com base no seu custo/hora e horas necessárias.",
    benefit: "Precifique seus serviços com segurança e pare de cobrar menos do que deveria.",
  },
  {
    image: briefingImage,
    title: "Template de Briefing",
    description: "Reúna todas as informações do cliente em um documento estratégico antes de criar qualquer campanha.",
    benefit: "Comece cada projeto com clareza total sobre objetivos, público e posicionamento.",
  },
];

const steps = [
  {
    number: "01",
    title: "Baixe os templates",
    description: "Acesse os 8 templates prontos para uso imediato no Google Sheets e Google Docs.",
  },
  {
    number: "02",
    title: "Adapte à sua operação",
    description: "Personalize cada template com as informações dos seus clientes e da sua rotina.",
  },
  {
    number: "03",
    title: "Padronize seus processos",
    description: "Implemente os frameworks no dia a dia e crie uma operação consistente e profissional.",
  },
  {
    number: "04",
    title: "Escale com confiança",
    description: "Com processos claros, adicione novos clientes sem perder qualidade na entrega.",
  },
];

const MediaManagerToolkit = () => {
  return (
    <Layout>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-text-subtle mb-5">
              Lançamento 10 de Abril
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
              Pare de improvisar.
              <br />
              Estruture sua operação de mídia paga.
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-text-body text-lg md:text-xl leading-relaxed max-w-2xl mb-4">
              8 templates prontos para organizar campanhas, padronizar processos e escalar resultados — sem retrabalho.
            </p>
          </FadeIn>
          <FadeIn delay={0.18}>
            <p className="text-text-body text-base leading-relaxed max-w-2xl mb-10">
              Do planejamento estratégico à comunicação de resultados com clientes, o Media Manager Toolkit é o sistema que faltava na sua rotina de gestor de mídia.
            </p>
          </FadeIn>
          <FadeIn delay={0.22}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://pay.kiwify.com.br/gnqfhMc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-base font-medium rounded-sm hover:opacity-90 transition-opacity"
              >
                Acessar o Toolkit
                <ArrowRight size={18} />
              </a>
              <a
                href="#whats-included"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 text-base font-medium rounded-sm hover:bg-secondary transition-colors"
              >
                Ver o que está incluído
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Hero mockup — light */}
      <section className="section-padding section-light !pt-0 !pb-20 md:!pb-28">
        <div className="container-wide mx-auto">
          <FadeIn delay={0.1}>
            <div className="rounded-sm overflow-hidden">
              <img
                src={mockupImage}
                alt="Media Manager Toolkit — Visão geral dos templates"
                className="w-full h-auto"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════ PROBLEM ═══════════════════ */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-text-subtle mb-4">
              O problema
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              A maioria das contas de mídia paga são uma bagunça.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-body text-lg leading-relaxed max-w-2xl mb-14">
              Campanhas sem padrão, nomes confusos, métricas misturadas e orçamentos fora de controle. Isso não é só desorganização — é dinheiro sendo queimado.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {problems.map((problem, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="flex items-start gap-4 p-6 rounded-sm bg-surface-elevated border border-border">
                  <problem.icon size={22} className="text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-sans text-base font-medium text-foreground mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-text-body text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="rounded-sm overflow-hidden border border-border">
              <img
                src={problemChaosImage}
                alt="Conta de mídia paga desorganizada — exemplo real do problema"
                className="w-full h-auto"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════ BEFORE vs AFTER ═══════════════════ */}
      <section className="section-padding section-light">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-text-subtle mb-4">
              A transformação
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              De caos operacional a sistema estruturado.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-body text-lg leading-relaxed max-w-2xl mb-14">
              Chega de contas bagunçadas e processos improvisados. O toolkit transforma sua operação com estrutura clara, nomes padronizados e campanhas organizadas.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="rounded-sm overflow-hidden">
              <img
                src={beforeAfterImage}
                alt="Antes e depois — de uma conta desorganizada para uma estrutura clara"
                className="w-full h-auto"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════ WHAT'S INCLUDED ═══════════════════ */}
      <section id="whats-included" className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-text-subtle mb-4">
              O que está incluído
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              8 templates. Um sistema completo.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-body text-lg leading-relaxed max-w-2xl mb-16">
              Cada template foi criado para resolver um problema específico da rotina de quem gerencia mídia paga. Todos prontos para uso imediato.
            </p>
          </FadeIn>

          <div className="space-y-20">
            {templates.map((template, i) => (
              <FadeIn key={i} delay={0.08}>
                <div className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}>
                  <div className="md:w-3/5 rounded-sm overflow-hidden border border-border">
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="md:w-2/5">
                    <h3 className="font-serif text-2xl text-foreground mb-3">
                      {template.title}
                    </h3>
                    <p className="text-text-body leading-relaxed mb-4">
                      {template.description}
                    </p>
                    <p className="text-sm text-text-subtle leading-relaxed flex items-start gap-2">
                      <CheckCircle size={16} className="shrink-0 mt-0.5" />
                      {template.benefit}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Additional templates list */}
          <FadeIn delay={0.1}>
            <div className="mt-20 p-8 rounded-sm bg-surface-elevated border border-border">
              <h3 className="font-serif text-xl text-foreground mb-6">
                Também incluído no Toolkit:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Frameworks de análise e otimização",
                  "Templates de checklist operacional",
                  "Modelos de relatório para clientes",
                  "Processos de rotina e gestão diária",
                  "Guia de nomenclatura de campanhas",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-muted-foreground mt-0.5 shrink-0" />
                    <span className="text-text-body text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════ HOW IT WORKS ═══════════════════ */}
      <section className="section-padding section-light">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-text-subtle mb-4">
              Como funciona
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-14">
              Simples de implementar. Difícil de largar.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-10">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex items-start gap-5">
                  <span className="font-serif text-3xl text-muted-foreground/40 shrink-0 leading-none">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-sans text-base font-medium text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-body text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ AUTHORITY ═══════════════════ */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-text-subtle mb-4">
              Por que confiar
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Construído a partir de operação real.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-body text-lg leading-relaxed max-w-2xl mb-8">
              Esse toolkit não foi criado em teoria. Cada template nasceu da prática de gestão de campanhas, 
              refinado ao longo de projetos reais com clientes de diferentes segmentos e orçamentos.
            </p>
          </FadeIn>
          <FadeIn delay={0.14}>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { icon: Zap, label: "Método testado", text: "Processos validados em operações reais de mídia paga." },
                { icon: BarChart3, label: "Foco em resultado", text: "Cada template resolve um gargalo específico da rotina." },
                { icon: FileText, label: "Documentação clara", text: "Pronto para usar. Sem curva de aprendizado." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <item.icon size={20} className="text-muted-foreground" />
                  <h3 className="font-sans text-sm font-medium text-foreground">{item.label}</h3>
                  <p className="text-text-body text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════ FINAL CTA ═══════════════════ */}
      <section className="section-padding section-light">
        <div className="container-narrow mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Sua operação merece um sistema.
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="text-text-body text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Pare de improvisar processos. Acesse os templates, organize sua operação e comece a escalar com método.
            </p>
          </FadeIn>
          <FadeIn delay={0.14}>
            <a
              href="https://pay.kiwify.com.br/gnqfhMc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-base font-medium rounded-sm hover:opacity-90 transition-opacity"
            >
              Acessar o Toolkit
              <ArrowRight size={18} />
            </a>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default MediaManagerToolkit;
