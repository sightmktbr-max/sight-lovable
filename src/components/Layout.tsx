import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logoSight from "@/assets/logo-sight.png";

const navItems = [
  { label: "Início", path: "/" },
  { label: "Produtos", path: "/produtos" },
  { label: "Ferramentas", path: "/ferramentas" },
  { label: "Sobre", path: "/sobre" },
  { label: "Contato", path: "/contato" },
];

const productLinks = [
  { label: "Media Manager Toolkit", path: "/produtos/media-manager-toolkit" },
  { label: "AI Media Operator", path: "/produtos/ai-media-operator" },
  { label: "Sight OS", path: "/produtos/sight-os" },
];

const toolsLinks = [
  { label: "Diagnóstico", path: "/diagnostico" },
  { label: "Template Claude", path: "/template-claude" },
];

const dropdownMap: Record<string, { links: typeof productLinks; prefix: string }> = {
  Produtos: { links: productLinks, prefix: "/produtos" },
  Ferramentas: { links: toolsLinks, prefix: "/ferramentas" },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container-wide mx-auto flex items-center justify-between px-6 py-4 md:px-12">
          <Link to="/" className="flex items-center">
            <img src={logoSight} alt="Sight Marketing" className="h-8 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const dd = dropdownMap[item.label];
              if (dd) {
                const isOpen = openDropdown === item.label;
                const isActive = dd.links.some((l) => location.pathname === l.path) || location.pathname.startsWith(dd.prefix);
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      type="button"
                      className={`inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                        isActive ? "text-foreground" : "text-text-body hover:text-foreground"
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                        >
                          <div className="bg-background border border-border rounded-sm shadow-lg min-w-[220px] py-2">
                            {dd.links.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className={`block px-5 py-2.5 text-sm transition-colors ${
                                  location.pathname === sub.path
                                    ? "text-foreground bg-muted"
                                    : "text-text-body hover:text-foreground hover:bg-muted"
                                }`}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "text-foreground"
                      : "text-text-body hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-foreground"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-border bg-background"
            >
              <div className="flex flex-col px-6 py-6 gap-4">
                {navItems.map((item) => {
                  const dd = dropdownMap[item.label];
                  return (
                    <div key={item.label}>
                      {dd ? (
                        <span className="text-lg font-medium text-text-body">{item.label}</span>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={() => setMenuOpen(false)}
                          className={`text-lg font-medium transition-colors ${
                            location.pathname === item.path ? "text-foreground" : "text-text-body"
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                      {dd && (
                        <div className="flex flex-col gap-2 mt-2 ml-4">
                          {dd.links.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() => setMenuOpen(false)}
                              className={`text-base transition-colors ${
                                location.pathname === sub.path ? "text-foreground" : "text-text-body"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main */}
      <main className="flex-1 pt-16">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12 md:px-12">
        <div className="container-wide mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logoSight} alt="Sight Marketing" className="h-6 w-auto opacity-70" />
          <div className="flex items-center gap-6 text-sm text-text-subtle">
            {navItems.filter((item) => item.label !== "Ferramentas").map((item) => (
              <Link key={item.path} to={item.path} className="hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
          <span className="text-xs text-text-subtle">© {new Date().getFullYear()} Sight. Todos os direitos reservados.</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
