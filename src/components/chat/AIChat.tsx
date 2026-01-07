import React, { useState, useRef, useEffect } from 'react';
import { getDentalAssistantResponse } from '../../services/geminiService';
import BookingModal from '../common/BookingModal';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

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
    const newMessages = [...messages, { role: 'user' as const, text: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    const historyText = newMessages.map(m => `${m.role === 'user' ? 'Usuario' : 'Asistente'}: ${m.text}`).join('\n');

    const fullResponse = await getDentalAssistantResponse(historyText);
    let cleanResponse = fullResponse || 'Lo siento, no pude procesar tu solicitud.';
    let hasAction = false;

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

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${m.role === 'user'
                  ? 'bg-porta text-white rounded-br-none'
                  : 'bg-white text-gray-700 border border-gray-100 rounded-bl-none'
                  }`}>
                  {m.text}
                </div>

                {m.hasAction && (
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="mt-2 bg-gray-900 hover:bg-black text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg flex items-center gap-2 animate-bounce-slow transform hover:-translate-y-1 active:scale-95 w-fit"
                  >
                    <span>📅</span>
                    Agendar Cita Online
                  </button>
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

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default AIChat;
