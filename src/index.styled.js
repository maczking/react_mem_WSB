import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    /* font-family: 'Roboto', sans-serif; */
}
  body {
   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #26292d;
  }
`;

export default GlobalStyle;
