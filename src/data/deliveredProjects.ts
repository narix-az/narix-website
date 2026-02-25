export interface DeliveredProject {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
  link?: string;
}

export const deliveredProjects: DeliveredProject[] = [
  {
    id: '1',
    name: 'Fintechauto',
    logoUrl: 'https://api.iconify.design/mdi/car.svg',
    description: 'Auto leasing platform with streamlined application flow, payment management, and vehicle catalog. Delivered a modern web application for the fintech and automotive sector.',
    link: 'https://fintechauto.az/',
  },
  {
    id: '2',
    name: 'Go Sushi',
    logoUrl: 'https://api.iconify.design/mdi/bowl.svg',
    description: 'Restaurant ordering and delivery web application. Built with responsive design, menu management, and seamless ordering experience.',
    link: 'https://go-sushi.pages.dev/',
  },
  {
    id: '3',
    name: 'Maliyyə hesablayıcı',
    logoUrl: 'https://api.iconify.design/mdi/calculator.svg',
    description: 'A financial calculator platform for the Azerbaijani market, enabling users to calculate mortgage and consumer loans with real-time results. The project includes interactive sliders, multi-language support, and clear breakdowns of monthly payments, total interest, and repayment schedules to improve user decision-making.',
  },
  {
    id: '4',
    name: 'Reservation Automation',
    logoUrl: 'https://api.iconify.design/mdi/calendar-check.svg',
    description: 'An automated hotel reservation system that streamlines room booking, availability management, and guest communication. The platform centralizes reservations, reduces manual operations, and improves response time through automated workflows and real-time updates.',
  },
  {
    id: '5',
    name: 'AI Call Center Agent',
    logoUrl: 'https://api.iconify.design/mdi/headset.svg',
    description: 'An AI-powered call center agent designed to automate inbound and outbound customer calls, handle common requests, and route complex cases to human operators. The system improves response times, reduces operational costs, and ensures consistent customer support through natural language understanding and automated workflows.',
  },
  {
    id: '6',
    name: 'Daily Sales AI Analytics',
    logoUrl: 'https://api.iconify.design/mdi/chart-line.svg',
    description: 'An AI-powered system for daily sales analysis that tracks performance, detects trends, and highlights anomalies in real time. The solution helps businesses make data-driven decisions by providing clear insights, forecasts, and automated reports based on sales data.',
  },
];
