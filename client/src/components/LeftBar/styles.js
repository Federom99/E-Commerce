import styled from "styled-components";

export const ProductFilterContainer = styled.div`
    padding: 1rem;
`

export const CategoriesContainer = styled.ul`
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

export const Select = styled.select`
    width: 120px;
    height: 40px;
    border-radius: 5px;
`

export const Option = styled.option`
    font-size: 1rem;
`