
// Import React to ensure the React namespace is available for type definitions such as React.ReactNode.
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details?: string[];
  image?: string;
}

export interface Specialist {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  date: string;
}
