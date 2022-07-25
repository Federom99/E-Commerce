import styled from "styled-components";

export const Main = styled.main`
  padding-top: 120px;
  padding: 1rem;
  min-width: 375px;
  max-width: 1440px;
  margin: 0 auto;
  @media (min-width: 850px) {
    margin: 0 auto;
  }
`;

export const Div = styled.div`
  min-height: 70vh;
  width: 95%;
  margin: auto;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  -webkit-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
  -moz-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
  box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
  border-radius: 8px;
`;


export const InfoContainer = styled.div`
  padding: 1rem;
  // height: 100px;
  width: 700px;
  margin: auto;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-color: black;
  border-style: solid;
  // background-color:red;
`;

export const H2 = styled.div`
  color: ${(props) => props.theme.colorTextPri};
  font-size: 1.3rem;
  font-weight: 600;
  margin: auto;
  margin-bottom: 1rem;
`;
