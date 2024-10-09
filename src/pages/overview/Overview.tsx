import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { fetchOverviewData } from '../../services/OverviewService';
import { OverviewCard } from './OverviewCard';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { useCrypto } from '../../context/CryptoContext';

interface OverviewData {
  market_cap_usd: number;
  total_volume_usd: number;
  active_cryptocurrencies: number;
}

export const Overview: React.FC = () => {
  const [overviewData, setOverviewData] = useState<OverviewData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { backgroundColor, fontColor } = useCrypto()
  useEffect(() => {
    const loadOverviewData = async () => {
      try {
        const data = await fetchOverviewData();
        setOverviewData(data);
      } catch (error) {
        console.error('Error loading overview data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadOverviewData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Grid container spacing={3} sx={{ backgroundColor: backgroundColor, color: fontColor }}>
      <Grid item xs={12} sm={6} md={4}>
        <OverviewCard
          title="Total Market Cap (USD)"
          value={`$${overviewData?.market_cap_usd.toLocaleString() || 0}`}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <OverviewCard
          title="Total Volume (USD)"
          value={`$${overviewData?.total_volume_usd.toLocaleString() || 0}`}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <OverviewCard
          title="Active Cryptocurrencies"
          value={overviewData?.active_cryptocurrencies.toLocaleString() || 0}
        />
      </Grid>
    </Grid>
  );
};
