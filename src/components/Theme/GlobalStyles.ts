import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body{
        height: 100%;
    }

    #root{
        height: 100%;
        display: flex;
    }

    body{
        font-family: sans-serif;
        background-color: ${(props) => props.theme.colors.raisinBlack};
        color: ${(props) => props.theme.colors.white};
        font-size: ${(props) => props.theme.sizes.base};
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
        font-size: inherit;
    }
`;
