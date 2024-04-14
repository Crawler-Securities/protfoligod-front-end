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

    // Check the URL and close the popup if authentication is successful
    const checkAuthSuccess = useCallback(() => {
        if (!popup) return;

        try {
            // Check if the popup has navigated to the specific path

            // if (popup.location.href.includes('/sso/Dispatch')) {
            if (popup.location.href.includes('/ibkr')) {
                console.log('Authentication successful, closing popup.');
                popup.close();
                setPopup(null);
            }
        } catch (e) {
            // Errors are thrown if the popup navigates to a different origin
            console.log('Waiting for authentication...');
        }
    }, [popup]);  // Depends on the popup

    // Effect to set up interval to monitor popup URL and close state
    useEffect(() => {
        let interval: number | undefined;
        if (popup) {
            interval = window.setInterval(() => {
                if (!popup || popup.closed) {
                    console.log('Popup has been closed manually.');
                    clearInterval(interval);
                    setPopup(null);  // Ensure popup state is cleaned up after closing
                } else {
                    checkAuthSuccess();
                }
            }, 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [popup, checkAuthSuccess]);  // Now includes checkAuthSuccess

    return { openPopup };
};

export default useAuthPopup;
