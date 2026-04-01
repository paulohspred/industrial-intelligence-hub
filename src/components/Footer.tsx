import { Linkedin, Instagram, Mail, Phone, MapPin, Building2 } from "lucide-react";

const Footer = () => (
  <footer className="section-dark border-t border-border/10 py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
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

        {/* Seevise */}
        <div>
          <h4 className="font-display font-semibold text-surface-dark-foreground mb-4 flex items-center gap-2">
            <Building2 size={16} className="text-primary" /> Seevise Ltda
          </h4>
          <div className="space-y-2 text-sm text-surface-dark-foreground/50">
            <p className="text-xs text-surface-dark-foreground/30">CNPJ: 61.227.065/0001-69</p>
            <p className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              Rua Sempre-Vivas, 99 – Jd. Nova Aparecida, Poços de Caldas – MG, 37704-444
            </p>
            <a href="mailto:contato@seevise.com.br" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} /> contato@seevise.com.br
            </a>
            <a href="tel:+5535999237679" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} /> (35) 99923-7679
            </a>
          </div>
        </div>

        {/* WFA */}
        <div>
          <h4 className="font-display font-semibold text-surface-dark-foreground mb-4 flex items-center gap-2">
            <Building2 size={16} className="text-accent" /> WFA Automação
          </h4>
          <div className="space-y-2 text-sm text-surface-dark-foreground/50">
            <p className="text-xs text-surface-dark-foreground/30">CNPJ: 22.443.092/0001-17</p>
            <p className="text-xs text-surface-dark-foreground/30">WFA Engenharia Elétrica Ltda</p>
            <p className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              Rua Benedito Francisco dos Reis, 250 – Jd. Santa Clara, Serrana – SP, 14150-000
            </p>
            <a href="tel:+5516996052853" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} /> (16) 99605-2853
            </a>
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
          <div className="mt-6 space-y-1 text-xs text-surface-dark-foreground/30">
            <p>Desenvolvimento de software sob encomenda</p>
            <p>Manutenção e reparação de geradores e motores elétricos</p>
            <p>Instalação de máquinas e equipamentos industriais</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border/10 mt-12 pt-8 text-center text-xs text-surface-dark-foreground/30">
        © {new Date().getFullYear()} Seevise Ltda & WFA Engenharia Elétrica Ltda. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
