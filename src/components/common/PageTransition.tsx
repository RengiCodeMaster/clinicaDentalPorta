import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition: React.FC = () => {
    const location = useLocation();
    const [show, setShow] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        setShow(true);
        setFadeOut(false);

        const fadeTimer = setTimeout(() => setFadeOut(true), 400);
        const hideTimer = setTimeout(() => setShow(false), 750);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(hideTimer);
        };
    }, [location.pathname]);

    if (!show) return null;

    return (
        <div
            className="page-transition-overlay"
            style={{ opacity: fadeOut ? 0 : 1 }}
        >
            <div className="page-transition-logo-wrap">
                <img
                    src="/images/porta-logo.webp"
                    alt=""
                    className="page-transition-logo"
                />
                <div className="page-transition-bar">
                    <div className="page-transition-bar-fill" />
                </div>
            </div>
        </div>
    );
};

export default PageTransition;
