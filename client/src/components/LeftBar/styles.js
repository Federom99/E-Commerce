import styled from "styled-components";
import { keyframes} from "styled-components";

export const ProductFilterContainer = styled.div`
    padding: 1rem;
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
    width: 120px;
    height: 20px;
    border-radius: 5px;
`

export const Option = styled.option`
    font-size: 1rem;
`
export const FilterTitle = styled.span`
    display: inline-block;
    text-align: right;
    margin-bottom: 0.5rem;
    padding-right: 1rem;
    margin-top: 1rem;
`
