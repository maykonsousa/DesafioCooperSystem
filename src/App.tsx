import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { GlobalStyle } from './styles/global';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <GlobalStyle />
    </>
  );
};
