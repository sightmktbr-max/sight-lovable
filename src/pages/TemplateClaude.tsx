import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, Copy, Download, ArrowRight, FileText, Briefcase, ShoppingBag } from "lucide-react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";

const CONTACT_EMAIL = "contato@sightmkt.com.br";

const templates = {
  vazio: {
    label: "Template Vazio",
    icon: FileText,
    title: "Comece do Zero",
    description: "Estrutura com 6 seções em branco, pronta para preencher com seus dados.",
    file: "/templates/template-vazio.txt",
    instructions: "Substitua [PLACEHOLDER] pelos dados reais do seu cliente. Cole no Claude Projects > Knowledge.",
  },
  saas: {
    label: "Exemplo SaaS",
    icon: Briefcase,
    title: "Acme CRM - Cliente SaaS",
    description: "Exemplo completo de um cliente SaaS B2B. Use como referência ou copie e adapte.",
    file: "/templates/exemplo-saas.txt",
    instructions: "Edite com os dados do seu cliente SaaS e cole no Claude Projects > Knowledge.",
  },
  ecommerce: {
    label: "Exemplo Ecommerce",
    icon: ShoppingBag,
    title: "Loja Maria - Cliente Ecommerce",
    description: "Exemplo completo de um cliente de moda/ecommerce. Use como referência ou copie e adapte.",
    file: "/templates/exemplo-ecommerce.txt",
    instructions: "Edite com os dados do seu cliente de ecommerce e cole no Claude Projects > Knowledge.",
  },
} as const;

type TemplateKey = keyof typeof templates;

const faqs = [
  {
    q: "Como uso o template?",
    a: "Preencha as 6 seções com seus dados (15 minutos), copie e cole no Claude Projects > Knowledge. Pronto.",
  },
  {
    q: "Posso usar para múltiplos clientes?",
    a: "Sim. Crie um projeto por cliente. Cada cliente tem seu próprio projeto Claude.",
  },
  {
    q: "Preciso ser técnico para isso?",
    a: "Não. É só copiar e colar. Qualquer pessoa consegue em 20 minutos.",
  },
  {
    q: "Isso substitui o curso?",
    a: "Não. O template mostra POR QUÊ estrutura é importante. O AI Media Operator ensina COMO criar Skills (automação real).",
  },
  {
    q: "Quando devo atualizar o projeto?",
    a: "Mantenha sempre atualizado. Revisão semanal é o ideal.",
  },
  {
    q: "Quanto tempo Claude lembra deste contexto?",
    a: "Enquanto o projeto estiver ativo. Não precisa de assinatura especial.",
  },
];

