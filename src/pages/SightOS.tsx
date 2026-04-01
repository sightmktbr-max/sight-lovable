import { useState } from "react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import sightOsImage from "@/assets/sight-os.png";

const features = [
  { title: "Clientes e CRM", desc: "Centralize informações de clientes, histórico e relacionamento." },
  { title: "Planejamento de conteúdo", desc: "Organize a produção e o calendário de conteúdo em um só lugar." },
  { title: "Gestão de tarefas", desc: "Controle sua rotina e acompanhe entregas com clareza." },
  { title: "Controle financeiro", desc: "Tenha visão clara de receitas, custos e rentabilidade." },
  { title: "Materiais e documentos", desc: "Armazene links, arquivos e referências importantes." },
  { title: "Estudos e capacitação", desc: "Organize seu aprendizado contínuo de forma estruturada." },
];

const SightOS = () => {
  const { toast } = useToast();
  const [osForm, setOsForm] = useState({ name: "", email: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!osForm.name.trim() || !osForm.email.trim()) {
      toast({ title: "Preencha todos os campos.", variant: "destructive" });
      return;
    }
    setSending(true);
    const subject = encodeURIComponent(`Lista de espera Sight OS — ${osForm.name}`);
    const body = encodeURIComponent(
      `Nome: ${osForm.name}\nEmail: ${osForm.email}\n\nGostaria de ser avisado quando o Sight OS estiver disponível.`
    );
    window.location.href = `mailto:contato@sightmkt.com.br?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast({ title: "Seu cliente de e-mail foi aberto." });
      setOsForm({ name: "", email: "" });
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero — dark */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-text-subtle mb-4">
              Em breve
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
              Sight OS
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-text-body text-lg md:text-xl leading-relaxed max-w-2xl mb-4">
              O sistema operacional que centraliza e organiza toda sua operação de marketing em um único lugar.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-text-body text-base leading-relaxed max-w-2xl mb-10">
              Se você hoje trabalha com múltiplas ferramentas — planilhas, Trello, Google Docs, Canva — e sente
              que tudo está desconectado, o Sight OS resolve isso. Com uma estrutura simples, visual e pronta
              para uso, você consegue organizar toda sua operação em um sistema único.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Product Image — light */}
      <section className="section-padding section-light">
        <div className="container-wide mx-auto">
          <FadeIn delay={0.1}>
            <div className="rounded-sm overflow-hidden">
              <img
                src={sightOsImage}
                alt="Sight OS — Sistema Operacional de Marketing"
                className="w-full h-auto"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features — dark */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">
              O que o Sight OS organiza
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="p-6 bg-card border border-border rounded-sm">
                  <h3 className="font-serif text-xl text-foreground mb-2">{f.title}</h3>
                  <p className="text-text-body text-sm leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning — light */}
      <section className="section-padding section-light">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              Mais do que um template.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-body text-lg leading-relaxed max-w-2xl mb-6">
              O Sight OS não é apenas um template — é um sistema operacional que te dá clareza, controle e
              eficiência no dia a dia.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-text-body text-lg leading-relaxed max-w-2xl">
              Ideal para gestores de marketing, social media, freelancers e pequenas equipes que querem parar
              de operar no caos e começar a operar com método.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA — dark */}
      <section className="section-padding">
        <div className="container-narrow mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Quer ser avisado quando o Sight OS estiver disponível?
            </h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="text-text-body text-base mb-10 max-w-lg mx-auto">
              Inscreva-se na lista de espera e receba em primeira mão.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                value={osForm.name}
                onChange={(e) => setOsForm((p) => ({ ...p, name: e.target.value }))}
                maxLength={100}
                className="w-full px-4 py-3 rounded-sm border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
              />
              <input
                type="email"
                placeholder="seu@email.com"
                value={osForm.email}
                onChange={(e) => setOsForm((p) => ({ ...p, email: e.target.value }))}
                maxLength={255}
                className="w-full px-4 py-3 rounded-sm border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
              />
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-base font-medium rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {sending ? "Enviando..." : "Quero ser avisado"}
                <Send size={18} />
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default SightOS;
