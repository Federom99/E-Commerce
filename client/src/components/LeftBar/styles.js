import styled from "styled-components";

// export const LeftBarContainer = styled.div.attrs(props =>({
//     entro: props.entro
// }))`
//     padding-top: 2rem;
//     margin-left: 10px;
//     z-index:1
//     position: fixed;
// `
// export const ContenedorLista = styled.ul`
//     margin:5px;
//     list-style-type: none;
//     & li {
//         margin: 10px;
//     }
// `

export const CategoriesContainer = styled.ul`
    padding: 1rem;
    height: 230px;
    list-style: none;
`

export const Category = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.05rem;
    cursor: pointer;
`

export const Name = styled.span`
    display: none;
    text-align: right;
    ${CategoriesContainer}:hover &{
        display: inline-block;
    }
`