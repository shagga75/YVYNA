import React from 'react';

export interface Product {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface BlendSpec {
  name: string;
  subtitle: string;
  description: string;
  flavor: string;
  benefit: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}