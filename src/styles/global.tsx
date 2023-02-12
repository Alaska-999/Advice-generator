import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`

  * {
    /* Typography */
    --family: 'Manrope', sans-serif;
    --fz: 28px;

    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: var(--family), sans-serif;
    font-weight: 800;
  }


  body {
    //colors
    --light-cyan: hsl(193, 38%, 86%);
    --neon-green: hsl(150, 100%, 66%);
    --grayish-blue: hsl(217, 19%, 38%);
    --grayish-blue-dark: hsl(217, 19%, 24%);
    --blue-dark: hsl(218, 23%, 16%);

    background-color: var(--color-bg);
  }

`

export default GlobalStyle