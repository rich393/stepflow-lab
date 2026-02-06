import { ReactNode } from "react";

export interface AnimatedComponentProps {
  children?: ReactNode;
  className?: string;
  delay?: number;
}

export interface TestimonialData {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  outcome: string;
}

export interface FeatureData {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}
