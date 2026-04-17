import type {
  Lang,
  PillarContent,
  ProcessStepContent,
  ProjectContent,
  ServiceContent,
  StatContent,
  TestimonialContent,
} from './types';

export interface Dictionary {
  meta: {
    description: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
    cta: string;
    languageLabel: string;
    menuOpen: string;
    menuClose: string;
  };
  common: {
    readCase: string;
    visitProject: string;
    learnMore: string;
    close: string;
  };
  hero: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
    desc: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustStrong: string;
    trustRest: string;
    trustStars: string;
    scroll: string;
  };
  heroVisual: {
    agentName: string;
    online: string;
    statusLive: string;
    botName: string;
    userMessage: string;
    botMessage: string;
    steps: { analyze: string; summarize: string; dispatch: string };
    inputPlaceholder: string;
    metricLabel: string;
    metricDelta: string;
    flowTitle: string;
    flowNodes: { trigger: string; ai: string; crm: string };
  };
  partners: {
    title: string;
    subtitle: string;
  };
  delivered: {
    eyebrow: string;
    title: string;
    desc: string;
    highlights: string;
    keyNumbers: string;
    projects: Record<string, ProjectContent>;
  };
  services: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    desc: string;
    list: ServiceContent[];
  };
  process: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
    steps: ProcessStepContent[];
  };
  stats: StatContent[];
  about: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    desc: string;
    pillars: PillarContent[];
    ctaServices: string;
    ctaWork: string;
  };
  testimonials: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
    list: TestimonialContent[];
  };
  cta: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    desc: string;
    book: string;
    start: string;
    metaResponse: string;
    metaCall: string;
    metaProposal: string;
  };
  contact: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    desc: string;
    channels: { email: string; whatsapp: string; location: string };
    locationValue: string;
    form: {
      name: string;
      namePh: string;
      email: string;
      emailPh: string;
      company: string;
      companyPh: string;
      message: string;
      messagePh: string;
      submit: string;
      submitting: string;
      sent: string;
      note: string;
    };
  };
  footer: {
    tagline: string;
    columns: {
      services: string;
      company: string;
      contact: string;
    };
    serviceLinks: string[];
    rights: string;
    legal: { privacy: string; terms: string };
  };
  pages: {
    about: { eyebrow: string; title: string; desc: string };
    services: { eyebrow: string; title: string; desc: string };
    contact: { eyebrow: string; title: string; desc: string };
  };
  notFound: {
    title: string;
    desc: string;
    home: string;
    contact: string;
  };
}

