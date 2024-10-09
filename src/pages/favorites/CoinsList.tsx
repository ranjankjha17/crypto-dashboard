import React from 'react';
import { Grid, Typography } from '@mui/material';
import CoinCard from './CoinCard';

interface Coin {
  id: string;
  name: string;
  current_price: number;
}

interface CoinsListProps {
  coins: Coin[];
  favoriteCoins: Coin[];
  onToggleFavorite: (coin: Coin) => void;
}

const CoinsList: React.FC<CoinsListProps> = ({ coins, favoriteCoins, onToggleFavorite }) => {
  const isFavorite = (coinId: string) => favoriteCoins.some((coin) => coin.id === coinId);

  return coins.length > 0 ? (
    <Grid container spacing={3}>
      {coins.map((coin) => (
        <Grid item xs={12} sm={6} md={4} key={coin.id}>
          <CoinCard coin={coin} isFavorite={isFavorite(coin.id)} onToggleFavorite={onToggleFavorite} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Typography variant="h6" sx={{ padding: 2 }}>
      No coins available.
    </Typography>
  );
};

export default CoinsList;
