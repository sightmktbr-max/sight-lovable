import { Link } from "react-router-dom";
import { AlertTriangle, Pin, ArrowRight, Check } from "lucide-react";
import FadeIn from "@/components/FadeIn";

type Category = "Planejamento" | "Execução" | "Análise" | "Escala";

interface CategoryScore {
  name: Category;
  pct: number;
}

interface Recommendation {
  category: Category;
  level: "CRÍTICO" | "SIGNIFICATIVO";
  color: string;
  gap: string;
  impact: string;
  product: string;
  components: string[];
  result: string;
  timeline: string;
  cta: string;
  link: string;
}

const COLORS: Record<Category, string> = {
  Planejamento: "#4A90E2",
  Execução: "#50C878",
  Análise: "#FF8C42",
  Escala: "#9B59B6",
};

function buildRecommendation(cat: CategoryScore): Recommendation | null {
  const { name, pct } = cat;
  const color = COLORS[name];
  const critical = pct < 40;
  const significant = pct >= 40 && pct < 60;
  if (!critical && !significant) return null;

  const level = critical ? "CRÍTICO" : "SIGNIFICATIVO";

  const map: Record<Category, { critical: Omit<Recommendation, "category" | "level" | "color">; significant: Omit<Recommendation, "category" | "level" | "color"> }> = {
    Planejamento: {
      critical: {
        gap: "Sem processo documentado",
        impact: "Cada novo cliente demanda 20-30h de setup",
        product: "Media Manager Toolkit",
        components: [
          "Template de Briefing (estrutura 5 informações essenciais)",
          "Planilha de Estrutura de Campanhas (mesmo padrão pra todo cliente)",
          "Template de Proposta (fecha venda em 1 call)",
        ],
        result: "Setup profissional em 3 dias (antes: 2-3 semanas)",
        timeline: "1-2 semanas para implementar",
        cta: "Ver Media Manager Toolkit",
        link: "/produtos/media-manager-toolkit",
      },
      significant: {
        gap: "Estrutura inconsistente entre clientes",
        impact: "Qualidade varia, time faz diferente",
        product: "Media Manager Toolkit + AI Media Operator",
        components: [
          "Toolkit: Processos prontos e padronizados",
          "AI Media Operator: Skills reutilizáveis",
          "Resultado: Mesmo padrão em todos clientes",
        ],
        result: "100% dos clientes com mesmo padrão",
        timeline: "2-4 semanas para implementar",
        cta: "Comece com Media Manager Toolkit",
        link: "/produtos/media-manager-toolkit",
      },
    },
    Execução: {
      critical: {
        gap: "Copies variam muito, sem critérios",
        impact: "Baixa qualidade = CPC 3x maior",
        product: "AI Media Operator",
        components: [
          "Skill 06: Gerador de Copies (framework RCTO+R)",
          "Skill 06b: Headlines Google (15 headlines em <10min)",
          "Skill 06c: Roteiros Reels (scripts estruturados)",
        ],
        result: "3 variações de copy em <10 minutos",
        timeline: "2-3 semanas para implementar",
        cta: "Começar AI Media Operator",
        link: "/produtos/ai-media-operator",
      },
      significant: {
        gap: "Processo de copy é lento",
        impact: "Leva 1-2h para 3 copies, não consegue responder a trends",
        product: "AI Media Operator",
        components: [
          "Skills prontas para criação rápida",
          "Sistema de prompts reutilizáveis",
          "Memória do Claude treinada com seu cliente",
        ],
        result: "90% redução de tempo em criação",
        timeline: "2-4 semanas para implementar",
        cta: "Começar AI Media Operator",
        link: "/produtos/ai-media-operator",
      },
    },
    Análise: {
      critical: {
        gap: "Análise inconsistente",
        impact: "Cliente fica sem insight, cancela",
        product: "AI Media Operator",
        components: [
          "Skill 07: Relatório de Performance (estrutura 4 seções)",
          "Skill 07b: Análise Semanal Rápida (30 min com Claude)",
          "Recomendações acionáveis (cliente executa em 24h)",
        ],
        result: "Relatório mensal: antes 6h - depois 45 min",
        timeline: "2-3 semanas para implementar",
        cta: "Começar AI Media Operator",
        link: "/produtos/ai-media-operator",
      },
      significant: {
        gap: "Recomendações são genéricas",
        impact: "Cliente não entende o que fazer",
        product: "AI Media Operator",
        components: [
          "Framework de recomendações acionáveis",
          "Estrutura de relatório padronizada",
          "Skills para troubleshooting de campanhas",
        ],
        result: "100% das recomendações acionáveis",
        timeline: "2-4 semanas para implementar",
        cta: "Começar AI Media Operator",
        link: "/produtos/ai-media-operator",
      },
    },
    Escala: {
      critical: {
        gap: "Novo cliente = sobrecarregar",
        impact: "Revenue capped em 5-10 clientes",
        product: "Media Manager Toolkit + AI Media Operator",
        components: [
          "Toolkit: Processos prontos, reutilizáveis",
          "AI Media Operator: Automação que reduz 40h/cliente",
          "Sistema completo de delegação",
        ],
        result: "Escalar de 5 para 20+ clientes",
        timeline: "4-6 semanas (Toolkit primeiro, depois IA)",
        cta: "Ver Media Manager Toolkit",
        link: "/produtos/media-manager-toolkit",
      },
      significant: {
        gap: "Qualidade cai com mais clientes",
        impact: "3-5 clientes ótimo, 6+ clientes qualidade cai 50%",
        product: "AI Media Operator",
        components: [
          "Skills padronizadas por etapa",
          "Sistema de prompts replicáveis",
          "Templates que funcionam em qualquer indústria",
        ],
        result: "Mesmo padrão de qualidade com 10+ clientes",
        timeline: "3-4 semanas para implementar",
        cta: "Começar AI Media Operator",
        link: "/produtos/ai-media-operator",
      },
    },
  };

  const data = critical ? map[name].critical : map[name].significant;
  return { category: name, level, color, ...data };
}