const en: Dictionary = {
  meta: {
    description:
      'Narix designs, builds and operates AI systems — workflow automation, AI agents, analytics and modern web platforms — for fast-moving teams.',
  },
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    cta: 'Book a Call',
    languageLabel: 'Language',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
  common: {
    readCase: 'Read case',
    visitProject: 'Visit live project',
    learnMore: 'Learn more',
    close: 'Close',
  },
  hero: {
    eyebrow: 'AI Business Solutions',
    titleStart: 'We Build',
    titleAccent: 'AI Systems',
    titleEnd: 'That Run Your Business',
    desc: 'Narix designs, builds, and operates intelligent automation — workflows, AI agents, and analytics that turn manual work into compound growth.',
    ctaPrimary: 'Get Free Consultation',
    ctaSecondary: 'View Case Studies',
    trustStrong: '20+ teams',
    trustRest: 'automated with Narix',
    trustStars: '★★★★★ 4.9/5 satisfaction',
    scroll: 'Scroll',
  },
  heroVisual: {
    agentName: 'Narix Agent',
    online: 'online',
    statusLive: '● live',
    botName: 'narix.ai',
    userMessage: 'Generate this week’s sales report and email the team.',
    botMessage:
      'Pulled 1,284 orders from Shopify, computed 14 KPIs and drafted a summary. Sending now to 6 recipients...',
    steps: { analyze: 'Analyze', summarize: 'Summarize', dispatch: 'Dispatch' },
    inputPlaceholder: 'Ask Narix anything…',
    metricLabel: 'Automations running',
    metricDelta: '↑ 24%',
    flowTitle: 'Workflow · #SalesOps',
    flowNodes: { trigger: 'Trigger', ai: 'AI', crm: 'CRM' },
  },
  partners: {
    title: 'Powered by the best AI stack',
    subtitle:
      'We build on the same platforms trusted by the world’s top product teams.',
  },
  delivered: {
    eyebrow: 'Case Studies',
    title: 'Real projects. Real impact.',
    desc:
      'A selection of recent products and AI systems we’ve shipped for clients across e-commerce, fintech, hospitality and operations.',
    highlights: 'Highlights',
    keyNumbers: 'Key numbers',
    projects: {
      chamanly: {
        name: 'Chamanly.az',
        category: 'Rural tourism marketplace',
        shortDescription:
          'A platform connecting property owners with guests looking for countryside and nature stays across Azerbaijan.',
        description:
          'Chamanly.az is an Airbnb-style marketplace dedicated to rural tourism in Azerbaijan. Hosts list village houses, cabins and mountain villas; guests discover and book authentic countryside stays. The platform combines a full booking flow with a lead-generation hybrid model so hosts always get discovered, even outside the booking window.',
        features: [
          'Host onboarding & property listings',
          'Guest search by region, dates, and amenities',
          'Booking + lead generation hybrid model',
          'Reviews, messaging and host dashboard',
        ],
        tags: ['Marketplace', 'Travel', 'Booking'],
        stats: [
          { value: '200+', label: 'homes listed' },
          { value: '60+', label: 'regions covered' },
        ],
      },
      'meta-sushi': {
        name: 'Meta Sushi',
        category: 'Restaurant automation',
        shortDescription:
          'Smart restaurant management with AI ordering, reservation automation, and customer flows.',
        description:
          'Built a smart restaurant management and ordering system including AI-powered order handling, reservation automation, and customer interaction flows that reduce manual operations and lift average ticket size.',
        features: [
          'Online reservation system',
          'Order automation',
          'AI chatbot for customer support',
          'Sales tracking dashboard',
        ],
        tags: ['Hospitality', 'AI Agent', 'Analytics'],
      },
      fintechauto: {
        name: 'Fintechauto',
        category: 'Auto leasing platform',
        shortDescription:
          'Auto leasing platform with streamlined application flow, payment management, and vehicle catalog.',
        description:
          'A modern web application for the fintech & automotive sector — streamlined application flow, payment management and a rich vehicle catalog, all wired into a back office that the operations team actually loves to use.',
        features: [
          'Lease application workflow',
          'Payment & contract management',
          'Vehicle catalog with filters',
          'Operator back-office',
        ],
        tags: ['Fintech', 'Web App', 'Back-office'],
      },
      'go-sushi': {
        name: 'Go Sushi',
        category: 'Restaurant ordering',
        shortDescription:
          'Restaurant ordering and delivery web app with responsive design and seamless ordering UX.',
        description:
          'Restaurant ordering and delivery web application. Built with responsive design, menu management, and a seamless ordering experience that keeps cart abandonment under control.',
        features: [
          'Menu management',
          'Mobile-first checkout',
          'Order tracking',
          'CMS for staff',
        ],
        tags: ['F&B', 'Web', 'Delivery'],
      },
      maliyye: {
        name: 'Maliyyə Hesablayıcı',
        category: 'Financial calculator',
        shortDescription:
          'Financial calculator for the Azerbaijani market — mortgage and consumer loans with real-time results.',
        description:
          'A financial calculator platform for the Azerbaijani market, enabling users to calculate mortgage and consumer loans with real-time results. Interactive sliders, multi-language support, and clear breakdowns of monthly payments, total interest and repayment schedules — built to improve user decision-making.',
        features: [
          'Mortgage & consumer loan calc',
          'Interactive sliders',
          'Multi-language support',
          'Detailed amortization schedule',
        ],
        tags: ['Fintech', 'Tools', 'i18n'],
      },
      reservation: {
        name: 'Reservation Automation',
        category: 'Hotel automation',
        shortDescription:
          'Automated hotel reservation system streamlining bookings and guest communication.',
        description:
          'An automated hotel reservation system that streamlines room booking, availability management, and guest communication. The platform centralizes reservations, reduces manual operations, and improves response time through automated workflows and real-time updates.',
        features: [
          'Centralized booking',
          'Availability sync',
          'Guest comms automation',
          'Real-time updates',
        ],
        tags: ['Hospitality', 'Automation', 'Workflow'],
      },
      'ai-call-center': {
        name: 'AI Call Center Agent',
        category: 'AI voice agent',
        shortDescription:
          'AI-powered call center agent automating inbound and outbound customer calls.',
        description:
          'An AI-powered call center agent designed to automate inbound and outbound customer calls, handle common requests, and route complex cases to human operators. Improves response times, reduces operational costs, and ensures consistent customer support through natural language understanding and automated workflows.',
        features: [
          'Inbound & outbound calls',
          'Natural language understanding',
          'Smart routing to humans',
          'CRM logging & analytics',
        ],
        tags: ['AI Agent', 'Voice', 'Support'],
      },
      'sales-ai': {
        name: 'Daily Sales AI Analytics',
        category: 'AI analytics',
        shortDescription:
          'AI-powered daily sales analysis tracking performance and detecting anomalies in real time.',
        description:
          'An AI-powered system for daily sales analysis that tracks performance, detects trends, and highlights anomalies in real time. Helps businesses make data-driven decisions through clear insights, forecasts, and automated reports.',
        features: [
          'Real-time anomaly detection',
          'Trend & forecast modeling',
          'Automated daily reports',
          'Slack & email digests',
        ],
        tags: ['Analytics', 'AI', 'Reporting'],
      },
    },
  },
  services: {
    eyebrow: 'What we do',
    titleStart: 'Every part of your business,',
    titleAccent: 'working together.',
    desc:
      'We design AI systems and modern software that compress operations, accelerate growth and remove the busywork from your team.',
    list: [
      {
        title: 'AI Workflow Automation',
        description:
          'Stop doing what software should do. We design and operate end-to-end AI workflows that eliminate repetitive ops and ship results 24/7.',
        tags: ['n8n', 'Make', 'Zapier', 'APIs'],
      },
      {
        title: 'AI Chatbots & Agents',
        description:
          'Custom GPT-class agents and chatbots — for support, sales, internal ops — fully integrated with your tools and tone of voice.',
        tags: ['LLM', 'RAG', 'Voice', 'Slack'],
      },
      {
        title: 'AI Analytics Systems',
        description:
          'Turn raw data into decisions. We ship dashboards, anomaly detection and forecasting models tailored to your KPIs.',
        tags: ['Analytics', 'Forecast', 'BI'],
      },
      {
        title: 'Web & System Development',
        description:
          'Production-grade web apps, internal tools and platforms — built on modern stacks, designed for scale and speed.',
        tags: ['Next.js', 'TypeScript', 'Cloud'],
      },
      {
        title: 'Branding & Content',
        description:
          'Identity, brand systems and AI-augmented content production — from launch campaigns to evergreen marketing assets.',
        tags: ['Brand', 'Design', 'Content'],
      },
      {
        title: 'AI Strategy & Audits',
        description:
          'A clear, no-fluff roadmap for where AI can move your numbers — what to automate, what to ignore, what to build first.',
        tags: ['Roadmap', 'Audit', 'ROI'],
      },
    ],
  },
  process: {
    eyebrow: 'How it works',
    titleStart: 'From workflow audit to',
    titleAccent: 'live AI system',
    titleEnd: 'in five focused steps.',
    steps: [
      {
        num: '01',
        title: 'Discovery',
        desc:
          'We dig into your operations to map workflows, surface bottlenecks, and identify the highest-leverage AI opportunities.',
      },
      {
        num: '02',
        title: 'Strategy',
        desc:
          'A clear, opinionated roadmap: what to automate first, expected ROI, the right tools, and the smallest path to value.',
      },
      {
        num: '03',
        title: 'Development',
        desc:
          'We build production-grade AI systems and interfaces — not prototypes. Modular, observable, easy to extend.',
      },
      {
        num: '04',
        title: 'Integration',
        desc:
          'We plug into your stack — CRM, billing, comms, data — and roll out with hand-holding for your team.',
      },
      {
        num: '05',
        title: 'Optimization',
        desc:
          'Monitoring, evaluation and continuous tuning. Your AI stack gets smarter and cheaper every month.',
      },
    ],
  },
  stats: [
    { label: 'Projects delivered', helper: 'across 6 industries' },
    { label: 'Active clients', helper: 'in 4 countries' },
    { label: 'Client satisfaction', helper: 'average rating 4.9 / 5' },
    { label: 'Average ROI', helper: 'in the first 6 months' },
  ],
  about: {
    eyebrow: 'About Narix',
    titleStart: 'We’re a small team building the',
    titleAccent: 'operating system for AI-native businesses.',
    desc:
      'Engineers, designers, and AI specialists who care about shipping. We bring strategy, design and serious code under one roof — and stay with you after launch.',
    pillars: [
      {
        label: 'Mission',
        title: 'Make AI useful, not theatrical.',
        desc:
          'We build AI systems that move real numbers — revenue, response time, ops cost — not flashy demos that never reach production.',
      },
      {
        label: 'Vision',
        title: 'Every business runs on quiet automation.',
        desc:
          'In 5 years the operations of every serious company will be wrapped in AI. We help our partners get there now, calmly and confidently.',
      },
      {
        label: 'Why Narix',
        title: 'Engineers + designers + AI nerds.',
        desc:
          'A small senior team that owns the work end-to-end. No sales handoff, no offshore mystery — just builders who care.',
      },
    ],
    ctaServices: 'Our services',
    ctaWork: 'Work with us',
  },
  testimonials: {
    eyebrow: 'Testimonials',
    titleStart: 'Trusted by founders who care about',
    titleAccent: 'shipping results',
    titleEnd: '.',
    list: [
      {
        text:
          'Narix shipped an AI workflow that replaced 3 full-time roles in our ops team. Six months in, ROI is north of 4×. Honestly the easiest agency we’ve ever worked with.',
        author: 'Cəmilə Həsənova',
        role: 'Head of Operations',
        company: 'Fintech Startup',
      },
      {
        text:
          'Their AI chatbot handles 78% of inbound support automatically — and customers actually like talking to it. The setup was done in two weeks.',
        author: 'Kamran Əliyev',
        role: 'E-commerce Director',
        company: 'Retail Group',
      },
      {
        text:
          'We came in with vague ideas about “doing something with AI”. They left us with a roadmap and a working system. Real engineers. Real strategy.',
        author: 'Elçin Mehdiyev',
        role: 'Founder',
        company: 'B2B SaaS',
      },
    ],
  },
  cta: {
    eyebrow: 'Ready when you are',
    titleStart: 'Let AI work for you —',
    titleAccent: 'not the other way around.',
    desc:
      'Tell us what you’re trying to fix, scale or replace. We’ll come back with a clear plan, a price and the people who’ll actually build it.',
    book: 'Book a Call',
    start: 'Start a Project',
    metaResponse: 'Average response < 6h',
    metaCall: 'Free 30-min strategy call',
    metaProposal: 'No-pressure proposal',
  },
  contact: {
    eyebrow: 'Get in touch',
    titleStart: 'Let’s build something',
    titleAccent: 'people actually use.',
    desc:
      'Tell us about your project. We respond within 24 hours — usually much faster — with concrete next steps, not generic sales decks.',
    channels: {
      email: 'Email',
      whatsapp: 'WhatsApp',
      location: 'Location',
    },
    locationValue: 'Baku, Azerbaijan',
    form: {
      name: 'Your name',
      namePh: 'Jane Doe',
      email: 'Work email',
      emailPh: 'jane@company.com',
      company: 'Company',
      companyPh: 'Your company',
      message: 'Project brief',
      messagePh: 'What are you trying to build, automate or fix?',
      submit: 'Send Message',
      submitting: 'Sending…',
      sent: 'Sent! We’ll be in touch',
      note: 'We typically reply in under 6 hours.',
    },
  },
  footer: {
    tagline:
      'Narix builds AI systems and modern software that quietly run the operations of fast-moving teams.',
    columns: {
      services: 'Services',
      company: 'Company',
      contact: 'Contact',
    },
    serviceLinks: [
      'AI Workflow Automation',
      'AI Chatbots & Agents',
      'AI Analytics',
      'Web Development',
      'Branding & Content',
    ],
    rights: 'All rights reserved.',
    legal: { privacy: 'Privacy', terms: 'Terms' },
  },
  pages: {
    about: {
      eyebrow: 'About us',
      title: 'Builders for the AI-native era.',
      desc:
        'A small senior team of engineers, designers and AI nerds. We design, build and operate AI systems for fast-moving teams — and we own the work end-to-end.',
    },
    services: {
      eyebrow: 'Services',
      title: 'What we design, build and operate.',
      desc:
        "From end-to-end automation to AI agents, analytics and modern web apps — we cover the whole stack so you don't have to wrangle five vendors.",
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk about what to automate first.',
      desc:
        'Email, WhatsApp or the form below — pick whichever is easiest. We respond within 24 hours with concrete next steps.',
    },
  },
  notFound: {
    title: 'This page took a wrong turn.',
    desc:
      'The page you’re looking for doesn’t exist or has been moved. Let’s get you back on track.',
    home: 'Back to home',
    contact: 'Contact us',
  },
};

