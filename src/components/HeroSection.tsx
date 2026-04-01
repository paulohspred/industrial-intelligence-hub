import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Wifi } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
    <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/90 via-surface-dark/80 to-surface-dark" />

    <div className="relative container mx-auto px-4 py-32 text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8"
      >
        <Cpu size={16} className="text-primary" />
        <span className="text-sm text-surface-dark-foreground">Plataforma IIoT Completa</span>
        <Wifi size={16} className="text-accent" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-surface-dark-foreground max-w-5xl mx-auto text-balance"
      >
        <span className="gradient-text">SEEVISE & WFA</span>
        <br />
        A Fusão Definitiva entre Hardware e Inteligência Industrial
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 text-lg md:text-xl text-surface-dark-foreground/70 max-w-2xl mx-auto"
      >
        Fabricamos o hardware, projetamos a engenharia e entregamos a gestão completa em uma única plataforma IIoT.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button variant="hero" size="lg" onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}>
          Solicitar Demonstração <ArrowRight size={18} />
        </Button>
        <Button variant="hero-outline" size="lg" onClick={() => document.getElementById("wfa")?.scrollIntoView({ behavior: "smooth" })}>
          Conheça a Solução
        </Button>
      </motion.div>
    </div>

    {/* Bottom gradient fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
