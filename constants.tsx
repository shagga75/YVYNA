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
    name: "Relax Focus",
    ingredients: "Yerba Mate, Lion's Mane, L-Teanina, Melissa",
    flavor: "Cítrico suave con notas terrosas",
    effect: "Concentración en calma sin ansiedad"
  },
  {
    name: "Zen Energía",
    ingredients: "Yerba Mate, Guayusa, Ginseng Panax",
    flavor: "Intenso, herbal y robusto",
    effect: "Energía sostenida y vitalidad física"
  },
  {
    name: "Glow Detox",
    ingredients: "Yerba Mate, Diente de León, Cola de Caballo, Frutos Rojos",
    flavor: "Frutal y refrescante",
    effect: "Purificación y luminosidad de la piel"
  },
  {
    name: "Sleep Cleanse",
    ingredients: "Manzanilla, Valeriana, Pasiflora, Lavanda (Sin Cafeína)",
    flavor: "Floral y dulce",
    effect: "Relajación profunda y reparación nocturna"
  },
  {
    name: "Mood Elevate",
    ingredients: "Yerba Mate, Cacao, Rhodiola, Mucuna",
    flavor: "Achocolatado y especiado",
    effect: "Bienestar emocional y motivación"
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