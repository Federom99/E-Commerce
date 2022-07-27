import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3,33%);
    grid-auto-flow: row;
    justify-items: center;
    position: relative;
    margin: auto;
    margin-bottom: 1rem;
    -webkit-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    -moz-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    width: 90%;
`
export const FavContainer = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    margin: 10px;
`


export const CardLi = styled.li`
    align-self: center;
    display: flex;
    flex-direction: column;
    width: -webkit-fill-available;
`
export const Img = styled.img`
    height: 10rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    -webkit-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    -moz-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);    
`
export const ImgContainer = styled.div`
    width: fit-content;
    align-self: center;
`
export const LinkTo = styled(Link)`
    text-decoration: none;
`
export const Text = styled.div`
    display:flex;
    flex-direction:column;
    align-items: flex-start;
`
export const Price = styled.h4`
    align-self:center;
`