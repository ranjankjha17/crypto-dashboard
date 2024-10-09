import React from 'react';
import { Paper, Typography } from '@mui/material';

interface Coin {
  id: string;
  name: string;
  price_btc: number;
}

interface CoinCardProps {
  coin: Coin;
}

const CoinCard: React.FC<CoinCardProps> = ({ coin }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6">{coin.name}</Typography>
      <Typography variant="body1">Price (in BTC): {coin.price_btc}</Typography>
    </Paper>
  );
};

export default CoinCard;
