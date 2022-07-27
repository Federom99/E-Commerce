import styled from "styled-components";

export const Main = styled.main`
  /* padding-top: 120px; */
  /* padding: 1rem; */
  min-height: 70vh;
  margin: 0 auto;
  /* background-color: green; */
  @media (min-width: 850px) {
    margin: 0 auto;
  }
`;

export const Div = styled.div`
    margin: auto;
    min-height: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* flex-direction: row;
    align-items: center;
    justify-content: space-evenly; */
    /* background-color: red; */
    border-radius: 8px;
    -webkit-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    -moz-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
`;


export const InfoContainer = styled.div`
  padding: 1rem;
  width: 700px;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-color: black;
  border-style: solid;

`;

export const H2 = styled.div`
  color: ${(theme) => theme.color};
  font-size: 1.3rem;
  font-weight: 600;
  margin: auto;
  margin-bottom: 1rem;
  grid-column: 2/3
`;

export const Error = styled.h1`
    text-align: center;
    margin: auto;
`

export const DIVE = styled.div`
    margin: auto;
    /* margin-top:4rem; */
    border-style: none;
    border-radius: 1rem;
    -webkit-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    -moz-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    width: 80%;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
`