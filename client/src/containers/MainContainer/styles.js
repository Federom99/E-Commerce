import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  min-width: 375px;
  max-width: 1440px;
  min-height: 1080px;
  display: grid;
  grid-template-columns: 150px 1fr;

  @media(max-width: 768px) {
    display: block;
  }
`;
