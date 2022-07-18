import styled from "styled-components";
import { keyframes } from "styled-components";

export const DropDownStyle = styled.ul`
  display: ${(props) => props.dropdown === false && "none"};
  position: absolute;
  /* right: 0;
  left: auto; */
  -webkit-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
  -moz-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
  box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
  font-size: 0.5rem;
  z-index: 9999;
  min-width: 10rem;
  /* padding: 0.5rem 0; */
  list-style: none;
  background-color: whitesmoke;
  /* border-radius: 0.5rem; */
  user-select: none;
`;

const anim = keyframes`
    00%,
    50%,
    100% {
      opacity: 0.9;
    }

    25%,
    75% {
      opacity: 0.2;
    }
`;

export const SubMenustyle = styled.li`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1rem 1rem;
  & a {
    font-family: "Roboto";
    display: block;
    font-size: inherit;
    color: inherit;
    text-decoration: none;
    font-size: calc(0.9vw + 0.4rem);
  }

  &:hover{
    background-color: #E5E7E9;
    animation: ${anim} 4s linear 0s infinite normal forwards;
  }
`;
