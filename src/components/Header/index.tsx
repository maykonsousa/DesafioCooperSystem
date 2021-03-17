import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';
import { SearchBar } from '../SearchBar';

export const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GitShow" />
        <button type="button">Sobre o Autor</button>
      </Content>
      <SearchBar />
    </Container>
  );
};
