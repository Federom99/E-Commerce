import styled from "styled-components";

export const LeftBarContainer = styled.div.attrs(props =>({
    entro: props.entro
}))`
    padding-top: 2rem;
    margin-left: 10px;
    z-index:1
    position: fixed;
`
export const ContenedorLista = styled.ul`
    margin:5px;
    list-style-type: none;
    & li {
        margin: 10px;
    }
`