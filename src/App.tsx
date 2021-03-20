import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { UserProvider } from './context/userContext';
import { GlobalStyle } from './styles/global';

export const App: React.FC = () => {
  return (
    <UserProvider>
      <Header />
      <Main />
      <GlobalStyle />
    </UserProvider>
  );
};
