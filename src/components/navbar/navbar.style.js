import styled from 'styled-components'

export const NavStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  img {
    max-height: 3rem;
  }

  .navbar_nav {
    display: inherit;
    align-items: center;

    a {
      margin: 1rem;
      text-decoration: none;
      font-size: 1.2rem;
    }
  }
`