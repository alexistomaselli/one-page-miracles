import { useState, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Projects } from "@/components/Projects";
import { Founders } from "@/components/Founders";
import { Testimonial } from "@/components/Testimonial";
import { CallToAction } from "@/components/CallToAction";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { PayPalDonateButton } from "@/components/PayPalDonateButton";
import { translations } from "@/data/translations";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState("es");
  const [isDonateDialogOpen, setIsDonateDialogOpen] = useState(false);
  
  const t = translations[currentLanguage as keyof typeof translations];

  const projectsRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);

  const handleDonate = () => {
    // Navegar a la sección de proyectos
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDirectDonate = () => {
    // Redirigir directamente a la URL de PayPal
    window.open('https://www.paypal.com/donate/?hosted_button_id=NGY3MHW5XNTPJ', '_blank');
  };

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        translations={t}
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        onDonate={handleDirectDonate}
      />
      
      <Hero 
        translations={t}
        onDonate={handleDonate}
        onDirectDonate={handleDirectDonate}
        onScrollDown={() => missionRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />
      
      <div ref={missionRef}>
        <Mission 
          translations={t}
        />
      </div>
      
      <div ref={projectsRef}>
        <Projects 
          translations={t}
          onDonate={handleDirectDonate}
        />
      </div>

      <Founders translations={t} />
      
      {/* Diálogo de donación con PayPal */}
      <Dialog open={isDonateDialogOpen} onOpenChange={setIsDonateDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-primary">{t.donate.title}</DialogTitle>
            <p className="text-center text-gray-600 mt-2">{t.donate.subtitle}</p>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center py-6">
            <PayPalDonateButton 
              hostedButtonId="Y36EWLZRDUE42" 
              containerId="paypal-container-Y36EWLZRDUE42" 
            />
          </div>
        </DialogContent>
      </Dialog>
      
      <Testimonial 
        translations={t}
      />
      
      <CallToAction 
        translations={t}
        onDonate={handleDirectDonate}
      />
      
      <Contact 
        translations={t}
      />
      
      <Footer 
        translations={t}
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        onDonate={handleDirectDonate}
      />
    </div>
  );
};

export default Index;
