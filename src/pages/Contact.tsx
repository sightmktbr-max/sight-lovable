import { useState } from "react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Preencha todos os campos.", variant: "destructive" });
      return;
    }
    setSending(true);

    const subject = encodeURIComponent(`Contato via site — ${form.name}`);
    const body = encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\n\nMensagem:\n${form.message}`
    );
    window.location.href = `mailto:contato@sightmkt.com.br?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      toast({ title: "Seu cliente de e-mail foi aberto com a mensagem." });
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero — dark */}
      <section className="section-padding min-h-[30vh] flex items-center">
        <div className="container-narrow mx-auto text-center">
          <FadeIn>
            <p className="text-sm font-medium tracking-widest uppercase text-text-subtle mb-4">
              Contato
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Vamos conversar.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-text-body text-lg max-w-xl mx-auto leading-relaxed">
              Tem interesse nos nossos produtos ou quer saber mais sobre a Sight? Envie uma mensagem.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form — light */}
      <section className="section-padding section-light">
        <div className="container-narrow mx-auto max-w-xl">
          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-sm border border-[hsl(var(--light-border))] bg-white text-[hsl(var(--light-fg))] placeholder:text-[hsl(var(--light-subtle))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--light-fg))] transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  maxLength={255}
                  className="w-full px-4 py-3 rounded-sm border border-[hsl(var(--light-border))] bg-white text-[hsl(var(--light-fg))] placeholder:text-[hsl(var(--light-subtle))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--light-fg))] transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar?"
                  maxLength={1000}
                  rows={5}
                  className="w-full px-4 py-3 rounded-sm border border-[hsl(var(--light-border))] bg-white text-[hsl(var(--light-fg))] placeholder:text-[hsl(var(--light-subtle))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--light-fg))] transition-shadow resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-3 bg-[hsl(var(--light-fg))] text-white px-8 py-4 text-base font-medium rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {sending ? "Enviando..." : "Enviar mensagem"}
                <Send size={18} />
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
