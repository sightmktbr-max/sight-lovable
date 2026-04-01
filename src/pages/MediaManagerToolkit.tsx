import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, CheckCircle } from "lucide-react";
import toolkitImage from "@/assets/media-manager-toolkit.png";

const includes = [
  "Planejamento estratégico de campanhas",
  "Organização de contas e estrutura de mídia",
  "Templates de briefing e checklist",
  "Frameworks de análise e otimização",
  "Modelos de relatório e comunicação com clientes",
  "Processos de rotina e gestão operacional",
];

const idealFor = [
  "Gestores de mídia paga",
  "Analistas de performance",
  "Freelancers de marketing digital",
  "Agências que buscam padronizar processos",
  "Profissionais em transição para cargos de liderança",
];

const MediaManagerToolkit = () => {
  return (
    <Layout>
      {/* Hero — dark */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-text-subtle mb-4">
              Lançamento 10 de Abril
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
              Media Manager Toolkit
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-text-body text-lg md:text-xl leading-relaxed max-w-2xl mb-4">
              8 templates para a organização completa da operação de mídia paga. Um sistema criado 
              para gestores de mídia que querem trabalhar de forma mais estruturada e profissional.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-text-body text-base leading-relaxed max-w-2xl mb-10">
              O material reúne os principais processos utilizados na gestão de campanhas, ajudando 
              a organizar desde o planejamento estratégico até a comunicação de resultados com clientes.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <a
              href="https://pay.kiwify.com.br/gnqfhMc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-base font-medium rounded-sm hover:opacity-90 transition-opacity"
            >
              Acessar o Toolkit
              <ArrowRight size={18} />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Product Image — light */}
      <section className="section-padding section-light">
        <div className="container-narrow mx-auto">
          <FadeIn delay={0.1}>
            <div className="rounded-sm overflow-hidden">
              <img
                src={toolkitImage}
                alt="Media Manager Toolkit — Visão geral do produto"
                className="w-full h-auto"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What's included — dark */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10">
              O que está incluído
            </h2>
          </FadeIn>
          <div className="space-y-5">
            {includes.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-start gap-4">
                  <CheckCircle size={20} className="text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-text-body text-lg">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for — light */}
      <section className="section-padding section-light">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10">
              Para quem é
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {idealFor.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <p className="text-text-body text-lg border-l-2 border-[hsl(0_0%_75%)] pl-5">
                  {item}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — dark */}
      <section className="section-padding">
        <div className="container-narrow mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Pronto para estruturar sua operação?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-body text-lg mb-10 max-w-xl mx-auto">
              Organize seus processos e eleve o nível da sua gestão de mídia.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <a
              href="https://pay.kiwify.com.br/gnqfhMc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-base font-medium rounded-sm hover:opacity-90 transition-opacity"
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
