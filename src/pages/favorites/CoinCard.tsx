import React from 'react';
import { Paper, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface Coin {
  id: string;
  name: string;
  current_price: number;
}

interface CoinCardProps {
  coin: Coin;
  isFavorite: boolean;
  onToggleFavorite: (coin: Coin) => void;
}

const CoinCard: React.FC<CoinCardProps> = ({ coin, isFavorite, onToggleFavorite }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6">{coin.name}</Typography>
      <Typography variant="body1">Price: ${coin.current_price}</Typography>
      <IconButton
        color={isFavorite ? 'secondary' : 'default'}
        onClick={() => onToggleFavorite(coin)}
      >
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </Paper>
  );
};

export default CoinCard;
