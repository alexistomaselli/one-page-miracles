interface FoundersProps {
  translations: any;
}

const foundersData = [
  {
    name: "Miguel Mutre",
    role: "Fundador",
    phrase: `8  Nunca se apartará de tu boca este libro de la ley, sino que de día y de noche meditarás en él, para que guardes y hagas conforme a todo lo que en él está escrito; porque entonces harás prosperar tu camino, y todo te saldrá bien.

🍃 Josué 1:8 RV60 🍃

Bendiciones para todos sabiendo que el amor de Dios estan grande que bendice al dador alegre y multiplica al ciento y al mil x uno Shalom`,
    image: miguelImage,
  },
  {
    name: "Damián Tomaselli",
    role: "Fundador",
    phrase: "“Tu semilla, regada con amor, se convierte en fruto de alegría y esperanza en la vida de un niño.”",
    image: damianImage,
  },
  {
    name: "Florencia Barrios",
    role: "Fundadora",
    phrase: "Comunicar esperanza es mi forma de servir. Porque cuando la fe se comparte, el amor se multiplica.",
    image: florenciaImage,
  },
  {
    name: "Carlos Santamaria",
    role: "Fundador",
    phrase: `Juntos, podemos reescribir su historia—¡dona hoy y enciende un mañana más brillante! 📖🌈 #EmanuelGlobalLatinMissions`,
    image: carlosImage,
  },
  {
    name: "Silvia Santamaria",
    role: "Fundadora",
    phrase: `Mi respirar, caminar y levantarme dependen únicamente de ayudar a otros a respirar, caminar y levantarse a ganar su propia carrera. Una vida con propósito. Unidos lo lograremos en el nombre poderoso de Jesús.

“Dad, y se os dará; medida buena, apretada, remecida y rebosando darán en vuestro regazo; porque con la misma medida con que medís, os volverán a medir.” — Lucas 6:38 (RVR1960)`,
    image: silviaImage,
  },
];

export const Founders = ({ translations }: FoundersProps) => {
  const title = translations?.founders?.title ?? "Fundadores";
  const subtitle =
    translations?.founders?.subtitle ??
    "Un equipo guiado por la fe que sirve con amor.";

  return (
    <section id="founders" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {foundersData.map((founder) => (
            <div
              key={founder.name}
              className="bg-card rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 p-6 text-center border border-secondary/20"
            >
              <div className="mx-auto w-28 h-28 mb-4 rounded-full overflow-hidden ring-2 ring-primary/50 shadow-md">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                  style={
                    founder.name === "Silvia Santamaria"
                      ? { objectPosition: "50% 20%" }
                      : founder.name === "Damián Tomaselli"
                      ? { objectPosition: "50% 35%", transform: "scale(1.12)" }
                      : founder.name === "Florencia Barrios"
                      ? { objectPosition: "50% 30%", transform: "scale(1.1)" }
                      : undefined
                  }
                />
              </div>
              <h3 className="text-lg font-bold text-primary">{founder.name}</h3>
              <p className="text-secondary text-sm mb-3">{founder.role}</p>
              <p className="text-foreground/80 italic whitespace-pre-line">“{founder.phrase}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import damianImage from "@/assets/damian-2.jpeg";
import florenciaImage from "@/assets/florencia-2.jpeg";
import miguelImage from "@/assets/miguel-mutre.png";
import carlosImage from "@/assets/carlos-2.png";
import silviaImage from "@/assets/silvia-2.png";