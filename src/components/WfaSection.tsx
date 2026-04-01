import AnimatedSection from "./AnimatedSection";
import { Shield, Thermometer, Server, Wrench } from "lucide-react";
import fanlessPc from "@/assets/fanless-pc.jpg";

const features = [
  { icon: Server, title: "Dispositivos Fanless", desc: "Sem ventilação mecânica — operação silenciosa e sem manutenção em ambientes extremos." },
  { icon: Shield, title: "Chassi de Alumínio", desc: "Estrutura robusta resistente a impactos, poeira e condições industriais severas." },
  { icon: Thermometer, title: "Resistência Térmica", desc: "Operação contínua em altas temperaturas sem degradação de desempenho." },
  { icon: Wrench, title: "Engenharia Própria", desc: "Sensores e hardware desenvolvidos internamente para máxima integração e confiabilidade." },
];

const WfaSection = () => (
  <AnimatedSection className="py-24 lg:py-32" id="wfa">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden glow-border">
            <img src={fanlessPc} alt="Hardware WFA Fanless" loading="lazy" width={800} height={600} className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div>
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Unidade WFA</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">
            Engenharia & Fabricação de Hardware
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            A WFA é a unidade responsável por fabricar todo o hardware industrial. Nossos dispositivos são projetados para operar em condições extremas, sem partes móveis e com durabilidade comprovada.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-5 hover:scale-[1.02] transition-transform duration-300">
                <f.icon size={28} className="text-primary mb-3" />
                <h3 className="font-display font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default WfaSection;
