import React, { useState } from 'react';
import { FormControlLabel, Switch, Paper, Typography } from '@mui/material';

const NotificationSettings: React.FC = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  const handleEmailToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailNotifications(event.target.checked);
  };

  const handlePushToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPushNotifications(event.target.checked);
  };

  return (
    <Paper sx={{ padding: 3, marginBottom: 2 }}>
      <Typography variant="h6">Notification Settings</Typography>
      <FormControlLabel
        control={<Switch checked={emailNotifications} onChange={handleEmailToggle} />}
        label="Email Notifications"
      />
      <FormControlLabel
        control={<Switch checked={pushNotifications} onChange={handlePushToggle} />}
        label="Push Notifications"
      />
    </Paper>
  );
};

export default NotificationSettings;
