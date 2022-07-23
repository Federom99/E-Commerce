import styled from "styled-components";

export const DIV = styled.div`
  position: fixed;
  /* top: 0;
  left: 0; */
  z-index: 9999;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0 15rem;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
`;

export const Modale = styled.div`
  position: relative;
  height: 300px;
  min-width: 200px;
  margin: auto;
  padding: 0 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const BTN = styled.button`
  align-self: flex-end;
  justify-self: flex-start;
`;

export const Img = styled.img`
  height: 5rem;
  margin: 15px 5px;
  -webkit-box-shadow: 3px 2px 2px 0px rgb(198 198 198 / 52%);
  -moz-box-shadow: 3px 2px 2px 0px rgb(198 198 198 / 52%);
  box-shadow: 3px 2px 2px 0px rgb(198 198 198 / 52%);
`;

export const BtnRese = styled.button`
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  color: #0d0d0d;
  font-weight: 600;
  background-color: #ffffff;
  border-radius: 500px;
  cursor: pointer;
  -webkit-align-items: flex-end;
  -webkit-box-align: flex-end;
  -ms-flex-align: flex-end;
  align-items: flex-end;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 1);
  &:hover {
    transition: color 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
    color: black;
    background-color: white;
  }
`;