const TemplateClaude = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [copiedKey, setCopiedKey] = useState<TemplateKey | null>(null);
  const [contents, setContents] = useState<Record<TemplateKey, string>>({
    vazio: "",
    saas: "",
    ecommerce: "",
  });

  const templatesRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Pre-load template contents once submitted
  useEffect(() => {
    if (!submitted) return;
    (Object.keys(templates) as TemplateKey[]).forEach(async (key) => {
      if (contents[key]) return;
      try {
        const res = await fetch(templates[key].file);
        const txt = await res.text();
        setContents((prev) => ({ ...prev, [key]: txt }));
      } catch {
        // silent
      }
    });
  }, [submitted, contents]);

  const validate = () => {
    const next: { name?: string; email?: string } = {};
    if (name.trim().length < 2) next.name = "Seu nome é obrigatório";
    if (!email.trim()) next.email = "Seu email é obrigatório";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Email inválido. Tente novamente.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validate()) return;

  setSubmitting(true);

  try {
    console.log("enviando pro webhook...");

    await fetch("https://hook.us2.make.com/0alcxqrkdyrdsgkgfdgl5mmt7trobecp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });

    console.log("enviado!");

    setSubmitted(true);

  } catch (err) {
    console.error("erro:", err);
  } finally {
    setSubmitting(false);
  }
};

    if (!res.ok) {
      throw new Error("Erro ao salvar contato");
    }

    // sucesso → libera conteúdo
    setSubmitted(true);

    toast.success("Email confirmado. Templates liberados abaixo.");

    setTimeout(() => {
      templatesRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 400);

  } catch (err) {
    console.error(err);
    toast.error("Erro ao enviar. Tente novamente.");
  } finally {
    setSubmitting(false);
  }
};

  const handleCopy = async (key: TemplateKey) => {
    const text = contents[key];
    if (!text) {
      toast.error("Carregando template, tente novamente em 1 segundo.");
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      toast.success("Copiado para a área de transferência.");
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      toast.error("Não foi possível copiar. Tente baixar o arquivo.");
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="section-padding">
        <div className="container-narrow">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.3em] text-text-subtle mb-6">Recurso gratuito - Sight</p>
            <h1 className="text-5xl md:text-7xl leading-[1.05] mb-8">
              Estruture seu cliente <em className="italic text-text-body">em 15 minutos.</em>
            </h1>
            <p className="text-xl md:text-2xl text-text-body leading-relaxed max-w-2xl mb-12">
              Template pronto com as 6 seções que todo gestor de mídia precisa. Do caótico para o estruturado, sem complicação.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="grid md:grid-cols-2 gap-px bg-divider border border-border mb-12">
              <div className="bg-background p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-text-subtle mb-4">Antes</p>
                <ul className="space-y-2 text-text-body">
                  <li>- Explica tudo de novo a cada conversa</li>
                  <li>- 5 a 10 min por request</li>
                  <li>- Claude não lembra contexto</li>
                </ul>
              </div>
              <div className="bg-background p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-foreground mb-4">Depois</p>
                <ul className="space-y-2 text-foreground">
                  <li>- Claude já sabe de tudo</li>
                  <li>- 1 a 2 min por request</li>
                  <li>- Qualidade 10x melhor</li>
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <Button onClick={scrollToForm} size="lg" className="rounded-none">
              Baixar template grátis <ArrowRight className="ml-1" />
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* O QUE VOCÊ VAI RECEBER */}
      <section className="section-padding section-light">
        <div className="container-wide">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.3em] text-text-subtle mb-4">O que você recebe</p>
            <h2 className="text-4xl md:text-5xl mb-16 max-w-3xl">Três arquivos, uma estrutura comprovada.</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-px bg-divider border border-border">
            {(Object.keys(templates) as TemplateKey[]).map((key, idx) => {
              const t = templates[key];
              const Icon = t.icon;
              return (
                <FadeIn key={key} delay={idx * 0.1}>
                  <div className="bg-card p-8 h-full flex flex-col">
                    <Icon className="mb-6 text-foreground" size={28} strokeWidth={1.5} />
                    <h3 className="text-2xl mb-3">{t.label}</h3>
                    <p className="text-text-body leading-relaxed">{t.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="section-padding">
        <div className="container-wide">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.3em] text-text-subtle mb-4">Como funciona</p>
            <h2 className="text-4xl md:text-5xl mb-16 max-w-3xl">Três passos simples.</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {[
              { n: "01", title: "Escolha seu template", desc: "Vazio (do zero) ou um dos exemplos (copie e adapte).", time: "5 min" },
              { n: "02", title: "Preencha com seus dados", desc: "6 seções: Cliente, Público, Campanhas, Tom, Processo, Regras.", time: "15 min" },
              { n: "03", title: "Cole no Claude Projects", desc: "Copie o conteúdo, abra Claude Projects, cole no Knowledge. Pronto.", time: "2 min" },
            ].map((step, i) => (
              <FadeIn key={step.n} delay={i * 0.1}>
                <div className="border-t border-border pt-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-text-subtle mb-4">Passo {step.n}</p>
                  <h3 className="text-2xl mb-4">{step.title}</h3>
                  <p className="text-text-body leading-relaxed mb-4">{step.desc}</p>
                  <p className="text-sm text-text-subtle">{step.time}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section ref={formRef} className="section-padding section-light">
        <div className="container-narrow">
          {!submitted ? (
            <FadeIn>
              <div className="border border-foreground p-8 md:p-14 max-w-xl mx-auto">
                <p className="text-xs uppercase tracking-[0.3em] text-text-subtle mb-4">Acesso gratuito</p>
                <h2 className="text-3xl md:text-4xl mb-4">Seus 3 templates estão prontos.</h2>
                <p className="text-text-body mb-8 leading-relaxed">
                  Preencha seus dados e libere o conteúdo aqui na página. Você também recebe os arquivos por email.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="text-sm block mb-2">Nome</label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome"
                      className="rounded-none h-12"
                    />
                    {errors.name && <p className="text-sm text-destructive mt-2">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm block mb-2">Email</label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      className="rounded-none h-12"
                    />
                    {errors.email && <p className="text-sm text-destructive mt-2">{errors.email}</p>}
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="w-full rounded-none h-12"
                  >
                    {submitting ? "Liberando..." : "Baixar templates agora"}
                  </Button>
                  <p className="text-xs text-text-subtle text-center">
                    Ao enviar, você concorda em receber insights ocasionais sobre mídia paga e Claude.
                  </p>
                </form>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <div className="border border-foreground p-8 md:p-12 max-w-xl mx-auto text-center">
                <Check className="mx-auto mb-4" size={32} strokeWidth={1.5} />
                <h2 className="text-2xl md:text-3xl mb-3">Email confirmado.</h2>
                <p className="text-text-body">Seus templates estão liberados abaixo. Confira também sua caixa de entrada.</p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* TEMPLATES (POST EMAIL) */}
      {submitted && (
        <>
          <section ref={templatesRef} className="section-padding">
            <div className="container-wide">
              <FadeIn>
                <p className="text-xs uppercase tracking-[0.3em] text-text-subtle mb-4">Seus arquivos</p>
                <h2 className="text-4xl md:text-5xl mb-12 max-w-3xl">Aqui estão seus templates.</h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <Tabs defaultValue="vazio" className="w-full">
                  <TabsList className="bg-transparent border-b border-border w-full justify-start rounded-none h-auto p-0 mb-8 gap-2 overflow-x-auto">
                    {(Object.keys(templates) as TemplateKey[]).map((key) => (
                      <TabsTrigger
                        key={key}
                        value={key}
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-3 text-text-subtle data-[state=active]:text-foreground"
                      >
                        {templates[key].label}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {(Object.keys(templates) as TemplateKey[]).map((key) => {
                    const t = templates[key];
                    return (
                      <TabsContent key={key} value={key} className="mt-0">
                        <div className="bg-card border border-border p-6 md:p-10">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                            <div>
                              <h3 className="text-2xl md:text-3xl mb-2">{t.title}</h3>
                              <p className="text-text-body">{t.description}</p>
                            </div>
                            <div className="flex gap-2 shrink-0">
                              <Button
                                onClick={() => handleCopy(key)}
                                variant="outline"
                                className="rounded-none"
                              >
                                {copiedKey === key ? (
                                  <><Check size={16} /> Copiado</>
                                ) : (
                                  <><Copy size={16} /> Copiar</>
                                )}
                              </Button>
                              <Button asChild variant="outline" className="rounded-none">
                                <a href={t.file} download>
                                  <Download size={16} /> Baixar
                                </a>
                              </Button>
                            </div>
                          </div>

                          <p className="text-sm text-text-subtle mb-4 italic">{t.instructions}</p>

                          <pre className="bg-background border border-border p-4 md:p-6 overflow-x-auto text-xs leading-relaxed text-text-body max-h-[500px] overflow-y-auto whitespace-pre-wrap font-mono">
{contents[key] || "Carregando..."}
                          </pre>
                        </div>
                      </TabsContent>
                    );
                  })}
                </Tabs>
              </FadeIn>
            </div>
          </section>

          {/* FAQ */}
          <section className="section-padding section-light">
            <div className="container-narrow">
              <FadeIn>
                <p className="text-xs uppercase tracking-[0.3em] text-text-subtle mb-4">FAQ</p>
                <h2 className="text-4xl md:text-5xl mb-12">Perguntas frequentes.</h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((f, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border-border">
                      <AccordionTrigger className="text-left text-lg hover:no-underline py-6">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-text-body text-base leading-relaxed pb-6">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </FadeIn>
            </div>
          </section>

          {/* PRÓXIMO PASSO */}
          <section className="section-padding">
            <div className="container-narrow">
              <FadeIn>
                <div className="border border-foreground p-8 md:p-14">
                  <p className="text-xs uppercase tracking-[0.3em] text-text-subtle mb-4">Próximo passo</p>
                  <h2 className="text-3xl md:text-5xl mb-6 leading-tight">
                    Você tem o template. <em className="italic text-text-body">E se pudesse automatizar?</em>
                  </h2>
                  <p className="text-text-body text-lg mb-4 leading-relaxed">
                    O template funciona, mas toda vez que você precisa de copy, tem que explicar de novo. Imagine se isso fosse automático.
                  </p>
                  <p className="text-text-body text-lg mb-10 leading-relaxed">
                    Existem Skills no Claude que reutilizam contexto 100x. Uma Skill de copy pouparia horas toda semana. Isso está no AI Media Operator.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="rounded-none">
                      <Link to="/produtos/ai-media-operator">
                        Conhecer AI Media Operator <ArrowRight className="ml-1" />
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" size="lg" className="rounded-none">
                      <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                        Só quero o template
                      </a>
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        </>
      )}
    </Layout>
  );
};

export default TemplateClaude;
