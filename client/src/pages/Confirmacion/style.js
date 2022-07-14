import styled from "styled-components";

export const Container = styled.div`
  min-height: 680px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const Letra = styled.p`
  font-family: "Lobster", cursive;
  font-weight: bold;
  color: ${(props) => props.color};
  font-size: calc(0.8vw + 3rem);
  text-shadow: 1px 0px 1px #313131, 0px 1px 1px #eeeeee, 2px 1px 1px #e6e6e6,
    1px 2px 1px #eeeeee, 3px 2px 1px #cccccc, 2px 3px 1px #eeeeee,
    4px 3px 1px #cccccc, 3px 4px 1px #eeeeee, 5px 4px 1px #cccccc,
    4px 5px 1px #eeeeee, 6px 5px 1px #cccccc, 5px 6px 1px #eeeeee,
    7px 6px 1px #cccccc;
  @media only screen and (max-width: 427px) {
    font-size: calc(0.8vw + 2rem);
  }
`;

export const LetraB = styled.p`
  font-weight: bold;
  color: ${(props) => props.color};
  font-size: calc(0.8vw + 1rem);
  margin-left: 20px;
  font-family: "Barlow", sans-serif;
  @media only screen and (max-width: 427px) {
    font-size: calc(0.8vw + 1rem);
  }
`;

export const Btn = styled.button`
  box-shadow: 0px 10px 14px -7px #f01f1f;
  margin-bottom: 200px;
  background: linear-gradient(to bottom, #f01f1f 5%, #ec0d60 100%);
  background-color: #f01f1f;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  padding: 13px 32px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #3d768a;
  &:hover {
    background: linear-gradient(to bottom, #994061 5%, #b3596b 100%);
    background-color: #994061;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;
