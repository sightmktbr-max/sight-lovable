import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";
import toolkitImage from "@/assets/media-manager-toolkit.png";
import sightOsImage from "@/assets/sight-os.png";
import aiMediaOperatorImage from "@/assets/ai-media-operator-hero.png";

const products = [
  {
    tag: "Lançamento 10 de Abril",
    title: "Media Manager Toolkit",
    description:
      "8 templates para a organização completa da operação de mídia paga. Do planejamento estratégico à comunicação de resultados.",
    path: "/produtos/media-manager-toolkit",
    cta: "Ver produto",
    image: toolkitImage,
  },
  {
    tag: "Em breve",
    title: "AI Media Operator",
    description:
      "Curso completo para operar mídia paga com IA usando Claude + ChatGPT — do planejamento à análise de resultados.",
    path: "/produtos/ai-media-operator",
    cta: "Ver mais",
    image: aiMediaOperatorImage,
  },
  {
    tag: "Em breve",
    title: "Sight OS",
    description:
      "O sistema operacional que centraliza e organiza toda sua operação de marketing em um único lugar.",
    path: "/produtos/sight-os",
    cta: "Ver mais",
    image: sightOsImage,
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Header — dark */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-sm font-medium tracking-widest uppercase text-text-subtle mb-4">
              Produtos
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Ferramentas para estruturar sua operação.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-text-body text-lg max-w-2xl mb-16 leading-relaxed">
              Cada produto da Sight é pensado para trazer organização, clareza e método ao trabalho de marketing.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Products list — light */}
      <section className="section-padding section-light">
        <div className="container-narrow mx-auto">
          <div className="space-y-8">
            {products.map((product, i) => (
              <FadeIn key={product.title} delay={i * 0.1}>
                <Link
                  to={product.path}
                  className="block bg-card border border-border rounded-sm hover:shadow-lg transition-all group overflow-hidden md:flex"
                >
                  <div className="md:w-2/5 aspect-[16/10] md:aspect-auto overflow-hidden">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 md:p-10 md:w-3/5 flex flex-col justify-center">
                    <p className="text-xs font-medium tracking-widest uppercase text-text-subtle mb-3">
                      {product.tag}
                    </p>
                    <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                      {product.title}
                    </h2>
                    <p className="text-text-body leading-relaxed mb-6 max-w-xl">
                      {product.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm text-foreground font-medium group-hover:gap-3 transition-all">
                      {product.cta} <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
