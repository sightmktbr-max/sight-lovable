import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, AlertTriangle, RotateCcw } from "lucide-react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import logoSight from "@/assets/logo-sight-cinza.png";
import Recommendations from "@/components/diagnostico/Recommendations";
import ActionPlan from "@/components/diagnostico/ActionPlan";

/* ─── Data ─── */

type Category = "Planejamento" | "Execução" | "Análise" | "Escala";

interface Question {
  category: Category;
  text: string;
}

const questions: Question[] = [
  // Planejamento
  { category: "Planejamento", text: "Você tem um processo documentado e replicável para briefing?" },
  { category: "Planejamento", text: "Sua estrutura de campanhas segue um padrão entre clientes?" },
  { category: "Planejamento", text: "Você consegue completar o onboarding de um novo cliente em menos de 1 semana?" },
  { category: "Planejamento", text: "Cada membro do time segue o mesmo processo?" },
  { category: "Planejamento", text: "Você consegue entregar um plano de campanha sem pedir explicações extras?" },
  // Execução
  { category: "Execução", text: "Suas copies seguem um processo com critérios claros?" },
  { category: "Execução", text: "Você consegue gerar 3 variações de copy em menos de 30 minutos?" },
  { category: "Execução", text: "Seus prompts para geração de conteúdo são iguais toda vez?" },
  { category: "Execução", text: "Você sabe exatamente qual será o formato de output antes de rodar?" },
  { category: "Execução", text: "Você consegue delegar criação de copy para alguém sem supervisão?" },
  // Análise
  { category: "Análise", text: "Você analisa performance de forma consistente?" },
  { category: "Análise", text: "Suas análises sempre chegam em recomendações acionáveis?" },
  { category: "Análise", text: "Você consegue gerar relatório mensal em menos de 2 horas?" },
  { category: "Análise", text: "O cliente entende as recomendações sem você precisar explicar?" },
  { category: "Análise", text: "Você consegue identificar padrões de performance rapidamente?" },
  // Escala
  { category: "Escala", text: "Você consegue adicionar um novo cliente sem sobrecarregar?" },
  { category: "Escala", text: "Seus processos funcionam igual com cliente de R$500 e de R$50k?" },
  { category: "Escala", text: "Você consegue duplicar sua operação apenas treinando alguém?" },
  { category: "Escala", text: "Seus templates funcionam em diferentes indústrias?" },
  { category: "Escala", text: "Você consegue fazer gestão de 5+ contas sem perder consistência?" },
];

const categories: Category[] = ["Planejamento", "Execução", "Análise", "Escala"];

const classifications = [
  { min: 0, max: 25, label: "Operação Ad-hoc", desc: "Cada dia é diferente, processos não documentados." },
  { min: 26, max: 50, label: "Operação Iniciante", desc: "Começou a estruturar, mas ainda há muita inconsistência." },
  { min: 51, max: 75, label: "Operação Intermediária", desc: "Você tem estrutura, mas ainda perde oportunidades de escala." },
  { min: 76, max: 90, label: "Operação Avançada", desc: "Sistemas funcionando, mas ainda há pequenos gaps." },
  { min: 91, max: 100, label: "Operação Transformada", desc: "Sistema completo, replicável e escalável." },
];

type Stage = "intro" | "quiz" | "email" | "result";

