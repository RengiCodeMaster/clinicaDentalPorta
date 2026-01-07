import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    serviceSlug?: string; // Nuevo: Slug específico del servicio (ej: 'ortodoncia')
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, serviceSlug }) => {
    // Si hay un slug específico, usamos el namespace y link directo al evento.
    // Si no, usamos el perfil general (o "tratamientos-generales" como default si prefieres).
    // Tu perfil base es: clinica-dental-porta-gywyrv
    const namespace = "clinica-dental-porta-gywyrv";
    const calLink = serviceSlug ? `${namespace}/${serviceSlug}` : `${namespace}/tratamientos-generales`;

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({});
            cal("ui", {
                theme: "light",
                styles: { branding: { brandColor: "#0EA5E9" } },
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        })();
    }, []);

    // Bloquear scroll del fondo cuando el modal está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop Bloqueante (No interactivo) */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-fade-in"
                onClick={onClose}
            ></div>

            {/* Modal Container con Scroll Interno y Centrado Perfecto */}
            <div className="relative w-full max-w-3xl h-[650px] max-h-[85vh] bg-white rounded-3xl shadow-2xl overflow-hidden animate-scale-in flex flex-col my-auto">

                {/* Header Fijo */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-white shrink-0 z-20">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">📅</span>
                        <h3 className="text-xl font-outfit font-bold text-gray-900">
                            {serviceSlug ? 'Reserva tu Tratamiento' : 'Reserva tu Cita'}
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full transition-all duration-200"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Contenido Scrollable */}
                <div className="flex-1 overflow-y-auto relative bg-white">
                    <Cal
                        namespace={serviceSlug || namespace}
                        calLink={calLink}
                        style={{ width: "100%", height: "100%", minHeight: "600px" }}
                        config={{
                            layout: 'month_view',
                            theme: 'light'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
