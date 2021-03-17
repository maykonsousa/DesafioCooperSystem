import React from 'react';
import { FiUsers, FiUserCheck, FiStar } from 'react-icons/fi';
import {
  FaLaptopCode,
  FaLocationArrow,
  FaEnvelope,
  FaGlobe,
} from 'react-icons/fa';
import profileImg from '../../assets/profile.jpg';
import { Container } from './styles';

export const ProfileSideBar: React.FC = () => {
  return (
    <Container>
      <img src={profileImg} alt="avatar" />
      <p className="name">Maykon Sousa</p>
      <p className="username">maykonsousa</p>
      <p className="bio">
        Desenvolvedor web NodeJS | React | React Native | HTML | CSS | Boostrap
      </p>
      <div className="links">
        <a href="teste">
          <FiUsers /> Followers
        </a>
        <a href="teste">
          <FiUserCheck /> following
        </a>
        <a href="teste">
          <FiStar /> stars
        </a>
      </div>

      <div className="informations">
        <p className="job">
          <FaLaptopCode /> Stefanini Group
        </p>
        <p className="job">
          <FaLocationArrow /> Brasilia/DF
        </p>
        <p className="job">
          <FaEnvelope /> maykon.sousa@hotmail.com
        </p>
        <p className="job">
          <FaGlobe /> http://maykonsousa.github.io
        </p>
      </div>
    </Container>
  );
};
