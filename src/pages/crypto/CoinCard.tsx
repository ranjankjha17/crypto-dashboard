import React from 'react';
import { Paper, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { TextField } from '@mui/material';

interface Coin {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  image: string;
}

interface CoinCardProps {
  coin: Coin;
  isFavorite: boolean;
  holdingsInput: number;
  editingCoinId: string | null;
  onFavoriteToggle: () => void;
  onEditHoldings: () => void;
  onUpdateHoldings: () => void;
  onHoldingsChange: (value: number) => void;
  onAddToPortfolio: (holdings: number) => void;
}

export const CoinCard: React.FC<CoinCardProps> = ({
  coin,
  isFavorite,
  holdingsInput,
  editingCoinId,
  onFavoriteToggle,
  onEditHoldings,
  onUpdateHoldings,
  onHoldingsChange,
  onAddToPortfolio,
}) => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Link to={`/coin/${coin.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={coin.image} alt={coin.name} width="50" />
        <Typography variant="h6">{coin.name}</Typography>
        <Typography variant="body1">Symbol: {coin.symbol}</Typography>
        <Typography variant="body2">Price: ${coin.current_price}</Typography>
        <Typography variant="body2">Market Cap: ${coin.market_cap.toLocaleString()}</Typography>
      </Link>
      <IconButton color={isFavorite ? 'secondary' : 'default'} onClick={onFavoriteToggle}>
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>

      {editingCoinId === coin.id ? (
        <div>
          <TextField
            type="number"
            label="Update Holdings"
            variant="outlined"
            size="small"
            value={holdingsInput}
            onChange={(e) => onHoldingsChange(parseFloat(e.target.value))}
          />
          <IconButton color="primary" onClick={onUpdateHoldings}>
            <DoneIcon />
          </IconButton>
        </div>
      ) : (
        <>
          <TextField
            type="number"
            label="Holdings"
            variant="outlined"
            size="small"
            onChange={(e) => {
              const holdings = parseFloat(e.target.value);
              onAddToPortfolio(holdings);
            }}
          />
          <IconButton color="primary" onClick={onEditHoldings}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </Paper>
  );
};
