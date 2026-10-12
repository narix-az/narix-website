export interface Partner {
  id: string;
  name: string;
  /** Omit when no reliable logo source exists — the name is shown on its own. */
  logoUrl?: string;
}

export const partners: Partner[] = [
  { id: '1', name: 'OpenAI' },
  { id: '2', name: 'Anthropic', logoUrl: 'https://cdn.simpleicons.org/anthropic' },
  { id: '3', name: 'Google Gemini', logoUrl: 'https://cdn.simpleicons.org/googlegemini' },
  { id: '4', name: 'n8n', logoUrl: 'https://cdn.simpleicons.org/n8n' },
  { id: '5', name: 'Make', logoUrl: 'https://cdn.simpleicons.org/make' },
  { id: '6', name: 'Zapier', logoUrl: 'https://cdn.simpleicons.org/zapier' },
  { id: '7', name: 'LangChain', logoUrl: 'https://cdn.simpleicons.org/langchain' },
  { id: '8', name: 'ElevenLabs', logoUrl: 'https://cdn.simpleicons.org/elevenlabs' },
  { id: '9', name: 'Vercel', logoUrl: 'https://cdn.simpleicons.org/vercel' },
  { id: '10', name: 'Supabase', logoUrl: 'https://cdn.simpleicons.org/supabase' },
];
