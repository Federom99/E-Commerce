import styled from "styled-components";

export const DIVContainer = styled.div`
  justify-content: ${(props) =>
    props.dataDarkmode ? "flex-end" : "flex-start"};
  height: 30px;
  width: 65px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1px;
  cursor: pointer;
  transition: all 0.3s;
  background-image: ${(props) =>
    props.dataDarkmode
      ? `
      linear-gradient(109.8deg,
                      rgba(62,5,116,1) -5.2%, 
                      rgba(41,14,151,1) -5.2%, 
                      rgba(216,68,148,1) 103.3%);
      `
      : `radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(253, 203, 50, 1) 0%,
    rgba(244, 56, 98, 1) 100.2%
  )`};
`;

export const Handle = styled.div`
  height: 27px;
  width: 27px;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: #fff;
  overflow: hidden;
`;

export const ICON = styled.i`
  color: ${(props) => (props.isOn ? "#501a96" : "#f88748")};
  display: flex;
  font-size: 14px;
`;
