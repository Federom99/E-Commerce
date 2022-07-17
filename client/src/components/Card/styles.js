import styled from "styled-components";
import Popup from 'reactjs-popup';
import { Link } from "react-router-dom";
import { fadeIn } from "../../styles/animation";

export const DIV = styled.div`
    ${fadeIn('0.5s')};
    padding: 1rem 1.5rem;
    max-width: 335px;
    height: auto;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.background};
    overflow: hidden;
    cursor: pointer;
    &:hover{
        box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    }
`
export const StyledPopup = styled(Popup)`
&-overlay{
    background: rgba(0, 0, 0, 0.7);
}
`

export const ContainerImage = styled.div`
    width: 100%;
`

export const Image = styled.img`
    width: 100%;
    height: 365px;
`

export const InfoContainer = styled.div`
    text-align: center;
    padding: 1rem;
`

export const H2 = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.colorTextPri};
    font-size: 1.3rem;
    font-weight: 400;
`
export const ImgLink = styled(Link)`
    text-decoration: none;
`


export const ExtraInfo = styled.div`
    
`

export const PriceSize = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.9rem;
`

export const Select = styled.select`
    padding-left: 0.5rem;
    width: fit-content;
    height: 40px;
    font-weight: 500;
    font-family: inherit;
    color: ${props => props.theme.colorTalla};
    font-weight: bold;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.btnTalla};
`

export const P = styled.p`
    color: ${props => props.theme.colorTextPri};
    font-weight: 600;
    border-radius: 5px;
`

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.9rem 0;
    width: 100%;
    height: 40px;
    font-weight: 600;
    color: ${props => props.theme.txtbtn};
    background-color: ${props => props.theme.bton};
    cursor: pointer;
`
export const NoButton = styled(Button)`
    background-color:grey;
`
export const Favorite = styled.button`
    color:red;
    width: 25px;
    height: 25px;
    background-color: white;
    border: none;
    cursor: pointer;
    svg {
        width: 100%;
        height: 100%;
    }
    &:hover{
        color: black;
    }
`

