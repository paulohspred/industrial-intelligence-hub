import { Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="section-dark border-t border-border/10 py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-display text-xl font-bold">
            <span className="text-primary">SEEVISE</span>
            <span className="text-surface-dark-foreground/40 mx-1">&</span>
            <span className="text-surface-dark-foreground">WFA</span>
          </h3>
          <p className="mt-3 text-surface-dark-foreground/50 text-sm leading-relaxed">
            A fusão definitiva entre hardware industrial e inteligência de software para gestão completa de ativos.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-surface-dark-foreground mb-4">Contato</h4>
          <div className="space-y-3 text-sm text-surface-dark-foreground/50">
            <a href="mailto:contato@seevise.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} /> contato@seevise.com
            </a>
            <a href="tel:+5500000000000" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} /> +55 (00) 0000-0000
            </a>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Brasil
            </p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-display font-semibold text-surface-dark-foreground mb-4">Redes Sociais</h4>
          <div className="flex gap-4">
            <a href="#" className="glass-card p-3 hover:scale-110 transition-transform duration-300">
              <Linkedin size={20} className="text-primary" />
            </a>
            <a href="#" className="glass-card p-3 hover:scale-110 transition-transform duration-300">
              <Instagram size={20} className="text-primary" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/10 mt-12 pt-8 text-center text-xs text-surface-dark-foreground/30">
        © {new Date().getFullYear()} Seevise & WFA. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
