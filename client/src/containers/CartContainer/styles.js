import styled from 'styled-components';

export const Div = styled.div`
    margin-bottom:50px;
`
export const Header = styled.header`
    text-align: center;
    padding: 10px;
`
export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
   
`
export const Li = styled.li`
    width: inherit;
    position: relative;
`
export const Error = styled.h1`
    text-align: center;
`
export const CatList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5,20%);
    grid-auto-flow: row;    
    justify-items: center;
`
export const Main = styled.main`
    border: 1px solid rgba(255, 255, 255, 0.18);
`
export const PriceSection = styled.div`
    position: absolute;
    right: 30px;
`