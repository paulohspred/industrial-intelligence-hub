import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "WFA Hardware", href: "#wfa" },
  { label: "Plataforma", href: "#seevise" },
  { label: "Geradores", href: "#geradores" },
  { label: "Energia", href: "#energia" },
  { label: "Agro", href: "#agro" },
  { label: "Diferenciais", href: "#diferenciais" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-display text-xl font-bold tracking-tight">
          <span className="text-primary">SEEVISE</span>
          <span className="text-muted-foreground mx-1">&</span>
          <span className="text-surface-dark-foreground">WFA</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="sm" className="ml-2" onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}>
            Demonstração
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden glass-card border-t border-border/10 px-4 pb-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="sm" className="mt-2 w-full">Demonstração</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
