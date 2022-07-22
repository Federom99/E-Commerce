import styled from "styled-components";

export const Div = styled.li`
  position: relative;
  margin: auto;
  margin-bottom: 1rem;
  /* border-radius: 1rem; */
  /* border-style: solid; */
  /* border-width: 1px; */
  /* -webkit-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
  -moz-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
  box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1); */
  width: 90%;
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-auto-flow: row;
  align-items: center;
  justify-items: center;
  margin-top: 15px;
`;

export const Li = styled.li`
  align-self: center;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const LiImg = styled.li`
  align-self: center;
  display: flex;
  margin: 10px 0;
  width: 17rem;
  overflow-x: scroll;
`;

export const Img = styled.img`
  height: 5rem;
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
export const LIinimg = styled.li`
  margin: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Ul = styled.ul`
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
