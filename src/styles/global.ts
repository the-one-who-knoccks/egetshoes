import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  :focus {
    outline: 0;
  }

  #root {
    max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
  }

  body, input, textarea, button { 
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }

  h1, h2, h3, h4, h5, h6 { 
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme.colors['base-title']};
    line-height: 130%;
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`
