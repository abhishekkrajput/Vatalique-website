
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
});


export async function getConciergeResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history, { role: 'user', parts: [{ text: message }] }],
      config: {
        systemInstruction: `You are the VATALIQUE AI Concierge. 
        Role: AI Sales Concierge for Vatalique (an elite AI agency).
        Goal: Qualify leads and guide them to book a strategy call.
        Behavior:
        1. Ask clarifying questions about the user's business (industry, current challenges, team size) to understand their needs.
        2. Suggest relevant custom AI solutions (e.g., Sales Voice Bots, 24/7 Support Agents, Internal Ops Automations, Custom CRMs).
        3. Explain value in terms of ROI and efficiency, not just technology.
        4. "Soft sell" the strategy call as the next logical step to map out their architecture.
        
        Rules:
        - Do NOT mention specific LLM models (like Gemini, GPT-4), APIs, or technical implementation details. Keep it business-focused.
        - Be professional, confident, and concise. Maintain a premium "consultant" tone.
        - If asked about pricing: "We build bespoke sovereign AI systems. Engagements typically start at $5k/mo or $10k+ for custom development, depending on complexity."`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am experiencing a slight neural recalibration. Please try again in a moment.";
  }
}
