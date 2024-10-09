import React, { createContext, ReactNode, useState, useContext } from 'react';

interface Coin {
  id: string;
  name: string;
  current_price: number;
  holdings?: number;

}

interface CryptoContextProps {
  coins: Coin[];
  portfolio: Coin[];
  setPortfolio: React.Dispatch<React.SetStateAction<Coin[]>>;
  favoriteCoins: Coin[];
  addFavorite: (coin: Coin) => void;
  removeFavorite: (coinId: string) => void;
  addCoinToPortfolio: (coin: Coin, holdings: number) => void; 
  updateCoinHoldings: (coinId: string, newHoldings: number) => void;
  backgroundColor: string;
  fontColor: string;
  setBackgroundColor: (color: string) => void;
  setFontColor: (color: string) => void;

}

export const CryptoContext = createContext<CryptoContextProps>({
  coins: [],
  portfolio: [],
  setPortfolio: () => { },
  favoriteCoins: [],
  addFavorite: () => { },
  removeFavorite: () => { },
  addCoinToPortfolio: () => { },
  updateCoinHoldings: () => { },
  backgroundColor: '#ffffff',
  fontColor: '#000000',
  setBackgroundColor: () => {},
  setFontColor: () => {},

});

interface CryptoProviderProps {
  children: ReactNode;
}

export const CryptoProvider: React.FC<CryptoProviderProps> = ({ children }) => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [portfolio, setPortfolio] = useState<Coin[]>([]);
  const [favoriteCoins, setFavoriteCoins] = useState<Coin[]>([]);
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');
  const [fontColor, setFontColor] = useState<string>('#000000');
  // console.log("backgroundcolor",backgroundColor)
  // console.log("fontcolor",fontColor)
  // Function to add a coin to favorites
  const addFavorite = (coin: Coin) => {
    setFavoriteCoins((prevFavorites) => {
      if (!prevFavorites.some(favCoin => favCoin.id === coin.id)) {
        return [...prevFavorites, coin];
      }
      return prevFavorites;
    });
  };

  // Function to remove a coin from favorites
  const removeFavorite = (coinId: string) => {
    setFavoriteCoins((prevFavorites) =>
      prevFavorites.filter(favCoin => favCoin.id !== coinId)
    );
  };
  const addCoinToPortfolio = (coin: Coin, holdings: number) => {
    setPortfolio((prevPortfolio) => {
      const existingCoin = prevPortfolio.find((c) => c.id === coin.id);

      if (existingCoin) {
        return prevPortfolio.map((c) =>
          c.id === coin.id ? { ...c, holdings: c.holdings! + holdings } : c
        );
      } else {
        return [...prevPortfolio, { ...coin, holdings }];
      }
    });
  };

  const updateCoinHoldings = (coinId: string, newHoldings: number) => {
    setPortfolio((prevPortfolio) =>
      prevPortfolio.map((c) =>
        c.id === coinId ? { ...c, holdings: newHoldings } : c
      )
    )
  }

  return (
    <CryptoContext.Provider value={{ coins, portfolio, setPortfolio, favoriteCoins, addFavorite, removeFavorite, addCoinToPortfolio , updateCoinHoldings,backgroundColor, fontColor, setBackgroundColor, setFontColor }}>
      {children}
    </CryptoContext.Provider>
  );
};

export const useCrypto = () => useContext(CryptoContext);