const Diagnostico = () => {
  const [stage, setStage] = useState<Stage>("intro");
  const [answers, setAnswers] = useState<(boolean | null)[]>(Array(questions.length).fill(null));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [optIn, setOptIn] = useState(true);

  const totalAnswered = answers.filter((a) => a !== null).length;
  const progress = (totalAnswered / questions.length) * 100;

  /* ─── Score Calculation ─── */
  const { totalScore, byCategory, classification } = useMemo(() => {
    const cat: Record<Category, { yes: number; total: number }> = {
      Planejamento: { yes: 0, total: 0 },
      Execução: { yes: 0, total: 0 },
      Análise: { yes: 0, total: 0 },
      Escala: { yes: 0, total: 0 },
    };
    questions.forEach((q, i) => {
      cat[q.category].total += 1;
      if (answers[i]) cat[q.category].yes += 1;
    });
    const byCategory = categories.map((c) => ({
      name: c,
      pct: Math.round((cat[c].yes / cat[c].total) * 100),
    }));
    const totalScore = Math.round(byCategory.reduce((s, c) => s + c.pct, 0) / 4);
    const classification =
      classifications.find((c) => totalScore >= c.min && totalScore <= c.max) || classifications[0];
    return { totalScore, byCategory, classification };
  }, [answers]);

  const strengths = byCategory.filter((c) => c.pct > 60);
  const gaps = byCategory.filter((c) => c.pct < 60);

  /* ─── Handlers ─── */
  const handleAnswer = (val: boolean) => {
    const next = [...answers];
    next[currentIdx] = val;
    setAnswers(next);
    setError("");
    setTimeout(() => {
      if (currentIdx < questions.length - 1) {
        setCurrentIdx(currentIdx + 1);
      } else {
        setStage("email");
      }
    }, 200);
  };

  const handleNext = () => {
    if (answers[currentIdx] === null) {
      setError("Responda a pergunta antes de continuar");
      return;
    }
    setError("");
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      if (answers.every((a) => a !== null)) setStage("email");
      else setError("Responda todas as perguntas antes de continuar");
    }
  };

  const handlePrev = () => {
    setError("");
    if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Insira um email válido");
      return;
    }
    const subject = encodeURIComponent("Diagnóstico de Maturidade Operacional");
    const body = encodeURIComponent(
      `Email: ${trimmed}\nScore: ${totalScore}\nClassificação: ${classification.label}\nData: ${new Date().toLocaleString("pt-BR")}\nOptin: ${optIn ? "sim" : "não"}\n\nBreakdown:\n${byCategory.map((c) => `- ${c.name}: ${c.pct}%`).join("\n")}`
    );
    window.location.href = `mailto:contato@sightmkt.com.br?subject=${subject}&body=${body}`;
    setStage("result");
  };

  const reset = () => {
    setAnswers(Array(questions.length).fill(null));
    setCurrentIdx(0);
    setEmail("");
    setStage("intro");
  };

  /* ─── Render ─── */
  return (
    <Layout>
      {/* INTRO */}
      {stage === "intro" && (
        <section className="section-padding min-h-[80vh] flex items-center">
          <div className="container-narrow w-full text-center">
            <FadeIn>
              <img src={logoSight} alt="Sight" className="h-10 w-auto mx-auto mb-10 opacity-90" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                Diagnóstico de Maturidade Operacional
              </h1>
              <p className="text-text-body text-lg md:text-xl max-w-2xl mx-auto mb-4">
                Descubra em qual estágio sua operação de mídia paga está.
              </p>
              <p className="text-text-subtle text-base max-w-xl mx-auto mb-12">
                20 perguntas. 4 categorias. Resultado personalizado em menos de 5 minutos.
              </p>
              <button
                onClick={() => setStage("quiz")}
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-foreground/90 transition-colors rounded-sm"
              >
                Começar Diagnóstico <ArrowRight size={16} />
              </button>
            </FadeIn>
          </div>
        </section>
      )}

      {/* QUIZ */}
      {stage === "quiz" && (
        <section className="section-padding min-h-[80vh]">
          <div className="container-narrow w-full max-w-2xl">
            {/* Progress */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-text-subtle uppercase tracking-wider">
                  {questions[currentIdx].category}
                </span>
                <span className="text-xs text-text-subtle">
                  {currentIdx + 1} / {questions.length}
                </span>
              </div>
              <div className="h-1 w-full bg-divider rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-foreground"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Question */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <h2 className="text-2xl md:text-3xl text-center font-serif leading-snug mb-12 min-h-[120px] flex items-center justify-center">
                  {questions[currentIdx].text}
                </h2>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "Sim", val: true },
                    { label: "Não", val: false },
                  ].map((opt) => {
                    const selected = answers[currentIdx] === opt.val;
                    return (
                      <button
                        key={opt.label}
                        onClick={() => handleAnswer(opt.val)}
                        className={`py-4 text-sm font-medium rounded-sm border transition-all ${
                          selected
                            ? "bg-foreground text-background border-foreground"
                            : "bg-transparent text-foreground border-border hover:border-foreground/60"
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>

                {error && (
                  <p className="text-sm text-center text-text-body mb-6 flex items-center justify-center gap-2">
                    <AlertTriangle size={14} /> {error}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Nav */}
            <div className="flex items-center justify-between pt-6 border-t border-divider">
              <button
                onClick={handlePrev}
                disabled={currentIdx === 0}
                className="inline-flex items-center gap-2 text-sm text-text-body hover:text-foreground transition-colors disabled:opacity-0 disabled:pointer-events-none"
              >
                <ArrowLeft size={14} /> Anterior
              </button>
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
              >
                {currentIdx === questions.length - 1 ? "Ver resultado" : "Próxima"}{" "}
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* EMAIL */}
      {stage === "email" && (
        <section className="section-padding min-h-[80vh] flex items-center">
          <div className="container-narrow w-full max-w-xl">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl mb-4 text-center">Quase lá</h2>
              <p className="text-text-body text-center mb-10">
                Antes de ver seu resultado personalizado, deixe seu email.
              </p>
              <form onSubmit={handleEmailSubmit} className="space-y-5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="seu@email.com"
                  className="w-full bg-card border border-border rounded-sm px-4 py-4 text-foreground placeholder:text-text-subtle focus:outline-none focus:border-foreground/60 transition-colors"
                />
                <label className="flex items-start gap-3 text-sm text-text-body cursor-pointer">
                  <input
                    type="checkbox"
                    checked={optIn}
                    onChange={(e) => setOptIn(e.target.checked)}
                    className="mt-1 accent-foreground"
                  />
                  Quero receber insights sobre minha operação.
                </label>
                {error && (
                  <p className="text-sm text-text-body flex items-center gap-2">
                    <AlertTriangle size={14} /> {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-foreground/90 transition-colors rounded-sm"
                >
                  Ver Meu Resultado <ArrowRight size={16} />
                </button>
              </form>
            </FadeIn>
          </div>
        </section>
      )}

      {/* RESULT */}
      {stage === "result" && (
        <>
          <section className="section-padding">
            <div className="container-narrow text-center">
              <FadeIn>
                <img src={logoSight} alt="Sight" className="h-8 w-auto mx-auto mb-8 opacity-90" />
                <p className="text-xs uppercase tracking-[0.2em] text-text-subtle mb-4">
                  Seu Score
                </p>
                <div className="text-7xl md:text-9xl font-serif mb-6">{totalScore}</div>
                <h1 className="text-3xl md:text-4xl mb-3">{classification.label}</h1>
                <p className="text-text-body max-w-xl mx-auto">{classification.desc}</p>
              </FadeIn>
            </div>
          </section>

          {/* Breakdown - light section */}
          <section className="section-light section-padding">
            <div className="container-narrow">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl mb-3 text-center">Seu desempenho por área</h2>
                <p className="text-text-body text-center mb-12">
                  Onde sua operação está sólida e onde precisa de estrutura.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {byCategory.map((c) => (
                    <div key={c.name} className="bg-card border border-border rounded-sm p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-foreground">{c.name}</span>
                        <span className="text-sm text-foreground font-medium">{c.pct}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-divider rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-foreground"
                          initial={{ width: 0 }}
                          animate={{ width: `${c.pct}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Strengths & gaps - dark */}
          <section className="section-padding">
            <div className="container-narrow grid md:grid-cols-2 gap-12">
              <FadeIn>
                <h3 className="text-2xl mb-6">O que você faz bem</h3>
                {strengths.length > 0 ? (
                  <ul className="space-y-4">
                    {strengths.map((s) => (
                      <li key={s.name} className="flex items-start gap-3 text-text-body">
                        <Check size={18} className="text-foreground mt-0.5 shrink-0" />
                        <span>
                          <span className="text-foreground">{s.name}</span> - {s.pct}%
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-text-body">
                    Ainda não há áreas consolidadas. Tudo é oportunidade de evolução.
                  </p>
                )}
              </FadeIn>
              <FadeIn delay={0.1}>
                <h3 className="text-2xl mb-6">Seus maiores gaps</h3>
                {gaps.length > 0 ? (
                  <ul className="space-y-4">
                    {gaps.map((g) => (
                      <li key={g.name} className="flex items-start gap-3 text-text-body">
                        <AlertTriangle size={18} className="text-foreground mt-0.5 shrink-0" />
                        <span>
                          <span className="text-foreground">{g.name}</span> - {g.pct}%
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-text-body">
                    Nenhum gap relevante. Sua operação está madura.
                  </p>
                )}
              </FadeIn>
            </div>
          </section>

          {/* Recomendações personalizadas */}
          <Recommendations byCategory={byCategory} />

          {/* Plano de Ação */}
          <ActionPlan score={totalScore} />

          {/* Reset */}
          <section className="section-padding">
            <div className="container-narrow flex justify-center">
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 text-sm text-text-body hover:text-foreground transition-colors"
              >
                <RotateCcw size={13} /> Refazer diagnóstico
              </button>
            </div>
          </section>
        </>
      )}
    </Layout>
  );
};

export default Diagnostico;
