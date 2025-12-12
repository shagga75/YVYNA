import React from 'react';

export interface Product {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface BlendSpec {
  name: string;
  ingredients: string;
  flavor: string;
  effect: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}