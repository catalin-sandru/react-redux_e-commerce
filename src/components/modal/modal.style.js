import styled from 'styled-components'

export const ModalStyle = styled.div`
  background: var(--black-pearl);
  /* opacity: 0.4; */
  color: red;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid whitesmoke;
    margin: auto;
    max-width: 30%;

    img {
      max-width: 70%;
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
  }
`