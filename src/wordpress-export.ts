/**
 * WordPress Export
 * 
 * Este archivo exporta los componentes React para que WordPress pueda utilizarlos
 */

import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Mission } from "./components/Mission";
import { Projects } from "./components/Projects";
import { Testimonial } from "./components/Testimonial";
import { CallToAction } from "./components/CallToAction";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

// Declarar el objeto global EmmanuelComponents
declare global {
  interface Window {
    EmmanuelComponents: Record<string, React.ComponentType<any>>;
  }
}

// Exportar los componentes al objeto global window.EmmanuelComponents
window.EmmanuelComponents = {
  Navigation,
  Hero,
  Mission,
  Projects,
  Testimonial,
  CallToAction,
  Contact,
  Footer
};