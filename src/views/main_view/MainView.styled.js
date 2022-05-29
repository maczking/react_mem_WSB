import styled from 'styled-components';

export const StyledMain = styled.main`
  max-width: 100%;
  @media (min-width: 900px) {
    max-width: 80%;
  }
  margin: 120px auto;
  display: grid;
  justify-items: center;
  grid-gap: 70px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 350px;
`;
