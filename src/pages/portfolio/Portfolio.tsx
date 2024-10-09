import React, { useContext } from 'react';
import { CryptoContext } from '../../context/CryptoContext';
import PortfolioList from './PortfolioList';

export const Portfolio: React.FC = () => {
  const { portfolio } = useContext(CryptoContext);

  return <PortfolioList portfolio={portfolio} />;
};
