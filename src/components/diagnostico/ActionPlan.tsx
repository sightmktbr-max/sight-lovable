import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

interface Step {
  weeks: string;
  action: string;
  product: string;
  result: string;
}

interface Plan {
  intro: string;
  steps: Step[];
  expected: string;
  primary: { label: string; link: string };
  secondary?: { label: string; link: string };
}

function getPlan(score: number): Plan {
  if (score <= 25) {
    return {
      intro: "Seu diagnóstico mostra: Ad-hoc - você precisa construir FUNDAÇÃO antes de escalar.",
      steps: [
        { weeks: "Semana 1-2", action: "Implementar Template de Briefing", product: "Media Manager Toolkit", result: "Briefing estruturado e replicável" },
        { weeks: "Semana 3-4", action: "Implementar Estrutura + Proposta", product: "Media Manager Toolkit", result: "100% dos clientes no mesmo padrão" },
        { weeks: "Semana 5-6", action: "Módulos 0+1: Fundamentos de IA", product: "AI Media Operator", result: "Entender IA como ferramenta operacional" },
        { weeks: "Semana 7-8", action: "Módulos 2+3: Skills e Memória", product: "AI Media Operator", result: "60% de automação na operação" },
      ],
      expected: "Score 68+ (Operação Intermediária)",
      primary: { label: "Comece com Media Manager Toolkit", link: "/produtos/media-manager-toolkit" },
      secondary: { label: "Ver AI Media Operator", link: "/produtos/ai-media-operator" },
    };
  }
  if (score <= 50) {
    return {
      intro: "Você começou a estruturar. Agora precisa fechar inconsistências e adicionar IA.",
      steps: [
        { weeks: "Semana 1-2", action: "Completar Media Manager Toolkit", product: "Media Manager Toolkit", result: "Processos padronizados" },
        { weeks: "Semana 3-6", action: "Módulos 0+1+2+3", product: "AI Media Operator", result: "Skills funcionando em produção" },
        { weeks: "Semana 7-8", action: "Integrar Toolkit + IA", product: "Sistema integrado", result: "Operação rodando com sistema" },
      ],
      expected: "Score 65+ (Intermediária/Avançada)",
      primary: { label: "Comece com Media Manager Toolkit", link: "/produtos/media-manager-toolkit" },
      secondary: { label: "Ver AI Media Operator", link: "/produtos/ai-media-operator" },
    };
  }
  if (score <= 75) {
    return {
      intro: "Você tem estrutura. Agora é hora de adicionar a camada de IA para escalar.",
      steps: [
        { weeks: "Semana 1-4", action: "Módulos 2+3 - Skills aplicadas", product: "AI Media Operator", result: "Skills críticas em produção" },
        { weeks: "Semana 5-8", action: "Integrar em 3 clientes e refinar", product: "AI Media Operator", result: "Sistema validado e estável" },
      ],
      expected: "Score 80+ (Operação Avançada)",
      primary: { label: "Começar AI Media Operator", link: "/produtos/ai-media-operator" },
    };
  }
  if (score <= 90) {
    return {
      intro: "Sistemas funcionando. Foco agora é fechar os últimos gaps com engenharia avançada.",
      steps: [
        { weeks: "Semana 1-2", action: "Módulo 4 - Engenharia de Prompts avançada", product: "AI Media Operator", result: "Prompts otimizados" },
        { weeks: "Semana 3-4", action: "Criar Skills customizadas", product: "AI Media Operator", result: "Skills proprietárias" },
      ],
      expected: "Score 91+ (Operação Transformada)",
      primary: { label: "Começar AI Media Operator", link: "/produtos/ai-media-operator" },
    };
  }
  return {
    intro: "Parabéns. Sua operação está otimizada.",
    steps: [
      { weeks: "Próximo passo", action: "Compartilhe seu sistema ou entre na lista do Sight OS", product: "Sight OS", result: "Próxima fronteira" },
    ],
    expected: "Manter operação transformada",
    primary: { label: "Entrar na lista Sight OS", link: "/produtos/sight-os" },
  };
}

const ActionPlan = ({ score }: { score: number }) => {
  const plan = getPlan(score);

  return (
    <section className="section-light section-padding">
      <div className="container-narrow">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Plano de Ação Recomendado</h2>
            <p className="text-text-body max-w-xl mx-auto">{plan.intro}</p>
          </div>

          <div className="bg-card border border-border rounded-sm p-6 md:p-10">
            <ol className="space-y-6 md:space-y-8">
              {plan.steps.map((step, i) => (
                <li key={i} className="grid grid-cols-[auto_1fr] gap-5 md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-medium">
                      {i + 1}
                    </div>
                    {i < plan.steps.length - 1 && <div className="flex-1 w-px bg-divider mt-3 min-h-[40px]" />}
                  </div>
                  <div className="pb-2">
                    <p className="text-xs uppercase tracking-wider text-text-subtle mb-2">{step.weeks}</p>
                    <p className="text-foreground text-lg mb-2">{step.action}</p>
                    <div className="grid sm:grid-cols-2 gap-2 text-sm text-text-body">
                      <p><span className="text-text-subtle">Produto:</span> {step.product}</p>
                      <p><span className="text-text-subtle">Resultado:</span> {step.result}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 pt-8 border-t border-divider text-center">
              <p className="text-xs uppercase tracking-wider text-text-subtle mb-2">Resultado esperado</p>
              <p className="text-foreground text-lg mb-8">{plan.expected}</p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to={plan.primary.link}
                  className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:bg-foreground/90 transition-colors rounded-sm"
                >
                  {plan.primary.label} <ArrowRight size={14} />
                </Link>
                {plan.secondary && (
                  <Link
                    to={plan.secondary.link}
                    className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-7 py-3.5 text-sm font-medium hover:border-foreground/60 transition-colors rounded-sm"
                  >
                    {plan.secondary.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ActionPlan;
