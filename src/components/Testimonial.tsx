import { Quote } from "lucide-react";

interface TestimonialProps {
  translations: any;
}

export const Testimonial = ({ translations }: TestimonialProps) => {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary/10 to-warmth/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <Quote className="w-16 h-16 text-secondary mx-auto mb-8 opacity-80" />
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary mb-8 leading-relaxed italic">
              "{translations.testimonial.quote}"
            </blockquote>
            <cite className="text-lg text-foreground/70 font-medium">
              — {translations.testimonial.author}
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};