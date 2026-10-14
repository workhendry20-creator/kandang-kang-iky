/**
 * Kandang Kang Iky - Landing Page Type Definitions
 */

export type ContactIntent = 'buy' | 'consult' | 'social';

export interface ConsultationService {
  id: string;
  title: string;
  description: string;
  targetAudience: string;
  icon: string;
  features: string[];
  duration?: string;
  priceNote?: string;
}

export interface SocialProgram {
  id: string;
  title: string;
  description: string;
  impactMetrics: string;
  image: string;
  category: string;
  keyPoints: string[];
}

export interface ExpertMetric {
  label: string;
  value: string;
  description?: string;
}

export interface ExpertProfile {
  name: string;
  formalName: string;
  degrees: string;
  title: string;
  role: string;
  bio: string;
  photo: string;
  credentials: string[];
  metrics: ExpertMetric[];
  specialties: string[];
}
