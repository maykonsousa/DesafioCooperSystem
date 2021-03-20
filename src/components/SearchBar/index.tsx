import { TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { userContext } from '../../context/userContext';
import { Container } from './styles';

export const SearchBar: React.FC = () => {
  const [username, setUsername] = useState('maykonsousa');
  const { setUserInput } = useContext(userContext);
  return (
    <Container>
      <TextField
        placeholder="GitHub UserName"
        onChange={e => setUsername(e.target.value)}
      />
      <button type="button" onClick={() => setUserInput(username)}>
        ok
      </button>
    </Container>
  );
};