const Recommendations = ({ byCategory }: { byCategory: CategoryScore[] }) => {
  const recs = byCategory
    .map(buildRecommendation)
    .filter((r): r is Recommendation => r !== null)
    .sort((a, b) => (a.level === "CRÍTICO" ? -1 : 1) - (b.level === "CRÍTICO" ? -1 : 1));

  const okCategories = byCategory.filter((c) => c.pct >= 60);

  return (
    <section className="section-padding pt-0">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl mb-3 text-center">Recomendações Personalizadas</h2>
          <p className="text-text-body text-center mb-12 max-w-xl mx-auto">
            Baseado no seu diagnóstico, aqui estão os produtos Sight que vão resolver seus maiores gaps.
          </p>

          {recs.length === 0 ? (
            <div className="bg-card border border-border rounded-sm p-8 text-center">
              <Check size={28} className="mx-auto mb-4 text-foreground" />
              <p className="text-text-body">
                Nenhum gap crítico ou significativo. Sua operação está sólida em todas as áreas.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {recs.map((rec) => {
                const Icon = rec.level === "CRÍTICO" ? AlertTriangle : Pin;
                return (
                  <div
                    key={rec.category}
                    className="bg-card rounded-sm p-6 md:p-7 flex flex-col"
                    style={{ border: `1px solid ${rec.color}40`, borderLeft: `3px solid ${rec.color}` }}
                  >
                    <div className="flex items-center justify-between mb-5 pb-4 border-b border-divider">
                      <div className="flex items-center gap-3">
                        <Icon size={18} style={{ color: rec.color }} />
                        <span className="text-xs uppercase tracking-wider text-foreground font-medium">
                          {rec.category}
                        </span>
                      </div>
                      <span
                        className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm"
                        style={{ color: rec.color, background: `${rec.color}15` }}
                      >
                        {rec.level}
                      </span>
                    </div>

                    <div className="space-y-4 flex-1">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-text-subtle mb-1">Gap</p>
                        <p className="text-foreground">{rec.gap}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-text-subtle mb-1">Impacto</p>
                        <p className="text-text-body text-sm">{rec.impact}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-text-subtle mb-2">Solução</p>
                        <p className="text-foreground mb-3 flex items-center gap-2">
                          <Check size={14} style={{ color: rec.color }} /> {rec.product}
                        </p>
                        <ul className="space-y-1.5 pl-1">
                          {rec.components.map((c) => (
                            <li key={c} className="text-text-body text-sm flex gap-2">
                              <span className="text-text-subtle">-</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-text-subtle mb-1">Resultado</p>
                        <p className="text-text-body text-sm">{rec.result}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-text-subtle mb-1">Timeline</p>
                        <p className="text-text-body text-sm">{rec.timeline}</p>
                      </div>
                    </div>

                    <Link
                      to={rec.link}
                      className="mt-6 inline-flex items-center justify-center gap-2 bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors rounded-sm"
                    >
                      {rec.cta} <ArrowRight size={14} />
                    </Link>
                  </div>
                );
              })}
            </div>
          )}

          {okCategories.length > 0 && recs.length > 0 && (
            <div className="mt-8 grid md:grid-cols-2 gap-3">
              {okCategories.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-3 text-sm text-text-body bg-card/50 border border-divider rounded-sm px-4 py-3"
                >
                  <Check size={14} className="text-foreground shrink-0" />
                  <span>
                    <span className="text-foreground">{c.name}</span> - você tá bom aqui. Continue assim.
                  </span>
                </div>
              ))}
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
};

export default Recommendations;
