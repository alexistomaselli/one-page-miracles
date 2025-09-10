import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Heart, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

interface FooterProps {
  translations: any;
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
  onDonate: () => void;
}

export const Footer = ({ translations, currentLanguage, onLanguageChange, onDonate }: FooterProps) => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/manuelglobalatmissions", name: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/manuelglobalatmissions", name: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/manuelglobalatmissions", name: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/manuelglobalatmissions", name: "YouTube" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-secondary mr-3" />
              <h3 className="text-2xl font-bold">Emmanuel Global Latin Missions</h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              {translations.footer.tagline}
            </p>
            <Button variant="donate" onClick={onDonate} className="text-primary">
              {translations.nav.donate}
            </Button>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('mission')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {translations.nav.mission}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {translations.nav.projects}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {translations.nav.contact}
                </button>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{translations.footer.social}</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 mb-4 md:mb-0">
            © 2025 Emmanuel Global Atmissions. {translations.footer.rights}
          </p>
          <LanguageToggle 
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
          />
        </div>
      </div>
    </footer>
  );
};