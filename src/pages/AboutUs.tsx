import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Founders } from "@/components/Founders";
import { Footer } from "@/components/Footer";
import { translations } from "@/data/translations";

const AboutUs = () => {
    const [currentLanguage, setCurrentLanguage] = useState("es");

    const translationsData = translations as any;
    const t = translationsData[currentLanguage];

    const handleLanguageChange = (language: string) => {
        setCurrentLanguage(language);
    };

    const handleDirectDonate = () => {
        window.open('https://www.paypal.com/donate/?hosted_button_id=NGY3MHW5XNTPJ', '_blank');
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen">
            <Navigation
                translations={t}
                currentLanguage={currentLanguage}
                onLanguageChange={handleLanguageChange}
                onDonate={handleDirectDonate}
            />

            {/* Spacer for fixed navbar */}
            <div className="pt-20">
                <Founders translations={t} />
            </div>

            <Footer
                translations={t}
                currentLanguage={currentLanguage}
                onLanguageChange={handleLanguageChange}
                onDonate={handleDirectDonate}
            />
        </div>
    );
};

export default AboutUs;
