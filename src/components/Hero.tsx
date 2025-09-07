import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-divine-light.jpg";

interface HeroProps {
  translations: any;
  onDonate: () => void;
}

export const Hero = ({ translations, onDonate }: HeroProps) => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {translations.hero.title}
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            {translations.hero.subtitle}
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            onClick={onDonate}
            className="text-xl px-12 py-6 h-auto"
          >
            {translations.hero.cta}
          </Button>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};