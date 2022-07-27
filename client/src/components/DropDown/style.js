import styled from "styled-components";
import { keyframes } from "styled-components";

export const DropDownStyle = styled.ul`
  display: ${(props) => props.dropdown === false && "none"};
  position: absolute;
  /* right: 0;
  left: auto; */
  -webkit-box-shadow: ${({ theme }) => theme.shadowColor};
  -moz-box-shadow: ${({ theme }) => theme.shadowColor};
  box-shadow: ${({ theme }) => theme.shadowColor};
  font-size: 0.5rem;
  z-index: 9999;
  min-width: 10rem;
  /* padding: 0.5rem 0; */
  list-style: none;
  background-color: ${({ theme }) => theme.cardBackground};
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
  z-index: 9999;
  padding: 1rem 1rem;
  & a {
    font-family: "Roboto";
    display: block;
    font-size: inherit;
    color: ${({ theme }) => theme.color} !important;
    text-decoration: none;
    text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
      1px 1px 1px rgba(0, 0, 0, 0.5) !important;
    font-size: calc(0.9vw + 0.4rem);
  }

  &:hover {
    background-color: #e5e7e9;
    animation: ${anim} 4s linear 0s infinite normal forwards;
  }
`;
