import styled from "styled-components";
import { keyframes} from "styled-components";

export const ProductFilterContainer = styled.div`
    padding: 1rem;
    /* background-color: red; */
`

export const CategoriesContainer = styled.ul`
    height: 230px;
    list-style: none;
`
const animCat = keyframes`
    0% {
        opacity: 1;
        transform: translateX(0);
    }

    100% {
        opacity: 1;
        transform: translateX(0.7rem);
    }
`;

export const Category = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
    cursor: pointer;
    &:hover {
        animation: ${animCat} 1s ease 0s 1 normal forwards;
        color:#4D5656;
    }
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

export const Select = styled.select`
    border: 1px solid #4a4949;
    border-radius: 8px;
    width: 120px;
    height: 2rem;
    border-width: 2px;
    
`

export const Option = styled.option`
    font-size: 1rem;
    height: 2rem;
    text-align: center;
`
export const FilterTitle = styled.span`
    font-size: 1rem;
    text-align: center;
    font-weight: bold;
`

export const DivFilterTitle = styled.div`
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
    /* background-color: red; */
    width: 100%;

    @media(max-width: 768px) {
        justify-content: unset;
    }
`;
