// src/ConfigProvider.js
import React, { useState, useEffect } from 'react';
import ConfigContext from './ConfigContext';
import LoadingConfigScreen from "./LoadingConfigScreen";

const ConfigProvider = ({ children }) => {
    const [config, setConfig] = useState(null);

    // Simulate a delay in the fetch
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    useEffect(() => {
        fetch('/config.json')
            .then(async (response) => {
                await sleep(2000);
                return response;
            })
            .then((response) => response.json())
            .then((data) => setConfig(data))
            .catch((error) => console.error('Error loading the config:', error));
    }, []);

    return (
        <ConfigContext.Provider value={config}>
            {config ? children : <LoadingConfigScreen />}
        </ConfigContext.Provider>
    );
};

export default ConfigProvider;
