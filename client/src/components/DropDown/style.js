import styled from "styled-components";

export const DropDownStyle = styled.ul`
  display: ${(props) => props.dropdown === false && "none"};
  position: absolute;
  /* right: 0;
  left: auto; */
  box-shadow: 0 10px 15px -3px rgba(46, 41, 51, 0.08),
    0 4px 6px -2px rgba(71, 63, 79, 0.16);
  font-size: 0.875rem;
  z-index: 9999;
  min-width: 10rem;
  padding: 0.5rem 0;
  list-style: none;
  background-color: #fff;
  border-radius: 0.5rem;
  user-select: none;
`;

export const SubMenustyle = styled.li`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0.7rem 1rem;
  & a {
    font-family: "Roboto";
    display: block;
    font-size: inherit;
    color: inherit;
    text-decoration: none;
    font-size: calc(0.9vw + 0.9rem);
  }
`;
