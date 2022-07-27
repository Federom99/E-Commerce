import styled from "styled-components";

export const Section = styled.section`
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 4rem;
  border-style: none;
  border-radius: 1rem;
  -webkit-box-shadow: ${({ theme }) => theme.shadowColor};
  -moz-box-shadow: ${({ theme }) => theme.shadowColor};
  box-shadow: ${({ theme }) => theme.shadowColor};
  width: 80%;
  min-height: 20vh;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
`;

export const List = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Li = styled.div`
  width: inherit;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  text-align: center;
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: lighter;
  /* font-family: "Righteous", cursive; */
`;

export const CatList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-auto-flow: row;
  justify-items: center;
`;

export const Error = styled.h1`
  text-align: center;
  margin: auto;
`;
export const Main = styled.ul`
  list-style: none;
`;
export const PriceSection = styled.div`
  margin: auto;
  font-size: 1.5rem;
  font-weight: bold;
  width: 20rem;
  text-align: center;
`;

export const BOTON = styled.button`
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 80%;
  padding: 10px;
  background-color: #181818;
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: whitesmoke;
    color: black;
    cursor: pointer;
    border-color: black;
    border-style: solid;
  }
`;
