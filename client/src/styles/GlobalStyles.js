import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        height: 100vh;
        width: 100%;
        font-family: 'Anek Malayalam', sans-serif;
        background-color: ${({theme}) => theme.body};
        color: ${({theme}) => theme.color};
        /* transition: all .4s linear; */
    }
    .App{
        min-width: 375px;
        margin: 0 auto;
    }
`;

export const lightTheme = {
  body: "#fff",
  color: "#121212",
};

export const darkTheme = {
  body: "#020010",
  color: "#fff",
};
