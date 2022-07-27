import styled, { css } from "styled-components";

export const FContainer = styled.footer`
  display: flex;
  justify-content: center;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  height: 150px;
  background: rgba(12, 12, 12, 0.1);
  box-shadow: ${({ theme }) => theme.shadowColor};
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Box = styled.a`
  transform: translateY(0px);
  transition: transform 0.25s ease-in-out;
  position: relative;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: black;
  margin: 10px;
  font-size: calc(0.2vw + 1rem);
  box-shadow: ${({ theme }) => theme.shadowColor};
  border: 1px solid rgba(255, 255, 255, 0.18);
  ${(props) =>
    props.expanded &&
    css`
      transform: translateY(-20px); ;
    `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around;
  align-items: center; */
  width: 100%;

  /* height: 260px; */
  border-top: 1px solid #00000014;
  box-shadow: ${({ theme }) => theme.shadowColor};
  @media screen and (max-width: 560px) {
    heigth: 130px;
    justify-content: space-evenly;
  }
`;

export const Contacto = styled.div`
  display: flex;
  /* position: relative; */
  width: 100%;
  max-width: 1800px;
  /* height: 300px;
  flex-wrap: wrap; */
  justify-content: space-around;
  /* @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media screen and (max-width: 870px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  @media screen and (max-width: 560px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  } */
`;

export const Categoria = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  max-height: 160px;
  flex-wrap: wrap;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const SubTitle = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color};
  font-size: 17px;
  font-weight: bold;
  margin: 5px 0px;
  @media screen and (max-width: 960px) {
    /* width: 100%; */
    margin: 10px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 700px) {
    font-size: 14px;
    font-weight: 300;
  }
  @media screen and (max-width: 400px) {
    font-size: 10px;
    font-weight: 300;
  }
`;

export const Bar = styled.div`
  background-color: ${({ theme }) => theme.color};
  width: 35%;
  height: 3px;
  margin: 10px 25px;
  border-radius: 2px 2px 2px 2px;
`;

export const Img = styled.img`
  width: 50px;
  border-radius: 50%;
`;
