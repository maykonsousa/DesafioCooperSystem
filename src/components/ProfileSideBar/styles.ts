import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  padding-bottom: 5rem;
  margin-top: -6.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (max-width: 720px) {
    display: none;
  }
  img {
    border-radius: 50%;
    width: 200px;
  }
  .name {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--text-title);
    margin-top: 0.5rem;
  }

  .username {
    font-size: 1.5rem;
    color: var(--text-body);
  }

  .bio {
    font-size: 1rem;
    text-align: center;
    margin-top: 0.5rem;
  }

  .links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    color: var(--text-body);
    a {
      display: block;
      text-decoration: none;
      padding: 0.5rem;
      color: var(--text-body);
      &:hover {
        color: var(--text-title);
        font-weight: 500;
      }
      svg {
        color: var(--green);
      }
    }
  }

  .infomation {
    color: var(--text-title);
  }
`;
