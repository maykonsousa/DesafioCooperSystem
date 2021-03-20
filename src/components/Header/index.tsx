import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';
import { SearchBar } from '../SearchBar';

export const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GitShow" />
        <a
          href="http://maykonsousa.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button">Sobre o Autor</button>
        </a>
      </Content>
      <SearchBar />
    </Container>
  );
};
