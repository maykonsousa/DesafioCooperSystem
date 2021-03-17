import styled from 'styled-components';

export const Container = styled.header`
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem 10rem;
  @media (max-width: 720px) {
    padding: 1rem 0.5rem 2rem;
  }
  img {
    width: 15rem;
  }
  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    padding: 0 2rem;
    border: 0;
    height: 3rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
