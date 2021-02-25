import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    section{
        height:100%;
        
    }

    ul{
        list-style:none;
        
    }

    li{
        font-size:8em;
    }
`;

export default GlobalStyle;
