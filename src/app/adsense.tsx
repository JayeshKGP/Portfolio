import { useEffect } from 'react';

const AdSense = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4959852848090953';
        script.setAttribute('crossorigin', 'anonymous');
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return null; // This component only injects the script, no UI is rendered.
};

export default AdSense;
