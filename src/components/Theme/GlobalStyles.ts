import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: sans-serif;
        background-color: ${(props) => props.theme.colors.raisinBlack};
        color: ${(props) => props.theme.colors.white};
    }

    button{
        border: none;
        cursor: pointer;

        &:disabled{
            cursor: not-allowed;
            opacity: 0.8;
        }
    }

    a{
        text-decoration: none;
    }

    input{
        border: none;
        outline: none;
    }
`;
