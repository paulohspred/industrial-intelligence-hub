import AnimatedSection from "./AnimatedSection";
import { Fuel, Thermometer, Gauge, Activity } from "lucide-react";
import generatorImg from "@/assets/generator.jpg";

const metrics = [
  { icon: Fuel, label: "Nível de Combustível", value: "Monitoramento contínuo" },
  { icon: Gauge, label: "Pressão do Sistema", value: "Alertas em tempo real" },
  { icon: Thermometer, label: "Temperatura", value: "Análise térmica 24/7" },
  { icon: Activity, label: "Status de Operação", value: "On/Off e performance" },
];

const GeneratorSection = () => (
  <AnimatedSection className="py-24 lg:py-32" id="geradores">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Grupos Geradores</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">
            Monitoramento Completo de Geradores
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Telemetria completa para grupos geradores: acompanhe nível de combustível, pressão, temperatura e status de operação 24 horas por dia, 7 dias por semana.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-10">
            {metrics.map((m) => (
              <div key={m.label} className="glass-card p-4 flex items-start gap-3 hover:scale-[1.02] transition-transform duration-300">
                <m.icon size={24} className="text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-sm text-foreground">{m.label}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{m.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden glow-border">
          <img src={generatorImg} alt="Monitoramento de Gerador Industrial" loading="lazy" width={800} height={600} className="w-full h-auto" />
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default GeneratorSection;
