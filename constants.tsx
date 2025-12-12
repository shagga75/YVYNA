import React from 'react';
import { Leaf, Coffee, Sparkles } from 'lucide-react';
import { BlendSpec, Product, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    title: "Mate Cocido Clásico",
    description: "Yerba mate seleccionada, sabor equilibrado. Tu ritual diario, reinventado.",
    icon: <Leaf className="w-8 h-8 opacity-80" />
  },
  {
    title: "Mate Cocido con Cañamo",
    description: "Cañamo soluble + mate premium. Energía y calma en un solo sorbo.",
    icon: <Sparkles className="w-8 h-8 opacity-80" />
  },
  {
    title: "Blends Funcionales",
    description: "Combinaciones botánicas con adaptógenos como Lion’s Mane, Ashwagandha, Reishi, etc.",
    icon: <Coffee className="w-8 h-8 opacity-80" />
  }
];

export const BLEND_SPECS: BlendSpec[] = [
  {
    name: "Mental Focus",
    subtitle: "Enfoque sin ansiedad",
    description: "Blend nootrópico con Melena de León, romero y limón para claridad, memoria y productividad sostenida.",
    flavor: "Herbal suave + cítricos",
    benefit: "Concentración estable durante horas."
  },
  {
    name: "Adaptoboost",
    subtitle: "Energía sostenida + estrés bajo control",
    description: "Yerba mate cocida con Rhodiola, ginseng y cúrcuma. Ideal para días intensos sin picos ni bajones.",
    flavor: "Fresco, especiado",
    benefit: "Regulación del cortisol + energía pareja."
  },
  {
    name: "Inmune Zen",
    subtitle: "Calma profunda + sistema inmune",
    description: "Reishi, ashwagandha, lavanda y manzanilla para equilibrio mente-cuerpo y refuerzo inmunológico.",
    flavor: "Floral cálido",
    benefit: "Resiliencia emocional y física."
  },
  {
    name: "Fungi Vital",
    subtitle: "Vitalidad física natural",
    description: "Cordyceps, chaga, jengibre y hibiscus para energía celular y defensas antioxidantes.",
    flavor: "Frutal intenso + especias suaves",
    benefit: "Anti-fatiga + oxigenación celular."
  },
  {
    name: "Calma Cognitiva",
    subtitle: "Serenidad con claridad",
    description: "Ashwagandha, reishi, melena de león, tilo y lavanda para relajar sin sedar.",
    flavor: "Floral-mentolado",
    benefit: "Sueño profundo + mente clara al despertar."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "No soy fan del mate, pero YVYNA me cambió la forma de empezar el día. El blend Focus es increíble.",
    author: "Camila",
    location: "Barcelona"
  },
  {
    quote: "El de Cañamo me ayuda a bajar un cambio sin perder energía.",
    author: "Lucas",
    location: "Buenos Aires"
  },
  {
    quote: "Sleep Cleanse es ahora parte de mi ritual nocturno.",
    author: "Elena",
    location: "Berlín"
  }
];

export const LOGO_URL = "https://i.postimg.cc/R0Fkkz1j/20251209-2224-Logo-Minimalista-YVYNA-simple-compose-01kc2fybsbebnrvme3hpzd23jq-(1).png";