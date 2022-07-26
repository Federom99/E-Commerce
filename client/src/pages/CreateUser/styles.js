import styled from "styled-components";

export const Div = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Header = styled.header``;

export const Title = styled.h2`
  margin-top: 30px;
  font-size: 28px;
  font-weight: 600;
`;

export const Register = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
  color: ${({theme}) => theme.color};
`

export const ErrorsText = styled.p`
  color: red;
`;

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 30px;
  -webkit-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
  -moz-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
  box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #999;
  min-width: 250px;
  margin-bottom: 5px;
  outline: none;
`;

export const Subtitle = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin: 3px 20px 5px 0px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  align-self: center;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 80%;
  padding: 10px;
  background-color: #181818;
  border-radius: 5px;
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
