import React from 'react';
import './styles.css';

// Define the props interface, even if it's empty for now
interface PortfolioThumbnailProps {
  // Example prop: title of the portfolio
  title?: string;
}

const PortfolioThumbnail: React.FC<PortfolioThumbnailProps> = ({ title = "Default Portfolio" }) => {
  return (
    <div className="portfolio-thumbnail">
      <p>{title}</p>
      {/* Additional content will go here */}
    </div>
  );
}

export default PortfolioThumbnail;
