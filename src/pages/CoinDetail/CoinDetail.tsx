import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CoinPriceChart from './CoinPriceChart';
import TimeRangeSelector from './TimeRangeSelector';
import { SelectChangeEvent } from '@mui/material/Select';
import { LoadingSpinner } from '../../components/LoadingSpinner';

interface HistoricalData {
  prices: Array<[number, number]>;
}

export const CoinDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [historicalData, setHistoricalData] = useState<HistoricalData | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<string>('7');

  const timeRangeOptions = [
    { value: '1', label: '24 Hours' },
    { value: '7', label: '7 Days' },
    { value: '30', label: '1 Month' },
    { value: '180', label: '6 Months' },
    { value: '365', label: '1 Year' },
    { value: '1825', label: '5 Years' },
  ];

  useEffect(() => {
    const fetchCoinData = async () => {
      setLoading(true); 
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
          {
            params: {
              vs_currency: 'usd',
              days: timeRange, 
            },
          }
        );
        setHistoricalData(response.data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching historical data:', error);
        setLoading(false);
      }
    };

    fetchCoinData();
  }, [id, timeRange]); 

  const handleTimeRangeChange = (event: SelectChangeEvent) => {
    setTimeRange(event.target.value as string);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  const chartData = {
    labels: historicalData?.prices.map((data) => new Date(data[0]).toLocaleDateString()),
    datasets: [
      {
        label: `Price (USD) - Last ${timeRange} Days`,
        data: historicalData?.prices.map((data) => data[1]),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return (
    <>
      <TimeRangeSelector
        timeRange={timeRange}
        onTimeRangeChange={handleTimeRangeChange}
        options={timeRangeOptions}
      />
      <CoinPriceChart chartData={chartData} timeRange={timeRange} />
    </>
  );
};
