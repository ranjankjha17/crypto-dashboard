import React from 'react';
import './App.css';
import Layout from './pages/Layout/Layout';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Overview } from './pages/overview/Overview';
import { CryptocurrenciesList } from './pages/crypto/CryptocurrenciesList';
import { CryptoProvider, useCrypto } from './context/CryptoContext';
import { CoinDetail } from './pages/CoinDetail/CoinDetail';
import { TrendingCoins } from './pages/TrendingCoins/TrendingCoins';
import { News } from './pages/news/News';
import { Portfolio } from './pages/portfolio/Portfolio';
import Favorites from './pages/favorites/Favorites';
import { Settings } from './pages/settings/Settings';

const AppContent: React.FC = () => {
  const { backgroundColor, fontColor } = useCrypto();

  return (
    <div style={{ backgroundColor: backgroundColor, color: fontColor }}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/dashboard" element={<Overview />} />
            <Route path='/cryptocurrencies' element={<CryptocurrenciesList />} />
            <Route path="/coin/:id" element={<CoinDetail />} />
            <Route path="/trending" element={<TrendingCoins />} />
            <Route path="/news" element={<News />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

function App() {
  return (
    <CryptoProvider>
      <AppContent />  {/* Move the CryptoProvider here, so the whole app can use the context */}
    </CryptoProvider>
  );
}

export default App;
