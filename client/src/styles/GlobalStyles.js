import { createGlobalStyle } from 'styled-components'

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
        background-color: #FFFFFF;
    }
    .App{

        min-width: 375px;
        margin: 0 auto;
    }
`