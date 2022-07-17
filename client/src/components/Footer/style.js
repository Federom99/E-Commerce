import styled, { css } from "styled-components";

export const FContainer = styled.footer`
    display: flex;
    justify-content: center;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: red;
    height: 150px;
    background: rgba(12,12,12,0.1);
    box-shadow:  0px 0px 12px 1px rgb(0 0 0 / 37%);
    border: 1px solid rgba(255, 255, 255, 0.18);
`

export const Box = styled.a`
    transform: translateY(0px);
    transition: transform 0.25s ease-in-out;
    position: relative;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    color:  black;
    margin:10px;
    font-size: calc(.2vw + 1rem);
    box-shadow: 0px 0px 5px 0 rgb(31 38 135 / 37%);
    border: 1px solid rgba(255,255,255,0.18);
    ${(props) => props.expanded && css`
        transform: translateY(-20px);;
    `}
`