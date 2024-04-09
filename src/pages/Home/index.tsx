import React, {useEffect, useState} from 'react';
import './styles.css';
import PortfolioThumbnail from '../../components/PortfolioThumbnail';
import {fetchData} from "../../services";
import useConfig from "../../utils/hooks/useConfig";

const Home: React.FC = () => {

    const [data, setData] = useState(undefined as any);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchData();
            setData(result);
        };

        getData();
    }, []);
    const config = useConfig() as any;


    return (
        <div className="home">
            <div className="grid-container">
                <div>{config ? `API Base URL: ${config.apiBaseUrl}` : 'Loading config...'}</div>
                ;
                <PortfolioThumbnail/>
                {/* More thumbnails or components can be added here */}
            </div>
        </div>
    );
}

export default Home;
