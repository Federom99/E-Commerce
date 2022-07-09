import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

export const BTN = styled.button`
  width: 100px;
  justify-self: center;
  align-self: center;
  border-radius: 1rem;
  color: white;
  font-weight: bold;
  padding: 10px;
  background-color: #e70000;
  animation: grow 1s infinite;

  @keyframes grow {
    from {
      box-shadow: 0px 0px 0.5em #000;
    }
    to {
      box-shadow: 0px 0px 1.2em #000;
    }
  }
`;
