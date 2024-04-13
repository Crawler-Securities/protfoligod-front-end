import React, {useState} from 'react';
import {IBKRHandler} from "../../services/backend/IBKR/IBKRHandler";
import {Alert, Snackbar} from "@mui/material";

const CPAPIAuthPopup: React.FC = () => {
    const [popup, setPopup] = useState<Window | null>(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

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
            <button onClick={async () => {
                let ibkrh = new IBKRHandler();
                let res = await ibkrh.isConnectedStatus();
                if (res) {
                    setSnackbarOpen(true);
                    return;
                }
                debugger
                openPopup();
                checkPopupClosed();
            }}>Authenticate with IBKR
            </button>

            <Snackbar
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                open={snackbarOpen}
                autoHideDuration={5000}
                onClose={() => setSnackbarOpen(false)}
                message="IBKR is already connected">
                <Alert
                    onClose={() => setSnackbarOpen(false)}
                    severity="info"
                    variant="filled"
                    sx={{width: '100%'}}
                >
                    IBKR is already connected
                </Alert>
            </Snackbar>
        </div>


    );
}

export default CPAPIAuthPopup;
