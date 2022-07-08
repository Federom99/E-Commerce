import styled from "styled-components";

export const NoMatchContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 140px;
  justify-content: center;
  font-family: "Nunito Sans";
  color: #0e0620;
  font-size: 1em;
  min-height: 1080px;
`;

export const SVG = styled.svg`
  width: 100%;
  /* visibility: hidden; */
`;

export const TxtContainer = styled.div`
  & h1 {
    font-size: 7.5em;
    margin: 15px 0px;
    font-weight: bold;
  }

  & h2 {
    font-weight: bold;
  }

  & button {
    z-index: 1;
    overflow: hidden;
    background: transparent;
    position: relative;
    padding: 8px 50px;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1em;
    letter-spacing: 2px;
    transition: 0.2s ease;
    font-weight: bold;
    margin: 5px 0px;
    & .green {
      border: 4px solid #2ccf6d;
      color: #0e0620;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 0%;
        height: 100%;
        background: #2ccf6d;
        z-index: -1;
        transition: 0.2s ease;
      }
      &:hover {
        color: #fff;
        background: #2ccf6d;
        transition: 0.2s ease;
        &:before {
          width: 100%;
        }
      }
    }
  }
`;