const az: Dictionary = {
  meta: {
    description:
      'Narix sürətli komandalar üçün AI sistemləri qurur və idarə edir — iş axınlarının avtomatlaşdırılması, AI agentlər, analitika və müasir veb platformalar.',
  },
  nav: {
    home: 'Ana səhifə',
    about: 'Haqqımızda',
    services: 'Xidmətlər',
    contact: 'Əlaqə',
    cta: 'Görüş təyin et',
    languageLabel: 'Dil',
    menuOpen: 'Menyunu aç',
    menuClose: 'Menyunu bağla',
  },
  common: {
    readCase: 'Layihəyə bax',
    visitProject: 'Layihəni aç',
    learnMore: 'Daha çox',
    close: 'Bağla',
  },
  hero: {
    eyebrow: 'AI biznes həlləri',
    titleStart: 'Biznesinizi idarə edən',
    titleAccent: 'AI sistemləri',
    titleEnd: 'qururuq',
    desc:
      'Narix iş axınlarınızı avtomatlaşdıran AI agentlər, analitika sistemləri və müasir proqram həlləri ilə əl işini davamlı böyüməyə çevirir.',
    ctaPrimary: 'Pulsuz konsultasiya',
    ctaSecondary: 'Layihələrə bax',
    trustStrong: '20+ komanda',
    trustRest: 'Narix ilə avtomatlaşdırıldı',
    trustStars: '★★★★★ 4.9 / 5 məmnuniyyət',
    scroll: 'Aşağı',
  },
  heroVisual: {
    agentName: 'Narix Agent',
    online: 'onlayn',
    statusLive: '● aktiv',
    botName: 'narix.ai',
    userMessage:
      'Bu həftənin satış hesabatını hazırla və komandaya e-poçt göndər.',
    botMessage:
      'Shopify-dan 1,284 sifariş çəkildi, 14 KPI hesablandı və xülasə yazıldı. İndi 6 alıcıya göndərilir...',
    steps: { analyze: 'Təhlil', summarize: 'Xülasə', dispatch: 'Göndər' },
    inputPlaceholder: 'Narix-ə sual ver…',
    metricLabel: 'Aktiv avtomatlaşdırmalar',
    metricDelta: '↑ 24%',
    flowTitle: 'İş axını · #SatışOps',
    flowNodes: { trigger: 'Tetik', ai: 'AI', crm: 'CRM' },
  },
  partners: {
    title: 'Ən güclü AI platformaları üzərində',
    subtitle:
      'Dünyanın aparıcı məhsul komandalarının istifadə etdiyi platformalar üzərində qururuq.',
  },
  delivered: {
    eyebrow: 'Layihələr',
    title: 'Real layihələr. Real nəticələr.',
    desc:
      'E-ticarət, fintex, qonaqpərvərlik və əməliyyat sahələrində müştərilər üçün təhvil verdiyimiz seçilmiş məhsul və AI sistemləri.',
    highlights: 'Əsas xüsusiyyətlər',
    keyNumbers: 'Əsas rəqəmlər',
    projects: {
      chamanly: {
        name: 'Chamanly.az',
        category: 'Kənd turizmi platforması',
        shortDescription:
          'Azərbaycan üzrə kənd və təbiət istirahətləri axtaran qonaqları ev sahibləri ilə birləşdirən platforma.',
        description:
          'Chamanly.az – Azərbaycanda kənd turizminə həsr olunmuş Airbnb tipli platformadır. Ev sahibləri kənd evlərini, daxmaları və dağ villalarını yerləşdirir; qonaqlar isə əsl kənd istirahətini kəşf edib rezerv edir. Platforma tam rezervasiya axını ilə lid generasiya modelini birləşdirir – beləliklə ev sahibləri rezervasiya pəncərəsindən kənarda da görünməyi davam edir.',
        features: [
          'Ev sahibi qeydiyyatı və obyekt elanları',
          'Region, tarix və imkanlara görə axtarış',
          'Rezervasiya + lid generasiya hibrid modeli',
          'Rəylər, mesajlaşma və ev sahibi paneli',
        ],
        tags: ['Marketplace', 'Turizm', 'Rezervasiya'],
        stats: [
          { value: '200+', label: 'ev / obyekt' },
          { value: '60+', label: 'region əhatə' },
        ],
      },
      'meta-sushi': {
        name: 'Meta Sushi',
        category: 'Restoran avtomatlaşdırması',
        shortDescription:
          'AI sifariş, rezervasiya avtomatlaşdırması və müştəri axınları ilə smart restoran idarəetməsi.',
        description:
          'AI əsaslı sifariş emalı, rezervasiya avtomatlaşdırması və müştəri ünsiyyət axınları daxil olmaqla smart restoran idarəetmə və sifariş sistemi quruldu. Əl əməliyyatlarını azaldır və orta çek məbləğini artırır.',
        features: [
          'Onlayn rezervasiya sistemi',
          'Sifariş avtomatlaşdırması',
          'Müştəri dəstəyi üçün AI çatbot',
          'Satış izləmə paneli',
        ],
        tags: ['Qonaqpərvərlik', 'AI Agent', 'Analitika'],
      },
      fintechauto: {
        name: 'Fintechauto',
        category: 'Avto lizinq platforması',
        shortDescription:
          'Sadələşdirilmiş müraciət axını, ödəniş idarəetməsi və avtomobil kataloqu olan avto lizinq platforması.',
        description:
          'Fintex və avtomobil sektoru üçün müasir veb tətbiq — sadələşdirilmiş müraciət axını, ödəniş idarəetməsi və geniş avtomobil kataloqu, hamısı əməliyyat komandasının həqiqətən sevdiyi back-office sisteminə bağlıdır.',
        features: [
          'Lizinq müraciət axını',
          'Ödəniş və müqavilə idarəetməsi',
          'Filterlərlə avtomobil kataloqu',
          'Operator back-office',
        ],
        tags: ['Fintex', 'Veb Tətbiq', 'Back-office'],
      },
      'go-sushi': {
        name: 'Go Sushi',
        category: 'Restoran sifariş sistemi',
        shortDescription:
          'Adaptiv dizayn və sürətli sifariş təcrübəsi olan restoran sifariş və çatdırılma platforması.',
        description:
          'Restoran sifariş və çatdırılma veb tətbiqi. Adaptiv dizayn, menyu idarəetməsi və səbət tərk etmə nisbətini aşağı saxlayan sürətli sifariş təcrübəsi ilə qurulub.',
        features: [
          'Menyu idarəetməsi',
          'Mobil-fokuslu ödəniş',
          'Sifariş izləmə',
          'Personal üçün CMS',
        ],
        tags: ['Yemək & İçki', 'Veb', 'Çatdırılma'],
      },
      maliyye: {
        name: 'Maliyyə Hesablayıcı',
        category: 'Maliyyə kalkulyatoru',
        shortDescription:
          'Azərbaycan bazarı üçün maliyyə kalkulyatoru — ipoteka və istehlak kreditləri real vaxtda hesablanır.',
        description:
          'Azərbaycan bazarı üçün maliyyə kalkulyatoru platforması. İstifadəçilərə ipoteka və istehlak kreditlərini real vaxtda hesablamaq imkanı verir. İnteraktiv slayderlər, çoxdilli dəstək və aylıq ödəniş, ümumi faiz və qaytarma cədvəlinin aydın bölgüsü — istifadəçi qərarlarını yaxşılaşdırmaq üçün qurulub.',
        features: [
          'İpoteka və istehlak krediti hesablama',
          'İnteraktiv slayderlər',
          'Çoxdilli dəstək',
          'Detallı amortizasiya cədvəli',
        ],
        tags: ['Fintex', 'Alətlər', 'Çoxdilli'],
      },
      reservation: {
        name: 'Rezervasiya Avtomatlaşdırması',
        category: 'Otel avtomatlaşdırması',
        shortDescription:
          'Rezervasiya və qonaq ünsiyyətini sadələşdirən avtomatlaşdırılmış otel sistemi.',
        description:
          'Otel rezervasiya, mövcudluq idarəetməsi və qonaq ünsiyyətini sadələşdirən avtomatlaşdırılmış sistem. Rezervasiyaları mərkəzləşdirir, əl işini azaldır və avtomatlaşdırılmış axınlar ilə cavab vaxtını yaxşılaşdırır.',
        features: [
          'Mərkəzləşdirilmiş rezervasiya',
          'Mövcudluq sinxronizasiyası',
          'Qonaq ünsiyyəti avtomatlaşdırması',
          'Real vaxt yeniləmələri',
        ],
        tags: ['Qonaqpərvərlik', 'Avtomatlaşdırma', 'İş Axını'],
      },
      'ai-call-center': {
        name: 'AI Çağrı Mərkəzi Agenti',
        category: 'AI səs agenti',
        shortDescription:
          'Daxil və çıxan müştəri zənglərini avtomatlaşdıran AI çağrı mərkəzi agenti.',
        description:
          'Daxil və çıxan müştəri zənglərini avtomatlaşdırmaq, ümumi sorğuları emal etmək və mürəkkəb halları operatora yönləndirmək üçün AI çağrı mərkəzi agenti. Cavab vaxtını qısaldır, əməliyyat xərclərini azaldır və təbii dil anlayışı ilə daimi müştəri dəstəyi təmin edir.',
        features: [
          'Daxil və çıxan zənglər',
          'Təbii dil anlayışı',
          'Operatora ağıllı yönləndirmə',
          'CRM qeydi və analitika',
        ],
        tags: ['AI Agent', 'Səs', 'Dəstək'],
      },
      'sales-ai': {
        name: 'Gündəlik Satış AI Analitikası',
        category: 'AI analitika',
        shortDescription:
          'Performansı izləyən və real vaxtda anomaliyaları aşkarlayan AI satış analitikası.',
        description:
          'Performansı izləyən, trendləri aşkarlayan və real vaxtda anomaliyaları vurğulayan AI əsaslı gündəlik satış təhlili sistemi. Aydın insaytlar, proqnozlar və avtomatlaşdırılmış hesabatlar ilə biznesə veri əsaslı qərarlar verməyə kömək edir.',
        features: [
          'Real vaxt anomaliya aşkarlanması',
          'Trend və proqnoz modeli',
          'Avtomatik gündəlik hesabatlar',
          'Slack və e-poçt xülasələri',
        ],
        tags: ['Analitika', 'AI', 'Hesabatlıq'],
      },
    },
  },
  services: {
    eyebrow: 'Nə edirik',
    titleStart: 'Biznesinizin hər hissəsi',
    titleAccent: 'birgə işləyir.',
    desc:
      'Əməliyyatları sıxlaşdıran, böyüməni sürətləndirən və komandanızı təkrar işdən azad edən AI sistemləri və müasir proqramlar dizayn edirik.',
    list: [
      {
        title: 'AI iş axını avtomatlaşdırması',
        description:
          'Proqramın etməli olduğu işləri etməyi dayandırın. Təkrarlanan əməliyyatları aradan qaldıran və 24/7 nəticə verən AI iş axınları qururuq.',
        tags: ['n8n', 'Make', 'Zapier', 'API'],
      },
      {
        title: 'AI çatbotlar və agentlər',
        description:
          'Dəstək, satış və daxili əməliyyatlar üçün GPT səviyyəli xüsusi agentlər və çatbotlar — sizin alət və ton-stilinizə tam inteqrasiya olunmuş.',
        tags: ['LLM', 'RAG', 'Səs', 'Slack'],
      },
      {
        title: 'AI analitika sistemləri',
        description:
          'Xam verini qərara çevirin. KPI-larınıza uyğun panellər, anomaliya aşkarlama və proqnoz modelləri qururuq.',
        tags: ['Analitika', 'Proqnoz', 'BI'],
      },
      {
        title: 'Veb və sistem inkişafı',
        description:
          'Modern stek üzərində qurulmuş istehsalat səviyyəli veb tətbiqlər, daxili alətlər və platformalar — miqyas və sürət üçün dizayn edilib.',
        tags: ['Next.js', 'TypeScript', 'Bulud'],
      },
      {
        title: 'Brendinq və kontent',
        description:
          'Kimlik, brend sistemləri və AI dəstəkli kontent istehsalı — startdan davamlı marketinq aktivlərinə qədər.',
        tags: ['Brend', 'Dizayn', 'Kontent'],
      },
      {
        title: 'AI strategiya və auditlər',
        description:
          'AI-ın rəqəmlərinizi hara hərəkət etdirə biləcəyi haqqında aydın yol xəritəsi — nəyi avtomatlaşdırmaq, nəyi atlamaq, ilk olaraq nə qurmaq.',
        tags: ['Strategiya', 'Audit', 'ROI'],
      },
    ],
  },
  process: {
    eyebrow: 'Necə işləyir',
    titleStart: 'İş axını auditindən',
    titleAccent: 'aktiv AI sistemə',
    titleEnd: 'qədər beş fokuslu addım.',
    steps: [
      {
        num: '01',
        title: 'Kəşf',
        desc:
          'İş axınlarınızı, darboğazları və ən təsirli AI imkanlarını üzə çıxarmaq üçün əməliyyatlarınızı dərindən araşdırırıq.',
      },
      {
        num: '02',
        title: 'Strategiya',
        desc:
          'Aydın və konkret yol xəritəsi: nəyi əvvəl avtomatlaşdırmaq, gözlənilən ROI, doğru alətlər və dəyərə ən qısa yol.',
      },
      {
        num: '03',
        title: 'İnkişaf',
        desc:
          'Prototip yox, istehsalat səviyyəli AI sistemləri və interfeyslər qururuq. Modulyar, izlənilə bilən və genişlənməsi asan.',
      },
      {
        num: '04',
        title: 'İnteqrasiya',
        desc:
          'Stekiniz ilə birləşirik — CRM, faktura, ünsiyyət, veri — və komandanıza dəstək olaraq başlatırıq.',
      },
      {
        num: '05',
        title: 'Optimallaşdırma',
        desc:
          'Monitorinq, qiymətləndirmə və davamlı tənzimləmə. AI stekiniz hər ay daha ağıllı və daha sərfəli olur.',
      },
    ],
  },
  stats: [
    { label: 'Təhvil verilmiş layihə', helper: '6 sahədə' },
    { label: 'Aktiv müştəri', helper: '4 ölkədə' },
    { label: 'Müştəri məmnuniyyəti', helper: 'orta reytinq 4.9 / 5' },
    { label: 'Orta ROI', helper: 'ilk 6 ayda' },
  ],
  about: {
    eyebrow: 'Narix haqqında',
    titleStart: 'Biz – AI mərkəzli bizneslər üçün',
    titleAccent: 'əməliyyat sistemini quran kiçik komandayıq.',
    desc:
      'Mühəndislər, dizaynerlər və AI mütəxəssisləri – təhvil verməyə əhəmiyyət verən bir komanda. Strategiya, dizayn və ciddi kodu bir damı altında birləşdiririk — və start sonrası da yanınızdayıq.',
    pillars: [
      {
        label: 'Missiya',
        title: 'AI-ı faydalı edirik, şou üçün yox.',
        desc:
          'İstehsalata heç vaxt çatmayan demolar yox — gəlir, cavab vaxtı və əməliyyat xərci kimi real rəqəmləri hərəkətə gətirən AI sistemləri qururuq.',
      },
      {
        label: 'Vizyon',
        title: 'Hər biznes sakit avtomatlaşdırma üzərində qurulacaq.',
        desc:
          '5 il sonra hər ciddi şirkətin əməliyyatları AI ilə əhatə olunacaq. Tərəfdaşlarımıza bu nöqtəyə sakit və inamlı şəkildə çatmağa kömək edirik.',
      },
      {
        label: 'Niyə Narix',
        title: 'Mühəndislər + dizaynerlər + AI həvəskarları.',
        desc:
          'Layihəni baş-sona sahiblənən kiçik və təcrübəli komanda. Satış ötürməsi yox, sirli ofşor yox — sadəcə işinə bağlı qurucular.',
      },
    ],
    ctaServices: 'Xidmətlərimiz',
    ctaWork: 'Bizimlə işlə',
  },
  testimonials: {
    eyebrow: 'Rəylər',
    titleStart: 'Nəticə çatdırmağa əhəmiyyət verən',
    titleAccent: 'qurucuların etibarı',
    titleEnd: ' .',
    list: [
      {
        text:
          'Narix əməliyyat komandamızda 3 tam-vaxt rolu əvəz edən AI iş axını çatdırdı. Altı ay sonra ROI 4×-dan yuxarıdır. Açığı, indiyə qədər işlədiyimiz ən rahat agentlikdir.',
        author: 'Cəmilə Həsənova',
        role: 'Əməliyyatlar üzrə direktor',
        company: 'Fintex startap',
      },
      {
        text:
          'AI çatbotları daxil olan dəstəyin 78%-ni avtomatik idarə edir — və müştərilər onunla danışmağı sevir. Quraşdırma iki həftədə bitdi.',
        author: 'Kamran Əliyev',
        role: 'E-ticarət direktoru',
        company: 'Pərakəndə şirkət',
      },
      {
        text:
          '“AI ilə nəsə etmək” kimi qeyri-müəyyən fikirlərlə gəldik. Onlar bizə yol xəritəsi və işləyən sistem buraxdılar. Real mühəndislər. Real strategiya.',
        author: 'Elçin Mehdiyev',
        role: 'Təsisçi',
        company: 'B2B SaaS',
      },
    ],
  },
  cta: {
    eyebrow: 'Hazır olduqda',
    titleStart: 'Qoy AI sizin üçün işləsin —',
    titleAccent: 'tərsi yox.',
    desc:
      'Düzəltmək, miqyasını artırmaq və ya əvəz etmək istədiyiniz şeyi bizə deyin. Aydın plan, qiymət və layihəni real quracaq adamlarla qayıdırıq.',
    book: 'Görüş təyin et',
    start: 'Layihəyə başla',
    metaResponse: 'Orta cavab vaxtı < 6 saat',
    metaCall: '30 dəq pulsuz strategiya zəngi',
    metaProposal: 'Təzyiqsiz təklif',
  },
  contact: {
    eyebrow: 'Əlaqə',
    titleStart: 'İnsanların həqiqətən istifadə edəcəyi',
    titleAccent: 'bir şey quraq.',
    desc:
      'Layihəniz haqqında danışın. 24 saat ərzində — adətən daha tez — konkret addımlarla cavab veririk, ümumi satış təqdimatları ilə yox.',
    channels: {
      email: 'E-poçt',
      whatsapp: 'WhatsApp',
      location: 'Ünvan',
    },
    locationValue: 'Bakı, Azərbaycan',
    form: {
      name: 'Adınız',
      namePh: 'Adınızı yazın',
      email: 'İş e-poçtu',
      emailPh: 'siz@sirket.com',
      company: 'Şirkət',
      companyPh: 'Şirkətinizin adı',
      message: 'Layihə xülasəsi',
      messagePh: 'Nə qurmaq, avtomatlaşdırmaq və ya düzəltmək istəyirsiniz?',
      submit: 'Mesajı göndər',
      submitting: 'Göndərilir…',
      sent: 'Göndərildi! Tezliklə əlaqə saxlayacağıq',
      note: 'Adətən 6 saatdan az müddətdə cavab veririk.',
    },
  },
  footer: {
    tagline:
      'Narix sürətli komandaların əməliyyatlarını sakit şəkildə idarə edən AI sistemləri və müasir proqramlar qurur.',
    columns: {
      services: 'Xidmətlər',
      company: 'Şirkət',
      contact: 'Əlaqə',
    },
    serviceLinks: [
      'AI iş axını avtomatlaşdırması',
      'AI çatbotlar və agentlər',
      'AI analitika',
      'Veb inkişaf',
      'Brendinq və kontent',
    ],
    rights: 'Bütün hüquqlar qorunur.',
    legal: { privacy: 'Məxfilik', terms: 'Şərtlər' },
  },
  pages: {
    about: {
      eyebrow: 'Haqqımızda',
      title: 'AI mərkəzli dövr üçün qurucular.',
      desc:
        'Mühəndislər, dizaynerlər və AI həvəskarlarından ibarət kiçik təcrübəli komanda. Sürətli komandalar üçün AI sistemləri dizayn edir, qurur və idarə edirik — işin sahibliyini sona qədər daşıyırıq.',
    },
    services: {
      eyebrow: 'Xidmətlər',
      title: 'Dizayn etdiyimiz, qurduğumuz və idarə etdiyimiz işlər.',
      desc:
        'Tam əməliyyat avtomatlaşdırmasından AI agentlərə, analitikaya və müasir veb tətbiqlərə qədər — beş ayrı təchizatçı ilə işləməyəsiniz deyə bütün steki əhatə edirik.',
    },
    contact: {
      eyebrow: 'Əlaqə',
      title: 'Birinci nəyi avtomatlaşdırmaq haqqında danışaq.',
      desc:
        'E-poçt, WhatsApp və ya aşağıdakı forma — sizə daha rahat olanı seçin. 24 saat ərzində konkret addımlarla cavab veririk.',
    },
  },
  notFound: {
    title: 'Bu səhifə yanlış istiqamətə getdi.',
    desc:
      'Axtardığınız səhifə mövcud deyil və ya köçürülüb. Sizi yenidən yola qaytaraq.',
    home: 'Ana səhifəyə qayıt',
    contact: 'Bizimlə əlaqə',
  },
};

export const dictionaries: Record<Lang, Dictionary> = { en, az };
