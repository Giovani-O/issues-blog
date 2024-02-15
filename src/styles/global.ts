import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.2s, color 0.2s, opacity 0.2s, border-color 0.2s;
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 0 transparent;
  }

  body, input, textarea, button, a {
    font-family: 'Nunito', sans-serif;
    line-height: 160%;
  }
`
