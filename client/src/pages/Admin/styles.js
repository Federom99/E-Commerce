import styled from "styled-components";
export const Button = styled.button`
  margin: auto;
  padding: 7px;
  vertical-align: middle;
  display: flex;
  align-items: stretch;
  height: auto;
  background-color: #1877f2;
  border-radius: 5px;
  border: 1px solid #1877f2;
  color: white;
  font-size: 1rem;
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    background-color: green;
    color: white;
    cursor: pointer;
    border-color: black;
    border-style: solid;
  }
`;

export const Text = styled.p`
  padding: 10px;
  /* margin: 20px 0 0 0; */
  /* text-align: justify; */
`
export const DeleteButton = styled(Button)`
    &:hover{
        background-color:red;
        color:black;
    }
`
