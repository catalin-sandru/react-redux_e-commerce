import styled from 'styled-components';

export const DetailsStyle = styled.div`
max-width: 80%;
justify-self: center;

h4 {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
}

@media (max-width: 768px) {
  width: 80%;
  margin: auto;

  .detailsWrapper {
    display: flex;
    flex-direction: column;
  }
  
  .detailButton {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin: 2rem 0;
  }
  
  h1{
    margin-top: 2rem;
  }
  
  img {
    align-self: center;
  }
}

@media (min-width: 768px) {
  margin: auto;

  .detailsWrapper {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    
    h1 {
    grid-column: 1/3;
    grid-row: 1/2;
    text-align: center;
    margin: 1.5rem 0;
  }
  
  img {
    grid-column: 1/2;
    grid-row: 2/3;
    max-width: 100%;
    height: auto;
  }
  
  h3, h4, strong, p {
    grid-column: 2/3;
    grid-row: 2/3;
  }

  .detailButton {
    margin: 1.5rem 0;
    text-align: center;
    display: flex;
    justify-content: space-around;

    a {
      margin: 0 1rem;
    }
  }
  }

  strong {
    margin-bottom: 1rem;
  }
}
`