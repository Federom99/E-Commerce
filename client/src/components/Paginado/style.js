import styled from "styled-components";
import {
  MdOutlineLastPage,
  MdOutlineFirstPage,
  MdArrowBackIos,
  MdArrowForwardIos,
} from "react-icons/md";

export const Arrow = styled.button`
  & svg {
    color: ${({ theme }) => theme.color};
  }
`;

export const NumeroPaginas = styled.button`
  color: ${({ theme }) => theme.fontVariant};

  &.paginaActual {
    color: white;
    height: 1.5rem;
    background-color: rgba(10, 10, 10, 0);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1.3rem;
    margin: 5px;
    /* margin: auto; */
    font-family: Arial, Helvetica, sans-serif;
    margin: 5px;
    /* box-shadow: inset 0 5px 10px rgb(0 0 0 / 10%), 0 2px 5px rgb(0 0 0 / 50%); */
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    padding: 15px;
    background-color: black;
  }
`;

export const Principio = styled.button`
  border-radius: 40px 0 0 40px;
  border: none;
  width: 25%;
  vertical-align: middle;
  height: 100%;
  height: 1.5rem;
  cursor: pointer;
  font-size: 1.3rem;
  margin: 5px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 5px;
  /* box-shadow: inset 0px 0px 0px rgb(0 0 0 / 10%), 4px 3px 5px rgb(0 0 0 / 50%); */
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  padding: 15px;
  color: white;
  background-color: black;
`;

export const Final = styled.button`
  border-radius: 0 40px 40px 0;
  border: none;
  width: 25%;
  vertical-align: middle;
  height: 100%;
  height: 1.5rem;
  cursor: pointer;
  font-size: 1.3rem;
  margin: 5px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 5px;
  /* box-shadow: inset 0px 0px 0px rgb(0 0 0 / 10%), -3px 3px 5px rgb(0 0 0 / 50%); */
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  padding: 15px;
  color: white;
  background-color: black;
`;
