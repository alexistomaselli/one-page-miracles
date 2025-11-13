import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// Carrusel automático sin scroll

interface FoundersProps {
  translations: any;
}

const foundersData = [
  {
    id: "carlos",
    name: "Carlos Santamaria",
    role: "Fundador",
    image: carlosImage,
  },
  {
    id: "silvia",
    name: "Silvia Santamaria",
    role: "Fundadora",
    image: silviaImage,
  },
  {
    id: "damian",
    name: "Damián Tomaselli",
    role: "Fundador",
    image: damianImage,
  },
  {
    id: "florencia",
    name: "Florencia Barrios",
    role: "Fundadora",
    image: florenciaImage,
  },
  {
    id: "miguel",
    name: "Miguel Mutre",
    role: "Fundador",
    image: miguelImage,
  },
];

export const Founders = ({ translations }: FoundersProps) => {
  const title = translations?.founders?.title ?? "Fundadores";
  const subtitle =
    translations?.founders?.subtitle ??
    "Un equipo guiado por la fe que sirve con amor.";
  // Hooks y configuración para avance por pasos
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [stepPx, setStepPx] = useState<number>(0);
  const slidesPerStep = 1; // avanza de a 1 fundador

  useEffect(() => {
    const recalc = () => {
      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (!track || !viewport) return;
      const firstSlide = track.querySelector<HTMLDivElement>(".founder-slide");
      if (!firstSlide) return;
      const gapStr = getComputedStyle(track).gap || "0px";
      const gapPx = parseFloat(gapStr) || 0;
      const step = firstSlide.offsetWidth + gapPx;
      setStepPx(step);
    };
    recalc();
    window.addEventListener("resize", recalc);
    window.addEventListener("orientationchange", recalc);
    return () => {
      window.removeEventListener("resize", recalc);
      window.removeEventListener("orientationchange", recalc);
    };
  }, []);

  const advance = (dir: "left" | "right") => {
    const viewport = viewportRef.current;
    if (!viewport || stepPx <= 0) return;
    const amount = stepPx * slidesPerStep;
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    let next = dir === "left" ? viewport.scrollLeft - amount : viewport.scrollLeft + amount;
    if (next < 0) {
      viewport.scrollTo({ left: maxScroll, behavior: "auto" });
      return;
    }
    if (next > maxScroll - 2) {
      viewport.scrollTo({ left: 0, behavior: "auto" });
      return;
    }
    viewport.scrollTo({ left: next, behavior: "smooth" });
  };

  useEffect(() => {
    if (stepPx <= 0) return;
    const id = setInterval(() => advance("right"), 6000);
    return () => clearInterval(id);
  }, [stepPx]);

  return (
    <section id="founders" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Carrusel Desktop: 3 visibles, flechas y autoavance de a 2 fundadores */}
        <div className="relative hidden lg:block">
          <div ref={viewportRef} className="max-w-7xl mx-auto overflow-x-auto no-scrollbar snap-x snap-mandatory">
            <div ref={trackRef} className="flex gap-8">
              {foundersData.map((founder) => (
                <div
                  key={founder.id}
                  className="founder-slide shrink-0 w-[400px] bg-card rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 p-6 text-center border border-secondary/20 snap-start"
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
                          ? { objectPosition: "50% 67%", transform: "scale(1.22) translateY(14px)" }
                          : founder.name === "Florencia Barrios"
                          ? { objectPosition: "50% 30%", transform: "scale(1.1)" }
                          : undefined
                      }
                    />
                  </div>
                  <h3 className="text-lg font-bold text-primary">{founder.name}</h3>
                  <p className="text-secondary text-sm mb-3">{founder.role}</p>
                  <p className="text-foreground/80 italic whitespace-pre-line">“{translations?.founders?.phrases?.[founder.id] ?? ""}”</p>
                </div>
              ))}
            </div>
          </div>

          {/* Controles */}
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => advance("left")}
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/95 border border-secondary/30 rounded-full shadow p-2"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => advance("right")}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/95 border border-secondary/30 rounded-full shadow p-2"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Grid en móvil/tablet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl mx-auto lg:hidden">
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
                      ? { objectPosition: "50% 67%", transform: "scale(1.22) translateY(14px)" }
                      : founder.name === "Florencia Barrios"
                      ? { objectPosition: "50% 30%", transform: "scale(1.1)" }
                      : undefined
                  }
                />
              </div>
              <h3 className="text-lg font-bold text-primary">{founder.name}</h3>
              <p className="text-secondary text-sm mb-3">{founder.role}</p>
              <p className="text-foreground/80 italic whitespace-pre-line">“{translations?.founders?.phrases?.[founder.id] ?? ""}”</p>
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