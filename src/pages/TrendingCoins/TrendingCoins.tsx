import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CoinList from './CoinList';
import { LoadingSpinner } from '../../components/LoadingSpinner';

interface Coin {
  id: string;
  name: string;
  price_btc: number;
}

export const TrendingCoins: React.FC = () => {
  const [trending, setTrending] = useState<Coin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
        const coinData = response.data.coins.map((coin: any) => coin.item);
        setTrending(coinData);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingCoins();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return <CoinList coins={trending} />;
};
