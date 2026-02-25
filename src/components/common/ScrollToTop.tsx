import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Don't scroll to top if there is a hash, let the component handle it
        if (hash) return;
        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
