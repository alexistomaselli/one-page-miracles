import { Button } from "@/components/ui/button";
import { GraduationCap, Home, Utensils } from "lucide-react";
//import schoolImage from "@/assets/school-argentina.jpg";
import schoolImage from "@/assets/escuela-argentina.png";
import orphanageImage from "@/assets/orfanato-ecuador-2.webp";
import soupKitchenImage from "@/assets/comedor-comunitario.png";

interface ProjectsProps {
  translations: any;
  onDonate: () => void;
}

export const Projects = ({ translations, onDonate }: ProjectsProps) => {
  const projects = [
    {
      id: "school",
      title: translations.projects.school.title,
      description: translations.projects.school.description,
      location: translations.projects.school.location,
      cta: translations.projects.school.cta,
      icon: GraduationCap,
      image: schoolImage,
      color: "from-accent to-accent-light",
      objectPosition: "50% 70%" // Desplazada levemente hacia arriba para ver mejor la base/patio
    },
    {
      id: "orphanage",
      title: translations.projects.orphanage.title,
      description: translations.projects.orphanage.description,
      location: translations.projects.orphanage.location,
      cta: translations.projects.orphanage.cta,
      icon: Home,
      image: orphanageImage,
      color: "from-primary to-primary-light",
      objectPosition: "50% 40%" // Mejor encuadre de los niños
    },
    {
      id: "dining",
      title: translations.projects.dining.title,
      description: translations.projects.dining.description,
      location: translations.projects.dining.location,
      cta: translations.projects.dining.cta,
      icon: Utensils,
      image: soupKitchenImage,
      color: "from-warmth to-warmth-light",
      objectPosition: "50% 20%" // Enfoque en las luces y el ambiente
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            {translations.projects.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="bg-card rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: project.objectPosition }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`}></div>
                  <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-full">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-secondary font-medium mb-3">
                    {project.location}
                  </p>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <Button
                    variant="project"
                    className="w-full"
                    onClick={onDonate}
                  >
                    {project.cta}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};