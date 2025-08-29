import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Projects } from "@/components/Projects";
import { Testimonial } from "@/components/Testimonial";
import { CallToAction } from "@/components/CallToAction";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { translations } from "@/data/translations";

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState("es");
  
  const t = translations[currentLanguage as keyof typeof translations];

  const handleDonate = () => {
    // Simulate PayPal donation - in a real implementation, this would redirect to PayPal
    const paypalUrl = "https://www.paypal.com/donate/?hosted_button_id=YOUR_PAYPAL_BUTTON_ID";
    window.open(paypalUrl, '_blank');
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
        onDonate={handleDonate}
      />
      
      <Hero 
        translations={t}
        onDonate={handleDonate}
      />
      
      <Mission 
        translations={t}
      />
      
      <Projects 
        translations={t}
        onDonate={handleDonate}
      />
      
      <Testimonial 
        translations={t}
      />
      
      <CallToAction 
        translations={t}
        onDonate={handleDonate}
      />
      
      <Contact 
        translations={t}
      />
      
      <Footer 
        translations={t}
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        onDonate={handleDonate}
      />
    </div>
  );
};

export default Index;
