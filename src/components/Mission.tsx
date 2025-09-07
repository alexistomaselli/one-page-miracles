import orphanageLove from '../assets/orphanage-love.jpg';

interface MissionProps {
  translations: any;
}

export const Mission = ({ translations }: MissionProps) => {
  return (
    <section 
      id="mission" 
      className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url(${orphanageLove})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
            {translations.mission.title}
          </h2>
          
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              {translations.mission.content}
            </p>
            
            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-lg shadow-soft border border-secondary/20">
              <blockquote className="text-xl md:text-2xl font-medium text-primary italic leading-relaxed">
                {translations.mission.verse}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};