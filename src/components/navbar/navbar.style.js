import styled from 'styled-components'

export const NavStyle = styled.div`
background:
linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
background-color: #131313;
background-size: 20px 20px;
padding: 1rem;
border-bottom-left-radius: 100% 0.7rem;
border-bottom-right-radius: 100% 0.7rem;

p {
  margin-left: 0.5rem;
  font-weight: bold;
}

.nav_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--bianca);
  border-radius: 0.5rem;

  a {
    text-decoration: none;
    margin: 1rem;
    font-size: 1.2rem;
  }
}
  

  .navbar_nav {
    display: inherit;
    align-items: center;

    i {
      color: black;
      font-size: 3rem;
      margin-left: 1rem;
    }
  }
`