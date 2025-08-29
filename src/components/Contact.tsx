import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactProps {
  translations: any;
}

export const Contact = ({ translations }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: translations.contact.info.email,
      href: `mailto:${translations.contact.info.email}`
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: translations.contact.info.phone,
      href: `tel:${translations.contact.info.phone}`
    },
    {
      icon: MapPin,
      label: "Dirección",
      value: translations.contact.info.address,
      href: null
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: translations.contact.info.whatsapp,
      href: `https://wa.me/${translations.contact.info.whatsapp.replace(/[^0-9]/g, '')}`
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              {translations.contact.title}
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {translations.contact.subtitle}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-xl shadow-soft">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder={translations.contact.form.name}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder={translations.contact.form.email}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={translations.contact.form.message}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>
                <Button type="submit" className="w-full h-12">
                  {translations.contact.form.send}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const content = (
                  <div className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-soft hover:shadow-lg transition-shadow">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{info.label}</h3>
                      <p className="text-foreground/70">{info.value}</p>
                    </div>
                  </div>
                );
                
                return info.href ? (
                  <a key={index} href={info.href} className="block hover:transform hover:scale-105 transition-transform">
                    {content}
                  </a>
                ) : (
                  <div key={index}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};