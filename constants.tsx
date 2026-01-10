
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'chatbots',
    title: 'Cognitive Chat Ecosystems',
    description: 'Autonomous communication layers for Web, WhatsApp, and Instagram that learn from your business DNA.',
    capabilities: ['Dynamic Context Awareness', 'Omnichannel Deployment', 'Zero-Latency Response'],
    visualType: 'chatbot'
  },
  {
    id: 'voice',
    title: 'Synthetic Voice Proxies',
    description: 'Ultra-realistic vocal agents for cold calling, customer support, and appointment scheduling.',
    capabilities: ['Human-Parity Latency', 'Emotional Intelligence', 'Multilingual Fluency'],
    visualType: 'voice'
  },
  {
    id: 'crm',
    title: 'Adaptive AI Intelligence',
    description: 'Custom CRM frameworks that don\'t just store data, but predict revenue and automate lead nurturing.',
    capabilities: ['Predictive Lead Scoring', 'Automated Workflows', 'Insight Synthesis'],
    visualType: 'crm'
  },
  {
    id: 'agents',
    title: 'Agentic Swarm Systems',
    description: 'Self-correcting AI workers that handle complex multi-step reasoning and execution chains.',
    capabilities: ['Goal-Oriented Reasoning', 'Self-Optimization', 'Tool Interaction'],
    visualType: 'agent'
  },
  {
    id: 'apps',
    title: 'Next-Gen Neural Interfaces',
    description: 'Websites and applications built with AI as the core foundation, not an afterthought.',
    capabilities: ['Gen-AI Native UX', 'Personalized Interfaces', 'Rapid Prototyping'],
    visualType: 'app'
  }
];

export const BRAND_COLORS = {
  primary: '#00ffff', // Neon Cyan
  secondary: '#7b61ff', // Violet
  accent: '#ff00ff', // Electric Magenta
  bg: '#050505',
};
