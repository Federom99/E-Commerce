import styled from "styled-components";

export const Container = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-wrap: wrap; */
`;
export const Letra = styled.p`
  /* font-family: "Lobster", cursive; */
  margin: auto;
  /* margin-bottom: 1rem; */
  font-weight: bold;
  color: black;
  font-size: calc(0.8vw + 1rem);
  @media only screen and (max-width: 427px) {
    font-size: calc(0.8vw + 2rem);
  }
`;

export const LetraB = styled.p`
  margin: auto;
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: calc(0.8vw + 0.7rem);
  @media only screen and (max-width: 427px) {
    font-size: calc(0.8vw + 1rem);
  }
`;

export const Btn = styled.button`
    align-self: center;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 100%;
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
