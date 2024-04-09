// a component to fill the screen while the config is loading. using cool mui features
// src/utils/config/LoadingConfigScreen.js
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const LoadingConfigScreen = () => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}
    >
        <CircularProgress/>
        <Typography variant="h6">Loading configuration...</Typography>

    </div>
);

export default LoadingConfigScreen;