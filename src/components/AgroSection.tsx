import AnimatedSection from "./AnimatedSection";
import { Droplets, CloudSun, Sprout, Smartphone } from "lucide-react";
import farmingImg from "@/assets/smart-farming.jpg";

const features = [
  { icon: Droplets, title: "Umidade do Solo", desc: "Sensores WFA medem em tempo real a umidade em diferentes profundidades." },
  { icon: CloudSun, title: "Dados Climáticos", desc: "Estação meteorológica integrada com previsão e histórico local." },
  { icon: Sprout, title: "Irrigação Inteligente", desc: "Automação de irrigação baseada em dados reais do campo." },
  { icon: Smartphone, title: "Controle Total", desc: "Gerencie toda a operação agrícola pela plataforma Seevise." },
];

const AgroSection = () => (
  <AnimatedSection className="py-24 lg:py-32" id="agro">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-primary tracking-widest uppercase">Agro Inteligente</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">
          Tecnologia no Campo
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          Sensores WFA de umidade, clima e irrigação integrados à plataforma Seevise para controle total do campo.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="rounded-2xl overflow-hidden glow-border">
          <img src={farmingImg} alt="Agro Inteligente" loading="lazy" width={800} height={600} className="w-full h-auto" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
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
  </AnimatedSection>
);

export default AgroSection;
