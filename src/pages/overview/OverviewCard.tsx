import React from 'react';
import { Paper, Typography } from '@mui/material';

interface OverviewCardProps {
  title: string;
  value: number | string;
}

export const OverviewCard: React.FC<OverviewCardProps> = ({ title, value }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h4">{value}</Typography>
    </Paper>
  );
};
