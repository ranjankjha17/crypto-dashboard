import React from 'react';
import { Grid, Typography } from '@mui/material';
import PortfolioCard from './PortfolioCard';

interface Coin {
  id: string;
  name: string;
  current_price: number;
  holdings?: number;
}

interface PortfolioListProps {
  portfolio: Coin[];
}

const PortfolioList: React.FC<PortfolioListProps> = ({ portfolio }) => {
  return (
    <Grid container spacing={3}>
      {portfolio.length > 0 ? (
        portfolio.map((coin: Coin) => (
          <Grid item xs={12} sm={6} md={4} key={coin.id}>
            <PortfolioCard coin={coin} />
          </Grid>
        ))
      ) : (
        <Typography variant="h6">Your portfolio is empty.</Typography>
      )}
    </Grid>
  );
};

export default PortfolioList;
