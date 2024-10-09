import React from 'react';
import { Grid, Typography } from '@mui/material';
import FavoriteCoinCard from './FavoriteCoinCard';

interface Coin {
  id: string;
  name: string;
  current_price: number;
}

interface FavoriteCoinsListProps {
  favoriteCoins: Coin[];
  onRemoveFavorite: (coinId: string) => void;
}

const FavoriteCoinsList: React.FC<FavoriteCoinsListProps> = ({ favoriteCoins, onRemoveFavorite }) => {
  return favoriteCoins.length > 0 ? (
    <Grid container spacing={3}>
      {favoriteCoins.map((coin) => (
        <Grid item xs={12} sm={6} md={4} key={coin.id}>
          <FavoriteCoinCard coin={coin} onRemoveFavorite={onRemoveFavorite} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Typography variant="h6">No favorite coins yet.</Typography>
  );
};

export default FavoriteCoinsList;
