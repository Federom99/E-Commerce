import styled from 'styled-components';

export const Div = styled.div`
    margin: auto;
    margin-bottom:4rem;
    border-style: none;
    border-radius: 1rem;
    -webkit-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    -moz-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    width: 80%;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
`
export const Header = styled.header`
    text-align: center;
    margin-top: 2rem;
    font-size: 2rem;
    font-weight: lighter;
`
export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
   
`
export const Li = styled.li`
    width: inherit;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
`
export const Error = styled.h1`
    text-align: center;
    margin: auto;
`
export const CatList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5,20%);
    grid-auto-flow: row;    
    justify-items: center;
`
export const Main = styled.ul`
    list-style: none;
    border: 1px solid rgba(255, 255, 255, 0.18);
`
export const PriceSection = styled.div`
    margin: auto;
    font-size: 1.5rem;
    font-weight: bold;
    width: 20rem;
    text-align: center;
`

export const BOTON = styled.button`
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 80%;
    padding: 10px;
    background-color: #181818;
    border-radius: 5px;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
        background-color: whitesmoke;
        color: black;
        cursor: pointer;
        border-color: black;
        border-style: solid;
    }
`;