import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY!,
});

export async function generateAIContent(prompt: string) {
  try {
    const response = await genAI.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: [{
        role: "user",
        parts: [{ text: prompt }]
      }]
    });
    return response.candidates?.[0]?.content?.parts?.[0]?.text || "";
  } catch (error) {
    console.error("Error generating AI content:", error);
    throw error;
  }
}
