import React, { useState } from 'react';
import { Box, CssBaseline, IconButton, Toolbar, useMediaQuery, ThemeProvider, createTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {Sidebar} from '../../components/Sidebar';

const drawerWidth = 240;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ position: 'absolute', top: 16, left: 16 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Sidebar
          isMobile={isMobile}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          drawerWidth={drawerWidth}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            marginLeft: { sm: 0, md: 30, lg: 30, xl: 30 },
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` }, 
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
