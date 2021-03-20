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
    margin-left: 3rem;
    display: block;
  }

  .git-button {
    display:block;
    margin-top: 3rem;
    align-items:center;
    justify-content:center;
    transform: translateX(-750px);
    button{
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
