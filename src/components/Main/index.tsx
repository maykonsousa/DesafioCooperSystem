import React from 'react';
import { ProfileSideBar } from '../ProfileSideBar';
import { Repositories } from '../Repositories';
import { Container } from './styles';

export const Main: React.FC = () => {
  return (
    <Container>
      <ProfileSideBar />
      <Repositories />
    </Container>
  );
};
