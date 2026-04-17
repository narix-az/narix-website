export type Lang = 'en' | 'az';

export interface ProjectStat {
  value: string;
  label: string;
}

export interface ProjectContent {
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  features: string[];
  tags: string[];
  stats?: ProjectStat[];
}

export interface ServiceContent {
  title: string;
  description: string;
  tags: string[];
}

export interface ProcessStepContent {
  num: string;
  title: string;
  desc: string;
}

export interface PillarContent {
  label: string;
  title: string;
  desc: string;
}

export interface TestimonialContent {
  text: string;
  author: string;
  role: string;
  company: string;
}

export interface StatContent {
  label: string;
  helper: string;
}
