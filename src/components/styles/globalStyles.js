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
        background-color: ${({ theme: { colors } }) => colors.bgBlack};
        color: ${({ theme: { colors } }) => colors.white};
        padding-top: ${(props) => props.height + "px"};
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
