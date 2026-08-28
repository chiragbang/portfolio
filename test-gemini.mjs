import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";


dotenv.config({ path: ".env.local" });

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const response = await ai.models.generateContent({
  model: "gemini-3.6-flash",
  contents: "Say hello in one sentence.",
});

console.log(response.text);