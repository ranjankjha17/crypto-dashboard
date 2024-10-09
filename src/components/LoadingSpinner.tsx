import React from 'react';
import { CircularProgress, Grid, Grid2 } from '@mui/material';

export const LoadingSpinner: React.FC = () => {
  return (
    <Grid2 container justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
    <Grid item>
      <CircularProgress />
    </Grid>
  </Grid2>

  )
};
