import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import damianImage from "@/assets/damian-2.jpeg";
import florenciaImage from "@/assets/florencia-2.jpeg";
import miguelImage from "@/assets/miguel-mutre.png";
import carlosImage from "@/assets/carlos-2.png";
import silviaImage from "@/assets/silvia-2.png";
import mariaImage from "@/assets/maria-fernanda-plaza.png";
// Carrusel automático sin scroll

interface FoundersProps {
  translations: any;
}

const foundersData = [
  {
    id: "carlos",
    name: "Carlos A. Santamaria",
    role: "Fundador",
    image: carlosImage,
  },
  {
    id: "silvia",
    name: "Silvia Preciado Santamaria",
    role: "Fundadora",
    image: silviaImage,
  },
  {
    id: "damian",
    name: "Damián Tomaselli",
    role: "Tesorero",
    image: damianImage,
  },
  {
    id: "florencia",
    name: "Florencia Tomaselli",
    role: "Directora de Media",
    image: florenciaImage,
  },
  {
    id: "miguel",
    name: "Miguel Mutre",
    role: "Fundador",
    image: miguelImage,
  },
  {
    id: "maria",
    name: "Maria Fernanda Plaza",
    role: "Directora de Relaciones Publicas",
    image: mariaImage,
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
    const currentScroll = viewport.scrollLeft;

    if (dir === "right") {
      // Si estamos cerca del final, volvemos al principio
      if (currentScroll >= maxScroll - 20) {
        viewport.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }
      // Calculamos el siguiente paso, asegurándonos de no pasarnos
      let nextScroll = currentScroll + amount;
      if (nextScroll > maxScroll) nextScroll = maxScroll;
      viewport.scrollTo({ left: nextScroll, behavior: "smooth" });
    } else {
      // Si estamos en el principio, vamos al final
      if (currentScroll <= 20) {
        viewport.scrollTo({ left: maxScroll, behavior: "smooth" });
        return;
      }
      // Calculamos el paso anterior
      let nextScroll = currentScroll - amount;
      if (nextScroll < 0) nextScroll = 0;
      viewport.scrollTo({ left: nextScroll, behavior: "smooth" });
    }
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

        {/* Carrusel Desktop */}
        <div className="relative hidden lg:block overflow-hidden">
          <div
            ref={viewportRef}
            className="max-w-7xl mx-auto overflow-hidden scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div ref={trackRef} className="flex gap-8 w-max pb-4">
              {foundersData.map((founder) => (
                <div
                  key={founder.id}
                  className="founder-slide shrink-0 w-[380px] bg-card rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 p-8 text-center border border-secondary/20"
                >
                  <div className="mx-auto w-32 h-32 mb-6 rounded-full overflow-hidden ring-4 ring-primary/10 shadow-lg">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                      style={
                        founder.id === "silvia"
                          ? { objectPosition: "50% 5%" }
                          : founder.id === "damian"
                            ? { objectPosition: "50% 67%", transform: "scale(1.22) translateY(14px)" }
                            : founder.id === "florencia"
                              ? { objectPosition: "50% 30%", transform: "scale(1.1)" }
                              : undefined
                      }
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-1">{founder.name}</h3>
                  <p className="text-secondary font-medium text-sm mb-4">{founder.role}</p>
                  <div className="h-[1px] w-12 bg-primary/20 mx-auto mb-4" />
                  <p className="text-foreground/80 italic leading-relaxed text-sm">
                    “{translations?.founders?.phrases?.[founder.id] ?? ""}”
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Controles laterales con mejor visibilidad */}
          <button
            type="button"
            onClick={() => advance("left")}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary hover:text-white text-primary border border-primary/20 rounded-full shadow-xl p-3 transition-all duration-300 group"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => advance("right")}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary hover:text-white text-primary border border-primary/20 rounded-full shadow-xl p-3 transition-all duration-300 group"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicadores de posición (Dots) */}
          <div className="flex justify-center gap-2 mt-8">
            {foundersData.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  // Marcamos como "activo" si el scroll está cerca de esa posición
                  Math.abs(viewportRef.current?.scrollLeft || 0 - idx * stepPx) < 50
                    ? 'w-8 bg-primary' : 'w-2 bg-primary/20'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Grid en móvil/tablet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl mx-auto lg:hidden">
          {foundersData.map((founder) => (
            <div
              key={founder.id}
              className="bg-card rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 p-8 text-center border border-secondary/20"
            >
              <div className="mx-auto w-32 h-32 mb-6 rounded-full overflow-hidden ring-4 ring-primary/10 shadow-lg">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                  style={
                    founder.id === "silvia"
                      ? { objectPosition: "50% 5%" }
                      : founder.id === "damian"
                        ? { objectPosition: "50% 67%", transform: "scale(1.22) translateY(14px)" }
                        : founder.id === "florencia"
                          ? { objectPosition: "50% 30%", transform: "scale(1.1)" }
                          : undefined
                  }
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">{founder.name}</h3>
              <p className="text-secondary font-medium text-sm mb-4">{founder.role}</p>
              <div className="h-[1px] w-12 bg-primary/20 mx-auto mb-4" />
              <p className="text-foreground/80 italic leading-relaxed text-sm">
                “{translations?.founders?.phrases?.[founder.id] ?? ""}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};