import React, {useState} from 'react';
import {IBKRHandler} from "../../services/backend/IBKR/IBKRHandler";
import {Alert, Snackbar} from "@mui/material";
import useAuthPopup from "./AuthPopupHook";

interface CPAPIAuthPopupProps {
    authUrl: string;
}

const CPAPIAuthPopupButton: React.FC<CPAPIAuthPopupProps> = ({authUrl}: CPAPIAuthPopupProps) => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [popUpBlocked, setPopUpBlocked] = useState(false);
    const authPopup = useAuthPopup(authUrl);

    return (
        <div>

            {/* This button shouldn't be here*/}
            <button onClick={async () => {
                let ibkrh = new IBKRHandler();
                let res = await ibkrh.isConnectedStatus();
                if (res) {
                    setSnackbarOpen(true);
                    return;
                }
                authPopup.openPopup();
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
            <Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                open={popUpBlocked}
                autoHideDuration={6000}
                onClose={() => setPopUpBlocked(false)}
                message="Pop-up was blocked. Please enable pop-ups for this site."
            >
                <Alert
                    onClose={() => setPopUpBlocked(false)}
                    severity="warning"
                    variant="filled"
                    sx={{width: '100%'}}
                >
                    Pop-up was blocked. Please enable pop-ups for this site.
                </Alert>
            </Snackbar>

        </div>


    );
}

export default CPAPIAuthPopupButton;
