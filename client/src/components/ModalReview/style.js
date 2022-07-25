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
  min-width: 250px;
  max-width: 250px;
  max-height: 600px;
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
  overflow-y: scroll;
`;

export const BTN = styled.div`
  align-self: flex-end;
  justify-self: flex-start;
  margin-top: 1rem;
  padding-left: 55px;
  position: relative;
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
export const Button = styled.button`
  align-self: center;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 80%;
  padding: 10px;
  background-color: #181818;
  border-radius: 15px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: whitesmoke;
    color: black;
    cursor: pointer;
    border-color: black;
    border-style: solid;
  }
`;

export const Review = styled.textarea`
  margin-top: 1rem;
  height: 200px;
  padding: 1rem;
  border-radius: 5px;
  resize: none;
  &:focus {
    outline: 1px solid ${(props) => props.theme.backgroundElement};
  }
`;

export const Input = styled.input`
  display: block;
  padding: 0.5rem 0.8rem;
  max-width: 250px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin-top: 1rem;
  &:focus {
    outline: 1px solid ${(props) => props.theme.backgroundElement};
  }
`;

export const Stars = styled.div`
  align-self: flex-start;
  margin-top: 1rem;
`;

export const ErrorsText = styled.p`
  color: red;
  align-self: flex-start;
`;
