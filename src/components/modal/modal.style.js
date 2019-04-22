import styled from 'styled-components'

export const ModalStyle = styled.div`
  background: blue;
  opacity: 1;
  color: red;
  display: flex;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  top: 25%;
  margin: 0 auto;
  max-width: 15rem;
  height: 25rem;
  text-align: center;
  
  img {
    max-width: 90%;
    height: auto;
  }

  h3 {
    padding: 0.5rem;
  }
`