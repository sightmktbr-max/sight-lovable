import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import anaRocha from "@/assets/ana-rocha.jpg";

const About = () => {
  return (
    <Layout>
      {/* Intro — dark */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-sm font-medium tracking-widest uppercase text-text-subtle mb-4">
              Sobre
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-[1.1]">
              Clareza e estrutura para operações de mídia.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-text-body text-lg leading-relaxed max-w-2xl mb-6">
              A Sight é uma marca focada em auxiliar analistas de mídia, freelancers e pequenas e médias 
              agências a organizar sua operação. Criamos ferramentas e sistemas práticos que trazem 
              organização, clareza e método ao trabalho de marketing digital.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-text-body text-lg leading-relaxed max-w-2xl">
              Acreditamos que a performance sustentável vem de processos bem desenhados, rotinas claras 
              e uma operação bem estruturada — não de atalhos ou hacks.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Values — light */}
      <section className="section-padding section-light">
        <div className="container-narrow mx-auto grid md:grid-cols-2 gap-12">
          <FadeIn>
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-4">Propósito</h2>
              <p className="text-text-body leading-relaxed">
                Auxiliar profissionais de mídia a organizarem sua operação e democratizar a utilização 
                de ferramentas de business intelligence no marketing digital.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-4">Valores</h2>
              <ul className="text-text-body leading-relaxed space-y-2">
                <li>Compartilhar conhecimento</li>
                <li>Organizar operações</li>
                <li>Acessibilizar ferramentas</li>
                <li>Desenvolvimento constante</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Founder — dark */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-sm font-medium tracking-widest uppercase text-text-subtle mb-4">
              Fundadora
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-center">
            <FadeIn delay={0.1}>
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src={anaRocha}
                  alt="Ana Rocha — Fundadora da Sight"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Ana Rocha
                </h2>
                <div className="space-y-5">
                  <p className="text-text-body text-lg leading-relaxed">
                    Com mais de 7 anos de experiência em marketing digital, Ana construiu sua carreira
                    em operações globais de mídia paga, trabalhando em diferentes mercados e estruturas.
                  </p>
                  <p className="text-text-body text-lg leading-relaxed">
                    Sua experiência inclui gestão de equipes, desenvolvimento de processos operacionais
                    e liderança em projetos de alta complexidade. A Sight é fruto dessa trajetória —
                    um espaço para compartilhar sistemas e metodologias que funcionam na prática.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA — light */}
      <section className="section-padding section-light">
        <div className="container-narrow mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Conheça nossos produtos.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              to="/produtos"
              className="inline-flex items-center gap-3 bg-[hsl(0_0%_8%)] text-white px-8 py-4 text-base font-medium rounded-sm hover:opacity-90 transition-opacity"
            >
              Explorar produtos
              <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default About;
