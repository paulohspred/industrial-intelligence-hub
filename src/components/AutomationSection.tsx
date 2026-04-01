import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Cog, CircuitBoard, ToggleRight, Brain } from "lucide-react";

const AutomationSection = () => (
  <AnimatedSection className="py-24 lg:py-32 section-dark" id="automacao">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-accent tracking-widest uppercase">Automação & Engenharia</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-surface-dark-foreground">
          Hardware + Software em Sincronia
        </h2>
        <p className="mt-4 text-surface-dark-foreground/60 text-lg max-w-2xl mx-auto">
          A WFA cria a automação física — atuadores, relés e sensores — e a Seevise executa as regras lógicas de funcionamento.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* WFA Side */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-card p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
          <h3 className="font-display text-xl font-bold text-surface-dark-foreground flex items-center gap-3">
            <CircuitBoard size={24} className="text-primary" /> WFA — Camada Física
          </h3>
          <ul className="mt-6 space-y-4 text-surface-dark-foreground/70">
            <li className="flex items-start gap-3">
              <Cog size={18} className="text-primary mt-1 shrink-0" />
              <span>Atuadores elétricos e pneumáticos para controle de processos</span>
            </li>
            <li className="flex items-start gap-3">
              <ToggleRight size={18} className="text-primary mt-1 shrink-0" />
              <span>Relés inteligentes com monitoramento de estado</span>
            </li>
            <li className="flex items-start gap-3">
              <CircuitBoard size={18} className="text-primary mt-1 shrink-0" />
              <span>Sensores customizados para cada aplicação industrial</span>
            </li>
          </ul>
        </motion.div>

        {/* Seevise Side */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-card p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
          <h3 className="font-display text-xl font-bold text-surface-dark-foreground flex items-center gap-3">
            <Brain size={24} className="text-accent" /> Seevise — Camada Lógica
          </h3>
          <ul className="mt-6 space-y-4 text-surface-dark-foreground/70">
            <li className="flex items-start gap-3">
              <Brain size={18} className="text-accent mt-1 shrink-0" />
              <span>Regras de automação configuráveis sem programação</span>
            </li>
            <li className="flex items-start gap-3">
              <Cog size={18} className="text-accent mt-1 shrink-0" />
              <span>Orquestração de dispositivos com lógica condicional</span>
            </li>
            <li className="flex items-start gap-3">
              <ToggleRight size={18} className="text-accent mt-1 shrink-0" />
              <span>Execução automática de comandos baseada em telemetria</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  </AnimatedSection>
);

export default AutomationSection;
