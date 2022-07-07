import styled from "styled-components";

export const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;
export const Header = styled.header`
  margin-top: 100px;
`;

export const Title = styled.h2``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;

`;

export const Input = styled.input`
  min-width: 250px;
  margin-bottom: 5px;
  outline: none;
`;

export const Subtitle = styled.label`
  margin: 3px 20px 0px 0px;
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
`;
