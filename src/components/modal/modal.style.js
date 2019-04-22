import styled from 'styled-components'

export const ModalStyle = styled.div`
  background: blue;
  opacity: 1;
  color: red;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 30%;
  height: 28rem;
  text-align: center;
  
  img {
    max-width: 90%;
    height: auto;
  }

  h3 {
    padding: 0.5rem;
  }

  .button {
    margin: 0.5rem;
  }

  a {
    text-decoration: none;
    font-weight: bold;
  }
`