import React, { useState, useRef, useEffect } from 'react';
import { getDentalAssistantResponse } from '../../services/geminiService';

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
                  <a
                    href={`https://wa.me/51919639809?text=Hola,%20quisiera%20agendar%20una%20cita.%20Vengo%20del%20chat%20de%20asistente.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg flex items-center gap-2 animate-bounce-slow transform hover:-translate-y-1 active:scale-95 w-fit"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.006.574 2.148.877 3.328.878 3.149 0 5.789-2.587 5.789-5.768 0-3.181-2.607-5.765-5.791-5.765zm6.758 10.339l-4.708 2.051-2.673-.974-2.822-2.126 1.947-4.15-1.928-1.748-1.574.636c-.534.252-.767.892-.569 1.487l.465 1.488 2.564 3.655 2.112 1.996 1.488.465c.594.198 1.233-.035 1.486-.569l.637-1.574-1.748-1.928.369.309zM.333 3.023l2.535 2.536 2.003-2.004L2.336 1.02.333 3.023zm3.204 18.064l1.966-5.727C3.906 13.204 3.5 11.238 3.5 11.238c0-4.686 3.814-8.5 8.5-8.5s8.5 3.814 8.5 8.5-3.814 8.5-8.5 8.5c-1.967 0-3.933-.406-5.457-1.164l-5.727 1.966L.333 23.667l3.204-2.58z" /><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    Agendar por WhatsApp
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
