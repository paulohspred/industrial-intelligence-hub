import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => (
  <AnimatedSection className="py-24 lg:py-32" id="cta">
    <div className="container mx-auto px-4">
      <div className="relative rounded-3xl overflow-hidden section-dark p-12 md:p-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="relative">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-surface-dark-foreground">
            Pronto para Transformar sua Operação?
          </h2>
          <p className="mt-4 text-surface-dark-foreground/60 text-lg max-w-xl mx-auto">
            Solicite uma demonstração e descubra como a fusão Seevise & WFA pode revolucionar sua gestão industrial.
          </p>
          <Button variant="hero" size="lg" className="mt-8">
            Solicitar Demonstração <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default CtaSection;
