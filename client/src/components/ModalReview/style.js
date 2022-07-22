import styled from "styled-components";

export const DIV = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  height: 100vw;
  width: 100%;
  margin: 0;
  background: #00000029;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
`;

export const Modale = styled.div`
  width: clamp(50%, 700px, 90%);
  height: min(50%, 300px);
  margin: auto;
  padding: 0 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
