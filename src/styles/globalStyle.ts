import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline: none;
        font-family: 'Inter', sans-serif;
        background: rgb(76,249,238);
        background: linear-gradient(85deg, rgba(76,249,238,1) 0%, rgba(191,52,190,1) 100%);
        color: white;
    }

    input, h1{
        font-weight: 200;
    }
`