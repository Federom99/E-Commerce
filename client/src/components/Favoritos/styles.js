import styled from "styled-components";
import { ToastContainer } from "react-toastify";

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

export const Div = styled.div`
    margin: auto;
    margin-top: 2rem;
    margin-bottom:4rem;
    border-style: none;
    border-radius: 1rem;
    -webkit-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    -moz-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
    width: 80%;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
`
export const StyledContainer = styled(ToastContainer)`
&&&.Toastify__toast-container {}
  .Toastify__toast {
    
  }
  .Toastify__toast-body {
    
  }
  .Toastify__progress-bar {}
`