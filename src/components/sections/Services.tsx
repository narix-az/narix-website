import React from 'react';
import styles from './Services.module.css';

const services = [
  {
    title: 'AI & Workflow Automation',
    description:
      'Streamline operations with intelligent automation. We design and deploy AI systems that eliminate repetitive tasks, optimize processes, and scale your business efficiently.',
    tags: ['Automation', 'RPA', 'Workflows'],
    icon: 'automation',
  },
  {
    title: 'AI Chatbots & Customer Support',
    description:
      'Transform customer engagement with smart chatbots and AI-powered support systems. Deliver 24/7 assistance, reduce response times, and improve satisfaction.',
    tags: ['Chatbot', 'NLP', 'LLM'],
    icon: 'chatbot',
  },
  {
    title: 'AI Content & Branding',
    description:
      'From design and visuals to ad campaigns, leverage AI for compelling content creation. We build brand assets, marketing materials, and creative solutions that resonate.',
    tags: ['Design', 'Ads', 'Branding'],
    icon: 'content',
  },
  {
    title: 'Business Analytics & AI Insights',
    description:
      'Turn data into decisions. Our analytics and AI solutions uncover patterns, forecast trends, and deliver actionable insights that drive growth.',
    tags: ['Analytics', 'ML', 'Forecasting'],
    icon: 'analytics',
  },
  {
    title: 'Web Development & Digital Solutions',
    description:
      'Modern, scalable web applications and digital platforms. From enterprise portals to customer-facing apps, we deliver solutions built for the future.',
    tags: ['Web', 'API', 'Cloud'],
    icon: 'web',
  },
];

const iconPaths: Record<string, React.ReactElement> = {
  automation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
    </svg>
  ),
  chatbot: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  ),
  content: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
};

interface ServicesProps {
  variant?: 'full' | 'preview';
}

export default function Services({ variant = 'full' }: ServicesProps) {
  const displayServices = variant === 'preview' ? services.slice(0, 3) : services;

  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.tag}>Services</div>
          <h2 className={styles.title}>
            AI-Powered Solutions for
            <br />
            Tomorrow&apos;s Business
          </h2>
          <p className={styles.desc}>
            Custom AI solutions tailored to your needs — smarter decisions,
            streamlined operations, and measurable growth.
          </p>
        </div>
        <div className={styles.grid}>
          {displayServices.map((service) => (
            <div key={service.title} className={styles.card}>
              <div className={styles.icon}>{iconPaths[service.icon]}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className={styles.tags}>
                {service.tags.map((tag) => (
                  <span key={tag} className={styles.tagItem}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
