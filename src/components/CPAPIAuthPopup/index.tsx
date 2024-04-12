import React, {useState} from 'react';
import {IBKRHandler} from "../../services/backend/IBKR/IBKRHandler";

const CPAPIAuthPopup: React.FC = () => {
    const [popup, setPopup] = useState<Window | null>(null);

    // URL for the CPAPI authentication page
    const authUrl = "https://localhost:5000/";

    // Function to open a new popup
    const openPopup = () => {
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
    };

    // Function to check if the popup is closed
    const checkPopupClosed = () => {
        const check = setInterval(() => {
            if (!popup || popup.closed) {
                clearInterval(check);
                console.log('Authentication complete or popup closed');
                // Perform any additional actions after popup closes
            }
        }, 1000);
    };

    return (
        <div>
            <button onClick={() => {
                openPopup();
                checkPopupClosed();
            }}>Authenticate with IBKR
            </button>
            <button onClick={() => {
                let ibkrh = new IBKRHandler();
                let res = ibkrh.isConnectedStatus().catch(error => {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.error('Error response:', error.response.data);
                        console.error('Error status:', error.response.status);
                        console.error('Error headers:', error.response.headers);
                    } else if (error.request) {
                        // The request was made but no response was received
                        console.error('Error request:', error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.error('Error message:', error.message);
                    }
                });
                ;
            }}>Check Connection Status
            </button>
        </div>
    );
}

export default CPAPIAuthPopup;
