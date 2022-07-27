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
  background: ${({ theme }) => theme.cardBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
`;

export const Modale = styled.div`
  position: relative;
  min-width: 500px;
  max-width: 550px;
  max-height: 600px;
  margin: auto;
  padding: 0 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: ${({ theme }) => theme.shadowColor};
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  overflow-y: scroll;
`;

export const ModaleContent = styled.div`
  margin-top: 5rem;
  display: flex;
`;

export const BTN = styled.div`
  align-self: flex-end;
  margin-top: 15px;
`;

export const Img = styled.img`
  height: 15rem;
  margin: 15px 5px;
  -webkit-box-shadow: ${({ theme }) => theme.shadowColor};
  -moz-box-shadow: ${({ theme }) => theme.shadowColor};
  box-shadow: ${({ theme }) => theme.shadowColor}; ;
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
  border-radius: 8px;
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
  min-height: 200px;
  min-width: 250px;
  max-width: 450px;
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
  min-width: 250px;
  max-width: 450px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin-top: 1rem;
  &:focus {
    outline: 1px solid ${(props) => props.theme.backgroundElement};
  }
`;

export const Stars = styled.div`
  align-self: center;
`;

export const ErrorsText = styled.p`
  color: red;
  align-self: center;
`;

export const DivRese = styled.figure`
  display: inline-block;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  color: #9e9e9e;
  margin: 35px 10px 10px;
  max-width: 230px;
  min-width: 400px;
  font-size: 16px;
  position: relative;
  text-align: center;
  width: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  border-top: 2px solid black;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.1s ease-out;
  transition: all 0.1s ease-out;
  & figcaption {
    padding: 13% 10% 12%;
    &::before {
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
      color: black;
      content: "&";
      font-size: 32px;
      font-style: normal;
      left: 50%;
      line-height: 60px;
      position: absolute;
      top: -30px;
      width: 60px;
    }
    & h3 {
      color: #3c3c3c;
      font-size: 20px;
      font-weight: 300;
      line-height: 24px;
      margin: 10px 0 5px;
    }

    & blockquote {
      font-style: italic;
      font-weight: 300;
      margin: 0 0 20px;
    }
  }
`;
