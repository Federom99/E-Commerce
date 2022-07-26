import styled from "styled-components";

export const Button = styled.button`
  margin: auto;
  padding: 5px;
  vertical-align: middle;
  display: flex;
  align-items: stretch;
  height: auto;
  background-color: #181818;
  border-radius: 5px;
  color: #fff;
  font-size: 1rem;
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    background-color: whitesmoke;
    color: black;
    cursor: pointer;
    border-color: black;
    border-style: solid;
  }
`;

export const Text = styled.p`
  padding: 10px;
  margin: 20px 0 0 0;
  text-align: justify;
`