import React from 'react';
import { Drawer, Toolbar } from '@mui/material';
import {MenuItems} from './MenuItems';
import { useCrypto } from '../context/CryptoContext';

interface SidebarProps {
  isMobile: boolean;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  drawerWidth: number;
}

export const Sidebar: React.FC<SidebarProps> = ({ isMobile, mobileOpen, handleDrawerToggle, drawerWidth }) => {
  const {backgroundColor,fontColor}=useCrypto()
  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={!isMobile || mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, 
      }}
      sx={{
        display: { xs: 'block', sm: 'none', md: 'block' },
        '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box',backgroundColor:backgroundColor,color:fontColor },
        
      }}
    >
      <Toolbar />
      <MenuItems handleMenuItemClick={isMobile ? handleDrawerToggle : undefined} />
    </Drawer>
  );
};

