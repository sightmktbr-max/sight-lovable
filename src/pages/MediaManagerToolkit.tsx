import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Check } from "lucide-react";
import estruturaImage from "@/assets/mmt-campanha.png";
import orcamentosImage from "@/assets/mmtorcamento.png";
import briefingImage from "@/assets/mmtbrief.png";
import propostaImage from "@/assets/mmt-proposta.png";
import manualClienteImage from "@/assets/mmt-manualcliente.png";
import relatorioImage from "@/assets/mmt-relatorio.png";
import manualMarcaImage from "@/assets/mmt-manualmarca.png";
import contratoImage from "@/assets/mmt-contrato.png";

const bulletPoints = [
  "Estruture contas com lógica e padrão",
  "Organize briefing, execução e análise",
  "Tenha previsibilidade na operação",
  "Reduza retrabalho e erros operacionais",
];

const features = [
  {
    image: orcamentosImage,
    title: "Planilha de orçamentos e pacotes",
    description: "Calcule esforço, horas e investimento com lógica e previsibilidade. Monte pacotes de serviços com clareza para o cliente.",
  },
  {
    image: propostaImage,
    title: "Template de proposta comercial",
    description: "Apresente seus serviços de forma profissional com uma proposta estruturada, pronta para personalizar e enviar.",
  },
  {
    image: contratoImage,
    title: "Template de contrato de serviços",
    description: "Formalize a relação com o cliente usando um modelo de contrato completo, com cláusulas essenciais já definidas.",
  },
  {
    image: manualClienteImage,
    title: "Manual do cliente",
    description: "Alinhe expectativas desde o início. Documente processos, prazos e responsabilidades de forma clara para o cliente.",
  },
  {
    image: briefingImage,
    title: "Template de briefing",
    description: "Centralize todas as informações do cliente, mercado e objetivos em um único documento estruturado.",
  },
  {
    image: manualMarcaImage,
    title: "Template de manual de marca",
    description: "Organize a identidade visual e as diretrizes de comunicação do cliente em um documento de referência completo.",
  },
  {
    image: estruturaImage,
    title: "Planilha de estrutura de campanhas",
    description: "Defina uma arquitetura clara de campanhas, grupos e estratégias — sem improviso.",
  },
  {
    image: relatorioImage,
    title: "Template de relatório de performance",
    description: "Apresente resultados com clareza e profissionalismo. Modelo pronto para reportar métricas e insights ao cliente.",
  },
];

const MediaManagerToolkit = () => {
  return (
    <Layout>
      {/* ═══════════════════ HERO (dark) ═══════════════════ */}
      <section className="section-padding !pb-0">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-subtle mb-6">
              Sistema operacional para mídia paga
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-foreground mb-5 leading-[1.08]">
              Media Manager Toolkit
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-sans text-lg md:text-xl text-text-body leading-relaxed max-w-2xl mb-4">
              O sistema que organiza, padroniza e escala sua operação de mídia paga.
            </p>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-text-body text-base leading-relaxed max-w-2xl mb-8">
              Pare de operar campanhas no improviso. Estruture sua operação com um framework completo usado por gestores de mídia para ganhar clareza, consistência e eficiência.
            </p>
          </FadeIn>
          <FadeIn delay={0.18}>
            <ul className="space-y-3 mb-10 max-w-md">
              {bulletPoints.map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-text-body text-sm">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full border border-border">
                    <Check size={12} className="text-foreground" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.22}>
            <a
              href="https://pay.kiwify.com.br/gnqfhMc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-base font-medium rounded-sm hover:opacity-90 transition-opacity"
            >
              Acessar o sistema
              <ArrowRight size={18} />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════ HERO VISUAL (light) ═══════════════════ */}
      <section className="section-padding !pt-16 md:!pt-24 section-light">
        <div className="container-wide mx-auto">
          <FadeIn delay={0.1}>
            <div className="relative flex items-center justify-center py-12 md:py-20">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[70%] h-[60%] rounded-full bg-black/[0.03] blur-3xl" />
              </div>

              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[30%] z-10">
                <div className="rounded-sm border border-border/60 overflow-hidden shadow-2xl shadow-black/20 -rotate-2 translate-x-4">
                  <img src={orcamentosImage} alt="Orçamento e precificação" className="w-full h-auto" />
                </div>
              </div>

              <div className="relative z-20 w-[85%] md:w-[50%]">
                <div className="rounded-sm border border-border/80 overflow-hidden shadow-2xl shadow-black/30">
                  <img src={briefingImage} alt="Template de Briefing" className="w-full h-auto" />
                </div>
              </div>

              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[30%] z-10">
                <div className="rounded-sm border border-border/60 overflow-hidden shadow-2xl shadow-black/20 rotate-2 -translate-x-4">
                  <img src={estruturaImage} alt="Estrutura de conta" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════ FEATURES HEADER (dark) ═══════════════════ */}
      <section className="section-padding !pb-0">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-subtle mb-4">
              O que está incluído
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              O sistema completo para gestão de mídia
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-body text-lg leading-relaxed max-w-2xl mb-10">
              Cada parte da sua operação organizada em um único fluxo — do planejamento à execução.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════ FEATURE BLOCKS (alternating) ═══════════════════ */}
      {features.map((feature, i) => {
        const isLight = i % 2 === 0;
        const isReversed = i % 2 === 1;
        return (
          <section
            key={i}
            className={`section-padding ${isLight ? "section-light" : ""}`}
          >
            <div className="container-narrow mx-auto">
              <FadeIn delay={0.06}>
                <div className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-10 md:gap-16 items-center`}>
                  <div className="md:w-3/5 rounded-sm overflow-hidden border border-border/60 shadow-lg shadow-black/20">
                    <img src={feature.image} alt={feature.title} className="w-full h-auto" />
                  </div>
                  <div className="md:w-2/5">
                    <span className="text-xs font-medium tracking-[0.15em] uppercase text-text-subtle mb-3 block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-2xl text-foreground mb-3">{feature.title}</h3>
                    <p className="text-text-body leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        );
      })}

      {/* ═══════════════════ FINAL CTA (light) ═══════════════════ */}
      <section className="section-padding section-light">
        <div className="container-narrow mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Sua operação merece um sistema.
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="text-text-body text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Pare de improvisar processos. Acesse o sistema, organize sua operação e comece a escalar com método.
            </p>
          </FadeIn>
          <FadeIn delay={0.14}>
            <a
              href="https://pay.kiwify.com.br/gnqfhMc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-foreground text-background px-10 py-4 text-base font-medium rounded-sm hover:opacity-90 transition-opacity"
            >
              Acessar o sistema
              <ArrowRight size={18} />
            </a>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default MediaManagerToolkit;
