import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --color-light: #fff8df;
    --color-dark: #333333;
}

html {
font-size: 62.5%;     //define 1rem = 10px
}

body{
    font-family: 'Kanit', sans-serif;
    overflow-x: hidden;
    background-color: var(--color-dark);
    color: var(--color-light);
		overscroll-behavior: none;
}

h1,h2,h3,h4,h5,h6{
    font-family: 'Kanit', sans-serif;
    margin: 0;
    padding: 0;
}
a{
    color: inherit;
    text-decoration:none;
}

canvas {
  width: 100vw;
  height: 100vh;
}

.page {
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;

    h1{
        padding-top: 35vh;
        font-size: 3rem;
    }
    .text{
        font-size: 1.5rem;
        padding-left: 10rem;
        padding-right: 10rem;
        padding-top: 10vh;
    }
}

`;

export default GlobalStyles;
