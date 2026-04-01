import AnimatedSection from "./AnimatedSection";
import dashboardImg from "@/assets/dashboard.jpg";
import { BarChart3, Map, Table2, PieChart } from "lucide-react";

const items = [
  { icon: BarChart3, label: "Gráficos Modernos" },
  { icon: Map, label: "Mapas de Calor" },
  { icon: Table2, label: "Tabelas de Dados" },
  { icon: PieChart, label: "Relatórios Visuais" },
];

const DashboardsSection = () => (
  <AnimatedSection className="py-24 lg:py-32">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-primary tracking-widest uppercase">Dashboards Customizados</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">
          Dados que Geram Decisões
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          Gráficos modernos, mapas de calor e tabelas de dados que a Seevise oferece para tomada de decisão estratégica.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {items.map((item) => (
          <div key={item.label} className="glass-card px-6 py-3 flex items-center gap-2 hover:scale-105 transition-transform duration-300">
            <item.icon size={20} className="text-primary" />
            <span className="text-sm font-medium text-foreground">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="rounded-2xl overflow-hidden glow-border max-w-5xl mx-auto animate-pulse-glow">
        <img src={dashboardImg} alt="Dashboards Seevise" loading="lazy" width={1200} height={700} className="w-full h-auto" />
      </div>
    </div>
  </AnimatedSection>
);

export default DashboardsSection;
