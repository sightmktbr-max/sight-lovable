import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoSight from "@/assets/logo-sight.png";

const navItems = [
  { label: "Início", path: "/" },
  { label: "Produtos", path: "/produtos" },
  { label: "Sobre", path: "/sobre" },
  { label: "Contato", path: "/contato" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
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
            {navItems.map((item) => (
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
            ))}
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
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      location.pathname === item.path
                        ? "text-foreground"
                        : "text-text-body"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
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
            {navItems.map((item) => (
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
