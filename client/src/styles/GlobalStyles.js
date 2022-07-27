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
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.color};
        /* transition: all .4s linear;  */
    }
    .App{
        min-width: 375px;
        margin: 0 auto;
    }
`;

export const lightTheme = {
  body: "#fff",
  color: "#121212",
  cardBackground: "#fff",
  paginadoArrowButton: "#dcdcdc",
  fontVariant: "black",
  shadowColor: "0 10px 14px rgba(0, 0, 0, .2)",
  shadowColor: '0 10px 14px rgba(0, 0, 0, .2)',
  buttonCTA: '#181818',
  shadowButtonCTA: '0px 4px 16px 5px rgba(0,0,0,0.29)',
  headerPopUp: "#4DCD57"
};

export const darkTheme = {
  body: "#1b1b1b",
  color: "#fff",
  cardBackground: "#1b1b1b",
  paginadoArrowButton: "black",
  fontVariant: "white",
  shadowColor: "0px 0px 4px 3px rgb(0 0 0 / 39%);",
  shadowColor: '0 10px 14px rgb(169 169 169 / 20%)',
  buttonCTA: '#000000',
  shadowButtonCTA: '0px 4px 16px 5px rgb(169 169 169 / 20%)',
  headerPopUp: '#4dcdb8'
};
