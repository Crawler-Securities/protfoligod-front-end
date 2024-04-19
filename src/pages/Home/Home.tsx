import React from 'react';
import './styles.css';
import useConfig from "../../utils/hooks/useConfig";
import CPAPIAuthPopupButton from "../../components/CPAPIAuthPopupButton";

const Home: React.FC = () => {

    const config = useConfig();
    const CPAPIUrl = config.CPAPIUrl;
    const authUrl = `${CPAPIUrl}`;

    return (
        <div className="home">
            <div className="grid-container">
                <CPAPIAuthPopupButton authUrl={authUrl}/>
            </div>
        </div>
    );
}

export default Home;

