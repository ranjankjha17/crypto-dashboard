import React from 'react';
import { Paper, Typography } from '@mui/material';

interface Coin {
  id: string;
  name: string;
  current_price: number;
  holdings?: number;
}

interface PortfolioCardProps {
  coin: Coin;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ coin }) => {
  const holdingsValue = coin.holdings ?? 0; // Fallback to 0
  const totalValue = holdingsValue * coin.current_price;

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6">{coin.name}</Typography>
      <Typography variant="body1">Holdings: {holdingsValue}</Typography>
      <Typography variant="body2">Value: ${totalValue.toFixed(2)}</Typography>
    </Paper>
  );
};

export default PortfolioCard;
