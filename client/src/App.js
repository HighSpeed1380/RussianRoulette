import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Routes from "./Routes";
import { Provider as ReduxProvider } from 'react-redux';
import { AuthProvider } from './contexts/AuthContext';
import { WalletProvider } from './contexts/WalletContext';
import { AccountProvider } from './contexts/AccountContext';
import { BetListProvider } from './contexts/BetListContext';
import { GameInfoProvider } from './contexts/GameInfoContext';
import { BetInfoProvider } from './contexts/BetInfoContext';
import { UserStatsProvider } from './contexts/UserStatsContext';
import { store } from "./redux/store"
import { AffiliateProvider } from './contexts/AffiliateContext';
import { FairnessProvider } from './contexts/FairnessContext';

export default function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <WalletProvider>
          <AccountProvider>
            <GameInfoProvider>
              <BetListProvider>
                <BetInfoProvider>
                  <AffiliateProvider>
                    <FairnessProvider>
                      <UserStatsProvider>
                        <ReduxProvider store={store}>
                          <Router>
                            <Routes />
                          </Router>
                        </ReduxProvider>
                      </UserStatsProvider>
                    </FairnessProvider>
                  </AffiliateProvider>
                </BetInfoProvider>
              </BetListProvider>
            </GameInfoProvider>
          </AccountProvider>
        </WalletProvider>
      </AuthProvider>
    </ThemeProvider >
  );
}
