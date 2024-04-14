import React from 'react';
import './styles.css';
import useConfig from "../../utils/hooks/useConfig";
import CPAPIAuthPopup from "../../components/CPAPIAuthPopup";

const Home: React.FC = () => {

    const config = useConfig();
    const CPAPIUrl = config.CPAPIUrl;
    const authUrl = `${CPAPIUrl}`;

    return (
        <div className="home">
            <div className="grid-container">
                <CPAPIAuthPopup authUrl={authUrl}/>
            </div>
        </div>
    );
}

export default Home;

