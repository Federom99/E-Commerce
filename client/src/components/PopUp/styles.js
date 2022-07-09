import styled from "styled-components";
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

export const Header = styled.header`

`;
export const Close = styled.button`
    position:absolute;
    top:0px;
    right:0px;
`

export const Main = styled.main`
    width: inherit;
    display:flex;
    align-items:center;
    justify-content:space-around
`;

export const Detail = styled.section`

`;

export const List = styled.ul`
    list-style: none;
`;
export const Img = styled.img`
    max-width:260px;
    height:auto;
    margin:30px 0 30px
`;

export const Li = styled.li`

`;

export const Options = styled.section`

`;

export const Button = styled.button`

`;
export const IncDiv = styled.div`
    display:flex;
`
export const Text = styled.h4`
    text-decoration: underline;
`