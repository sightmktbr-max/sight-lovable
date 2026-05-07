import { useState } from "react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Send, Linkedin } from "lucide-react";
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

    const subject = encodeURIComponent(`Contato via site - ${form.name}`);
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
            <div className="mt-10 pt-8 border-t border-[hsl(var(--light-border))] text-center">
              <p className="text-sm text-[hsl(var(--light-subtle))] mb-3">Conecte-se com a Sight</p>
              <div className="flex items-center justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/ana-rocha-252793138/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[hsl(var(--light-fg))] font-medium hover:opacity-70 transition-opacity"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/sightmkt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[hsl(var(--light-fg))] font-medium hover:opacity-70 transition-opacity"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@sightmktbr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[hsl(var(--light-fg))] font-medium hover:opacity-70 transition-opacity"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.5-4.42 2.89 2.89 0 0 1 3.38-.85V9.63a6.23 6.23 0 0 0-5.5 1.38 6.23 6.23 0 0 0-1.62 7.65 6.23 6.23 0 0 0 10.6-2.25V6.69h.02z" />
                  </svg>
                  TikTok
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
