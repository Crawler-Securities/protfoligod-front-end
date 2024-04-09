// utils/hooks/useConfig.js
import { useContext } from 'react';
import ConfigContext from '../config/ConfigContext';

const useConfig = () => {
    const config = useContext(ConfigContext);
    return config; // You can add additional logic here if needed
};

export default useConfig;
