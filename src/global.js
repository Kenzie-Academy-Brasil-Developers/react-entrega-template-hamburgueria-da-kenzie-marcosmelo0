import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }
    
    button {
        cursor: pointer;
        border: none;
        background-color: transparent;
    }
    
    a {
        color: unset;
        text-decoration: none;
    }

    ul, ol, li {
        list-style: none;
    }

    
` 