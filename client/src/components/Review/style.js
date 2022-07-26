import styled from "styled-components";

export const Div = styled.div`
  position: relative;
  margin: auto;
  margin-bottom: 1rem;
  max-width: 1440px;
  /* border-radius: 1rem; */
  /* border-style: solid; */
  /* border-width: 1px; */
  /* -webkit-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
  -moz-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
  box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1); */
`;

export const List = styled.div`
  list-style: none;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-auto-flow: row;
  align-items: center;
  justify-items: center;
  margin-top: 15px;
  @media (max-width: 815px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Li = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const LiImg = styled.div`
  align-self: center;
  display: flex;
  margin: 10px 0;
  width: 25rem;
  overflow-x: scroll;
  @media (max-width: 815px) {
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

export const Img = styled.img`
  height: 8rem;
  border-radius: 50%;
  padding: 0.1rem;
  user-select: none;
  margin: 15px 5px;
  -webkit-box-shadow: 3px 2px 2px 0px rgb(198 198 198 / 52%);
  -moz-box-shadow: 3px 2px 2px 0px rgb(198 198 198 / 52%);
  box-shadow: 3px 2px 2px 0px rgb(198 198 198 / 52%);
`;

export const DivImg = styled.div`
  position: absolute;
`;
export const LIinimg = styled.div`
  margin: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Ul = styled.div`
  position: relative;
  top: -5px;
  font-size: 10px;
  list-style: none;
  & > li {
    display: inline;
    margin: 0px 5px;
    user-select: none;
    cursor: pointer;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

export const H3 = styled.h3`
  font-weight: bolder;
  margin-bottom: 5px;
  margin-top: 5px;
`;
