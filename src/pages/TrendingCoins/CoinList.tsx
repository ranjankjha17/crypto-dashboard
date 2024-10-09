import React from 'react';
import { Grid } from '@mui/material';
import CoinCard from './CoinCard';

interface Coin {
  id: string;
  name: string;
  price_btc: number;
}

interface CoinListProps {
  coins: Coin[];
}

const CoinList: React.FC<CoinListProps> = ({ coins }) => {
  return (
    <Grid container spacing={3}>
      {coins.map((coin) => (
        <Grid item xs={12} sm={6} md={4} key={coin.id}>
          <CoinCard coin={coin} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CoinList;
