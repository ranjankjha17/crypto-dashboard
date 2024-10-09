import axios from 'axios';

export const fetchOverviewData = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/global');
    const data = response.data.data;
    return {
      market_cap_usd: data.total_market_cap.usd,
      total_volume_usd: data.total_volume.usd,
      active_cryptocurrencies: data.active_cryptocurrencies,
    };
  } catch (error) {
    console.error('Error fetching overview data:', error);
    throw error;
  }
};
