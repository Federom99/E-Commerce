import styled from "styled-components";
import { keyframes} from "styled-components";

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
    height: 2rem;
    cursor: pointer;
`
const anim = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const Name = styled.span`
    display: none;
    text-align: right;
    margin: 0;
    ${CategoriesContainer}:hover &{
        display: inline-block;
        animation: ${anim} 1s ease 0s 1 normal forwards;
    }
`
