import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Factory, Code2, HeadsetIcon, Layers } from "lucide-react";

const diffs = [
  { icon: Factory, title: "Fabricação Própria", desc: "Hardware WFA projetado e fabricado internamente com qualidade industrial.", color: "text-primary" },
  { icon: Code2, title: "Software de Ponta", desc: "Plataforma Seevise com inteligência artificial e análise preditiva.", color: "text-accent" },
  { icon: HeadsetIcon, title: "Suporte Especializado", desc: "Equipe técnica dedicada para instalação, configuração e manutenção.", color: "text-primary" },
  { icon: Layers, title: "Ecossistema Completo", desc: "Do sensor ao dashboard, uma solução integrada sem depender de terceiros.", color: "text-accent" },
];

const DifferentialsSection = () => (
  <AnimatedSection className="py-24 lg:py-32 section-graphite" id="diferenciais">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-accent tracking-widest uppercase">Diferenciais</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-surface-graphite-foreground">
          Por que Seevise & WFA?
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {diffs.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="glass-card p-6 text-center"
          >
            <d.icon size={40} className={`${d.color} mx-auto mb-4`} />
            <h3 className="font-display font-bold text-lg text-surface-graphite-foreground">{d.title}</h3>
            <p className="text-sm text-surface-graphite-foreground/60 mt-2">{d.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default DifferentialsSection;
