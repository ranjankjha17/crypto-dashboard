import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Typography, Paper } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface CoinPriceChartProps {
  chartData: any;
  timeRange: string;
}

const CoinPriceChart: React.FC<CoinPriceChartProps> = ({ chartData, timeRange }) => {
  return (
    <Paper elevation={3} sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Coin Price Chart
      </Typography>
      <Line data={chartData} />
    </Paper>
  );
};

export default CoinPriceChart;
