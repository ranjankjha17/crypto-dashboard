import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';

const ProfileSettings: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    console.log('Profile updated:', { name, email });
  };

  return (
    <Paper sx={{ padding: 3, marginBottom: 2 }}>
      <Typography variant="h6">Profile Settings</Typography>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Paper>
  );
};

export default ProfileSettings;
