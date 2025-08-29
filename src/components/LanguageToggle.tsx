import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export interface Language {
  code: string;
  name: string;
}

interface LanguageToggleProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

export const LanguageToggle = ({ currentLanguage, onLanguageChange }: LanguageToggleProps) => {
  const languages: Language[] = [
    { code: "es", name: "Español" },
    { code: "en", name: "English" }
  ];

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={currentLanguage === lang.code ? "default" : "ghost"}
          size="sm"
          onClick={() => onLanguageChange(lang.code)}
          className="text-sm"
        >
          {lang.name}
        </Button>
      ))}
    </div>
  );
};