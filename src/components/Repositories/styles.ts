import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 5rem;
  .repository-title {
    font-size: 1rem;
    font-weight: bold;
    color: var(--text-title);
  }
  .repository-description {
    color: var(--text-body);
    margin-left: 1rem;
    display: block;
  }

  .git-button {
    display: block;
    margin: 1rem;
    align-items: center;
    justify-content: center;
    button {
      font-size: 1rem;
      color: #fff;
      background: var(--blue-light);
      padding: 0 2rem;
      border: 0;
      height: 3rem;
      border-radius: 0.5rem;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
