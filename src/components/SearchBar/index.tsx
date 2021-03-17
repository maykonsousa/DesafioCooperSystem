import { TextField } from '@material-ui/core';
import React from 'react';
import { Container } from './styles';

export const SearchBar: React.FC = () => {
  return (
    <Container>
      <TextField placeholder="GitHub UserName" />
      <button type="button">ok</button>
    </Container>
  );
};
