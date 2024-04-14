import { useState, useEffect, useCallback } from 'react';

const useAuthPopup = (authUrl: string) => {
    const [popup, setPopup] = useState<Window | null>(null);

    // Function to open a new popup
    const openPopup = useCallback(() => {
        // Close any already open popups
        if (popup && !popup.closed) {
            popup.close();
        }

        // Open a new popup
        const newPopup = window.open(
            authUrl,
            'IBKRAuth',
            'width=600,height=500,left=200,top=200'
        );
        setPopup(newPopup);
    }, [authUrl, popup]);  // Include popup to properly handle its closure


    // Effect to set up interval to monitor popup URL and close state
    useEffect(() => {
        let interval: number | undefined;
        if (popup) {
            interval = window.setInterval(() => {
                if (!popup || popup.closed) {
                    console.log('Popup has been closed manually.');
                    clearInterval(interval);
                    setPopup(null);  // Ensure popup state is cleaned up after closing
                }
            }, 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [popup]);  // Now includes checkAuthSuccess

    return { openPopup };
};

export default useAuthPopup;
