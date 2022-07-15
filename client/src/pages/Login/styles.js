import styled from "styled-components";
export const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
`;
export const DivBtn = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Google = styled.button`
  padding: 5px;
  margin: 5px 0 5px 0;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;
export const Blist = styled(List)`
  flex-direction: row;
  justify-content: space-between;

`;
export const Gith = styled(Google)``;

export const InputDiv = styled.div``;
export const Form = styled.form`
  height: 450px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 90%;
  max-width: 400px;
  padding: 15px;
  border-radius: 8px;
  -webkit-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
  -moz-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
  box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
`;
export const Input = styled.input`
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #999;
    outline: none;
`;