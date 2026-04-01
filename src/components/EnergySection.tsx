import AnimatedSection from "./AnimatedSection";
import { Zap, TrendingDown, AlertTriangle, BarChart3 } from "lucide-react";
import energyImg from "@/assets/energy.jpg";

const points = [
  { icon: Zap, title: "Quadros Elétricos", desc: "Monitoramento completo de painéis e disjuntores em tempo real." },
  { icon: BarChart3, title: "Análise de Consumo", desc: "Identifique padrões e otimize o uso de energia com dados precisos." },
  { icon: AlertTriangle, title: "Picos de Tensão", desc: "Detecte variações e sobretensões antes que causem danos." },
  { icon: TrendingDown, title: "Redução de Custos", desc: "Diminua a conta de energia com decisões baseadas em dados reais." },
];

const EnergySection = () => (
  <AnimatedSection className="py-24 lg:py-32 section-graphite" id="energia">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="rounded-2xl overflow-hidden glow-border order-2 lg:order-1">
          <img src={energyImg} alt="Eficiência Energética" loading="lazy" width={800} height={600} className="w-full h-auto" />
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-sm font-semibold text-accent tracking-widest uppercase">Eficiência Energética</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-surface-graphite-foreground">
            Controle Total da Sua Energia
          </h2>
          <p className="mt-4 text-surface-graphite-foreground/60 text-lg leading-relaxed">
            Monitoramento inteligente de quadros elétricos para análise de consumo, picos de tensão e corrente, gerando redução de custos reais.
          </p>

          <div className="space-y-4 mt-10">
            {points.map((p) => (
              <div key={p.title} className="glass-card p-4 flex items-start gap-4 hover:scale-[1.01] transition-transform duration-300">
                <p.icon size={24} className="text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-surface-graphite-foreground">{p.title}</h4>
                  <p className="text-sm text-surface-graphite-foreground/60 mt-0.5">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default EnergySection;
