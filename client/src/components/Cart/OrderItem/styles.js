import styled from "styled-components";

export const Img = styled.img`
    height: 10rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    -webkit-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    -moz-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
`
export const List = styled.ul`    
        list-style: none;
        display: grid;
        grid-template-columns: repeat(5,20%);
        grid-auto-flow: row;
        justify-items: center;
`
export const Li = styled.li`
    align-self: center;
    display: flex;
    flex-direction: column;
`
export const Text = styled.div`
    text-align: justify;
    align-content: center;
`
export const Amount = styled.div`
    display: flex;
    width: 8rem;
    /* background-color: red; */
    flex-direction: row;
    justify-content: space-between;
`

export const PCant = styled.p`
    /* background-color: blue; */
    margin: auto;
    font-weight: bolder;
    `
export const Button = styled.button`
    margin: auto;
    vertical-align: middle;
    width: 2rem;
    height: 2rem;
    background-color: #181818;
    border-radius: 5px;
    color: #fff;
    font-size: 1rem;
    font-weight: bolder;
    cursor: pointer;
    &:hover {
        background-color: whitesmoke;
        color: black;
        cursor: pointer;
        border-color: black;
        border-style: solid;
    }
`
export const Div = styled.li`
    position: relative;
    margin: auto;
    margin-bottom: 1rem;
    /* border-radius: 1rem; */
    /* border-style: solid; */
    /* border-width: 1px; */
    -webkit-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    -moz-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    width: 90%;
`
export const CloseButton = styled(Button)`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
`

export const SPAN = styled.span`
    color: #E74C3C;
    font-weight: bolder;
    margin: auto;
    margin-top: 1rem;
`;

export const H3 = styled.h3`
    font-weight: bolder;
    margin-bottom: 7px;
`;