import React from 'react';
import { Grid, Paper, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useCrypto } from '../../context/CryptoContext'; 

interface Coin {
  id: string;
  name: string;
  current_price: number;
}

export const Favorites: React.FC = () => {
  const { coins, favoriteCoins, addFavorite, removeFavorite } = useCrypto();
  const isFavorite = (coinId: string) => favoriteCoins.some(coin => coin.id === coinId);

  return (
    <Grid container spacing={3}>
      {favoriteCoins.length > 0 ? (
        favoriteCoins.map((coin: Coin) => (
          <Grid item xs={12} sm={6} md={4} key={coin.id}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">{coin.name}</Typography>
              <Typography variant="body1">Price: ${coin.current_price}</Typography>
              <IconButton
                color="secondary"
                onClick={() => removeFavorite(coin.id)}
              >
                <FavoriteIcon />
              </IconButton>
            </Paper>
          </Grid>
        ))
      ) : (
        <Typography variant="h6">No favorite coins yet.</Typography>
      )}

      {coins.map((coin: Coin) => (
        <Grid item xs={12} sm={6} md={4} key={coin.id}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">{coin.name}</Typography>
            <Typography variant="body1">Price: ${coin.current_price}</Typography>
            <IconButton
              color={isFavorite(coin.id) ? 'secondary' : 'default'}
              onClick={() => {
                isFavorite(coin.id) ? removeFavorite(coin.id) : addFavorite(coin);
              }}
            >
              {isFavorite(coin.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Favorites