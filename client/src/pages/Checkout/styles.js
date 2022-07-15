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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  min-height: 1080px;
  @media (min-width: 850px) {
    flex-direction: row;
  }
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
  color: ${(props) => props.theme.colorTextPri};
  font-size: 1.3rem;
  font-weight: 600;
  margin: auto;
  margin-bottom: 1rem;
`;
