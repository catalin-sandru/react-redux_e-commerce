import styled from 'styled-components'

export const NavStyle = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  background: green;

  &:last-child {
    position: absolute;
    right: 0;
  }
`