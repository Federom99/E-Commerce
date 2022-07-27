import styled from "styled-components";

export const Div = styled.div`
  position: relative;
  margin: auto;
  margin-bottom: 1rem;
  max-width: 1440px;
  /* border-radius: 1rem;  */
  /* border-style: solid; */
  /* border-width: 1px; */
  width: 90%;
`;

export const List = styled.div`
  list-style: none;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-auto-flow: row;
  /* grid-template-rows: 1fr 20px 30px; */
  align-items: center;
  justify-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  /* margin: auto; */
  -webkit-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
  -moz-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
  box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
  @media (max-width: 815px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
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
  margin-left: 4rem;
  width: 60%;
  overflow-x: scroll;
  @media (max-width: 650px) {
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

export const Img = styled.img`
  height: 10rem;
  /* border-radius: 50%; */
  border: none;
  /* padding: 0.1rem; */
  user-select: none;
  margin: 15px 5px;
  -webkit-box-shadow: ${({ theme }) => theme.shadowColor};
  -moz-box-shadow: ${({ theme }) => theme.shadowColor};
  box-shadow: ${({ theme }) => theme.shadowColor};
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
  border-radius: 50%;
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

export const Linea = styled.hr`
  border: 1px dashed ${({ theme }) => theme.color};
  width: 70%;
  grid-column: 1/4;
  grid-row: 3/3;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const Estado = styled.p`
  grid-column: 1/4;
  grid-row: 2 /3;
  justify-self: center;
  margin: 0 1em;
  color: ${(props) => props.color};
  font-weight: bold;
  /* text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5); */
`;
