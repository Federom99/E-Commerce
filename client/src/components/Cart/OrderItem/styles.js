import styled from "styled-components";

export const Img = styled.img`
    width:200px;
    height: auto;
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
`
export const Text = styled.div`
    text-align: justify;
    align-content: center;
`
export const Amount = styled.div`
    display: flex;
`
export const Button = styled.button`
    padding: 5px;
    margin: 0 5px 0 5px;
`
export const Div = styled.div`
    position: relative;
    margin: 10px 0 10px 0;
    background-color: rgba(12,12,12,0.1);
    box-shadow:  0px 0px 12px 1px rgb(0 0 0 / 37%);
    border: 1px solid rgba(255, 255, 255, 0.18);
`
export const CloseButton = styled(Button)`
    position: absolute;
    top: 0px;
    right: 0px;
`