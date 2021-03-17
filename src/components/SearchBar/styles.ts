import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  background: #fff;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  margin: 0 auto;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  transform: translateY(-80%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  button {
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: var(--green);
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 14px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.95);
    }
  }
`;
