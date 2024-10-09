import React from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import ArticleIcon from '@mui/icons-material/Article';
import PortfolioIcon from '@mui/icons-material/AccountBalanceWallet';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import { useCrypto } from '../context/CryptoContext';
interface MenuItemsProps {
    handleMenuItemClick?: () => void;
}

export const MenuItems: React.FC<MenuItemsProps> = ({ handleMenuItemClick }) => {
    const {backgroundColor,fontColor}=useCrypto()
    return (
        <List sx={{backgroundColor:backgroundColor,color:fontColor}}>
            <ListItemButton component={Link} to="/dashboard" onClick={handleMenuItemClick}>
                <ListItemIcon>
                    <DashboardIcon sx={{color:fontColor}}/>
                </ListItemIcon>
                <ListItemText primary="Overview" />
            </ListItemButton>

            <ListItemButton component={Link} to="/cryptocurrencies" onClick={handleMenuItemClick}>
                <ListItemIcon>
                    <CurrencyBitcoinIcon sx={{color:fontColor}}/>
                </ListItemIcon>
                <ListItemText primary="Cryptocurrencies" />
            </ListItemButton>

            <ListItemButton component={Link} to="/trending" onClick={handleMenuItemClick}>
                <ListItemIcon>
                    <TrendingUpIcon sx={{color:fontColor}}/>
                </ListItemIcon>
                <ListItemText primary="Trending Coins" />
            </ListItemButton>

            <ListItemButton component={Link} to="/news" onClick={handleMenuItemClick}>
                <ListItemIcon>
                    <ArticleIcon sx={{color:fontColor}}/>
                </ListItemIcon>
                <ListItemText primary="Crypto News" />
            </ListItemButton>

            <ListItemButton component={Link} to="/portfolio" onClick={handleMenuItemClick}>
                <ListItemIcon>
                    <PortfolioIcon sx={{color:fontColor}}/>
                </ListItemIcon>
                <ListItemText primary="Portfolio" />
            </ListItemButton>

            <ListItemButton component={Link} to="/favorites" onClick={handleMenuItemClick}>
                <ListItemIcon>
                    <FavoriteIcon sx={{color:fontColor}}/>
                </ListItemIcon>
                <ListItemText primary="Favorites" />
            </ListItemButton>

            <ListItemButton component={Link} to="/settings" onClick={handleMenuItemClick}>
                <ListItemIcon>
                    <SettingsIcon sx={{color:fontColor}}/>
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItemButton>
        </List>
    );
};

