import styled from "styled-components";

import { BsFillCheckCircleFill , BsFillCaretLeftSquareFill , BsFillCaretRightSquareFill , BsFillCartPlusFill , BsTrashFill } from "react-icons/bs";

import { Link } from "react-router-dom";

export const MainDiv = styled.div`    
    width:900px;
    background-color: ${props => props.theme.background};
    height:auto;
    display:flex;
    flex-direction:column;
    align-items: center;
    position:relative;
    

`
export const Div = styled.div`

`;
export const DecButton = styled(BsFillCaretLeftSquareFill)`
cursor:pointer;    
 &:hover{
    color:grey
 }
`
export const IncButton = styled(BsFillCaretRightSquareFill)`
cursor:pointer;
&:hover{
    color:grey
 }
`
export const Trash = styled(BsTrashFill)`

`
export const Ok = styled(BsFillCheckCircleFill)`

`
export const AddMore = styled(BsFillCartPlusFill)`

`


export const Header = styled.header`
    width: inherit;
    background-color: rgba(0,180,0,0.8);
    text-align: center;
    padding: 10px;
    
    `;
    export const Button = styled.button`
        background-color: black;
        color: white;
        padding: 2px;
        border-radius: 5px;
        margin: 2px;
        height: 23px;
        cursor:pointer;
        &:hover{
            background-color:grey;
        }
    `;
    export const LinkButton = styled(Link)`
        background-color: black;
        color: white;
        padding: 2px;
        border-radius: 5px;
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 13.33px;
        text-align:center;
        margin: 2px;
        height: 23px;
        &:hover{
            background-color:grey;
        }
    `
export const Close = styled(Button)`
    position:absolute;
    top:0px;
    right:0px;
    border-radius: 0;
    margin:0px;
    height: 50px;
    padding:5px;
`

export const Main = styled.main`
    width: inherit;
    display:flex;
    align-items:center;
    justify-content:space-around
`;

export const Detail = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center
`;

export const List = styled.ul`
    list-style: none;
`;
export const Img = styled.img`
    max-width:260px;
    height:auto;
    margin:30px 0 30px
`;

export const Amount = styled.div`
    padding: 5px;
    font-weight: bold;
`;

export const Options = styled.section`
    width: 205px;
    padding:10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

export const Closing = styled.section`
    display: flex;
    flex-direction: column;
    width:inherit;

`;

export const IncDiv = styled.div`
    display:flex;
    justify-content: center;
    
    height:30px;
`
export const Text = styled.h4`
    text-decoration: underline;
`
export const ErrText = styled.h4`
    color: red;
`