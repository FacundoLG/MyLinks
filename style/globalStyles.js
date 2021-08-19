import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --main-color: #ffff;
        --border-color: #AAAAAA;
    }
    *{
        font-family: 'Roboto', sans-serif;
    }
    body{
        margin: 0%;
        padding: 0%;
    }
`;

export default GlobalStyle