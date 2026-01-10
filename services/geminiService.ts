
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getConciergeResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history, { role: 'user', parts: [{ text: message }] }],
      config: {
        systemInstruction: `You are the VATALIQUE AI Concierge. 
        Brand Identity: Elite AI Agency. 
        Voice: Senior Consultant - Confident, concise, technical, helpful, mysterious.
        Goal: Educate users on VATALIQUE's services (Custom Chatbots, Voice AI, AI CRMs, Agentic Systems, AI Apps) and qualify leads.
        Call to Action: Encourage users to book a strategy call or launch an agent.
        Rules: Never be "salesy". Always prioritize technical depth over fluff. If a user asks about price, mention that VATALIQUE builds bespoke solutions starting at $5k/mo or $10k+ for custom dev.
        Formatting: Use professional, structured text.`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am experiencing a slight neural recalibration. Please try again in a moment.";
  }
}
