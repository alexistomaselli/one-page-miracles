import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface CallToActionProps {
  translations: any;
  onDonate: () => void;
}

export const CallToAction = ({ translations, onDonate }: CallToActionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 mx-auto mb-8 text-secondary" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {translations.cta.title}
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
            {translations.cta.subtitle}
          </p>
          <Button 
            variant="donate" 
            size="lg"
            onClick={onDonate}
            className="text-xl px-12 py-6 h-auto text-primary"
          >
            {translations.cta.button}
          </Button>
        </div>
      </div>
    </section>
  );
};