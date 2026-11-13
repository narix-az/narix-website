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
    projects: string;
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
    live: string;
    newBadge: string;
    allProjects: string;
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
    ecosystemEyebrow: string;
    ecosystemTitle: string;
    ecosystemDesc: string;
    clientsEyebrow: string;
    clientsTitle: string;
    clientsDesc: string;
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
      whatsapp: string;
      sent: string;
      sentWhatsapp: string;
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
  };
  pages: {
    about: { eyebrow: string; title: string; desc: string };
    services: { eyebrow: string; title: string; desc: string };
    projects: { eyebrow: string; title: string; desc: string };
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
      'Narix builds websites, mobile and web apps, AI automation and DevOps infrastructure — one team from idea to a running product.',
  },
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    projects: 'Projects',
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
    live: 'Live',
    allProjects: 'All projects',
    newBadge: 'New',
  },
  hero: {
    eyebrow:
      'Product & engineering studio',
    titleStart:
      'We build',
    titleAccent:
      'apps, websites',
    titleEnd:
      'and AI systems',
    desc:
      'From the first idea to a product running in production: websites, mobile and web apps, AI automation and the DevOps infrastructure underneath them.',
    ctaPrimary: 'Get Free Consultation',
    ctaSecondary:
      'See our projects',
    trustStrong: '20+ teams',
    trustRest: 'automated with Narix',
    trustStars: '★★★★★ 4.9/5 satisfaction',
    scroll: 'Scroll',
  },
  heroVisual: {
    agentName: 'Narix Agent',
    online: 'online',
    statusLive: '● live',
    botName: 'narix.az',
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
    title: 'Built on technology you can rely on',
    subtitle: 'The AI models, automation platforms and cloud tools we work with every day.',
  },
  delivered: {
    eyebrow: 'Projects',
    title: 'Products we build and run.',
    desc:
      'The Narix ecosystem: our own products, live and used every day. What we learn running them goes into the work we do for clients.',
    highlights: 'Highlights',
    keyNumbers: 'Key numbers',
    ecosystemEyebrow: 'Narix ecosystem',
    ecosystemTitle: 'Our own products',
    ecosystemDesc: 'Products and brands we design, build and operate ourselves.',
    clientsEyebrow: 'Client work',
    clientsTitle: 'Built for clients',
    clientsDesc: 'Platforms, automation and AI systems delivered for businesses.',
    projects: {
      academy: {
        name: 'Narix Academy',
        category: 'Learning platform',
        shortDescription:
          'An interactive platform for learning manual QA and test automation through short lessons and real tasks.',
        description:
          'Narix Academy is our learning platform for software testing. Students move from manual QA to test automation with Playwright in short lessons, each followed by a practical task, and pick up where they left off. Teachers add students to the platform and follow their progress.',
        features: [
          'Courses from manual QA to Playwright automation',
          'Short lessons with hands-on tasks',
          'Progress saved per student',
          'Students are enrolled by their teacher',
        ],
        tags: ['Education', 'QA', 'Web app'],
      },
      aimonitor: {
        name: 'AI Monitor',
        category: 'Infrastructure monitoring',
        shortDescription:
          'Self-hosted monitoring for servers, GPUs, containers and security, with a built-in AI assistant.',
        description:
          'AI Monitor shows what your infrastructure is doing in real time from a single self-hosted dashboard: servers, GPU workloads, containers and security. A built-in AI assistant helps read the metrics. It runs on your own machines, with no cloud dependency and no vendor lock-in.',
        features: [
          'Servers, GPU workloads and containers in one dashboard',
          'Real-time metrics',
          'Built-in AI assistant',
          'Self-hosted: no cloud, no vendor lock-in',
        ],
        tags: ['DevOps', 'Monitoring', 'AI'],
      },
      narcode: {
        name: 'nar.code',
        category: 'QA education brand',
        shortDescription:
          'An education brand for software QA and test engineering.',
        description:
          'nar.code is our education brand for software quality assurance and test engineering. It brings together teaching material and practice for people starting or growing a career in testing.',
        features: [
          'Software QA and test engineering',
          'Teaching built on real testing practice',
          'Works together with Narix Academy',
        ],
        tags: ['Education', 'QA', 'Testing'],
      },
      danisir: {
        name: 'danisir.ai',
        category: 'AI & technology content',
        shortDescription:
          'Content about artificial intelligence and technology, in clear language.',
        description:
          'danisir.ai is our content brand about artificial intelligence and technology: what is new, how it works and how it can be used, explained in clear language.',
        features: [
          'Artificial intelligence explained simply',
          'Technology news and how-tos',
          'Content in Azerbaijani',
        ],
        tags: ['Content', 'AI', 'Media'],
      },
      narmelody: {
        name: 'narmelody',
        category: 'Personalised AI music',
        shortDescription:
          'Songs created with AI and personalised for a person or an occasion.',
        description:
          'narmelody creates personalised music with the help of AI: a song made for one person, one story or one occasion.',
        features: [
          'Music generated with AI',
          'Personalised to the person and the occasion',
          'A gift that is made once, for one listener',
        ],
        tags: ['Music', 'AI', 'Personalisation'],
      },
      inji: {
        name: 'inji',
        category: 'Productivity app',
        shortDescription:
          'A gamified productivity app: kanban boards, habits, Pomodoro and a jar that fills with a pearl for every finished task.',
        description:
          'inji is a productivity app built around one simple reward: every task you complete drops a pearl ("inci") into your jar. Work and personal boards, daily and weekly goals, a built-in Pomodoro timer, habit tracking, statistics, a calendar, planning and notes live in one clean, bilingual (AZ/EN) workspace — with streaks that keep you coming back.',
        features: [
          'Kanban boards for work & personal',
          'Pearl jar rewards + daily / weekly goals',
          'Built-in Pomodoro focus timer',
          'Habits, statistics, calendar & notes',
          'Streaks and AZ / EN interface',
        ],
        tags: ['Productivity', 'Gamification', 'Web app'],
      },
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
      bircv: {
        name: 'BirCV',
        category: 'AI CV builder',
        shortDescription:
          'AI-powered platform for creating professional CVs online.',
        description:
          'BirCV is an online platform that lets users build a professional CV with the help of AI. By using the platform, users agree to its terms of use.',
        features: [
          'AI-assisted CV generation',
          'Professional templates',
          'Fast online builder',
        ],
        tags: ['AI', 'Career', 'Tools'],
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
    titleStart: 'Everything a digital product needs,',
    titleAccent: 'from one team.',
    desc:
      'We design it, build it, automate it and keep it running. One team for the whole path, so nothing gets lost between suppliers.',
    list: [
      {
        title: 'AI automation & agents',
        description:
          'Workflows that take repetitive work off your team, chatbots and voice agents that answer customers, and analytics that turn raw data into decisions.',
        tags: ['n8n', 'LLM', 'RAG', 'Analytics'],
      },
      {
        title: 'Mobile & web apps',
        description:
          'Applications for iOS, Android and the browser: marketplaces, SaaS products, internal tools. Built to be fast and pleasant to use.',
        tags: ['iOS', 'Android', 'React', 'PWA'],
      },
      {
        title: 'DevOps & cloud infrastructure',
        description:
          'Servers, CI/CD, containers, monitoring and security set up properly, so releases are routine and downtime is rare.',
        tags: ['CI/CD', 'Docker', 'Cloud', 'Monitoring'],
      },
      {
        title: 'Websites & platforms',
        description:
          'Company sites, landing pages, online shops and multi-language platforms: quick to load, easy to find on Google and simple to manage.',
        tags: ['Next.js', 'SEO', 'E-commerce'],
      },
      {
        title: 'Product design & branding',
        description:
          'Interfaces people understand at first glance, and the logo, colours and voice that make a product recognisable.',
        tags: ['UX/UI', 'Brand', 'Design system'],
      },
      {
        title: 'Testing & quality assurance',
        description:
          'Manual and automated testing that finds problems before your users do: functional, API, performance and release checks.',
        tags: ['Manual QA', 'Playwright', 'API', 'Performance'],
      },
    ],
  },
  process: {
    eyebrow: 'How it works',
    titleStart: 'From an idea to',
    titleAccent: 'a product in production',
    titleEnd: 'in five clear steps.',
    steps: [
      {
        num: '01',
        title: 'Discover',
        desc: 'We listen, look at how things work today and agree on what the product has to achieve.',
      },
      {
        num: '02',
        title: 'Plan',
        desc: 'A clear scope, timeline and price: what gets built first, with which technology, and why.',
      },
      {
        num: '03',
        title: 'Design & build',
        desc: 'Design and development in short cycles. You see working results every week, not at the end.',
      },
      {
        num: '04',
        title: 'Test & launch',
        desc: 'We test on real devices, set up the infrastructure and release without surprises.',
      },
      {
        num: '05',
        title: 'Support & grow',
        desc: 'Monitoring, fixes and new features after launch. The product keeps getting better.',
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
    titleStart: 'A small team that builds',
    titleAccent: 'products people actually use.',
    desc:
      'Engineers, designers and AI specialists under one roof. We run our own products, so we know what it takes to launch one and to keep it alive afterwards.',
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
    eyebrow: 'When you are ready',
    titleStart: "Let's build your next product —",
    titleAccent: 'together.',
    desc:
      'Tell us what you want to build, automate or fix. We come back with a clear plan, a price and the people who will actually do the work.',
    book: 'Book a call',
    start: 'Start a project',
    metaResponse: 'Reply within 24 hours',
    metaCall: 'Free 30-minute first call',
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
      whatsapp: 'Send via WhatsApp',
      sent: 'Your email app is opening with the message…',
      sentWhatsapp: 'WhatsApp is opening with the message…',
      note: 'We typically reply in under 6 hours.',
    },
  },
  footer: {
    tagline:
      'Narix builds websites, apps, AI automation and the infrastructure that keeps them running.',
    columns: {
      services: 'Services',
      company: 'Company',
      contact: 'Contact',
    },
    serviceLinks: [
      'Websites & platforms',
      'Mobile & web apps',
      'AI automation & agents',
      'DevOps & cloud',
      'Testing & QA',
    ],
    rights: 'All rights reserved.',
  },
  pages: {
    about: {
      eyebrow: 'About',
      title: 'Builders who run their own products.',
      desc:
        'A small, experienced team of engineers, designers and AI specialists in Baku. We design, build and operate digital products, our own and our clients’.',
    },
    services: {
      eyebrow: 'Services',
      title: 'What we design, build and keep running.',
      desc:
        'Websites, apps, AI automation, infrastructure, design and testing. The whole path of a digital product, covered by one team.',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'The Narix ecosystem and client work.',
      desc:
        'Our own products, live and used every day, and the platforms and automation we have built for clients.',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk about what you want to build.",
      desc:
        'Email, WhatsApp or the form below, whichever suits you. We reply within 24 hours with concrete next steps.',
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
      'Narix veb saytlar, mobil və veb tətbiqlər, AI avtomatlaşdırma və DevOps infrastrukturu qurur — ideyadan işlək məhsula qədər bir komanda.',
  },
  nav: {
    home: 'Ana səhifə',
    about: 'Haqqımızda',
    services: 'Xidmətlər',
    projects: 'Layihələr',
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
    live: 'Canlı',
    allProjects: 'Bütün layihələr',
    newBadge: 'Yeni',
  },
  hero: {
    eyebrow:
      'Məhsul və mühəndislik studiyası',
    titleStart:
      'Sizin üçün',
    titleAccent:
      'tətbiqlər, saytlar',
    titleEnd:
      'və AI sistemləri qururuq',
    desc:
      'İlk ideyadan canlı işləyən məhsula qədər: veb saytlar, mobil və veb tətbiqlər, AI avtomatlaşdırma və bunların altındakı DevOps infrastrukturu.',
    ctaPrimary: 'Pulsuz konsultasiya',
    ctaSecondary:
      'Layihələrə bax',
    trustStrong: '20+ komanda',
    trustRest: 'Narix ilə avtomatlaşdırıldı',
    trustStars: '★★★★★ 4.9 / 5 məmnuniyyət',
    scroll: 'Aşağı',
  },
  heroVisual: {
    agentName: 'Narix Agent',
    online: 'onlayn',
    statusLive: '● aktiv',
    botName: 'narix.az',
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
    title: 'Etibarlı texnologiyalar üzərində qururuq',
    subtitle: 'Hər gün işlətdiyimiz AI modelləri, avtomatlaşdırma platformaları və bulud alətləri.',
  },
  delivered: {
    eyebrow: 'Layihələr',
    title: 'Qurduğumuz və idarə etdiyimiz məhsullar.',
    desc:
      'Narix ekosistemi: öz məhsullarımız, canlıdır və hər gün istifadə olunur. Onları idarə edərkən öyrəndiklərimizi müştəri layihələrinə gətiririk.',
    highlights: 'Əsas xüsusiyyətlər',
    keyNumbers: 'Əsas rəqəmlər',
    ecosystemEyebrow: 'Narix ekosistemi',
    ecosystemTitle: 'Öz məhsullarımız',
    ecosystemDesc: 'Özümüz dizayn etdiyimiz, qurduğumuz və idarə etdiyimiz məhsul və brendlər.',
    clientsEyebrow: 'Müştəri layihələri',
    clientsTitle: 'Müştərilər üçün qurduqlarımız',
    clientsDesc: 'Bizneslər üçün təhvil verdiyimiz platformalar, avtomatlaşdırma və AI sistemləri.',
    projects: {
      academy: {
        name: 'Narix Academy',
        category: 'Tədris platforması',
        shortDescription:
          'Manual QA və test avtomatlaşdırmasını qısa dərslər və real tapşırıqlarla öyrədən interaktiv platforma.',
        description:
          'Narix Academy proqram təminatının testi üzrə tədris platformamızdır. Tələbələr manual QA-dan Playwright ilə avtomatlaşdırmaya qədər qısa dərslərlə irəliləyir, hər dərsdən sonra praktiki tapşırıq yerinə yetirir və qaldığı yerdən davam edir. Tələbələri platformaya müəllim əlavə edir və irəliləyişi izləyir.',
        features: [
          'Manual QA-dan Playwright avtomatlaşdırmasına qədər kurslar',
          'Qısa dərslər və praktiki tapşırıqlar',
          'Hər tələbənin irəliləyişi yadda qalır',
          'Tələbələri platformaya müəllim əlavə edir',
        ],
        tags: ['Təhsil', 'QA', 'Veb tətbiq'],
      },
      aimonitor: {
        name: 'AI Monitor',
        category: 'İnfrastruktur monitorinqi',
        shortDescription:
          'Serverlər, GPU, konteynerlər və təhlükəsizlik üçün öz serverinizdə işləyən monitorinq, daxili AI köməkçi ilə.',
        description:
          'AI Monitor infrastrukturunuzun nə etdiyini real vaxtda, öz serverinizdə işləyən tək paneldən göstərir: serverlər, GPU yükləri, konteynerlər və təhlükəsizlik. Daxili AI köməkçi göstəriciləri oxumağa kömək edir. Öz maşınlarınızda işləyir: buluddan asılılıq və təchizatçıya bağlılıq yoxdur.',
        features: [
          'Serverlər, GPU yükləri və konteynerlər bir paneldə',
          'Real vaxt göstəriciləri',
          'Daxili AI köməkçi',
          'Öz serverinizdə: buludsuz, təchizatçıya bağlılıq olmadan',
        ],
        tags: ['DevOps', 'Monitorinq', 'AI'],
      },
      narcode: {
        name: 'nar.code',
        category: 'QA təhsil brendi',
        shortDescription:
          'Software QA və test mühəndisliyi üzrə təhsil brendi.',
        description:
          'nar.code proqram təminatının keyfiyyət təminatı və test mühəndisliyi üzrə təhsil brendimizdir. Test sahəsində karyeraya başlayan və ya onu inkişaf etdirən insanlar üçün tədris materialını və praktikanı bir araya gətirir.',
        features: [
          'Software QA və test mühəndisliyi',
          'Real test təcrübəsinə əsaslanan tədris',
          'Narix Academy ilə birlikdə işləyir',
        ],
        tags: ['Təhsil', 'QA', 'Test'],
      },
      danisir: {
        name: 'danisir.ai',
        category: 'AI və texnologiya məzmunu',
        shortDescription:
          'Süni intellekt və texnologiya haqqında aydın dildə məzmun.',
        description:
          'danisir.ai süni intellekt və texnologiya haqqında məzmun brendimizdir: nə yenilik var, necə işləyir və necə istifadə etmək olar, aydın dildə izah olunur.',
        features: [
          'Süni intellekt sadə dildə',
          'Texnologiya xəbərləri və bələdçilər',
          'Azərbaycan dilində məzmun',
        ],
        tags: ['Məzmun', 'AI', 'Media'],
      },
      narmelody: {
        name: 'narmelody',
        category: 'Fərdiləşdirilmiş AI musiqi',
        shortDescription:
          'AI vasitəsilə yaradılan, insana və ya hadisəyə görə fərdiləşdirilmiş mahnılar.',
        description:
          'narmelody süni intellektin köməyi ilə fərdiləşdirilmiş musiqi yaradır: bir insan, bir hekayə və ya bir hadisə üçün hazırlanmış mahnı.',
        features: [
          'AI ilə yaradılan musiqi',
          'İnsana və hadisəyə görə fərdiləşdirmə',
          'Bir dəfə, bir dinləyici üçün hazırlanan hədiyyə',
        ],
        tags: ['Musiqi', 'AI', 'Fərdiləşdirmə'],
      },
      inji: {
        name: 'inji',
        category: 'Məhsuldarlıq tətbiqi',
        shortDescription:
          'Geymifikasiyalı məhsuldarlıq tətbiqi: kanban lövhələr, vərdişlər, Pomodoro və hər bitən tapşırıq üçün bankaya düşən inci.',
        description:
          'inji sadə bir mükafat üzərində qurulub: tamamladığınız hər tapşırıq bankanıza bir inci əlavə edir. İş və şəxsi lövhələr, günlük və həftəlik hədəflər, daxili Pomodoro taymeri, vərdiş izləmə, statistika, təqvim, plan və qeydlər — hamısı bir səliqəli, iki dilli (AZ/EN) iş məkanında, sizi geri qaytaran ardıcıllıq seriyaları ilə.',
        features: [
          'İş və şəxsi kanban lövhələr',
          'İnci bankası + günlük / həftəlik hədəflər',
          'Daxili Pomodoro fokus taymeri',
          'Vərdişlər, statistika, təqvim və qeydlər',
          'Ardıcıllıq seriyaları və AZ / EN interfeys',
        ],
        tags: ['Məhsuldarlıq', 'Geymifikasiya', 'Veb tətbiq'],
      },
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
      bircv: {
        name: 'BirCV',
        category: 'Süni intellekt ilə CV qurucu',
        shortDescription:
          'Süni intellekt vasitəsilə peşəkar CV hazırlamağa imkan verən onlayn platforma.',
        description:
          'BirCV süni intellekt vasitəsilə peşəkar CV hazırlamağa imkan verən onlayn platformadır. Platformadan istifadə edərək istifadəçilər bu şərtləri qəbul etmiş sayılırlar.',
        features: [
          'Süni intellekt ilə CV yaratma',
          'Peşəkar şablonlar',
          'Sürətli onlayn qurucu',
        ],
        tags: ['Süni intellekt', 'Karyera', 'Alətlər'],
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
    titleStart: 'Rəqəmsal məhsula lazım olan hər şey,',
    titleAccent: 'bir komandadan.',
    desc:
      'Dizayn edirik, qururuq, avtomatlaşdırırıq və işlək vəziyyətdə saxlayırıq. Bütün yol üçün bir komanda, təchizatçılar arasında heç nə itmir.',
    list: [
      {
        title: 'AI avtomatlaşdırma və agentlər',
        description:
          'Komandanızı təkrarlanan işdən azad edən iş axınları, müştərilərə cavab verən çatbot və səs agentləri, xam məlumatı qərara çevirən analitika.',
        tags: ['n8n', 'LLM', 'RAG', 'Analitika'],
      },
      {
        title: 'Mobil və veb tətbiqlər',
        description:
          'iOS, Android və brauzer üçün tətbiqlər: marketplace, SaaS məhsulları, daxili alətlər. Sürətli və istifadəsi rahat.',
        tags: ['iOS', 'Android', 'React', 'PWA'],
      },
      {
        title: 'DevOps və bulud infrastrukturu',
        description:
          'Serverlər, CI/CD, konteynerlər, monitorinq və təhlükəsizlik düzgün qurulur: buraxılışlar adi işə çevrilir, dayanmalar nadir olur.',
        tags: ['CI/CD', 'Docker', 'Bulud', 'Monitorinq'],
      },
      {
        title: 'Veb saytlar və platformalar',
        description:
          'Korporativ saytlar, landing səhifələr, onlayn mağazalar və çoxdilli platformalar: tez açılır, Google-da asan tapılır, idarəsi sadədir.',
        tags: ['Next.js', 'SEO', 'E-ticarət'],
      },
      {
        title: 'Məhsul dizaynı və brendinq',
        description:
          'İlk baxışda başa düşülən interfeyslər və məhsulu tanınan edən loqo, rəng və üslub.',
        tags: ['UX/UI', 'Brend', 'Dizayn sistemi'],
      },
      {
        title: 'Test və keyfiyyət təminatı',
        description:
          'Problemləri istifadəçilərinizdən əvvəl tapan manual və avtomatlaşdırılmış test: funksional, API, performans və buraxılış yoxlamaları.',
        tags: ['Manual QA', 'Playwright', 'API', 'Performans'],
      },
    ],
  },
  process: {
    eyebrow: 'Necə işləyir',
    titleStart: 'İdeyadan',
    titleAccent: 'canlı işləyən məhsula',
    titleEnd: 'qədər beş aydın addım.',
    steps: [
      {
        num: '01',
        title: 'Kəşf',
        desc: 'Dinləyirik, işlərin bu gün necə getdiyinə baxırıq və məhsulun nəyə nail olmalı olduğunu razılaşdırırıq.',
      },
      {
        num: '02',
        title: 'Plan',
        desc: 'Aydın həcm, müddət və qiymət: əvvəl nə qurulur, hansı texnologiya ilə və niyə.',
      },
      {
        num: '03',
        title: 'Dizayn və inkişaf',
        desc: 'Dizayn və proqramlaşdırma qısa dövrlərlə gedir. İşlək nəticəni sonda yox, hər həftə görürsünüz.',
      },
      {
        num: '04',
        title: 'Test və buraxılış',
        desc: 'Real cihazlarda test edirik, infrastrukturu qururuq və sürprizsiz buraxırıq.',
      },
      {
        num: '05',
        title: 'Dəstək və inkişaf',
        desc: 'Buraxılışdan sonra monitorinq, düzəlişlər və yeni funksiyalar. Məhsul yaxşılaşmağa davam edir.',
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
    titleStart: 'İnsanların həqiqətən istifadə etdiyi',
    titleAccent: 'məhsullar quran kiçik komandayıq.',
    desc:
      'Mühəndislər, dizaynerlər və AI mütəxəssisləri bir dam altında. Öz məhsullarımızı idarə edirik, ona görə bir məhsulu buraxmağın və sonra yaşatmağın nə tələb etdiyini bilirik.',
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
    titleStart: 'Növbəti məhsulunuzu',
    titleAccent: 'birlikdə quraq.',
    desc:
      'Nə qurmaq, avtomatlaşdırmaq və ya düzəltmək istədiyinizi yazın. Aydın plan, qiymət və işi həqiqətən görəcək insanlarla qayıdırıq.',
    book: 'Görüş təyin et',
    start: 'Layihəyə başla',
    metaResponse: '24 saat ərzində cavab',
    metaCall: '30 dəqiqəlik pulsuz ilk görüş',
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
      whatsapp: 'WhatsApp ilə göndər',
      sent: 'E-poçt tətbiqiniz mesajla birlikdə açılır…',
      sentWhatsapp: 'WhatsApp mesajla birlikdə açılır…',
      note: 'Adətən 6 saatdan az müddətdə cavab veririk.',
    },
  },
  footer: {
    tagline:
      'Narix veb saytlar, tətbiqlər, AI avtomatlaşdırma və onları işlək saxlayan infrastruktur qurur.',
    columns: {
      services: 'Xidmətlər',
      company: 'Şirkət',
      contact: 'Əlaqə',
    },
    serviceLinks: [
      'Veb saytlar və platformalar',
      'Mobil və veb tətbiqlər',
      'AI avtomatlaşdırma və agentlər',
      'DevOps və bulud',
      'Test və QA',
    ],
    rights: 'Bütün hüquqlar qorunur.',
  },
  pages: {
    about: {
      eyebrow: 'Haqqımızda',
      title: 'Öz məhsullarını idarə edən qurucular.',
      desc:
        'Bakıda mühəndis, dizayner və AI mütəxəssislərindən ibarət kiçik, təcrübəli komanda. Rəqəmsal məhsulları dizayn edir, qurur və idarə edirik: həm özümüzünküləri, həm müştərilərimizinkiləri.',
    },
    services: {
      eyebrow: 'Xidmətlər',
      title: 'Dizayn etdiyimiz, qurduğumuz və işlək saxladığımız işlər.',
      desc:
        'Veb saytlar, tətbiqlər, AI avtomatlaşdırma, infrastruktur, dizayn və test. Rəqəmsal məhsulun bütün yolu bir komandada.',
    },
    projects: {
      eyebrow: 'Layihələr',
      title: 'Narix ekosistemi və müştəri layihələri.',
      desc:
        'Canlı olan və hər gün istifadə edilən öz məhsullarımız, həmçinin müştərilər üçün qurduğumuz platformalar və avtomatlaşdırma.',
    },
    contact: {
      eyebrow: 'Əlaqə',
      title: 'Nə qurmaq istədiyiniz haqqında danışaq.',
      desc:
        'E-poçt, WhatsApp və ya aşağıdakı forma: sizə rahat olanı seçin. 24 saat ərzində konkret addımlarla cavab veririk.',
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
