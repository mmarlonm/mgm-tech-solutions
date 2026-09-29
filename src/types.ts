export type NavSection = 'inicio' | 'servicios' | 'tecnologias' | 'portafolio' | 'contacto';

export interface TechItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'mobile';
  description: string;
  iconName: string;
  badgeColor: string;
  features: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'crm' | 'erp' | 'healthtech' | 'fintech';
  categoryLabel: string;
  tags: string[];
  description: string;
  fullOverview: string;
  architectureDetails: string[];
  imageUrl: string;
  imageAlt: string;
  gallery?: string[];
  metrics: {
    primaryLabel: string;
    primaryValue: string;
    secondaryLabel?: string;
    secondaryValue?: string;
  };
  featured?: boolean;
  clientIndustry: string;
  deliveryYear: string;
  stack: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  tags: string[];
  capabilities: string[];
}

export interface ConsultationRequest {
  fullName: string;
  email: string;
  company: string;
  projectType: string;
  estimatedBudget: string;
  message: string;
  techStack: string[];
}
