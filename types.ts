
export interface Service {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  visualType: 'chatbot' | 'voice' | 'crm' | 'agent' | 'app';
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export enum UISection {
  HERO = 'hero',
  SERVICES = 'services',
  PROOF = 'proof',
  CONTACT = 'contact'
}
