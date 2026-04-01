import AnimatedSection from "./AnimatedSection";
import { BarChart3, Bell, Globe, Gauge } from "lucide-react";
import dashboardImg from "@/assets/dashboard.jpg";

const capabilities = [
  { icon: BarChart3, title: "Dashboards em Tempo Real", desc: "Visualize todos os seus ativos com gráficos atualizados segundo a segundo." },
  { icon: Gauge, title: "Telemetria Avançada", desc: "Coleta contínua de dados de sensores com análise preditiva integrada." },
  { icon: Bell, title: "Alertas Inteligentes", desc: "Notificações automáticas por e-mail, SMS ou push quando limites são ultrapassados." },
  { icon: Globe, title: "Controle Remoto", desc: "Acesse e controle seus ativos de qualquer lugar do mundo via plataforma web." },
];

const SeeviseSection = () => (
  <AnimatedSection className="py-24 lg:py-32 section-dark" id="seevise">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-accent tracking-widest uppercase">Plataforma Seevise</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-surface-dark-foreground">
          Software de Gestão Industrial
        </h2>
        <p className="mt-4 text-surface-dark-foreground/60 text-lg max-w-2xl mx-auto">
          A Seevise é a plataforma inteligente que transforma dados brutos em decisões estratégicas para sua operação.
        </p>
      </div>

      {/* Dashboard image */}
      <div className="rounded-2xl overflow-hidden glow-border mb-16 max-w-4xl mx-auto">
        <img src={dashboardImg} alt="Plataforma Seevise Dashboard" loading="lazy" width={1200} height={700} className="w-full h-auto" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((c) => (
          <div key={c.title} className="glass-card p-6 text-center hover:scale-[1.03] transition-transform duration-300">
            <c.icon size={36} className="text-primary mx-auto mb-4" />
            <h3 className="font-display font-semibold text-surface-dark-foreground">{c.title}</h3>
            <p className="text-sm text-surface-dark-foreground/60 mt-2">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default SeeviseSection;
