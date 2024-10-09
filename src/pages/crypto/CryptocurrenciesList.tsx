import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';
import { useCrypto } from '../../context/CryptoContext';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { CoinCard } from './CoinCard';

interface Coin {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  image: string;
}

export const CryptocurrenciesList: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [editingCoinId, setEditingCoinId] = useState<string | null>(null);
  const [holdingsInput, setHoldingsInput] = useState<number>(0);
  const { favoriteCoins, addFavorite, removeFavorite, portfolio, addCoinToPortfolio, updateCoinHoldings } = useCrypto();

  const isFavorite = (coinId: string) => favoriteCoins.some((favCoin) => favCoin.id === coinId);

  useEffect(() => {
    const fetchCoinsData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
          },
        });
        setCoins(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching coins data:', error);
        setLoading(false);
      }
    };

    fetchCoinsData();
  }, []);

  const handleAddToPortfolio = (coin: Coin, holdings: number) => {
    addCoinToPortfolio(coin, holdings);
  };

  const handleEditHoldings = (coinId: string) => {
    const coin = portfolio.find((c) => c.id === coinId);
    if (coin) {
      setEditingCoinId(coinId);
      setHoldingsInput(coin.holdings!);
    }
  };

  const handleUpdateHoldings = (coinId: string) => {
    updateCoinHoldings(coinId, holdingsInput);
    setEditingCoinId(null);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Grid container spacing={3}>
      {coins.map((coin) => (
        <Grid item xs={12} sm={6} md={4} key={coin.id}>
          <CoinCard
            coin={coin}
            isFavorite={isFavorite(coin.id)}
            holdingsInput={holdingsInput}
            editingCoinId={editingCoinId}
            onFavoriteToggle={() => (isFavorite(coin.id) ? removeFavorite(coin.id) : addFavorite(coin))}
            onEditHoldings={() => handleEditHoldings(coin.id)}
            onUpdateHoldings={() => handleUpdateHoldings(coin.id)}
            onHoldingsChange={setHoldingsInput}
            onAddToPortfolio={(holdings) => handleAddToPortfolio(coin, holdings)}
          />
        </Grid>
      ))}
    </Grid>
  );
};
