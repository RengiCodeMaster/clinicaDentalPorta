import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const PersistentVideo: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://player.vimeo.com') return;
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        
        // Cuando Vimeo está listo, nos suscribimos a TODOS los eventos de reproducción
        if (data && data.event === 'ready') {
          if (iframeRef.current && iframeRef.current.contentWindow) {
            iframeRef.current.contentWindow.postMessage(JSON.stringify({ method: 'addEventListener', value: 'play' }), '*');
            iframeRef.current.contentWindow.postMessage(JSON.stringify({ method: 'addEventListener', value: 'playing' }), '*');
            iframeRef.current.contentWindow.postMessage(JSON.stringify({ method: 'addEventListener', value: 'timeupdate' }), '*');
            iframeRef.current.contentWindow.postMessage(JSON.stringify({ method: 'addEventListener', value: 'progress' }), '*');
            iframeRef.current.contentWindow.postMessage(JSON.stringify({ method: 'addEventListener', value: 'ended' }), '*');
          }
        }

        // Sistema anti-congelamiento: Si Vimeo avisa que el video terminó, lo obligamos a darle Play de nuevo
        if (data && data.event === 'ended') {
          if (iframeRef.current && iframeRef.current.contentWindow) {
            iframeRef.current.contentWindow.postMessage(JSON.stringify({ method: 'play' }), '*');
          }
        }

        // Cualquier evento que indique que el video avanzó
        if (data && (data.event === 'play' || data.event === 'playing' || data.event === 'timeupdate' || data.event === 'progress')) {
          setIsVideoLoaded(true);
        }
      } catch (e) {
        // Ignorar errores de parseo
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <>
      {/* GLOBAL FULL-SCREEN LOADER - Shows only on Home until video is completely ready */}
      {!isVideoLoaded && isHome && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-1000">
          <img 
            src="/images/porta-logo.webp" 
            alt="Clínica Dental Porta" 
            className="h-16 sm:h-20 mb-8 animate-pulse drop-shadow-sm"
          />
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-porta mb-4"></div>
            <span className="text-porta font-bold tracking-[0.2em] uppercase text-xs animate-pulse">
              Cargando experiencia...
            </span>
          </div>
        </div>
      )}

      {/* Usamos position absolute a nivel de la app para que esté en el top 0.
      Al ser absolute (y no fixed), scrolleará hacia arriba de forma natural junto con el Hero. */}
      <div className={`absolute top-0 left-0 w-full h-screen overflow-hidden pointer-events-none transition-opacity duration-700 z-[-10] ${isHome ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Background Vimeo Video */}
        <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <iframe
          ref={iframeRef}
          src="https://player.vimeo.com/video/1215299144?background=1&autoplay=1&loop=1&autopause=0&byline=0&title=0&muted=1&api=1"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Video de Inicio"
        ></iframe>
      </div>
    </div>
    </>
  );
};

export default PersistentVideo;
