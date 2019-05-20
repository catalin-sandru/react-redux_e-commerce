import styled from 'styled-components'

export const ModalStyle = styled.div`
  color: var(--woodsmoke);
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--black-pearl);
  
  
  .modal {
    border-radius: 1rem;
    background: var(--bianca);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    max-width: 30%;

    img {
      max-width: 70%;
      height: auto;
    }
  
    h3 {
      padding: 0.5rem;
      text-align: center;
    }
  
    .button {
      margin: 0.5rem;
    }

    a {
      text-decoration: none;
      font-weight: bold;
      margin: 0.35rem 0;
    }
  }
`