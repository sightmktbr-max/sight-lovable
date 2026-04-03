import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";
import toolkitImage from "@/assets/2ae6931f-442e-44d6-8d63-7bb76075bcd0.png";
import sightOsImage from "@/assets/9ce797cc-eaf2-4814-9511-1bdb60e05e95.png";
import aiMediaOperatorImage from "@/assets/ai-media-operator-hero.png";
import sublogo from "@/assets/sight-sublogo.png";

const Index = () => {
  return (
    <Layout>
      {/* Hero — dark */}
      <section className="section-padding min-h-[85vh] flex items-center relative overflow-hidden">
        {/* Sublogo — right side, half cut, 40% opacity */}
        <div className="absolute top-0 right-0 h-full w-1/2 flex items-center justify-start overflow-hidden pointer-events-none">
          <img
            src={sublogo}
            alt=""
            className="h-full w-auto object-contain opacity-[0.08]"
            style={{ transform: "translateX(-50%)" }}
          />
        </div>

        <div className="container-narrow mx-auto relative z-10">
          <FadeIn>
            <p className="text-sm font-medium tracking-widest uppercase text-text-subtle mb-6">
              Sistemas para mídia paga
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-foreground mb-8">
              Estruture sua operação de mídia com clareza e consistência.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-text-body max-w-2xl mb-10 leading-relaxed">
              Ferramentas e sistemas para organizar campanhas, processos e resultados de forma profissional.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link
              to="/produtos"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-base font-medium rounded-sm hover:opacity-90 transition-opacity"
            >
              Explorar produtos
              <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* About — light */}
      <section className="section-padding section-light">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-sm font-medium tracking-widest uppercase text-text-subtle mb-4">
              Sobre a Sight
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              Estrutura antes de escala.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-text-body text-lg leading-relaxed max-w-2xl mb-6">
              A Sight nasceu para auxiliar analistas de mídia, freelancers e agências a organizarem 
              sua operação. Acreditamos que performance sustentável vem de sistemas bem estruturados — 
              não de atalhos ou táticas isoladas.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-text-body text-lg leading-relaxed max-w-2xl">
              Nosso foco é democratizar ferramentas de gestão e business intelligence, trazendo 
              clareza e método ao trabalho diário de marketing.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy — dark */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-sm font-medium tracking-widest uppercase text-text-subtle mb-10">
              Filosofia
            </p>
          </FadeIn>
          <div className="space-y-10">
            {[
              "Mídia não é só anúncios.",
              "Performance vem de estrutura.",
              "O básico bem feito escala.",
            ].map((statement, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                  {statement}
                </h3>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview — light */}
      <section className="section-padding section-light">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-sm font-medium tracking-widest uppercase text-text-subtle mb-4">
              Produtos
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">
              Ferramentas para operar com método.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn delay={0.15}>
              <Link
                to="/produtos/media-manager-toolkit"
                className="block bg-card border border-border rounded-sm hover:shadow-lg transition-all group overflow-hidden"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={toolkitImage} alt="Media Manager Toolkit" className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <p className="text-xs font-medium tracking-widest uppercase text-text-subtle mb-3">
                    Lançamento 10 de Abril
                  </p>
                  <h3 className="font-serif text-2xl text-foreground mb-3">
                    Media Manager Toolkit
                  </h3>
                  <p className="text-text-body text-sm leading-relaxed mb-6">
                    8 templates para a organização completa da operação de mídia paga.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm text-foreground font-medium group-hover:gap-3 transition-all">
                    Ver produto <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.25}>
              <Link
                to="/produtos/sight-os"
                className="block bg-card border border-border rounded-sm hover:shadow-lg transition-all group overflow-hidden"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={sightOsImage} alt="Sight OS" className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <p className="text-xs font-medium tracking-widest uppercase text-text-subtle mb-3">
                    Em breve
                  </p>
                  <h3 className="font-serif text-2xl text-foreground mb-3">
                    Sight OS
                  </h3>
                  <p className="text-text-body text-sm leading-relaxed mb-6">
                    O sistema operacional para centralizar toda sua operação de marketing.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm text-foreground font-medium group-hover:gap-3 transition-all">
                    Ver mais <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Link
                to="/produtos/ai-media-operator"
                className="block bg-card border border-border rounded-sm hover:shadow-lg transition-all group overflow-hidden"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={aiMediaOperatorImage} alt="AI Media Operator" className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <p className="text-xs font-medium tracking-widest uppercase text-text-subtle mb-3">
                    Em breve
                  </p>
                  <h3 className="font-serif text-2xl text-foreground mb-3">
                    AI Media Operator
                  </h3>
                  <p className="text-text-body text-sm leading-relaxed mb-6">
                    Curso completo para operar mídia paga com IA usando Claude + ChatGPT.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm text-foreground font-medium group-hover:gap-3 transition-all">
                    Ver mais <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </FadeIn>
          </div>

          <FadeIn delay={0.35}>
            <div className="mt-12 text-center">
              <Link
                to="/produtos"
                className="inline-flex items-center gap-3 border border-border px-8 py-4 text-sm font-medium text-foreground rounded-sm hover:bg-black/5 transition-colors"
              >
                Ver todos os produtos
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
