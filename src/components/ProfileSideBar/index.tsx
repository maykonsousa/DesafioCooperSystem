import React, { useContext } from 'react';
import { FiUsers, FiUserCheck, FiStar } from 'react-icons/fi';
import {
  FaLaptopCode,
  FaLocationArrow,
  FaEnvelope,
  FaGlobe,
} from 'react-icons/fa';
import { Container } from './styles';
import { userContext } from '../../context/userContext';

export const ProfileSideBar: React.FC = () => {
  const { userData } = useContext(userContext);
  return (
    <Container>
      <img src={userData.avatar_url} alt="avatar" />
      <p className="name"> {userData.name} </p>
      <p className="username">{userData.login}</p>
      <p className="bio">{userData.bio}</p>
      <div className="links">
        <a href="teste">
          <FiUsers /> {`${userData.followers} followers`}
        </a>
        <a href="teste">
          <FiUserCheck /> {`${userData.following} following`}
        </a>
        <a href="teste">
          <FiStar /> 156 stars
        </a>
      </div>

      <div className="informations">
        <p className="job">
          <FaLaptopCode /> {userData.company}
        </p>
        <p className="job">
          <FaLocationArrow />{' '}
          {userData.location ? userData.location : 'Sem Local'}
        </p>
        <p className="job">
          <FaEnvelope /> {userData.email ? userData.email : 'Sem email'}
        </p>
        <p className="job">
          <FaGlobe /> {userData.blog ? userData.blog : 'Sem site'}
        </p>
      </div>
    </Container>
  );
};
