import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Heart, Menu, X } from "lucide-react";

interface NavigationProps {
  translations: any;
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
  onDonate: () => void;
}

export const Navigation = ({ translations, currentLanguage, onLanguageChange, onDonate }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/10 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 group"
          >
            <Heart className={`w-8 h-8 transition-colors ${
              isScrolled ? 'text-primary' : 'text-white'
            }`} />
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              Manuel Global Atmissions
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('mission')}
              className={`transition-colors hover:opacity-80 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {translations.nav.mission}
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`transition-colors hover:opacity-80 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {translations.nav.projects}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-colors hover:opacity-80 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {translations.nav.contact}
            </button>
            
            <LanguageToggle 
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
            />
            
            <Button variant="donate" onClick={onDonate} size="sm">
              {translations.nav.donate}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-white/20">
            <div className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('mission')}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted/50 transition-colors"
              >
                {translations.nav.mission}
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted/50 transition-colors"
              >
                {translations.nav.projects}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted/50 transition-colors"
              >
                {translations.nav.contact}
              </button>
              <div className="px-4 py-2">
                <LanguageToggle 
                  currentLanguage={currentLanguage}
                  onLanguageChange={onLanguageChange}
                />
              </div>
              <div className="px-4 py-2">
                <Button variant="donate" onClick={onDonate} className="w-full">
                  {translations.nav.donate}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};