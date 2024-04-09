import React, {useContext, useEffect, useState} from 'react';
import './styles.css';
import PortfolioThumbnail from '../../components/PortfolioThumbnail';
import {fetchData} from "../../services";
import ConfigContext from "../../utils/config/ConfigContext";

const Home: React.FC = () => {

    const [data, setData] = useState(undefined as any);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchData();
            setData(result);
        };

        getData();
    }, []);
    const config = useContext(ConfigContext) as any;



    return (
        <div className="home">
            <div className="grid-container">
                <div>{config ? `API Base URL: ${config.apiBaseUrl}` : 'Loading config...'}</div>;
                <PortfolioThumbnail/>
                {/* More thumbnails or components can be added here */}
            </div>
        </div>
    );
}

export default Home;
