import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    section{
        height:100%;
        padding-top:10vh;
        width:100%;
        display:flex;
        justify-content:center;
        
    }
    
`;

export default GlobalStyle;
