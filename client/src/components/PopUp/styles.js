import styled from "styled-components";

import { BsFillCheckCircleFill , BsFillCaretLeftSquareFill , BsFillCaretRightSquareFill , BsFillCartPlusFill , BsTrashFill } from "react-icons/bs";

import { Link } from "react-router-dom";

export const MainDiv = styled.div`    
    width:900px;
    background-color: ${props => props.theme.background};
    /* background-color: red; */
    height:auto;
    display:flex;
    flex-direction:column;
    align-items: center;
    position:relative;
    border-radius: 8px;
    -webkit-box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 1);
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 1);
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
        color:grey;
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
    background-color: #4DCD57;
    text-align: center;
    padding: 10px;
    border-radius: 8px 8px 0px 0px ;
    `;
export const Button = styled.button`
    align-self: center;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 80%;
    padding: 10px;
    background-color: #181818;
    border-radius: 5px;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &:hover {
        background-color: whitesmoke;
        color: black;
        cursor: pointer;
        border-color: black;
        border-style: solid;
    }
`;
export const LinkButton = styled(Link)`
    align-self: center;
    margin-top: 15px;
    /* margin-bottom: 15px; */
    width: 80%;
    padding: 10px;
    background-color: #181818;
    border-radius: 5px;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    border-color: black;
    border-style: solid;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &:hover {
        background-color: whitesmoke;
        color: black;
        cursor: pointer;
        border-color: black;
        border-style: solid;
    }
`;
export const Close = styled(Button)`
    position:absolute;
    top:0px;
    right:0px;
    border-radius: 0;
    margin:0px;
    height: 50px;
    padding:5px;
`;

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
    margin:30px 0 30px;
    margin-left: 7%;
    -webkit-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    -moz-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export const Amount = styled.div`
    padding: 5px;
    font-weight: bold;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export const Options = styled.section`
    width: 205px;
    /* padding:10px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    /* background-color: red; */
    margin-right: 5%;
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
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const H3 = styled.h3`
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export const H2 = styled.h2`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const H4 = styled.h4`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`