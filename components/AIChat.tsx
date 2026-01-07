import React, { useState, useRef, useEffect } from 'react';
import { getDentalAssistantResponse } from '../services/geminiService';
import { CLINIC_INFO } from '../constants';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string; hasAction?: boolean }[]>([
    { role: 'ai', text: '¡Hola! Soy el asistente de PORTA. Pregúntame por nuestros precios y tratamientos.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    // Actualizamos el estado con el nuevo mensaje del usuario
    const newMessages = [...messages, { role: 'user' as const, text: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    // Convertimos TODO el historial a texto para que el modelo tenga contexto (memoria)
    const historyText = newMessages.map(m => `${m.role === 'user' ? 'Usuario' : 'Asistente'}: ${m.text}`).join('\n');

    const fullResponse = await getDentalAssistantResponse(historyText);
    let cleanResponse = fullResponse || 'Lo siento, no pude procesar tu solicitud.';
    let hasAction = false;

    // Check for action tag
    if (cleanResponse.includes('[AGENDAR_CITA]')) {
      hasAction = true;
      cleanResponse = cleanResponse.replace('[AGENDAR_CITA]', '').trim();
    }

    setMessages(prev => [...prev, { role: 'ai', text: cleanResponse, hasAction }]);
    setIsLoading(false);
  };

  const getLastUserMessage = () => {
    const userMessages = messages.filter(m => m.role === 'user');
    return userMessages.length > 0 ? userMessages[userMessages.length - 1].text : 'Consulta general';
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="w-[350px] h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-slide-up mb-4 ring-1 ring-porta/10">
          {/* Header */}
          <div className="bg-gradient-to-r from-porta to-porta-dark p-4 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xl shadow-inner">🤖</div>
              <div>
                <p className="font-bold text-sm">Asistente PORTA</p>
                <p className="text-[10px] opacity-90 uppercase tracking-widest font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  En línea
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Chat Body */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${m.role === 'user'
                  ? 'bg-porta text-white rounded-br-none'
                  : 'bg-white text-gray-700 border border-gray-100 rounded-bl-none'
                  }`}>
                  {m.text}
                </div>

                {/* Action Button for Booking */}
                {m.hasAction && (
                  <a
                    href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(`Hola, conversé con su asistente virtual. Aquí está el resumen de mi consulta:\n\n${messages.slice(-6).map(msg => `${msg.role === 'user' ? 'Yo' : 'Bot'}: ${msg.text.replace('[AGENDAR_CITA]', '')}`).join('\n')}\n\nQuisiera agendar la cita.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg shadow-green-200 flex items-center gap-2 animate-bounce-slow transform hover:-translate-y-1 active:scale-95 w-fit"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.198-.198.346-.769.967-.943 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                    Agendar Cita en WhatsApp
                  </a>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1.5 border border-gray-100">
                  <div className="w-2 h-2 bg-porta/50 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-porta/50 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-porta/50 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe tu duda o tratamiento..."
              className="flex-1 px-4 py-3 bg-gray-50 border-gray-100 border rounded-xl text-sm focus:bg-white focus:border-porta focus:ring-2 focus:ring-porta/20 transition-all outline-none"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-3 bg-porta disabled:bg-gray-300 text-white rounded-xl hover:bg-porta-dark transition-all disabled:cursor-not-allowed shadow-md shadow-porta/20 hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-white text-porta rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-4 border-white ring-2 ring-porta/10 group relative"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
};

export default AIChat;
