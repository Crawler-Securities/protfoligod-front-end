import React from 'react';
import './styles.css';
import PortfolioThumbnail from '../../components/PortfolioThumbnail';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="grid-container">
        <PortfolioThumbnail />
        {/* More thumbnails or components can be added here */}
      </div>
    </div>
  );
}

export default Home;
