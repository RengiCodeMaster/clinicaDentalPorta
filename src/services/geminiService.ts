import { GoogleGenerativeAI } from "@google/generative-ai";
import { CHATBOT_KNOWLEDGE } from "../constants";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

export async function getDentalAssistantResponse(history: string) {
  if (!apiKey) {
    console.error("API Key no encontrada. Asegúrate de tener VITE_GEMINI_API_KEY en tu archivo .env.local");
    return "Error: Configuración de API incompleta.";
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const instructions = `
      Rol: Asistente de "PORTA Clínica Dental".
      OBJETIVO: Conseguir la cita lo más rápido posible pero ser amable y respetuoso.

      INFORMACIÓN:
      ${CHATBOT_KNOWLEDGE}

      REGLAS DE ORO (SÍGUELAS OBLIGATORIAMENTE):
      1. RESPUESTAS CORTAS: Máximo 4 frases o 60 palabras. No aburras al usuario.
      2. MEMORIA: Lee el historial. Si ya estaban hablando de "muelas" o "dolor", NO preguntes "¿para qué tratamiento?". Asume el contexto.
      3. CIERRE DE VENTA:
         - Si el usuario dice "quiero cita", "sí", "agendar", "perfecto":
         - Responde: "Genial, por favor haz clic en el botón de abajo para reservar tu cita vía WhatsApp o llena el formulario de contacto."
         - Y AGREGA AL FINAL: [AGENDAR_CITA]
         - ¡NO HAGAS MÁS PREGUNTAS EN ESE MOMENTO!

      4. CREDITOS (IMPORTANTE):
         - Si preguntan "¿quién te creó?", "¿quién te hizo?", "desarrollador":
         - Responde: "Fui desarrollado por la empresa **JM-solutions**, liderada por el ingeniero **Juan Rengifo**."
    `;

    const result = await model.generateContent(`${instructions}\n\nHISTORIAL DE CONVERSACIÓN:\n${history}`);
    const response = await result.response;
    return response.text();

  } catch (error: any) {
    console.error("Error Gemini:", error);
    return `Lo siento, hubo un problema técnico (${error.message}). Por favor escríbenos al WhatsApp.`;
  }
}
