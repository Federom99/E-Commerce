import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: grid;
  /* grid-template-columns: 20% 60% 20%; */
  grid-auto-flow: columns;
  align-items: center;
  justify-items: center;
  margin-top: 15px;
`;

export const Li = styled.li`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  margin: 10px 0;
`;