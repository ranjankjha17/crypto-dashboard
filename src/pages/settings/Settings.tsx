import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import ProfileSettings from './ProfileSettings';
import DisplaySettings from './DisplaySettings';
import NotificationSettings from './NotificationSettings';
import { useCrypto } from '../../context/CryptoContext';

export const Settings: React.FC = () => {
  const { backgroundColor, fontColor } = useCrypto();

  return (
    <Container maxWidth="md" sx={{ paddingTop: 4, backgroundColor: backgroundColor, color: fontColor }} >
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <ProfileSettings />
      <DisplaySettings />
      <NotificationSettings />
    </Container>
  );
};

