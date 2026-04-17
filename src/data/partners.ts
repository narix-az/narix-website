export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  showName?: boolean;
}

export const partners: Partner[] = [
  { id: '1', name: 'OpenAI', logoUrl: 'https://cdn.simpleicons.org/openai/FFFFFF' },
  { id: '2', name: 'Anthropic', logoUrl: 'https://cdn.simpleicons.org/anthropic/FFFFFF' },
  { id: '3', name: 'Google Gemini', logoUrl: 'https://cdn.simpleicons.org/googlegemini/FFFFFF' },
  { id: '4', name: 'n8n', logoUrl: 'https://cdn.simpleicons.org/n8n/FFFFFF' },
  { id: '5', name: 'Make', logoUrl: 'https://cdn.simpleicons.org/make/FFFFFF' },
  { id: '6', name: 'Zapier', logoUrl: 'https://cdn.simpleicons.org/zapier/FFFFFF' },
  { id: '7', name: 'LangChain', logoUrl: 'https://cdn.simpleicons.org/langchain/FFFFFF' },
  { id: '8', name: 'ElevenLabs', logoUrl: 'https://cdn.simpleicons.org/elevenlabs/FFFFFF' },
  { id: '9', name: 'Vercel', logoUrl: 'https://cdn.simpleicons.org/vercel/FFFFFF' },
  { id: '10', name: 'Supabase', logoUrl: 'https://cdn.simpleicons.org/supabase/FFFFFF' },
];
