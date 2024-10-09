import React, { useState } from 'react';
import { Paper, Typography, Switch, FormControlLabel } from '@mui/material';
import { useCrypto } from '../../context/CryptoContext';

const DisplaySettings: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { setBackgroundColor, setFontColor } = useCrypto();

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isDarkMode = event.target.checked;
    setDarkMode(isDarkMode);

    if (isDarkMode) {
      setBackgroundColor('#36454F');
      setFontColor('#32CD32');
    } else {
      setBackgroundColor('#ffffff');
      setFontColor('#32CD32');
    }
  };

  return (
    <Paper sx={{ padding: 3, marginBottom: 2 }}>
      <Typography variant="h6">Display Settings</Typography>
      <FormControlLabel
        control={<Switch checked={darkMode} onChange={handleThemeChange} />}
        label="Dark Mode"
      />
    </Paper>
  );
};

export default DisplaySettings;
