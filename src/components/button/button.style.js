import styled from 'styled-components'

export const ButtonStyle = styled.button`
  height: 100%;
  border: 0.1rem solid var(--gold);
  border-radius: 0.5rem;
  display: inline-flex;
  justify-content: space-between;
  padding: 0.5rem;
  text-decoration: none;
  align-items: center;
  color: var(--woodsmoke);
  font-size: 1rem;
  text-transform: capitalize;

  
  a {
    text-decoration: none;
  }

  &:hover {
    background: var(--black-pearl);
    color: var(--gold);
    transition: all 0.2s;
  }
`