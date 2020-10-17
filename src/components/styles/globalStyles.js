import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    
    body {
        font-family: 'Open Sans', sans-serif;
        background-color: #1b1b1b;
        color: #efeeed;
    }

    a {
        text-decoration: none;
    }

    img {
        height: 100%;
        min-width: 100%;
        width: 100%;
    }
`;

export default GlobalStyle;
