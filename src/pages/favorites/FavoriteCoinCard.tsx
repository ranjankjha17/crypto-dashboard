import React from 'react';
import { Paper, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Coin {
  id: string;
  name: string;
  current_price: number;
}

interface FavoriteCoinCardProps {
  coin: Coin;
  onRemoveFavorite: (coinId: string) => void;
}

const FavoriteCoinCard: React.FC<FavoriteCoinCardProps> = ({ coin, onRemoveFavorite }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6">{coin.name}</Typography>
      <Typography variant="body1">Price: ${coin.current_price}</Typography>
      <IconButton color="secondary" onClick={() => onRemoveFavorite(coin.id)}>
        <FavoriteIcon />
      </IconButton>
    </Paper>
  );
};

export default FavoriteCoinCard;
