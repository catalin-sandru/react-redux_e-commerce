import styled from 'styled-components';

export const DetailsStyle = styled.div`
max-width: 80%;
justify-self: center;

@media (max-width: 768px) {
  width: 80%;
  margin: auto;

  .detailsWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .detailButton {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin: 2rem;
  }

  h1{
    margin-top: 2rem;
  }

  img {
    max-width: 45%;
  }
}

@media (min-width: 1024px) {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(4, auto)
}
`