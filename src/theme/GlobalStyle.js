import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    min-height: 100vh;
    color: ${({ theme }) => theme.colors['dark-100']};
    background-color: ${({ theme }) => theme.colors['light-100']};
  }

  button,
  input, 
  textarea {
    border: none;
    outline: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
