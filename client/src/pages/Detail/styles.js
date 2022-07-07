import styled from "styled-components";

export const Main = styled.main`
    padding-top: 120px;
    padding: 1rem;
    min-width: 375px;
    max-width: 1440px;
    margin: 0 auto;
    @media (min-width: 850px){
        margin: 0 auto;
    }
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1440px;
    @media (min-width: 850px){
        flex-direction: row;
    }
`

export const ImageContainer = styled.div`
    width: 100%;
    max-width: 600px;
`

export const Image = styled.img`
    width: 100%;
`

export const InfoContainer = styled.div`
    padding: 1rem;
    max-width: 500px;
    margin-top: 1rem;
    @media (min-width: 850px){
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

export const H2 = styled.div`
    color: ${props => props.theme.colorTextPri};
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
`

export const P = styled.p`
    position: relative;
    margin-bottom: 1rem;
    font-weight: 600;
    color: ${props => props.theme.colorTextPri};
    &::after{
        position: absolute;
        content: 'stock: ${props => props.stock}';
        display: block;
        font-weight: 400;
        font-size: 0.85rem;
        font-style: italic;
    }
` 

export const Stars = styled.div`
    display: "flex";
    flex-direction: "row";
    margin: 1rem 0;
`


export const SizeInfo = styled.ul`
    display: flex;
    margin-bottom: 1rem;
    list-style: none;
    `

export const Size = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    width: 40px;
    height: 40px;
    border: 1px solid ${props => props.theme.colorTextSec};
    border-radius: 50%;
    cursor: pointer;
    &:hover{
        border: 1px solid ${props => props.theme.colorTextPri};
    }
`

export const Description = styled.p`
    margin-bottom: 1rem;
    font-weight: 400;
`

export const Button = styled.button`
    margin-bottom: 1rem;
    width: 200px;
    color: #00A97F;
    padding: 0.8em 1.7em;
    background-color: transparent;
    border-radius: .3em;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: .5s;
    font-weight: 400;
    font-size: 17px;
    border: 1px solid;
    font-family: inherit;
    text-transform: uppercase;
    color: #00A97F;
    z-index: 1;
    &::before{
        content: '';
        display: block;
        width: 50px;
        height: 50px;
        transform: translate(-50%, -50%);
        position: absolute;
        border-radius: 50%;
        z-index: -1;
        background-color: #00A97F;
        transition: 1s ease;
    };
    &::after{
        content: '';
        display: block;
        width: 50px;
        height: 50px;
        transform: translate(-50%, -50%);
        position: absolute;
        border-radius: 50%;
        z-index: -1;
        background-color: #00A97F;
        transition: 1s ease;
    }
    &::before{
        top: -1em;
        left: -1em;
    };
    &::after{
        left: calc(100% + 1em);
        top: calc(100% + 1em);
    };
    &:hover::before, &:hover::after {
        height: 410px;
        width: 410px;
    };
    &:hover {
        color: rgb(10, 25, 30);
    };
    &:active {
        filter: brightness(.8);
    };
`

export const Review = styled.textarea`
    padding: 1rem;
    height: 100px;
    border-radius: 5px;
    resize: none;
    &:focus{
        outline: 1px solid ${props => props.theme.backgroundElement};
    }
`