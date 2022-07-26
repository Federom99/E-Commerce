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
        transition: all .4s linear; 
    }
    .App{
        min-width: 375px;
        margin: 0 auto;
    }
`;

export const lightTheme = {
  body: "#fff",
  color: "#121212",
  cardBackground: '#fff',
  paginadoArrowButton: '#dcdcdc',
  fontVariant: 'black',
  shadowColor: '0 10px 14px rgba(0, 0, 0, .2)'
};

export const darkTheme = {
  body: "#1b1b1b",
  color: "#fff",
  cardBackground: '#1b1b1b',
  paginadoArrowButton: 'black',
  fontVariant: 'white',
  shadowColor: '0 10px 14px rgb(169 169 169 / 20%)'
};



//#0d0d0d